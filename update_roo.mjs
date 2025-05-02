#!/usr/bin/env node

/**
 * Roo Commander Update Script (Updated)
 *
 * Combines features from the original script with modern Node.js practices:
 * - Uses commander, node-fetch, adm-zip, semver, fs/promises.
 * - Includes detailed installation checks, backup/restore, safer extraction,
 * temp cleanup, and robust logging.
 *
 * Usage: node update_roo_updated.mjs [--force] [--verbose] [--check-installation]
 */

import { program } from 'commander'; // Use commander for CLI args
import fs from 'fs/promises';      // Use fs/promises
import path from 'path';
import fetch from 'node-fetch';     // Use node-fetch for HTTP
import { pipeline } from 'stream/promises';
import readline from 'readline/promises'; // Use readline/promises
// import { fileURLToPath } from 'url'; // Removed unused import
import AdmZip from 'adm-zip';       // Use adm-zip for extraction
import semver from 'semver';       // Use semver for version comparison

// Get current directory when using ES modules
// const __filename = fileURLToPath(import.meta.url); // Remove unused __filename
// const __dirname = path.dirname(__filename); // Remove unused __dirname

// --- Configuration ---
const CONFIG = {
    owner: 'jezweb',
    repo: 'roo-commander',
    releaseApiUrl: 'https://api.github.com/repos/jezweb/roo-commander/releases/latest',
    userAgent: 'Roo-Commander-Update-Script-V2',
    // Temp directories for download and extraction
    tempDir: path.join(process.cwd(), '.roo-temp'),
    tempDownloadDir: path.join(process.cwd(), '.roo-temp', 'download'),
    tempExtractDir: path.join(process.cwd(), '.roo-temp', 'extracted'),
    logFile: path.join(process.cwd(), 'roo-update.log'),
    versionFile: path.join(process.cwd(), '.ruru', 'version.json'),
    requiredDirs: ['.roo', '.ruru'], // Base required dirs
    requiredFiles: ['.roomodes'],    // Base required files
    backupDir: path.join(process.cwd(), '.roo-backup'),
    maxBackups: 3,
    // Items to backup (adjust as needed)
    itemsToBackup: ['.roo', '.ruru', '.roomodes'],
    // Dirs/files for detailed check
    detailedCheckItems: [
        // Check for key subdirectories
        { path: '.ruru/modes', name: 'Modes directory', type: 'dir' },
        { path: '.ruru/kb', name: 'Knowledge base directory', type: 'dir' },
        { path: '.ruru/workflows', name: 'Workflows directory', type: 'dir' },
        { path: '.ruru/templates', name: 'Templates directory', type: 'dir' },
        { path: '.roo/rules', name: 'Rules directory', type: 'dir' },
        { path: '.roo/rules-roo-commander', name: 'Commander rules directory', type: 'dir' },
        // Check for key files
        { path: '.roo/rules/01-standard-toml-md-format.md', name: 'TOML-MD format rules', type: 'file' },
        { path: '.roo/rules-roo-commander/01-operational-principles.md', name: 'Commander principles', type: 'file' },
    ],
    requiredModesInRoomodes: ['roo-commander', 'manager-onboarding', 'manager-project'],
};

// --- CLI Argument Parsing ---
program
    .description('Roo Commander Update Script') // Add description
    .option('-f, --force', 'Force update even if already on latest version')
    .option('-v, --verbose', 'Show detailed logs in console')
    .option('-c, --check-installation', 'Perform detailed installation check only')
    // Commander adds --help automatically, but we ensure it's documented
    .helpOption('-h, --help', 'Display help for command')
    .parse(process.argv);

const opts = program.opts();
const FORCE_UPDATE = opts.force;
const VERBOSE = opts.verbose;
const CHECK_INSTALLATION = opts.checkInstallation;

// --- Logger Class (Refined) ---
class Logger {
    constructor({ file, verbose }) {
        this.file = file;
        this.verbose = verbose;
        this.stream = null; // File handle stream
    }

    async init() {
        try {
            await fs.mkdir(path.dirname(this.file), { recursive: true });
            // Use fs.open for appending, get a file handle
            this.stream = await fs.open(this.file, 'a');
            await this.info(`=== Roo Commander Update Script Started: ${new Date().toISOString()} ===`);
        } catch (e) {
            console.error(`Logger init failed: ${e.message}. File logging disabled.`);
            this.stream = null;
        }
    }

    async _write(level, msg) {
        try {
            const line = `[${new Date().toISOString()}] [${level}] ${msg}\n`;
            // Log errors/warnings/success to console always, info if verbose
            if (['ERROR', 'WARNING', 'SUCCESS'].includes(level) || this.verbose) {
                const logMethod = console[level.toLowerCase()] || console.log;
                logMethod(line.trim());
            }
            if (this.stream) {
                await this.stream.appendFile(line);
            }
        } catch (e) {
            console.error(`Logger write failed: ${e.message}`);
            if (this.stream) {
                try { await this.stream.close(); } catch { /* ignore */ }
                this.stream = null; // Stop trying
            }
        }
    }

    info(msg) { return this._write('INFO', msg); }
    warning(msg) { return this._write('WARNING', msg); }
    error(msg) { return this._write('ERROR', msg); }
    success(msg) { return this._write('SUCCESS', msg); }

    async close() {
        if (this.stream) {
            try {
                await this.info(`=== Roo Commander Update Script Completed: ${new Date().toISOString()} ===\n`);
                await this.stream.close();
                this.stream = null;
            } catch (e) {
                console.error(`Logger close failed: ${e.message}`);
            }
        }
    }
}
const logger = new Logger({ file: CONFIG.logFile, verbose: VERBOSE });

// --- Helper Functions ---

/** Makes an HTTPS request using node-fetch */
async function fetchJson(url) {
    await logger.info(`Workspaceing JSON from ${url}`);
    try {
        const res = await fetch(url, {
            headers: {
                'User-Agent': CONFIG.userAgent,
                'Accept': 'application/vnd.github.v3+json' // Recommended for GitHub API
            },
            redirect: 'follow', // Follow redirects automatically
            timeout: 15000 // 15 second timeout
        });
        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
        }
        return await res.json();
    } catch (error) {
        throw new Error(`Request failed for ${url}: ${error.message}`);
    }
}

/** Downloads a file using node-fetch with progress */
async function downloadFile(url, destPath) {
    await logger.info(`Downloading ${url} to ${destPath}`);
    const destDir = path.dirname(destPath);
    await fs.mkdir(destDir, { recursive: true });

    let fileHandle;
    try {
        const res = await fetch(url, {
            headers: { 'User-Agent': CONFIG.userAgent },
            redirect: 'follow',
            timeout: 60000 // 60 second timeout for download
        });

        if (!res.ok) {
            throw new Error(`Download failed: ${res.status} ${res.statusText}`);
        }
        if (!res.body) {
            throw new Error("Response body is empty.");
        }

        const totalSize = Number(res.headers.get('content-length') || 0);
        let downloadedSize = 0;
        let lastLoggedPercent = -1;

        // Create a writable file stream
        fileHandle = await fs.open(destPath, 'w');
        const fileStream = fileHandle.createWriteStream();

        // Set up progress tracking
        res.body.on('data', (chunk) => {
            downloadedSize += chunk.length;
            if (totalSize > 0) {
                const percent = Math.floor((downloadedSize / totalSize) * 100);
                if (percent % 10 === 0 && percent > lastLoggedPercent) {
                    if (VERBOSE) logger.info(`Download progress: ${percent}% (${downloadedSize}/${totalSize})`);
                    lastLoggedPercent = percent;
                }
            }
        });

        // Use pipeline to handle the download
        await pipeline(res.body, fileStream);

        await logger.success(`Download completed: ${destPath}`);

    } catch (error) {
        // Clean up partial file on error
        if (fileHandle) await fileHandle.close(); // Close handle first
        try { await fs.unlink(destPath); } catch { /* ignore if already gone */ }
        throw new Error(`Download failed for ${url}: ${error.message}`);
    } finally {
        if (fileHandle) await fileHandle.close();
    }
}

/** Extracts a zip file using adm-zip */
async function extractZip(zipPath, extractPath) {
    await logger.info(`Extracting ${zipPath} to ${extractPath}`);
    try {
        await fs.mkdir(extractPath, { recursive: true });
        const zip = new AdmZip(zipPath);
        zip.extractAllTo(extractPath, /*overwrite*/ true);
        await logger.success(`Extraction completed into ${extractPath}`);
    } catch (error) {
        throw new Error(`Extraction failed: ${error.message}`);
    }
}

/** Checks if base required dirs/files exist */
async function checkRequiredPathsExist() {
    logger.info('Checking base required paths...');
    let allExist = true;
    for (const dir of CONFIG.requiredDirs) {
        try {
            const stats = await fs.stat(path.join(process.cwd(), dir));
            if (!stats.isDirectory()) {
                logger.warning(`Path exists but is not a directory: ${dir}`);
                allExist = false;
            }
        } catch (e) {
            if (e.code === 'ENOENT') logger.info(`Required directory not found: ${dir}`);
            else logger.warning(`Error checking directory ${dir}: ${e.message}`);
            allExist = false;
        }
    }
    for (const file of CONFIG.requiredFiles) {
        try {
            const stats = await fs.stat(path.join(process.cwd(), file));
            if (!stats.isFile()) {
                logger.warning(`Path exists but is not a file: ${file}`);
                allExist = false;
            }
        } catch (e) {
            if (e.code === 'ENOENT') logger.info(`Required file not found: ${file}`);
            else logger.warning(`Error checking file ${file}: ${e.message}`);
            allExist = false;
        }
    }
    return allExist;
}

/** Gets the currently installed version (from file or inferred) */
async function getCurrentVersion() {
    logger.info('Checking current Roo Commander version...');
    // 1. Try version file
    try {
        const content = await fs.readFile(CONFIG.versionFile, 'utf8');
        const versionData = JSON.parse(content);
        const version = semver.valid(semver.coerce(versionData.version)); // Validate/clean
        if (version) {
            await logger.info(`Current version from ${path.basename(CONFIG.versionFile)}: ${version}`);
            return version;
        } else {
            await logger.warning(`Invalid version format in ${path.basename(CONFIG.versionFile)}: ${versionData.version}`);
        }
    } catch (e) {
        if (e.code !== 'ENOENT') {
            await logger.warning(`Could not read or parse ${path.basename(CONFIG.versionFile)}: ${e.message}`);
        } // If ENOENT, just proceed to inference
    }

    // 2. Try inferring from .roomodes
    await logger.info(`Attempting to infer version from ${path.basename(CONFIG.requiredFiles[0])}...`);
    try {
        const roomodesPath = path.join(process.cwd(), CONFIG.requiredFiles[0]); // Assuming .roomodes is first
        const content = await fs.readFile(roomodesPath, 'utf8');
        const versionMatch = content.match(/roo-commander[^"']*v(\d+\.\d+\.\d+)/i); // Look for vX.Y.Z
        if (versionMatch && versionMatch[1]) {
            const inferredVersion = semver.valid(versionMatch[1]);
            if (inferredVersion) {
                await logger.info(`Inferred version from ${path.basename(CONFIG.requiredFiles[0])}: ${inferredVersion}`);
                return inferredVersion;
            }
        }
    } catch (e) {
        if (e.code !== 'ENOENT') {
            await logger.warning(`Could not read or parse ${path.basename(CONFIG.requiredFiles[0])} for inference: ${e.message}`);
        }
    }

    await logger.warning('Could not determine current version.');
    return null;
}

/** Creates a timestamped backup using fs.cp */
async function createBackup() {
    await logger.info('Creating backup of current installation...');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupSubDir = path.join(CONFIG.backupDir, `backup-${timestamp}`);
    await logger.info(`Backup target: ${backupSubDir}`);

    try {
        await fs.mkdir(backupSubDir, { recursive: true });
        let backedUpCount = 0;
        for (const item of CONFIG.itemsToBackup) {
            const sourcePath = path.join(process.cwd(), item);
            const destPath = path.join(backupSubDir, item);
            try {
                await fs.access(sourcePath); // Check if source exists first
                await fs.cp(sourcePath, destPath, { recursive: true });
                if (VERBOSE) await logger.info(`Backed up: ${item}`);
                backedUpCount++;
            } catch (err) {
                if (err.code === 'ENOENT') {
                    if (VERBOSE) await logger.info(`Item not found for backup (skipping): ${item}`);
                } else {
                    await logger.warning(`Could not back up ${item}: ${err.message}`);
                }
            }
        }
        if (backedUpCount > 0) {
            await logger.success(`Backup created successfully with ${backedUpCount} items.`);
        } else {
            await logger.info(`No existing items found to back up from the configured list.`);
        }
        return backupSubDir; // Return path for potential restore
    } catch (e) {
        await logger.error(`Failed to create backup structure in ${backupSubDir}: ${e.message}`);
        throw e;
    }
}

/** Prune old backups using fs.rm */
async function pruneBackups() {
    await logger.info(`Checking for old backups to prune (max: ${CONFIG.maxBackups})`);
    try {
        const entries = await fs.readdir(CONFIG.backupDir, { withFileTypes: true });
        const backupDirs = entries
            .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('backup-'))
            .map(dirent => ({ name: dirent.name, path: path.join(CONFIG.backupDir, dirent.name) }))
            .sort((a, b) => a.name.localeCompare(b.name)); // Sort by name (timestamp)

        if (backupDirs.length > CONFIG.maxBackups) {
            const backupsToRemove = backupDirs.slice(0, backupDirs.length - CONFIG.maxBackups);
            await logger.info(`Found ${backupDirs.length} backups, removing ${backupsToRemove.length} oldest...`);
            for (const backup of backupsToRemove) {
                await fs.rm(backup.path, { recursive: true, force: true });
                await logger.info(`Removed old backup: ${backup.name}`);
            }
            await logger.success(`Backup pruning complete.`);
        } else {
            await logger.info(`Found ${backupDirs.length} backups. No pruning needed.`);
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            await logger.info(`Backup directory ${CONFIG.backupDir} not found. Skipping pruning.`);
        } else {
            await logger.error(`Error pruning backups: ${err.message}`);
        }
    }
}

/** Restores a backup using fs.cp */
async function restoreBackup(backupPath) {
    await logger.warning(`Attempting to restore backup from: ${backupPath}`);
    try {
        let restoredCount = 0;
        for (const item of CONFIG.itemsToBackup) {
            const sourcePath = path.join(backupPath, item);
            const destPath = path.join(process.cwd(), item);
            try {
                await fs.access(sourcePath); // Check if item exists in backup
                // Remove existing item in cwd first to avoid merging issues with cp
                try { await fs.rm(destPath, { recursive: true, force: true }); } catch { /* ignore if not exists */ }
                await fs.cp(sourcePath, destPath, { recursive: true });
                if (VERBOSE) await logger.info(`Restored: ${item}`);
                restoredCount++;
            } catch (err) {
                if (err.code === 'ENOENT') {
                    // This specific item wasn't in the backup, skip
                } else {
                    await logger.error(`Could not restore item ${item}: ${err.message}`);
                    // Continue trying to restore other items
                }
            }
        }
        if (restoredCount > 0) {
            await logger.success(`Backup restored ${restoredCount} items successfully.`);
        } else {
            await logger.warning(`No items could be restored from backup ${backupPath}.`);
        }

    } catch (error) {
        await logger.error(`Restore failed catastrophically: ${error.message}`);
        throw error; // Re-throw critical restore failure
    }
}


/** Validates the installation based on required files/dirs */
async function validateBaseInstallation() {
    await logger.info('Performing base installation validation...');
    const exists = await checkRequiredPathsExist();
    if (!exists) {
        await logger.error('Base installation validation failed: Missing required files/directories.');
        return false;
    }
    // Basic check on .roomodes content
    try {
        const roomodesPath = path.join(process.cwd(), CONFIG.requiredFiles[0]);
        const content = await fs.readFile(roomodesPath, 'utf8');
        if (!content.includes('"slug": "roo-commander"')) { // Simple check
            await logger.error(`Invalid ${path.basename(CONFIG.requiredFiles[0])}: Missing basic "roo-commander" slug entry.`);
            return false;
        }
    } catch (e) {
        await logger.error(`Cannot read or validate ${path.basename(CONFIG.requiredFiles[0])}: ${e.message}`);
        return false;
    }
    await logger.success('Base installation validation passed.');
    return true;
}


/** Performs a detailed check of the Roo Commander installation structure and content */
async function performDetailedInstallationCheck() {
    await logger.info('Performing detailed Roo Commander installation check...');
    let checksPassed = true;

    // 1. Check specific file/directory structure
    const missingItems = [];
    await logger.info("Checking detailed file/directory structure...");
    for (const check of CONFIG.detailedCheckItems) {
        const fullPath = path.join(process.cwd(), check.path);
        try {
            const stats = await fs.stat(fullPath);
            if (check.type === 'dir' && !stats.isDirectory()) throw new Error('Not a directory');
            if (check.type === 'file' && !stats.isFile()) throw new Error('Not a file');
            if (VERBOSE) await logger.info(`Found: ${check.name} (${check.path})`);
        } catch (err) {
            missingItems.push(check.name);
            logger.warning(`Missing: ${check.name} (${check.path}) - ${err.message}`);
            checksPassed = false;
        }
    }

    // 2. Check .roomodes content in more detail
    const missingModes = [];
    await logger.info(`Checking modes defined in ${path.basename(CONFIG.requiredFiles[0])}...`);
    try {
        const roomodesPath = path.join(process.cwd(), CONFIG.requiredFiles[0]);
        const content = await fs.readFile(roomodesPath, 'utf8');
        const roomodesObj = JSON.parse(content);

        if (!Array.isArray(roomodesObj.customModes)) {
            logger.error(`Invalid ${path.basename(CONFIG.requiredFiles[0])} structure: customModes is not an array.`);
            checksPassed = false;
        } else {
            const availableModes = roomodesObj.customModes.map(mode => mode.slug);
            for (const mode of CONFIG.requiredModesInRoomodes) {
                if (!availableModes.includes(mode)) {
                    missingModes.push(mode);
                    logger.warning(`Missing required mode: ${mode}`);
                    checksPassed = false;
                } else {
                    if (VERBOSE) await logger.info(`Found required mode: ${mode}`);
                }
            }
        }
    } catch (error) {
        logger.error(`Failed to read or parse ${path.basename(CONFIG.requiredFiles[0])} for detailed check: ${error.message}`);
        checksPassed = false;
    }

    // Report final detailed check result
    if (!checksPassed) {
        logger.warning('Detailed installation check completed with warnings:');
        if (missingItems.length > 0) logger.warning(`- Missing components: ${missingItems.join(', ')}`);
        if (missingModes.length > 0) logger.warning(`- Missing required modes: ${missingModes.join(', ')}`);
        logger.warning('These issues might affect Roo Commander functionality.');
    } else {
        logger.success('Detailed installation check passed.');
    }
    return checksPassed;
}

/** Saves the current version information */
async function saveVersionInfo(version, originalTag) {
    await logger.info(`Saving version information: ${version}`);
    try {
        const versionDir = path.dirname(CONFIG.versionFile);
        await fs.mkdir(versionDir, { recursive: true });
        const versionData = {
            version: version, // Store cleaned version
            releaseTag: originalTag, // Store original tag
            installedAt: new Date().toISOString(),
            installedBy: 'update_roo_script_v2'
        };
        await fs.writeFile(CONFIG.versionFile, JSON.stringify(versionData, null, 2));
        await logger.success('Version information saved.');
    } catch (error) {
        await logger.error(`Failed to save version information: ${error.message}`);
        // Log error but don't prevent script completion
    }
}

/** Cleans up temporary directories */
async function cleanupTempDir() {
    await logger.info(`Cleaning up temporary directory: ${CONFIG.tempDir}`);
    try {
        await fs.rm(CONFIG.tempDir, { recursive: true, force: true });
        if (VERBOSE) await logger.info('Temporary directory removed.');
    } catch (error) {
        await logger.warning(`Cleanup failed (non-critical): ${error.message}`);
    }
}

/** Ensures required directories exist, creating them if needed */
async function ensureRequiredDirectories() {
    await logger.info('Ensuring required application directories exist...');
    // Combine base required dirs and those from detailed checks
    const allDirsToCheck = [
        ...CONFIG.requiredDirs,
        ...CONFIG.detailedCheckItems.filter(item => item.type === 'dir').map(item => item.path)
    ];
    // Remove duplicates and ensure parent dirs are created first if needed
    const uniqueDirs = [...new Set(allDirsToCheck)].sort((a, b) => a.length - b.length);

    try {
        for (const dir of uniqueDirs) {
            const dirPath = path.join(process.cwd(), dir);
            // Check existence efficiently first
            try {
                const stats = await fs.stat(dirPath);
                if (!stats.isDirectory()) {
                    await logger.warning(`Path exists but is not a directory, attempting to fix: ${dir}`);
                    await fs.rm(dirPath, { recursive: true, force: true }); // Remove file/symlink
                    await fs.mkdir(dirPath, { recursive: true });
                    await logger.info(`Recreated as directory: ${dir}`);
                }
            } catch (e) {
                if (e.code === 'ENOENT') {
                    await fs.mkdir(dirPath, { recursive: true });
                    await logger.info(`Created missing directory: ${dir}`);
                } else {
                    throw e; // Re-throw other stat errors
                }
            }
        }
        await logger.success('Required application directories ensured.');
    } catch (error) {
        await logger.error(`Failed to ensure directories: ${error.message}`);
        // Log error, but might not be critical enough to stop update entirely
    }
}

/** Applies the update by copying files from extracted dir to cwd */
async function applyUpdate(sourceDir, targetDir) {
    await logger.info(`Applying update from ${sourceDir} to ${targetDir}`);
    try {
        const entries = await fs.readdir(sourceDir, { withFileTypes: true });
        for (const entry of entries) {
            const sourcePath = path.join(sourceDir, entry.name);
            const targetPath = path.join(targetDir, entry.name);
            if (VERBOSE) await logger.info(`Applying: ${entry.name}`);
            // Use fs.cp for recursive copy and overwrite
            await fs.cp(sourcePath, targetPath, { recursive: true, force: true });
        }
        await logger.success(`Update applied successfully to ${targetDir}`);
    } catch (e) {
        await logger.error(`Failed to apply update from ${sourceDir}: ${e.message}`);
        throw e;
    }
}


/** Asks the user for confirmation */
async function confirmWithUser(question) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    try {
        const answer = await rl.question(`${question} (y/n): `);
        return ['y', 'yes'].includes(answer.trim().toLowerCase());
    } finally {
        rl.close();
    }
}

// --- Main Execution Function ---
async function runUpdater() {
    // Handle --check-installation separately
    if (CHECK_INSTALLATION) {
        await logger.info('Running Installation Check Mode...');
        const baseExists = await checkRequiredPathsExist();
        if (!baseExists) {
            await logger.error('❌ Base installation files/directories missing.');
            return false; // Indicate failure
        }
        const currentVersion = await getCurrentVersion();
        await logger.info(`Current Version: ${currentVersion || 'Unknown'}`);
        const detailedCheckOk = await performDetailedInstallationCheck();
        if (detailedCheckOk) {
            await logger.success('✅ Roo Commander installation appears valid.');
            return true;
        } else {
            await logger.error('❌ Roo Commander installation has issues (see warnings above).');
            await logger.info('Consider running the update without --check-installation, possibly with --force.');
            return false; // Indicate failure
        }
    }

    // --- Regular Update or Install Flow ---
    await logger.info('Starting Roo Commander update/install process...');
    await ensureRequiredDirectories(); // Ensure base dirs exist early

    // Get current and latest versions
    const currentVersion = await getCurrentVersion();
    const latestRelease = await fetchJson(CONFIG.releaseApiUrl);
    const latestVersionRaw = latestRelease.tag_name; // e.g., "v1.2.3"
    const latestVersion = semver.valid(semver.coerce(latestVersionRaw)); // "1.2.3"

    if (!latestVersion) {
        throw new Error(`Latest release tag '${latestVersionRaw}' is not a valid semantic version.`);
    }
    await logger.info(`Latest version available: ${latestVersion} (Tag: ${latestVersionRaw})`);
    if (currentVersion) await logger.info(`Current version installed: ${currentVersion}`);

    // Determine if update is needed
    const isInstalled = !!currentVersion; // Consider installed if version found
    const needsUpdate = FORCE_UPDATE || !isInstalled || semver.lt(currentVersion, latestVersion);

    if (!needsUpdate) {
        await logger.success('Already on the latest version. No update needed.');
        return true; // Indicate success
    }

    const action = isInstalled ? 'update to' : 'install';
    await logger.info(`Action required: ${action.toUpperCase()} ${latestVersion}`);

    // Ask for confirmation
    if (!FORCE_UPDATE) {
        const confirmed = await confirmWithUser(`Do you want to ${action} Roo Commander ${latestVersion}?`);
        if (!confirmed) {
            await logger.info('Operation cancelled by user.');
            return false; // Indicate cancelled/failed
        }
    }

    // --- Backup ---
    let backupPath = null;
    if (isInstalled) {
        try {
            backupPath = await createBackup(); // Backup returns path on success
            await pruneBackups();
        } catch (backupError) {
            await logger.error(`Backup process failed critically: ${backupError.message}`);
            // Ask user if they want to proceed without backup?
            const proceedAnyway = await confirmWithUser("Backup failed. Proceed with update WITHOUT backup?");
            if (!proceedAnyway) {
                await logger.info("Update cancelled due to backup failure.");
                return false;
            }
            await logger.warning("Proceeding with update WITHOUT backup!");
            backupPath = null; // Ensure backupPath is null if failed/skipped
        }
    }

    // --- Download ---
    const asset = latestRelease.assets?.find(a => a.name.endsWith('.zip'));
    if (!asset?.browser_download_url) {
        throw new Error('Could not find a suitable .zip asset download URL in the release.');
    }
    const zipFileName = asset.name;
    const zipPath = path.join(CONFIG.tempDownloadDir, zipFileName);
    await downloadFile(asset.browser_download_url, zipPath);

    // --- Extract ---
    await extractZip(zipPath, CONFIG.tempExtractDir);

    // --- Apply Update (Copy from temp to cwd) ---
    await applyUpdate(CONFIG.tempExtractDir, process.cwd());

    // --- Post-Update Steps ---
    await ensureRequiredDirectories(); // Ensure structure again after applying
    const baseValidationOk = await validateBaseInstallation(); // Quick check

    if (!baseValidationOk) {
        await logger.error("Update applied, but base validation failed!");
        if (backupPath) {
            await logger.warning("Attempting to restore from backup due to validation failure...");
            try {
                await restoreBackup(backupPath);
            } catch (restoreError) {
                await logger.error(`CRITICAL: Restore failed after update validation error: ${restoreError.message}`);
                // At this point, the installation state is uncertain.
            }
        } else {
            await logger.error("No backup available to restore from after validation failure.");
        }
        throw new Error("Post-update validation failed. Check logs. Restore attempted if backup was made.");
    }

    await saveVersionInfo(latestVersion, latestVersionRaw); // Save new version

    // Final detailed check for user info
    await logger.info("Performing final detailed verification...");
    await performDetailedInstallationCheck(); // Log results but don't fail update now

    await logger.success(`Roo Commander ${latestVersion} successfully ${action}ed.`);
    return true; // Indicate success
}

// --- Main Execution Wrapper ---
async function main() {
    let exitCode = 0;
    await logger.init();

    try {
        const success = await runUpdater();
        if (!success && !CHECK_INSTALLATION) { // Set error code if update/install failed or was cancelled
            exitCode = 1;
        } else if (!success && CHECK_INSTALLATION) { // Set error code if check failed
            exitCode = 1;
        }
    } catch (error) {
        await logger.error(`-----------------------------------------`);
        await logger.error(`🛑 PROCESS FAILED: ${error.message}`);
        await logger.error(`-----------------------------------------`);
        if (VERBOSE && error.stack) {
            console.error(error.stack); // Show stack in console if verbose
            if (logger.stream) await logger.error(`Stack Trace:\n${error.stack}`);
        }
        exitCode = 1;
    } finally {
        await cleanupTempDir(); // Clean up regardless of success/failure
        await logger.close();
        process.exit(exitCode);
    }
}

// --- Start Script ---
main();
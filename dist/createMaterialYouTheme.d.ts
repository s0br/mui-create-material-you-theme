import { PaletteMode, ThemeOptions } from '@mui/material'
import { MaterialYouMissingColors, MaterialYouSchemeExported } from './types'

/**
 * Replace `createTheme` with this function in your code
 */
export declare const createMaterialYouTheme: (
  mode: PaletteMode,
  exportedScheme?: MaterialYouSchemeExported,
  themeOptions?: ThemeOptions,
  missingColors?: MaterialYouMissingColors,
) => import('@mui/material').Theme
/**
 * Compatibility layer for React 19
 * This function provides a wrapper around createMaterialYouTheme to handle any
 * differences between React 18 and React 19 implementations
 */
export declare const createCompatibleTheme: (
  mode: PaletteMode,
  exportedScheme?: MaterialYouSchemeExported,
  themeOptions?: ThemeOptions,
  missingColors?: MaterialYouMissingColors,
) => import('@mui/material').Theme

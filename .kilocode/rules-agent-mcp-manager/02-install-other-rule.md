+++
id = "AGENT-MCP-RULE-INSTALL-OTHER-V2" # Updated version
title = "Agent MCP Manager: Rule - Handle 'Install Other' Selection"
context_type = "rules"
scope = "Procedure for presenting specific install options when user selects 'Install other'"
target_audience = ["agent-mcp-manager"]
granularity = "procedure"
status = "active"
last_updated = "2025-04-27" # Use current date
tags = ["rules", "mcp", "installation", "agent-mcp-manager", "ask_followup_question", "emoji"] # Added emoji tag
related_context = [
    ".kilocode/rules-agent-mcp-manager/01-initialization-rule.md",
    ".ruru/modes/agent-mcp-manager/kb/" # Directory containing install KBs
    ]
template_schema_doc = ".ruru/templates/toml-md/16_ai_rule.README.md"
relevance = "High: Defines the follow-up question for installing specific servers"
+++

# Rule: Handle 'Install Other MCP Servers' Selection

This rule defines the `ask_followup_question` to present when the user selects the "Install other MCP servers" option in the initial interaction (defined in `01-initialization-rule.md`).

**Procedure:**

1.  **Trigger:** User selects the suggestion corresponding to "Install other MCP servers".
2.  **Action:** Use the `ask_followup_question` tool with the following content:

    ```tool_code
    <ask_followup_question>
    <question>Which specific MCP server would you like to install?</question>
    <follow_up>
    <suggest>🧩 Install Atlassian MCP Server</suggest>
    <suggest>🦁 Install Brave Search MCP Server</suggest>
    <suggest>☁️ Install Cloudflare MCP Server</suggest>
    <suggest>👾 Install Discord Slim MCP Server</suggest>
    <suggest>🦆 Install DuckDuckGo MCP Server</suggest>
    <suggest>🗣️ Install ElevenLabs MCP Server</suggest>
    <suggest>📡 Install Fetch MCP Server</suggest>
    <suggest>🚒 Install Firecrawl MCP Server</suggest>
    <suggest>📄 Install Google Drive MCP Server</suggest>
    <suggest>🐙 Install Github MCP Server</suggest>
    <suggest>🗺️ Install Google Maps MCP Server</suggest>
    <suggest>🪄 Install Magic MCP Server</suggest>
    <suggest>📫 Install Mailgun MCP Server</suggest>
    <suggest>🧠 Install Memory MCP Server</suggest>
    <suggest>📝 Install Notion MCP Server</suggest>
    <suggest>ობს Install Obsidian MCP Server</suggest>
    <suggest>❓ Install Perplexity MCP Server</suggest>
    <suggest>🚨 Install Sentry MCP Server</suggest>
    <suggest>🤔 Install Sequential Thinking MCP Server</suggest>
    <suggest>💬 Install Slack MCP Server</suggest>
    <suggest>💳 Install Stripe MCP Server</suggest>
    <suggest>🔎 Install Tavily MCP Server</suggest>
    <suggest>🖼️ Install Unsplash MCP Server</suggest>
    <suggest>✨ Install Vertex AI MCP Server</suggest>
    </follow_up>
    </ask_followup_question>
    ```

3.  **Next Step:** Based on the user's selection, the `agent-mcp-manager` should consult the corresponding `install-[server-name].md` KB file in its knowledge base (`.ruru/modes/agent-mcp-manager/kb/`) for the specific installation procedure.

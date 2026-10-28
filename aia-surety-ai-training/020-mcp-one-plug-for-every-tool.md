---
slide: 20
section: "Agents"
duration_minutes: 2
---

# MCP: one plug for every tool

The harness calls tools. **MCP (Model Context Protocol)** is the standard way it reaches them.

- **One standard.** Anthropic released MCP in 2024. OpenAI, Google, and Microsoft now use it too. A system that supports MCP works with any agent that supports it.
- **A server wraps one system.** An MCP server for email gives the agent a list of tools, such as "search mail", "read message", and "send mail".
- **You already know it as connectors.** ChatGPT and Claude show MCP servers as connectors or apps that you switch on in Settings.

## Speaker notes

Agent discovers tools, you don't have to tell it.

Very interesting solution for businesses. (Teaser)

## Sources

- [Anthropic: Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol).
- [Model Context Protocol](https://modelcontextprotocol.io/).
- [OpenAI Help Center: Connectors in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt).
- [Use connectors to extend Claude's capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities).

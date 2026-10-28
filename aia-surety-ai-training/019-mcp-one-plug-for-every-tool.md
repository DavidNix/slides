---
slide: 19
section: "Agents"
duration_minutes: 2
---

# MCP: one plug for every tool

The harness calls tools. **MCP (Model Context Protocol)** is the standard way it reaches them.

- **One standard.** Anthropic released MCP in 2024. OpenAI, Google, and Microsoft now use it too. A system that supports MCP works with any agent that supports it.
- **A server wraps one system.** An MCP server for email gives the agent a list of tools, such as "search mail", "read message", and "send mail".
- **You already know it as connectors.** ChatGPT and Claude show MCP servers as connectors or apps that you switch on in Settings.
- **Two kinds.** A local server runs on your computer with your access. A remote server runs at the vendor, and you sign in to it.

**MCP gives the agent hands. You choose which hands it gets.**

## Speaker notes

The video on the previous slide said the harness "calls the tool over MCP." This slide explains that word.

Use the USB comparison. Before USB, every printer and mouse needed its own cable. Before MCP, every agent needed its own custom link to Gmail, Drive, or a claims system. Now a vendor builds one MCP server, and every agent that supports MCP can use it.

Walk the email example. When the agent starts, it asks the server which tools it offers. The server answers with a short name and a plain-language description of each tool. Those descriptions go into the model's context, next to your request. The model picks a tool, and the harness makes the call. Mention that the descriptions are text the model reads. This comes back in the Security section.

Point out the two kinds briefly. A local server can reach the files and programs on your computer. A remote server holds a sign-in token for your account at the vendor. Both act with your access.

Keep the tone neutral here. This slide only explains what MCP is. The Security section covers what each connection costs.

Transition: "Now the same machinery from the user's chair: why ChatGPT suddenly seems to know this week's news."

## Sources

- [Anthropic: Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol).
- [Model Context Protocol](https://modelcontextprotocol.io/).
- [OpenAI Help Center: Connectors in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt).
- [Use connectors to extend Claude's capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities).

---
slide: 61
section: "Security"
duration_minutes: 2
---

# Connectors and MCP: every connection is a grant

In ChatGPT you may have seen **connectors**: switches in Settings that let the assistant reach Gmail, Google Drive, and company systems. Other agent tools have the same idea, and they all speak one open standard:

![A real connector consent screen: the only choices are "Full access", pre-selected, or "Read-only" that still covers every presentation you can access. There is no narrower option.](mcp-connector-screen.png)

- **MCP**, the plug from the Agents section, is how every one of these connectors works.
- Each connector you enable grants a bundle of capabilities: email, files, records, payments.
- The consent screen rarely offers a narrow choice: here the options are **Full access** (pre-selected: create, edit, share, delete) or **Read-only** that still reaches *everything* you can see. There is no "just this folder" option.
- Every connection is an access grant: connect only what the task needs.
- Review what each connector can read and do **before** approving it, and disable what you no longer use.

**Every connector you enable is an access grant.**

*And what if the connector itself is lying?*

## Speaker notes

MCP is an open standard from Anthropic, now used across the industry. ChatGPT calls them connectors or apps.

Use the screenshot. "Full access" is pre-selected. "Read-only" still covers every presentation you can see. The narrow choice is often missing. So read the choice, connect only what the task needs, and disconnect when done.

Each connector quietly adds trifecta capabilities 1 and 3: private data and external communication. An idle connection is still an open door.

Transition: "That is what you give a connector. Next: what a connector can do to you."

## Sources

- [Anthropic: Model Context Protocol](https://www.anthropic.com/news/model-context-protocol).
- [OpenAI Help Center: Connectors in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt).

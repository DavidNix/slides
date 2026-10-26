---
slide: 41
section: "Security"
duration_minutes: 2
---

# Connectors and MCP: every connection is a grant

In ChatGPT you may have seen **connectors** — switches in Settings that let the assistant reach Gmail, Google Drive, and company systems. Other agent tools have the same idea, and they all speak one open standard:

- **MCP — Model Context Protocol** — introduced by Anthropic, now adopted across the industry. Think of it as the USB port for AI tools: one connector, thousands of devices.
- Each connector you enable grants a bundle of capabilities — email, files, records, payments.
- Every connection is an access grant: connect only what the task needs.
- Review what each connector can read and do **before** approving it, and disable what you no longer use.

**Every connector you enable is an access grant.**

## Speaker notes

MCP, in one line for this room: an open standard — introduced by Anthropic, now adopted across the industry — that lets agent applications connect to external tools and data sources through plug-in "servers." The room may know it as connectors or apps in ChatGPT's settings — same idea, consumer-facing name. One connector standard, thousands of tools.

Each connector is one of the permission bundles from the previous picture: choosing what to connect is choosing what the gate will ever allow.

The security point is that the convenience of connecting is exactly how an agent quietly accumulates capabilities 1 and 3 of the trifecta — private data access and external communication — one approved connector at a time. Each approved connector is a standing grant, and an idle connection is still an open door. Review before connecting, not after.

Transition: "Even with the gate set correctly, assume a bad instruction eventually gets through — that is the blast radius."

## Sources

- [Anthropic: Model Context Protocol](https://www.anthropic.com/news/model-context-protocol).
- [OpenAI Help Center: Connectors in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt).

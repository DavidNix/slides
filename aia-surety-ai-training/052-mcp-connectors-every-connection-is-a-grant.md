---
slide: 52
section: "Security"
duration_minutes: 2
---

# Connectors and MCP: every connection is a grant

In ChatGPT you may have seen **connectors** — switches in Settings that let the assistant reach Gmail, Google Drive, and company systems. Other agent tools have the same idea, and they all speak one open standard:

![A real connector consent screen: the only choices are "Full access" — pre-selected — or "Read-only" that still covers every presentation you can access. There is no narrower option.](mcp-connector-screen.png)

- **MCP — Model Context Protocol** — introduced by Anthropic, now adopted across the industry. Think of it as the USB port for AI tools: one connector, thousands of devices.
- Each connector you enable grants a bundle of capabilities — email, files, records, payments.
- The consent screen rarely offers a narrow choice: here the options are **Full access** (pre-selected — create, edit, share, delete) or **Read-only** that still reaches *everything* you can see. There is no "just this folder" option.
- Every connection is an access grant: connect only what the task needs.
- Review what each connector can read and do **before** approving it, and disable what you no longer use.

**Every connector you enable is an access grant.**

<video src="agent-mcp.mp4" controls width="100%" aria-label="MCP is one standard way for an agent to plug into systems; the agent asks each server which tools it offers, takes your task in plain words, picks a tool, calls it, and reads the result, with each result shaping the next call."></video>

## Speaker notes

MCP, in one line for this room: an open standard — introduced by Anthropic, now adopted across the industry — that lets agent applications connect to external tools and data sources through plug-in "servers." The room may know it as connectors or apps in ChatGPT's settings — same idea, consumer-facing name. One connector standard, thousands of tools.

The animation below walks the standard end to end: server discovery, a plain-words task, a picked and called tool, and each result shaping the next call. Play it when the bullets land.

Each connector is one of the permission bundles from the previous picture: choosing what to connect is choosing what the gate will ever allow.

Use the screenshot to show how blunt the real choice is. When a tool asks to connect, the menu is usually two tiers: everything it can do, or everything you can read. Notice three things: "Full access" arrives pre-selected; even "Read-only" covers every private and team presentation, not a chosen folder; and the footnote reminds you that changes already made will remain. The fine-grained least privilege we asked for on the previous slides is not always on the menu — which is exactly why you read the choice before clicking, connect only what the task needs, and disconnect when done.

The security point is that the convenience of connecting is exactly how an agent quietly accumulates capabilities 1 and 3 of the trifecta — private data access and external communication — one approved connector at a time. Each approved connector is a standing grant, and an idle connection is still an open door. Review before connecting, not after.

Transition: "Even with the gate set correctly, assume a bad instruction eventually gets through — that is the blast radius."

## Sources

- [Anthropic: Model Context Protocol](https://www.anthropic.com/news/model-context-protocol).
- [OpenAI Help Center: Connectors in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt).

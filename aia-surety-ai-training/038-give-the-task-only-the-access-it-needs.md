---
slide: 38
section: "Security"
duration_minutes: 3
---

# Give the task only the access it needs

- One relevant record before a whole database.
- Read access before write access.
- Drafting before sending.
- Scoped credentials before a master key.

Today this usually means reviewing **MCP — Model Context Protocol**, the standard plug-in system for connecting agents to tools and data:

- Each MCP server you connect grants a bundle of capabilities — email, files, records, payments.
- Every connection is an access grant: connect only what the task needs.
- Review what each server can read and do **before** approving it, and disable what you no longer use.

**Enforce permissions in the application and tools — every connection is a grant.**

## Speaker notes

Define least privilege as the smallest set of permissions needed to perform the task. This is an established security principle, not a new AI invention.

MCP, in one line for this room: an open standard — introduced by Anthropic, now adopted across the industry — that lets agent applications connect to external tools and data sources through plug-in "servers." Think of it as the USB port for AI tools: one connector, thousands of devices.

The security point is that the convenience of connecting is exactly how an agent quietly accumulates capabilities 1 and 3 of the trifecta — private data access and external communication, one approved server at a time. Each approved server is a standing grant, and an idle connection is still an open door. Review before connecting, not after.

The convenient shortcut is to give an agent the same broad access as its operator. An employee's account may reach many systems unrelated to this particular job.

Tool services should check the caller, authorized records, permitted operations, and allowed destinations. Validate arguments even when they match a schema. A well-formed request can still request the wrong record or recipient.

Read-only access reduces modification risk but can still expose sensitive data. Keep the accessible data set narrow, and control where results can go.

If time allows, ask the room which of the two lookup tools needs a sending credential. Neither does.

## Sources

- [Anthropic: Model Context Protocol](https://www.anthropic.com/news/model-context-protocol).

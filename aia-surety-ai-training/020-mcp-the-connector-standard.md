---
slide: 20
section: "Agents"
duration_minutes: 2
---

# MCP: the connector standard

MCP, the Model Context Protocol, is a standard way to connect harnesses to tools and data:

- A tool server exposes tools, resources, and prompts over one protocol.
- Any MCP-compatible harness can connect to any MCP-compatible server.
- Write the connector once; many agents can use it.

**MCP is the USB port of AI: a standard connector between agents and software.**

## Speaker notes

Without a standard, every agent needs a custom integration for every application it touches. An MCP server wraps an application — email, a CRM, an internal database — behind one protocol, and any compatible harness can use it. The previous slides showed the mechanics: the harness discovers what the server offers through `tools/list` and calls it with JSON-RPC.

The ecosystem is large: thousands of MCP servers exist, from SaaS products to internal company systems. Vendors now ship MCP servers with their products the way they once shipped REST APIs.

Connect the security section: a connector is an authority grant. Connecting an MCP server to real email or a real database gives every harness that uses it that reach. The same least-privilege and blast-radius rules apply — connect a test mailbox before the production one, and review what each server can actually do.

## Sources

- [MCP introduction](https://modelcontextprotocol.io/docs/getting-started/intro).
- [MCP tool discovery and calls](https://modelcontextprotocol.io/specification/2025-11-25/server/tools).

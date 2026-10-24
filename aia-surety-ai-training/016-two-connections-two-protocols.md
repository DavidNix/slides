---
slide: 16
section: "Agents"
duration_minutes: 2
---

# Two connections, two protocols

| Connection | Typical exchange |
| --- | --- |
| Harness ↔ model service | Provider API requests and responses using JSON |
| Harness's MCP client ↔ MCP tool server | JSON-RPC messages |

**The harness connects the model's request to the tool's execution.**

## Speaker notes

Be precise about the terminology: JSON is a data format; JSON-RPC is a protocol for requesting operations and matching their responses. The model-provider API examples are not JSON-RPC messages.

Expand MCP as Model Context Protocol. In this example it provides a standard way for the harness to discover and call tools exposed by another service.

Tool calling can also use a direct function or another API without MCP. We are using MCP here to make both exchanges visible.

The next slides assume an initialized MCP connection and tools already discovered through `tools/list`. Connection setup and authentication happen before this application-level call.

## Sources

- [MCP base protocol](https://modelcontextprotocol.io/specification/2025-11-25/basic).
- [MCP tool discovery and calls](https://modelcontextprotocol.io/specification/2025-11-25/server/tools).

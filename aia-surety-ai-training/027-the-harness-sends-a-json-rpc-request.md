---
slide: 27
section: "Agents"
duration_minutes: 2
---

# The harness sends a JSON-RPC request

*Illustrative request to an MCP tool server.*

```json
{
  "jsonrpc": "2.0",
  "id": 42,
  "method": "tools/call",
  "params": {
    "name": "get_submission",
    "arguments": { "submission_id": "S-1042" }
  }
}
```

**Operation: call a tool. Tool: get a submission. Input: S-1042.**

## Speaker notes

Read `method` as the operation requested from the server. The specific business tool is named inside `params`. Its arguments came from the model's proposed call after the application's checks.

The request ID, `42`, identifies this MCP exchange. It is different from the model's call ID, `toolu_demo_01`. The harness keeps track of the association; the protocols do not require the IDs to match.

RPC means remote procedure call. “Remote” can mean another process on the same computer or a service on another machine; it does not necessarily mean public cloud.

The receiving service runs its implementation with configured credentials and permissions. A request for a different submission must still pass authorization.

## Sources

- [MCP tools/call request](https://modelcontextprotocol.io/specification/2025-11-25/server/tools#calling-tools).

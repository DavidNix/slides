---
slide: 21
section: "Agents"
duration_minutes: 2
---

# The tool returns a result

*Illustrative MCP response.*

```json
{
  "jsonrpc": "2.0",
  "id": 42,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Order 4471: running shoes. Status: shipped. Tracking number: 1Z-88X."
      }
    ],
    "isError": false
  }
}
```

**The matching ID tells the harness which request this answers.**

## Speaker notes

The tool has now looked up the fictional order. This response supplies information the model did not have in the original request.

Results may contain text or structured data. This example uses a text content block for readability.

Distinguish a successful lookup from a correct final business conclusion: the returned record might still be incomplete or out of date. The model must also track the package before it can say when it arrives.

Point to the exact data that would leave the company if the harness forwards this result to a hosted model. A local tool does not automatically make the entire workflow local.

## Sources

- [MCP tool results](https://modelcontextprotocol.io/specification/2025-11-25/server/tools#tool-result).

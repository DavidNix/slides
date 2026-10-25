---
slide: 17
section: "Agents"
duration_minutes: 3
---

# The model requests a tool

*Illustrative Claude response excerpt.*

```json
{
  "content": [
    {
      "type": "tool_use",
      "id": "toolu_demo_01",
      "name": "get_order",
      "input": { "order_id": "4471" }
    }
  ],
  "stop_reason": "tool_use"
}
```

**“Please run this tool with these inputs.”**

## Speaker notes

This is an illustrative payload, not a captured production response. IDs in these slides are synthetic. A response may also contain other content blocks or multiple requested calls.

Point out the tool name, input, and call identifier. The identifier lets the harness associate a later result with this particular request.

For our client-side tool, no record has been read yet. The application must handle the requested action. A model response that names a tool does not grant permission to execute it.

The harness can validate the input, enforce policy, request approval where needed, dispatch an authorized call, or return a denial. Data-access controls must also be enforced by the tool service.

## Sources

- [Claude tool-use response format](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).

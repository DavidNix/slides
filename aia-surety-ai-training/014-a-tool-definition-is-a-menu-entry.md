---
slide: 14
section: "Agents"
duration_minutes: 3
---

# A tool definition is a menu entry

*Illustrative Claude tool definition.*

```json
{
  "name": "get_submission",
  "description": "Read a fictional submission by ID. Makes no changes.",
  "input_schema": {
    "type": "object",
    "properties": {
      "submission_id": { "type": "string" }
    },
    "required": ["submission_id"],
    "additionalProperties": false
  }
}
```

**Name. Purpose. Required information.**

## Speaker notes

The harness supplies definitions for tools the model may request. Read the name, description, and required input; avoid a lesson on every schema keyword.

A schema describes the shape of valid input. Correctly shaped input does not establish that the user may access the requested record. Authorization still belongs in the application and tool service.

The words “makes no changes” describe intended behavior. The implementation must actually be read-only.

Our second tool has the same shape: `get_checklist` takes a required string called `checklist_id` and returns a fictional checklist. Both definitions are available to the model in this example.

If the harness discovers a tool through MCP, it translates the server's tool definition into the model provider's expected format. MCP uses `inputSchema`; this Claude API example uses `input_schema`.

## Sources

- [Claude tool definitions](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools).
- [MCP tools and input schemas](https://modelcontextprotocol.io/specification/2025-11-25/server/tools).

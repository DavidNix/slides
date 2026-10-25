---
slide: 22
section: "Agents"
duration_minutes: 3
---

# The harness returns the result to the model

*New message appended to the Claude conversation.*

```json
{
  "role": "user",
  "content": [
    {
      "type": "tool_result",
      "tool_use_id": "toolu_demo_01",
      "content": "Order 4471: running shoes. Status: shipped. Tracking number: 1Z-88X."
    }
  ]
}
```

**The model can now use the lookup result.**

## Speaker notes

Explain that `role: user` is part of this provider's tool-result format. The harness supplies this message automatically; a person did not type it.

The next API request retains the original user task, the preceding assistant response containing the tool call, and this tool-result message. It also supplies the applicable instructions and tools. This excerpt shows only the newly added message, not a complete API request.

The model call ID reappears as `tool_use_id`. MCP's request ID `42` served its purpose on the other connection.

Tool results are data. A malicious instruction inside one does not become authorized simply because the harness placed it into the conversation. This will be central to the later security demonstration.

## Sources

- [Claude tool-result round trip](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).

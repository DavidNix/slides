---
slide: 24
section: "Agents"
duration_minutes: 2
---

# The next turn completes the task

1. Request `track_package` for `1Z-88X`.
2. Receive the package location and delivery date.
3. Combine the order and tracking results.
4. Answer the customer.

**Each tool result informs the next model turn.**

## Speaker notes

The second tool call follows the same exchange. The model selects a tool based on the tracking number in the first result. Illustrative model content block:

```json
{
  "type": "tool_use",
  "id": "toolu_demo_02",
  "name": "track_package",
  "input": { "tracking_number": "1Z-88X" }
}
```

For this new MCP call, use a new request ID such as `43`. Return the result under model call ID `toolu_demo_02` after the tool executes.

The fixture result is: “1Z-88X: at the Memphis hub. Expected delivery Thursday. No delivery time window is recorded.”

An appropriate final answer is: “Your running shoes are at the Memphis hub. They should arrive Thursday.” It promises no delivery time that the record does not show. The model's `stop_reason` is `end_turn`, so the harness stops the loop. Nothing has been changed.

Ask the room when the shoes will arrive before revealing the answer. This checks their understanding of both the example and the loop.

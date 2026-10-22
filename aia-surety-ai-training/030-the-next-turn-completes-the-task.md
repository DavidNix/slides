---
slide: 30
section: "Agents"
duration_minutes: 2
---

# The next turn completes the task

1. Request `get_checklist` for `DEMO-COMMERCIAL-01`.
2. Receive the required document list.
3. Compare required and received documents.
4. Draft the missing-document request.

**Each tool result informs the next model turn.**

## Speaker notes

The second tool call follows the same exchange. The model selects a tool based on the checklist ID in the first result. Illustrative model content block:

```json
{
  "type": "tool_use",
  "id": "toolu_demo_02",
  "name": "get_checklist",
  "input": { "checklist_id": "DEMO-COMMERCIAL-01" }
}
```

For this new MCP call, use a new request ID such as `43`. Return the result under model call ID `toolu_demo_02` after the tool executes.

The fixture result is: “DEMO-COMMERCIAL-01, version 1: required documents are signed_application and current_financial_statement. A reviewer decides readiness. No completion date or approval is recorded.”

An appropriate final draft requests the current financial statement and makes no approval or timing promise. The task ends with text for review. Nothing has been sent.

Ask the room to name the missing document before revealing the draft. This checks their understanding of both the business example and the loop.

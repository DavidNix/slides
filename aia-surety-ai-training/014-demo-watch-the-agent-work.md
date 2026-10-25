---
slide: 14
section: "Agents"
duration_minutes: 7
---

# Demo: watch the agent work

One request. Two lookups. One draft.

Watch for:

- What the model requests.
- What the harness allows.
- What information comes back.
- What ends the task.

**Who actually performs each action?**

## Speaker notes

This demo runs the mechanics just covered on a work task: the fictional S-1042 packet. Show the user-facing task alongside the request/result trace. Pause at meaningful boundaries rather than scrolling through raw logs at speed.

## Demo guide

**Preparation:** Prepare a small demonstration harness or an API-playground walkthrough using two read-only tools, `get_submission` and `get_checklist`. The tools read fictional fixtures only. If presenting captured messages instead of a live run, label them as a walkthrough.

**Fixture contract:**

| Tool | Input | Result |
| --- | --- | --- |
| `get_submission` | `submission_id: S-1042` | Cedar Bridge Services; received signed_application; checklist DEMO-COMMERCIAL-01 |
| `get_checklist` | `checklist_id: DEMO-COMMERCIAL-01` | Version 1 requires signed_application and current_financial_statement; reviewer decides readiness; no date or approval promised |

**Run of show:**

1. Submit this request: “For submission S-1042, check the demo checklist and draft a request for missing documents. Do not send it.” Ask the audience to predict the first call.
2. Pause at `tool_use`; highlight name, input, and model call ID.
3. Show the authorization check and the tool request it produces.
4. Show the result traveling back through the harness to the model.
5. Repeat for the checklist, then inspect the final draft.
6. Ask for a nonexistent submission and show the error reaching the user without fabricated details.

**Expected result:** A draft asking for the current financial statement, no promised completion date, and no sending action.

**Fallback:** Use a labeled recording of this run. A recording of another agent, such as the existing [Claude Cowork example](../2026-09-ai-security/claude-cowork-example.mp4), can illustrate capabilities but should not be presented as this workflow's execution trace.

**Debrief:** Ask what additional capability would be required to send the draft. More convenience would require additional authority and a decision about review.

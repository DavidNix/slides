---
slide: 4
section: "Chatbots"
duration_minutes: 6
---

# Demo: same question, better context

> “Draft a reply about submission S-1042.”

Now add:

- The agent's inquiry.
- The submission record.
- The relevant checklist.
- The desired tone and boundaries.

**Which response could you actually use?**

## Speaker notes

This introduces the fictional case used throughout the session. Ask the audience to identify facts in the response that are supported by a source and any that were invented.

## Demo guide

**Preparation:** Open a clean conversation in the presenter’s chosen Claude or ChatGPT account. Use only the fictional material below. Disable unrelated connected sources for a clear comparison.

**First request:**

> Draft a reply to the agent about submission S-1042. Tell them what is missing and when it will be ready.

The model may ask for details, offer a generic template, or invent specifics. Describe what actually happens.

**Second request:**

> Use only the facts below. Draft a friendly reply under 100 words. Identify the missing document. Do not promise approval or a completion date. List anything the source does not establish.

```text
FICTIONAL TRAINING MATERIAL — NOT AIA POLICY

Agent inquiry:
“Can you check S-1042 for Cedar Bridge Services and tell me what
you still need? Can this be ready by Friday?”

Submission record:
ID: S-1042
Applicant: Cedar Bridge Services (fictional)
Checklist: DEMO-COMMERCIAL-01
Received: signed_application

Demo checklist DEMO-COMMERCIAL-01, version 1:
Required: signed_application, current_financial_statement
A reviewer decides readiness after reviewing the complete packet.
No completion date or approval is recorded.
```

**Debrief:** The expected missing item is the current financial statement. Friday is a requested deadline, not a commitment.

**Fallback:** Show a captured comparison labeled “recorded example” and have the audience mark supported and unsupported claims.

# Fixture: S-1042 chat context

**FICTIONAL TRAINING MATERIAL — NOT AIA POLICY.** The S-1042 packet below is the fictional case used throughout the session. It originated in the "same question, better context" chatbot demonstration and is reused by the agent, deployment, and verification demos.

## Plain request (no context)

> Draft a reply to the agent about submission S-1042. Tell them what is missing and when it will be ready.

## Grounded request (with context)

> Use only the facts below. Draft a friendly reply under 100 words. Identify the missing document. Do not promise approval or a completion date. List anything the source does not establish.

```text
Agent inquiry:
"Can you check S-1042 for Cedar Bridge Services and tell me what
you still need? Can this be ready by Friday?"

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

## Debrief

The expected missing item is the current financial statement. Friday is a requested deadline, not a commitment.

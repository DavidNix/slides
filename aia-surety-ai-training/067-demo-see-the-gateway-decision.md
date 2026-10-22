---
slide: 67
section: "Deployment"
duration_minutes: 2
---

# Demo: see the gateway decision

One permitted request. One denied request.

Look for:

- The destination model or provider.
- The applicable access rule.
- The usage record and outcome.

**A control should be visible in what the system actually allows.**

## Speaker notes

Keep this to a prepared two-minute demonstration. The main lesson is a central, observable policy decision.

## Demo guide

**Preparation:** Configure a Bifrost test deployment and a virtual key restricted to one chosen model or provider. Prepare one allowed request and one request outside that restriction. Use synthetic text and keep credentials hidden.

1. Send the allowed request and show its routing and usage record.
2. Send the disallowed request and show the actual denial.
3. Explain which rule produced the result.

An alternative is a rehearsed request-limit demonstration. Select one control rather than attempting several during this slot. Confirm the current version's behavior before presenting.

**Fallback:** Show captured allowed and denied requests, labeled with the tested configuration and version.

Explain that usage estimates and budget enforcement need operational validation. Do not describe a budget threshold as a perfect cap on every possible in-flight charge.

## Sources

- [Bifrost model/provider filtering, budgets, and rate limits](https://docs.getbifrost.ai/features/governance/budget-and-limits).

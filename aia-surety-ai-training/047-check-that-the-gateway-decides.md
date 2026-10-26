---
slide: 47
section: "Security"
duration_minutes: 2
---

# Check that the gateway actually decides

*Illustrative rule: this application may use only the approved model service.*

| The agent asks | Gateway decides | What the record shows |
| --- | --- | --- |
| "Summarize this file" → approved model | **Allow** | Rule matched: approved-models-only; destination, time, outcome |
| "Upload this file to free-converter.com" | **Deny** | Requested destination + denial reason: not on the approved list |

**A control should be visible in what the system actually allows.**

## Speaker notes

Walk the two rows as a test procedure, not a log you already have: send one request the policy allows and one it forbids, then find the record for each. The allowed request should show which rule matched and where the request went; the forbidden one should show the requested destination and the denial reason. If the forbidden request also succeeds — or no record exists at all — the gateway is not enforcing, no matter what the configuration says. An allow you have never tested may just be an open door.

Bifrost is the example introduced on the previous slide: its decision records show destination, rule, and outcome, which is exactly the evidence to inspect.

Keep the caveat on budgets: usage estimates and spending caps need operational validation too. Do not describe a budget threshold as a perfect cap on every possible in-flight charge.

For the room: this is IT's verification step, not a staff task — but the takeaway for everyone is the question to ask: "How do we know the gateway is actually enforcing?" A control you cannot see working is a control you cannot trust.

Transition: "One more way agents go wrong on their own: memory that persists."

## Sources

- [Bifrost model/provider filtering, budgets, and rate limits](https://docs.getbifrost.ai/features/governance/budget-and-limits).

---
slide: 71
section: "Security"
duration_minutes: 2
---

# Check that the gateway actually decides

![Without a gateway, each harness enforces its own scattered rules, some locked, some wide open. With one gateway, every request passes the same classifier, logs, and reviewer.](gateway-single-point-of-governance.png)

- **Without a gateway:** every tool connects on its own terms, with scattered, inconsistent rules.
- **With one gateway:** the same rules apply to every request, and every decision leaves a record.

## Speaker notes

The next slide shows the picture. Top: each harness connects on its own, some locked, some open, and nobody knows which. Bottom: one gate, the same rules and records everywhere.

The picture is the design, not proof. Send one allowed request and one forbidden request. Find the record for each. If the forbidden one succeeds or leaves no record, the gateway is not enforcing.

Spending caps need testing too. A budget threshold may not stop every in-flight charge.

This is IT's job. Everyone can ask: "How do we know the gateway is enforcing?"

Transition: "One more way agents go wrong: memory that persists."

## Sources

- [Bifrost model/provider filtering, budgets, and rate limits](https://docs.getbifrost.ai/features/governance/budget-and-limits).

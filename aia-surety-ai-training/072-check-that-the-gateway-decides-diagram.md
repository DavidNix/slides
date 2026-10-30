---
slide: 72
section: "Security"
duration_minutes: 0
---

# Check that the gateway actually decides (diagram)

![Without a gateway, each harness enforces its own scattered rules, some locked, some wide open. With one gateway, every request passes the same classifier, logs, and reviewer.](gateway-single-point-of-governance.png)

**Scattered rules on top; one gate, the same rules, and one record below.**

*Most attacks have to succeed every time. One kind only needs to win once.*

## Speaker notes

Top: each harness connects on its own, some locked, some open. Bottom: one gate, the same rules and records everywhere.

## Sources

- [Bifrost model/provider filtering, budgets, and rate limits](https://docs.getbifrost.ai/features/governance/budget-and-limits).

---
slide: 61
section: "Security"
duration_minutes: 0
---

# Check that the gateway actually decides (diagram)

![Without a gateway, each harness enforces its own scattered rules — some locked, some wide open. With one gateway, every request passes the same classifier, logs, and reviewer.](gateway-single-point-of-governance.png)

**Scattered rules on top; one gate, the same rules, and one record below.**

## Speaker notes

Walk the two panels; the talking points are in the previous slide's notes. On top, each harness connects on its own — one connection locked down, one wide open, and nobody can say which is which without checking each one. Below, the same requests all pass one gate, so the same rules and the same records apply everywhere.

## Sources

- [Bifrost model/provider filtering, budgets, and rate limits](https://docs.getbifrost.ai/features/governance/budget-and-limits).

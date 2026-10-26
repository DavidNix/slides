---
slide: 48
section: "Security"
duration_minutes: 2
---

# Check that the gateway actually decides

![Without a gateway, each harness enforces its own scattered rules — some locked, some wide open. With one gateway, every request passes the same classifier, logs, and reviewer.](gateway-single-point-of-governance.png)

- **Without a gateway:** every tool connects on its own terms — scattered, inconsistent rules.
- **With one gateway:** the same rules apply to every request, and every decision leaves a record.

## Speaker notes

Walk the two panels. On top: each harness connecting on its own — one connection locked down, one wide open, and nobody can say which is which without checking each one. Below: the same requests all pass one gate, so the same rules and the same records apply everywhere. Governance becomes one place to set policy and one place to look.

Then make it real: the picture is the design, not the proof. Send one request the policy allows and one it forbids, and find the record for each — the allowed one showing which rule matched, the forbidden one showing the requested destination and the denial reason. If the forbidden request also succeeds, or no record exists, the gateway is not enforcing no matter what the configuration says. An allow you have never tested may just be an open door.

Keep the caveat on budgets: usage estimates and spending caps need operational validation too — a budget threshold is not a perfect cap on every possible in-flight charge.

For the room: this is IT's verification step, not a staff task — but the question is for everyone: "How do we know the gateway is actually enforcing?" A control you cannot see working is a control you cannot trust.

Transition: "One more way agents go wrong on their own: memory that persists."

## Sources

- [Bifrost model/provider filtering, budgets, and rate limits](https://docs.getbifrost.ai/features/governance/budget-and-limits).

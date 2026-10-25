---
slide: 48
section: "Security"
duration_minutes: 2
---

# Read the gateway decision

*Illustrative rule: this application may use only the approved model service.*

| Request | Policy decision | Record to inspect |
| --- | --- | --- |
| Approved destination | Allow | Destination, rule, and outcome |
| Destination outside the rule | Deny | Requested destination and denial reason |

**A control should be visible in what the system actually allows.**

## Speaker notes

Explain the two rows as an illustrative policy example. The table shows the decision and evidence an operator should look for; it is not a captured gateway log.

A reviewer should be able to identify the requested destination, the applicable rule, and whether execution was allowed. In a real deployment, test both permitted and prohibited requests and inspect the actual records. Bifrost is the example introduced on the previous slide.

Explain that usage estimates and budget enforcement need operational validation. Do not describe a budget threshold as a perfect cap on every possible in-flight charge.

## Sources

- [Bifrost model/provider filtering, budgets, and rate limits](https://docs.getbifrost.ai/features/governance/budget-and-limits).

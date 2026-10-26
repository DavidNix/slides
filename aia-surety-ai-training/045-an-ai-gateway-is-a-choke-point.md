---
slide: 45
section: "Security"
duration_minutes: 2
---

# An AI gateway is a choke point

**Application → gateway → approved model service**

- Layer in a classifier for prompts and tool calls.
- Capture and log every prompt for later analysis.
- Let another agent review the traffic.
- Route, budget, and limit what goes where.

**One place to enforce and observe every model request.**

## Speaker notes

Explain a gateway as a managed entry point for applications using model APIs: requests pass through it instead of reaching a provider directly. Bifrost is a working example — routing, virtual keys, budgets, rate limits, fallbacks, and observability.

For this room the security value is the three options on the slide. A gateway can run a classifier on everything passing through, record every prompt and tool call so analysts can review them after the fact, or hand suspicious traffic to a second AI that judges it. Control and evidence live in one place instead of being scattered across tools.

Two caveats, stated plainly. A gateway only governs traffic routed through it — a person's separate browser session with a hosted chatbot bypasses it entirely. And logs are copies of business data: protect them and minimize what they retain.

Watch fallback routes. Automatic failover that silently sends a request to a different provider can undo a carefully chosen data boundary.

Transition: demonstrate the gateway making and recording a decision.

## Sources

- [Bifrost overview and feature list](https://www.getbifrost.ai/docs).
- [Bifrost budgets and limits](https://docs.getbifrost.ai/features/governance/budget-and-limits).

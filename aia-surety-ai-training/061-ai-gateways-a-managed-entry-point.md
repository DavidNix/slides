---
slide: 61
section: "Deployment"
duration_minutes: 2
---

# AI gateways: a managed entry point

**Application → gateway → approved model service**

- Route requests to selected providers or local models.
- Apply access rules, budgets, and rate limits.
- Observe usage and failures.
- Manage fallback destinations.

**Example: Bifrost.**

## Speaker notes

Explain a gateway as a managed entry point for applications using model APIs. It helps several teams use common controls and reduces duplicated integration work.

Bifrost documents routing, virtual keys, budgets, rate limits, fallbacks, and observability. Some additional governance capabilities depend on edition or deployment; check the features used in the demonstration.

A gateway only governs traffic routed through it. Installing one does not automatically control someone's separate browser session with a hosted chatbot.

Convenient automatic fallback can send a request to another provider. Restrict fallback routes to destinations approved for that data. A local-only workload should not silently fall back to a public API.

## Sources

- [Bifrost overview and feature list](https://www.getbifrost.ai/docs).
- [Bifrost budgets and limits](https://docs.getbifrost.ai/features/governance/budget-and-limits).

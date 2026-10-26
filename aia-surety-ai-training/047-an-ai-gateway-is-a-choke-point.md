---
slide: 47
section: "Security"
duration_minutes: 2
---

# An AI gateway is a choke point

![Every request from the app passes through the gateway — classifier, logs, and reviewer — before reaching the approved model services.](ai-gateway-choke-point.png)

**Application → gateway → approved model service**

- Layer in a classifier for prompts and tool calls.
- Capture and log every prompt for later analysis.
- Let another agent review the traffic.
- Route, budget, and limit what goes where.
- Govern **MCP servers** too: see every server apps connect to, allow or deny each one, and filter which tools are available.

**One place to enforce and observe every model request.**

## Speaker notes

Explain a gateway as a managed entry point for applications using model APIs: requests pass through it instead of reaching a provider directly. Two working examples: Bifrost — routing, virtual keys, budgets, rate limits, fallbacks, and observability — and Kong's AI Gateway — access control, prompt guardrails, PII sanitization, and MCP traffic governance with audit logs.

Walk the picture left to right: the application's requests all pass through the single gatehouse — nothing reaches a model service without going through it — and only then continue to the approved models. The three badges are the three options on this slide: the classifier inspecting what passes, the logs recording it, and the reviewer agent judging suspicious traffic.

The same choke point extends to the connectors from earlier in the section: a gateway can inventory every MCP server configured across the organization's apps, let an administrator allow or deny each one, and filter which tools are available per team. The connectors slide gave each person a review habit; the gateway makes the same review an organizational control — and on some platforms the denial is enforced on the device, so a blocked server cannot be used even by an app that has it.

For this room the security value is the three options on the slide. A gateway can run a classifier on everything passing through, record every prompt and tool call so analysts can review them after the fact, or hand suspicious traffic to a second AI that judges it. Control and evidence live in one place instead of being scattered across tools.

Two caveats, stated plainly. A gateway only governs traffic routed through it — a person's separate browser session with a hosted chatbot bypasses it entirely. And logs are copies of business data: protect them and minimize what they retain.

Watch fallback routes. Automatic failover that silently sends a request to a different provider can undo a carefully chosen data boundary.

Transition: demonstrate the gateway making and recording a decision.

## Sources

- [Bifrost overview and feature list](https://www.getbifrost.ai/docs).
- [Bifrost budgets and limits](https://docs.getbifrost.ai/features/governance/budget-and-limits).
- [Bifrost: Govern MCP servers](https://docs.getbifrost.ai/edge/mcp-governance).
- [Kong Gateway](https://konghq.com/products/kong-gateway) — the AI Gateway variant governs LLM and MCP traffic.
- [Kong: MCP Traffic Gateway](https://developer.konghq.com/ai-gateway/mcp).

---
slide: 68
section: "Security"
duration_minutes: 2
---

# An AI gateway is a choke point

**Application → gateway → approved model service**

- Layer in a classifier for prompts and tool calls.
- Capture and log every prompt for later analysis.
- Let another agent review the traffic.
- Route, budget, and limit what goes where.
- Govern **MCP servers** too: see every server apps connect to, allow or deny each one, and filter which tools are available.

**One place to enforce and observe every model request.**

<video src="ai-gateway.mp4" controls width="100%" aria-label="Without a gateway, each app talks to AI services on its own; one gateway becomes the single way in; a clean request passes, a hidden instruction is stopped by the classifier, an unapproved destination is denied, and every decision lands in one record you can inspect."></video>

## Speaker notes

A gateway is a managed entry point. Apps send model requests through it, not straight to a provider. Examples: Bifrost (routing, budgets, rate limits, logs) and Kong AI Gateway (access control, guardrails, PII removal, MCP governance).

Play the video after the bullets.

The security value is in one place:

- A classifier on all traffic.
- Logs of every prompt and tool call.
- A second AI that reviews suspicious traffic.

For MCP, a gateway lists every server in use, allows or denies each one, and filters tools per team. Some platforms block a denied server on the device.

Caveats:

- It only sees traffic routed through it. A personal browser session bypasses it.
- Logs are copies of business data. Protect them.
- Automatic failover to another provider can break a chosen data boundary.

## Sources

- [Bifrost overview and feature list](https://www.getbifrost.ai/docs).
- [Bifrost budgets and limits](https://docs.getbifrost.ai/features/governance/budget-and-limits).
- [Bifrost: Govern MCP servers](https://docs.getbifrost.ai/edge/mcp-governance).
- [Kong Gateway](https://konghq.com/products/kong-gateway). The AI Gateway variant governs LLM and MCP traffic.
- [Kong: MCP Traffic Gateway](https://developer.konghq.com/ai-gateway/mcp).

---
slide: 70
section: "Security"
duration_minutes: 0
---

# An AI gateway is a choke point (diagram)

![Every request from the app passes through the gateway (classifier, logs, and reviewer) before reaching the approved model services.](ai-gateway-choke-point.png)

**App → gateway → approved model service. Nothing reaches a model without passing the gatehouse.**

## Speaker notes

Every app request passes the gatehouse. The three badges sit on the path: classifier, logs, reviewer. Then requests go on to the approved models.

## Sources

- [Bifrost overview and feature list](https://www.getbifrost.ai/docs).
- [Kong Gateway](https://konghq.com/products/kong-gateway). The AI Gateway variant governs LLM and MCP traffic.

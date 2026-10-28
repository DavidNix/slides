---
slide: 70
section: "Security"
duration_minutes: 0
---

# An AI gateway is a choke point (diagram)

![Every request from the app passes through the gateway — classifier, logs, and reviewer — before reaching the approved model services.](ai-gateway-choke-point.png)

**App → gateway → approved model service — nothing reaches a model without passing the gatehouse.**

## Speaker notes

Walk the picture left to right; the talking points are in the previous slide's notes. The app's requests all pass the single gatehouse, the three badges — classifier, logs, reviewer — sit on the path, and only then do requests continue to the approved model services.

## Sources

- [Bifrost overview and feature list](https://www.getbifrost.ai/docs).
- [Kong Gateway](https://konghq.com/products/kong-gateway) — the AI Gateway variant governs LLM and MCP traffic.

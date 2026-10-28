---
slide: 78
section: "Security"
duration_minutes: 2
---

# Follow the data all the way

**Source → tool → harness → gateway → model → output**

At every step, ask:

- Who can see it?
- What is stored?
- Where can it go next?
- What happens on failure or fallback?

**Privacy is a property of the complete workflow.**

## Speaker notes

Trace the order-status example through the deployment being considered. A gateway is optional, and components may be combined; the point is to identify the actual recipients and copies of the information.

Add side paths verbally: logs, caches, document extraction, embeddings, analytics, backups, and shared outputs. These can matter even when the main model path is local.

Convenience features such as persistent memory, automatic synchronization, and provider fallback deserve the same data-flow questions. More copies and broader access can increase exposure.

This closes the Security section. Recap the pattern: every danger came with its mitigation. Transition to where the market is going and where the opportunities are.

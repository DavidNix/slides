---
slide: 85
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

Trace one real workflow. Find every recipient and every copy of the data. A gateway is optional.

Name the side paths: logs, caches, extraction, embeddings, analytics, backups, shared outputs. They matter even when the model is local.

Memory, sync, and provider fallback add copies and access. Ask the same questions about them.

Transition: "One last slide on security."

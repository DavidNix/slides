---
slide: 12
section: "Agents"
duration_minutes: 2
---

# One request to follow

> “Where is my order 4471? When will it arrive?”

1. Look up the order.
2. Find its tracking number.
3. Track the package.
4. Answer with where it is and when it arrives.

*Fictional training scenario.*

## Speaker notes

This is a general online-shopping example, so the mechanics are easy to follow. It is a teaching workflow, not an integration with a real store.

The task needs two read-only tools: `get_order` and `track_package`. The answer is plain text. It needs no permission to change the order and no access to other customers' orders.

Ask what would become more convenient if the agent could also change the order or issue a refund. Then ask what could go wrong if it changed the wrong order. Leave that question open for the security section.

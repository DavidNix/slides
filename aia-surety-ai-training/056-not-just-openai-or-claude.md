---
slide: 56
section: "Where the market is going"
duration_minutes: 2
---

# You don't have to use OpenAI or Claude

The frontier is not the only option:

- Open-weight models now match closed models on many business tasks.
- Different providers mean different prices, data policies, and deployment options.
- The gateway from the previous section makes switching providers routine.

**Treat models as interchangeable parts behind a controlled entry point.**

## Speaker notes

Many everyday workloads — summarization, classification, drafting, extraction, routine review — run well on open-weight models at lower cost and with clearer data control. Work that needs frontier reasoning still justifies the leaders from the previous slide. The point is that the choice is a per-workload decision, not a loyalty decision.

The architecture slides matter here: the model is a component. The harness, the gateway, and the verification steps are yours and survive a model change. A well-built workflow should survive swapping the model behind it.

This is also a resilience argument. Pricing changes, outages, and policy changes at one provider should not stall your work. Route through the gateway, keep a fallback destination, and test the fallback.

## Sources

- [Bifrost overview and feature list](https://www.getbifrost.ai/docs).

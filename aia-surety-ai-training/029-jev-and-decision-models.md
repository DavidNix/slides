---
slide: 29
section: "Practical"
duration_minutes: 2
---

# Jev and the rise of decision models

A new category is forming beside chat models:

- **Jev (TypeSafe)** is a "decision model": it picks the best answer from candidates instead of generating prose.
- Built for the high-volume, low-judgment calls agents make constantly — routing, classification, choosing a tool or an answer.
- Priced near zero per decision. AWS, Microsoft, Cloudflare, and Snowflake shipped decision-model clones within a month.

**The pattern to watch is not one model doing everything, but many cheap specialists behind your harness.**

## Speaker notes

Explain what a decision model is: not a chatbot. Jev scores a list you give it — like a judge ranking options — instead of writing a story. Constrained output makes it fast, extremely cheap, and harder to abuse, though researchers demonstrated jailbreaks of decision-model configurations for about fifty cents, so verification still applies.

For architecture: route routine decisions to decision models and save frontier reasoning for work that needs it. Expect the AI gateway, which the Security section covers, to grow a decision-model route.

Takeaway for this room: the pattern to watch is not one model doing everything, but many cheap specialists behind your harness.

## Sources

- [How decision models became a new AI category after Jev](https://www.kai-waehner.de/blog/2026/10/20/how-decision-models-became-a-new-ai-category-after-jev/).
- [The hype of Jev explained](https://boringbot.substack.com/p/the-hype-of-jev-explained-a-deep).
- [TypeSafe Jev: what $0 output means for AI economics](https://www.decodingdiscontinuity.com/p/typesafe-jev-decision-models-ai-economics).

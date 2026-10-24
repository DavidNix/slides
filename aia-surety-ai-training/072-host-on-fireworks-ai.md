---
slide: 72
section: "Where the market is going"
duration_minutes: 2
---

# Host without the capital bill: Fireworks AI

Don't want to buy GPUs? Rent the serving layer:

- **Fireworks AI** serves open-weight models — DeepSeek, GLM, and more — on managed infrastructure.
- API-compatible endpoints, fast inference, per-token pricing.
- Same pattern as the gateway: swap the destination, keep your controls.

**Managed inference buys the capability without the hardware bill.**

## Speaker notes

Hosting open-weight models yourself means GPUs, operations staff, and capacity planning — the hardware and operations bill from the local-AI slides. Providers like Fireworks run those same models for you at production scale, so you get open-model pricing and choice without buying data-center equipment.

The tradeoff is the processing boundary: the model runs on their infrastructure, so apply the data rules from the security section before sending sensitive material. For many workloads, a managed host with a clear policy is the right middle point between a closed API and self-hosting.

Others play this role too — Together AI, Groq, and the cloud providers' managed endpoints. Fireworks is a solid default for serving DeepSeek and GLM; the gateway makes the choice swappable either way.

## Sources

- [Fireworks AI](https://fireworks.ai).

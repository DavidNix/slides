---
slide: 93
section: "Recommendations"
duration_minutes: 2
---

# Hosted open models with ZDR: Fireworks and OpenRouter

You do not need your own servers to use open models. Use a US host that does not keep your data.

- **Fireworks AI.** Fast inference for open models, such as DeepSeek and GLM. Zero data retention (ZDR) is the default: it does not store your prompts or outputs, and it does not train on them.
- **OpenRouter.** One account and one API for hundreds of models from many providers. Turn on its ZDR setting, and it sends requests only to providers that keep nothing. Stripe agreed to buy OpenRouter in August 2026.

**Same open model, your choice of host. Pick the one that keeps nothing.**

## Speaker notes

The model is the same. The host decides where your data goes. DeepSeek's own API stores data in China and trains on it by default. Fireworks runs the same model in the US and keeps nothing.

Fireworks: ZDR is the default for open models. Caution: its Responses API keeps conversations 30 days unless storage is turned off. Admins can block all storing features.

OpenRouter: one bill for many models, like a simple AI gateway. ZDR is off by default. Turn it on per account, key, or request. It covers model requests only, not add-ons like web search.

Stripe announced the purchase in August 2026. Check whether it closed. A new owner can change the terms, so reread them.

ZDR is a contract term. Get it in writing. Flagged content can still be kept.

Transition: "Next: agents that run all day."

## Sources

- [Fireworks AI: fast open model inference](https://fireworks.ai/product/inference).
- [Fireworks AI: DeepSeek R1 deployment tiers with zero data retention](https://fireworks.ai/blog/fireworks-ai-developer-cloud).
- [Fireworks for enterprise](https://fireworks.ai/solutions/for-enterprise).
- [OpenRouter: Zero Data Retention](https://openrouter.ai/docs/guides/features/zdr).
- [OpenRouter: provider routing](https://openrouter.ai/docs/guides/routing/provider-selection).
- [CNBC: Stripe to buy OpenRouter](https://www.cnbc.com/2026/08/19/stripe-openrouter-fintech-ai-model-marketplace-.html).
- [TechCrunch: Stripe will reportedly acquire OpenRouter](https://techcrunch.com/2026/08/16/stripe-will-reportedly-acquire-ai-gateway-startup-openrouter-for-7b/).

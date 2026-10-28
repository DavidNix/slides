---
slide: 92
section: "Recommendations"
duration_minutes: 2
---

# Host open models with ZDR: Fireworks and OpenRouter

You do not need your own servers to use open models. Use a US host that does not keep your data.

- **Fireworks AI.** Fast inference for open models, such as DeepSeek and GLM. Zero data retention (ZDR) is the default: it does not store your prompts or outputs, and it does not train on them.
- **OpenRouter.** One account and one API for hundreds of models from many providers. Turn on its ZDR setting, and it sends requests only to providers that keep nothing. Stripe agreed to buy OpenRouter in August 2026.

**Same open model, your choice of host. Pick the one that keeps nothing.**

## Speaker notes

Connect to the previous slide. DeepSeek and GLM are open-weight models, so anyone can run them. The model is the same. The host decides where your data goes. DeepSeek's own API stores data in China and uses it for training by default. Fireworks runs the same model in the US and keeps nothing.

Fireworks: it runs open models on its own servers, and speed is its strength. ZDR is the default for open models. One caution for whoever sets it up: its Responses API keeps conversations for 30 days unless the developer turns storage off. Enterprise admins can block every feature that stores content for the whole account.

OpenRouter: one bill and one connection for many models and providers. It works as a simple version of the AI gateway from the Security section. The ZDR setting is off until you turn it on. You can turn it on for the whole account, for one API key, or for one request. When it is on, OpenRouter refuses to send a request to a provider that keeps data. Its ZDR setting covers model requests only. Add-ons such as web search are not covered.

The Stripe deal: Stripe announced the purchase in August 2026 and said OpenRouter will keep its product and commitments. Check whether the deal has closed before you present. Also note for the room that a change of owner can move a contract to the new owner. Read the terms again after the deal closes.

Tie back to the ZDR slide: ZDR is a contract term, so verify it in writing for your account. Flagged content can still be kept.

Transition: "Models and hosting are covered. Next: agents that run all day."

## Sources

- [Fireworks AI: fast open model inference](https://fireworks.ai/product/inference).
- [Fireworks AI: DeepSeek R1 deployment tiers with zero data retention](https://fireworks.ai/blog/fireworks-ai-developer-cloud).
- [Fireworks for enterprise](https://fireworks.ai/solutions/for-enterprise).
- [OpenRouter: Zero Data Retention](https://openrouter.ai/docs/guides/features/zdr).
- [OpenRouter: provider routing](https://openrouter.ai/docs/guides/routing/provider-selection).
- [CNBC: Stripe to buy OpenRouter](https://www.cnbc.com/2026/08/19/stripe-openrouter-fintech-ai-model-marketplace-.html).
- [TechCrunch: Stripe will reportedly acquire OpenRouter](https://techcrunch.com/2026/08/16/stripe-will-reportedly-acquire-ai-gateway-startup-openrouter-for-7b/).

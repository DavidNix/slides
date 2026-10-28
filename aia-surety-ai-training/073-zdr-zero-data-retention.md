---
slide: 73
section: "Security"
duration_minutes: 3
---

# ZDR: zero data retention

- **ZDR — zero data retention:** a contractual commitment that the provider processes your prompts but does not store them or train on them.
- **There is no technical reason to store your data:** inference is stateless — tokens in, tokens out. The model holds nothing between requests; every turn re-sends the context. Storage serves the provider's purposes, not the engine.
- **It is typical of enterprise and API agreements, rare on consumer plans** — one more reason the company-provided plan matters.
- **The settings toggle is not the same promise:** the opt-out stops training, but consumer plans may still retain chats around 30 days, and conversations **flagged for safety** may be kept for years and analyzed.
- **Even ZDR contracts usually carve out exceptions** — flagged or abusive content may still be retained. Verify the actual terms.

**The toggle stops training; the contract stops retention.**

## Speaker notes

More companies are changing their terms because they see dollar signs in selling data to AI labs. Just be careful of their terms. 

## Sources

- [Anthropic: Updates to our Consumer Terms](https://www.anthropic.com/news/updates-to-our-consumer-terms).
- [Anthropic Privacy Center: is my data used for model training](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training).
- [OpenAI Help Center: data controls in ChatGPT](https://help.openai.com/en/articles/7730893).
- [Stanford HAI: Be careful what you tell your AI chatbot](https://hai.stanford.edu/news/be-careful-what-you-tell-your-ai-chatbot).

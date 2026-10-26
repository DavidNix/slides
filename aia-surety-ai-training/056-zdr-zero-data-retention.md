---
slide: 56
section: "Security"
duration_minutes: 3
---

# ZDR: zero data retention — and the opt-out you must not miss

Consumer chatbots train on your conversations **by default**:

- **ChatGPT (Free, Plus, Pro):** opted in by default. Turn off *"Improve the model for everyone"* in Settings → Data Controls.
- **Claude (Free, Pro, Max):** opted in by default since late 2025. Turn off *"Help improve Claude"* in Privacy Settings.
- Opting out does not fully opt you out: opted-out chats may still be retained for around 30 days, and conversations **flagged for safety** may be kept for years and analyzed — including to train the providers' safety systems.
- **ZDR — zero data retention:** a provider contract that processes prompts but does not retain or train on them. Typical of enterprise and API agreements; verify the terms.

**Assume the default is sharing until you have switched it off.**

## Speaker notes

The danger slide showed what hosted services can do with prompts; this slide shows the two structural answers, starting with the settings most people never open.

On consumer plans, both major assistants train on your conversations by default. In ChatGPT, switch off "Improve the model for everyone" under Data Controls. In Claude, the "Help improve Claude" toggle under Privacy Settings — Anthropic's late-2025 terms change made training the default for Free, Pro, and Max, with five-year retention for those who accept it. Business, Enterprise, Edu, and API tiers are not trained on by default — one more reason the company-provided plan matters.

Now the uncomfortable part: opting out of training is not the same as zero retention. ChatGPT may keep opted-out conversations up to 30 days for safety purposes, and flagged content longer. Claude keeps opted-out chats 30 days, but conversations flagged as violating usage policy can be retained for years and analyzed — including to improve safety detection. Read it as: the setting stops *capability training*; it does not guarantee the conversation was never stored.

ZDR is the contractual version of the same promise: the provider processes the request and commits not to retain or train on it. It is typical of enterprise and API agreements and rare on consumer plans. The control is a document you can point to — verify the actual terms rather than assuming, and note that even ZDR agreements usually carve out retention for flagged or abusive content.

Transition: "If a contract promise is not strong enough, there is exactly one stronger option."

## Sources

- [Anthropic: Updates to our Consumer Terms](https://www.anthropic.com/news/updates-to-our-consumer-terms).
- [Anthropic Privacy Center: is my data used for model training](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training).
- [OpenAI Help Center: data controls in ChatGPT](https://help.openai.com/en/articles/7730893).
- [Stanford HAI: Be careful what you tell your AI chatbot](https://hai.stanford.edu/news/be-careful-what-you-tell-your-ai-chatbot).

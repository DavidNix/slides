---
slide: 64
section: "Security"
duration_minutes: 3
---

# ZDR or local AI: keep your data yours

Two deliberate choices about where your data may live:

- **ZDR — zero data retention:** a provider contract that processes prompts but does not retain or train on them. Typical of enterprise and API agreements; verify the terms.
- **Local AI:** models are just files, not programs. Run them inside your boundary and nothing leaves — at the cost of hardware, operations, and capacity.

**Decide deliberately where your data may live.**

## Speaker notes

This is the mitigation for the provider data-handling danger. The danger slide showed what consumer defaults do with prompts; these two approaches opt out structurally rather than through settings.

ZDR — zero data retention — is a contractual control: the provider processes the request but commits not to store it or train on it. Enterprise plans and API terms often include it; consumer plans usually do not. The control is a document you can point to, so verify the actual terms rather than assuming.

Local AI is the strongest boundary: the model runs on your hardware, so prompts and documents never need to leave. Be precise about what "local" covers — the whole workflow matters. A local assistant can still call hosted search, document extraction, or telemetry; internal access, stored files, and backups need their own controls. And there is a real bill: larger models need more memory and computation, and the organization takes on capacity, updates, and support.

A smaller local model that does one task well is often the right scope. Either way — ZDR or local — the choice is explicit, not whatever the default settings left behind.

Transition: close the section by tracing data through a whole workflow.

## Sources

- [Anthropic Privacy Center: is my data used for model training](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training).
- [Stanford HAI: Be careful what you tell your AI chatbot](https://hai.stanford.edu/news/be-careful-what-you-tell-your-ai-chatbot).

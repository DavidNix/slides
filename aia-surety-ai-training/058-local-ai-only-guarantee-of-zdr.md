---
slide: 58
section: "Security"
duration_minutes: 2
---

# Local AI: the only guarantee of ZDR

- **Models are just files, not programs.** Run them inside your boundary and nothing leaves.
- The strongest boundary: prompts and documents never need to leave your control.
- Be precise about what "local" covers — a local assistant can still call hosted search, document extraction, or telemetry.
- And there is a real bill: hardware, memory, capacity, updates, and support.

**Only local AI guarantees nothing leaves; everything else is a promise in a document.**

## Speaker notes

Local AI is the strongest boundary in this section: the model runs on your hardware, so prompts and documents never need to leave. Where ZDR is a contract you trust and settings you verify, local AI is a guarantee — there is no external party to keep a copy, because the computation itself happens inside your walls.

Be precise about what "local" covers — the whole workflow matters. A locally run assistant can still call hosted search, document extraction, or telemetry; internal access, stored files, and backups need their own controls. The model's location is one boundary, not all of them.

And there is a real bill: larger models need more memory and computation, and the organization takes on capacity planning, updates, and support. A smaller local model that does one task well is often the right scope.

Transition: the other side of the hosted-versus-local decision is cost — hosted allowances are shrinking at the same price.

## Sources

- [Stanford HAI: Be careful what you tell your AI chatbot](https://hai.stanford.edu/news/be-careful-what-you-tell-your-ai-chatbot).

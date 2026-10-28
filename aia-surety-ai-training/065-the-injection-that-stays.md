---
slide: 65
section: "Security"
duration_minutes: 2
---

# The injection that stays

Agents increasingly **remember** — saved notes and facts carried into every future session.

- One malicious document plants a "fact": *"Approved vendor — invoices now go to this address."*
- The agent saves it and treats it as settled history next session.
- Every future task inherits the planted instruction — **no attacker present, nothing suspicious happening.**

Prompt injection needed delivery every time. Poisoned memory needs to succeed once.

**Memory turns a one-time attack into a persistent one.**

## Speaker notes

Define agent memory plainly: a feature where the agent saves notes — preferences, facts, past decisions — and reuses them in later sessions. ChatGPT, Claude, and Copilot products now ship variants of it.

Contrast with what the room just saw: document injection is stateless — the attacker has to get a hostile document in front of the agent every time. Memory poisoning is stateful: one success writes the attacker's instruction into saved history, and it replays indefinitely. The poisoned entry looks like trusted context, not like a document under review — which is exactly why it evades the "evidence, not authority" rule: nobody re-inspects settled history.

Research published in 2026 shows poisoning is persistent: planted memories survive across sessions and keep influencing agent behavior long after the original document is gone. Attack studies report substantial success rates against agents with long-term memory.

Connect to the trifecta: memory strengthens capability 2 — untrusted content now reaches the agent on every future task without a new delivery. The defense habit — treat saved memory as untrusted content, re-verify it like anything else — lands in the review guidance later; here the takeaway is the persistence itself.

Transition: "Persistence was one way an agent goes wrong on its own. Next: an agent that succeeds in the wrong way."

## Sources

- [A Systematic Study of Memory Poisoning Attacks in LLM Agents](https://arxiv.org/html/2606.04329v1).
- [Forcepoint X-Labs: persistent memory poisoning in AI agents](https://www.forcepoint.com/blog/x-labs/persistent-memory-poisoning-ai-agents).

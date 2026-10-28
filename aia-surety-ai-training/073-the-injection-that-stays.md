---
slide: 73
section: "Security"
duration_minutes: 2
---

# The injection that stays

Agents increasingly **remember**: saved notes and facts carried into every future session.

- One malicious document plants a "fact": *"Approved vendor: invoices now go to this address."*
- The agent saves it and treats it as settled history next session.
- Every future task inherits the planted instruction. **No attacker present, nothing suspicious happening.**

Prompt injection needed delivery every time. Poisoned memory needs to succeed once.

**Memory turns a one-time attack into a persistent one.**

## Speaker notes

Agent memory saves notes (preferences, facts, past decisions) and reuses them later. ChatGPT, Claude, and Copilot all have it.

Document injection needs delivery every time. Memory poisoning succeeds once and replays forever. The poisoned entry looks like trusted history, so nobody re-checks it.

2026 research shows planted memories survive across sessions and keep steering the agent.

Memory strengthens trifecta capability 2: untrusted content reaches every future task.

Transition: "Next: an agent that succeeds the wrong way."

## Sources

- [A Systematic Study of Memory Poisoning Attacks in LLM Agents](https://arxiv.org/html/2606.04329v1).
- [Forcepoint X-Labs: persistent memory poisoning in AI agents](https://www.forcepoint.com/blog/x-labs/persistent-memory-poisoning-ai-agents).

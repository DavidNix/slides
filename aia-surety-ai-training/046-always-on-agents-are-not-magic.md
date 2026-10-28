---
slide: 46
section: "Always-on agents"
duration_minutes: 2
---

# Always-on agents are not magic

"Always on" means something wakes the agent up. There are only two ways:

| Wakes on | Example |
|---|---|
| A schedule | Every weekday at 7:00, triage my email |
| A trigger | A colleague messages "give me an update on the project" |

- Between runs, the agent does nothing. No thinking, no watching.
- Each run is the same agent loop you already know: the model, the harness, and its tools.
- Its "memory" is notes it saved last time and reads again at the start of the next run.

**Definitely worth a look for businesses but not any of the personal assistants**

## Speaker notes

An always-on agent does not decide to help. A timer fires or a message arrives, and the harness starts it. Same as the thermostat, or an Outlook email rule.

The model is stateless. The harness saves notes and reloads them each run. That is the whole trick behind memory.

Every trigger is a way in. A message that wakes the agent can carry instructions.

Transition: these agents read mail, browse, and send messages. Security is next.

## Sources

- [Hermes Agent on GitHub](https://github.com/nousresearch/hermes-agent), the built-in scheduler and messaging triggers.
- [OpenClaw vs Hermes](https://www.firecrawl.dev/blog/openclaw-vs-hermes), how resident and on-demand agents run.

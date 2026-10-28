---
slide: 45
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

Take the mystery out of "proactive." An always-on agent feels like it decides to help on its own. It does not. A timer fires, or a message arrives, and the harness starts the agent. This is the same idea as the thermostat from the "Agents are nothing new" slide, or an email rule in Outlook.

The schedule is like a recurring calendar entry. The trigger is an event, such as a chat message, a new email, or a file in a shared folder. When the run ends, the agent stops until the next one.

Call back to the Demystify section. The model is stateless and remembers nothing between calls. The harness saves notes and loads them again at the start of each run. That is the whole trick behind memory.

This also matters for security. Every trigger is a way in. A message or an email that wakes the agent can also carry instructions, which the Security section covers.

Transition: these agents read your mail, browse the web, and can send messages. The Security section, next, shows why that combination needs care. Near the end, we come back to which always-on agent to use for a business pilot.

## Sources

- [Hermes Agent on GitHub](https://github.com/nousresearch/hermes-agent), the built-in scheduler and messaging triggers.
- [OpenClaw vs Hermes](https://www.firecrawl.dev/blog/openclaw-vs-hermes), how resident and on-demand agents run.

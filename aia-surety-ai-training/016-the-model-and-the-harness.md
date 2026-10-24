---
slide: 16
section: "Agents"
duration_minutes: 3
---

# The model and the harness

![The model is the brain; the harness is the body that uses tools.](../2026-09-ai-security/agent-harness-vs-model-robot.png)

**Model: proposes. Harness: coordinates. Tools: perform operations.**

## Speaker notes

Use the brain/body comparison as an analogy, not a claim that the model thinks like a person.

The harness is ordinary software. It assembles the model request, maintains conversation state, checks requested actions, dispatches tools, and returns their results to the model.

Tools are pieces of software that do something concrete: read a file, query a record, run a calculation, or send a message. They may run locally, on a company server, or at a provider.

For the upcoming client-side tool example, the model produces a structured request. The application and tool service execute it. Some products also provide provider-hosted tools; the same question still applies: which software executes the operation, and with whose authority?

## Sources

- [Claude tool-use overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).

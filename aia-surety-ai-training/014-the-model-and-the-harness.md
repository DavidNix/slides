---
slide: 14
section: "Agents"
duration_minutes: 3
---

# The model and the harness

**Model: proposes. Harness: coordinates. Tools: perform operations.**

## Speaker notes

Use the brain/body comparison as an analogy, not a claim that the model thinks like a person.

The harness is ordinary software. It assembles the model request, maintains conversation state, checks requested actions, dispatches tools, and returns their results to the model.

Tools are pieces of software that do something concrete: read a file, query a record, run a calculation, or send a message. They may run locally, on a company server, or at a provider.

Next, watch the whole loop in motion: one tool call, from your request to the final answer. Right after that comes the everyday version — ChatGPT answering a question about current news. Some products also provide provider-hosted tools; the same question still applies: which software executes the operation, and with whose authority?

## Sources

- [Claude tool-use overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).

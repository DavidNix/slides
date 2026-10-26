---
slide: 20
section: "Practical"
duration_minutes: 2
---

# What context engineering is

The model only sees what is in its context window this turn. That window is assembled:

- The brief — your instructions for this task.
- Reference material — documents, templates, and data you attach or the harness retrieves.
- Tool output — results that came back mid-task.
- History — the conversation so far, including earlier results.

**The craft is assembling the right window for the task: no more, no less.**

## Speaker notes

Walk the four parts with office examples. The brief: "summarize this claim file for the adjuster, flag anything contradictory." Reference material: the claim file itself, the carrier contract, last year's template. Tool output: a search result or a table the agent pulled mid-task. History: the questions already asked and answered in this session.

Too little context and the model fills gaps from general knowledge — confident guesses, not facts. Too much and the line that matters gets buried, quality drops, and costs rise. That is why "more context" is not automatically "better context."

The practical advice staff may have heard as "give a clear brief and reuse good instructions" is context engineering under a friendlier name: the brief is the instruction part, saved instructions and projects are the reusable part, and retrieval is the harness finding the right passages at answer time.

Transition: "Watch how strongly one line of context moves the model's next word."

## Sources

- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

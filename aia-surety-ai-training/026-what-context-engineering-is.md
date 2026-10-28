---
slide: 26
section: "Practical"
duration_minutes: 2
---

# What context engineering is

The model only sees what is in its context window this turn. That window is assembled:

- The brief: your instructions for this task.
- Reference material: documents, templates, and data you attach or the harness retrieves.
- Tool output: results that came back mid-task.
- History: the conversation so far, including earlier results.

**The craft is assembling the right window for the task: no more, no less.**

## Speaker notes

Use office examples. Brief: "summarize this claim file for the adjuster, flag contradictions." Reference: the claim file, the carrier contract. Tool output: a search result. History: questions already answered.

Too little context and the model guesses. Too much and the important line gets buried, quality drops, and costs rise.

Transition: "Watch how strongly one line of context moves the model's next word."

## Sources

- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

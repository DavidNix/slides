---
slide: 31
section: "Corporate AI"
duration_minutes: 2
---

# Prompt engineering is dead — long live context engineering

The winning skill is no longer the clever one-off prompt:

- Curate everything in the model's context: instructions, tools, data, examples, memory.
- Put the right information in the right place for the task.
- Manage the budget: too much context can hurt as much as too little.

**Think like a curator of the model's context, not a writer of magic words.**

## Speaker notes

Prompt engineering became famous as a bag of phrasing tricks: "think step by step," role prompts, magic words. Models improved at understanding intent, so phrasing matters less every year. The durable skill is deciding what is in the context window for a given task: which instructions, which reference documents, which tools, which examples, which conversation history.

This is what the tools in this section do. Projects assemble instructions and reference material. Retrieval finds relevant passages at answer time. Skills load procedures on demand. Agent harnesses assemble the context for every turn of a task.

"Context engineering" is the term used in Anthropic's engineering writing and across the industry. The practical version for staff: give the AI a clear brief, attach the right material, and remove what does not belong — more context is not automatically better context.

## Sources

- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

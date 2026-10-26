---
slide: 36
section: "Security"
duration_minutes: 2
---

# Classify prompts and tool calls

Two automated checkpoints around the model:

- **Classify incoming content:** flag instructions hiding in documents, emails, and web pages.
- **Classify each tool call:** decide whether the requested action may run before it executes — this is what Claude Code's auto mode does when a model requests a tool.

**Automated classifiers are a layer, not a guarantee.**

## Speaker notes

Position this as defense in depth between the two human controls already discussed: meaningful review decides consequential actions, and classification reduces how many requests ever reach a human.

Describe the two checkpoints in plain language. Content classification looks at what enters the system and asks whether it contains instructions that do not belong. Tool-call classification looks at each action the model requests and applies a policy: run it, ask a human, or block it. Claude Code's auto mode classifies every tool call this way and only escalates the ones a policy does not clearly permit.

Set expectations honestly. Classifiers miss attacks and occasionally block legitimate work — the same tradeoff as spam filters. That is why they combine with permissions and isolation rather than replacing them.

The auto mode image from the earlier deck makes this concrete: watch a tool request get classified and either run or escalate.

Transition: even with review and classification, assume something gets through — which is why the next pair limits how much any single failure can matter.

## Sources

- [Claude Code documentation: permissions and tool approval](https://code.claude.com/docs/en/claude-code/overview).

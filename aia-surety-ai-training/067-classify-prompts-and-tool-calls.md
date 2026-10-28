---
slide: 67
section: "Security"
duration_minutes: 2
---

# Classify prompts and tool calls

![Claude Code switched to auto permissions mode: Claude will make changes without asking, and only a policy decides which tool calls need a human.](claude-code-auto-mode.png)

Two automated checkpoints around the model:

- **Classify incoming content:** flag instructions hiding in documents, emails, and web pages.
- **Classify each tool call:** decide whether the requested action may run before it executes. This is what Claude Code's auto mode does when a model requests a tool.

**Automated classifiers are a layer, not a guarantee.**

## Speaker notes

Humans decide consequential actions. Classifiers cut how many requests reach a person.

- Content classification asks whether incoming material holds instructions that do not belong.
- Tool-call classification checks each requested action against policy: run, ask a human, or block.

In the screenshot, Claude Code runs in auto mode. It acts without asking and escalates only what policy does not clearly allow.

Classifiers miss attacks and sometimes block real work, like spam filters. Combine them with permissions and isolation.

Transition: assume something still gets through.

## Sources

- [Claude Code documentation: permissions and tool approval](https://code.claude.com/docs/en/claude-code/overview).

---
slide: 14
section: "Agents"
duration_minutes: 2
---

# Skills: packaged expertise

A skill bundles what the model needs for one kind of work:

- Instructions and procedures for a recurring task.
- Reference files, templates, and examples.
- Optional scripts the harness can run.

**Skills load context on demand instead of carrying it in every conversation.**

## Speaker notes

Skills are folders of instructions, resources, and optional scripts that the harness loads when a task matches. Anthropic introduced Agent Skills, and other harnesses, including OpenCode, adopted the same pattern. Treat a skill as context management: the model reads the skill's instructions when they are relevant rather than keeping every procedure in the prompt at all times.

Contrast a skill with a tool. A tool performs an operation; a skill teaches the model how to do a kind of work well. A skill can reference tools, but the tools still execute separately.

Example for this room: a "submission packet review" skill could hold the checklist, formatting rules, and escalation steps. New staff get the same review quality because the procedure ships with the assistant instead of living in one person's head.

Skills also concentrate risk: whoever writes the skill is writing standing instructions the model will follow. Apply the same review standards you would apply to a procedure document.

## Sources

- [Anthropic Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills).
- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

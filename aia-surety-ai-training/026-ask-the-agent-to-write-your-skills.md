---
slide: 26
section: "Practical"
duration_minutes: 2
---

# Use a skill to write skills 

Don't write skills from scratch. Let the agent do it.

- The agent drafts the skill file: right format, concise wording, a description that matches the task.
- You review the draft like any circulated document — check the steps and the boundaries.
- Run it on one real task, note what it missed, and have the agent revise its own draft.
- Anthropic even ships a **skill-creator** skill — a skill whose job is writing skills.

## Speaker notes

Two slides ago the room heard "write your own," and writing a file with frontmatter is not office work. The point of this slide: it doesn't have to be. The agent writes the skill file; you never touch the format.

Walk the loop concretely with the freight example from the previous slide: after finishing one claim review by prompting, tell the agent "turn what we just did into a skill — the fact list, the evidence spreadsheet, the case-note format, and the rule that you never decide the claim." The agent produces the draft the previous slide showed. Anthropic's own authoring guidance describes exactly this: work the task normally, notice what you kept re-explaining, then ask the agent to capture it as a skill.

The human parts that do not go away: read the draft, confirm the boundaries (like step 4 on the example), and test on a real case. Anthropic recommends iterating with two instances — one drafts, a fresh one runs the skill on real work, and you bring back what it missed. Format and wording are the agent's strengths; the procedure and the boundaries are yours. A compliance or legal rule comes from you, not the model.

Name the skill-creator point explicitly, because it lands well: the tooling for authoring skills is itself packaged as a skill. Anthropic publishes one in its skills repository — it interviews you about the task and drafts the files. That is the deck's whole skills story folding back on itself.

Security stays true here too: a skill the agent wrote is still instructions the agent will follow, so review before sharing — same rule as the registry slide near the end.

Transition: "Next: the habit that keeps everything the agent produces trustworthy — verification."

## Sources

- [Skill authoring best practices — Develop Skills iteratively with Claude](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices).
- [Anthropic's skill-creator skill (SKILL.md)](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md).

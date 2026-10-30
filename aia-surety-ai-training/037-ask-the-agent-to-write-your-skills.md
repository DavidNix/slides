---
slide: 37
section: "Practical"
duration_minutes: 2
---

# Use a skill to write skills

Don't write skills from scratch. Let the agent do it.

- The agent drafts the skill file: right format, concise wording, a description that matches the task.
- You review the draft like any circulated document. Check the steps and the boundaries.
- Run it on one real task, note what it missed, and have the agent revise its own draft.
- Anthropic even ships a **skill-creator** skill, a skill whose job is writing skills.

*The agent can write the procedure. Can you trust what it produces?*

## Speaker notes

Writing a file with frontmatter is not office work. The agent writes it. You never touch the format.

Example: after one claim review, say "turn what we just did into a skill: the fact list, the spreadsheet, the case note, and the rule that you never decide the claim."

Your part stays: read the draft, confirm the boundaries, test on a real case. Compliance and legal rules come from you.

Anthropic's skill-creator skill interviews you about the task and drafts the files.

A skill the agent wrote is still instructions it will follow. Review before you share it.

Transition: "Next: verification."

## Sources

- [Skill authoring best practices: develop Skills iteratively with Claude](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices).
- [Anthropic's skill-creator skill (SKILL.md)](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md).

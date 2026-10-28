---
slide: 36
section: "Practical"
duration_minutes: 2
---

# An example skill

A shared **freight-claim review** skill, as the agent sees it:

```
---
name: freight-claim-review
description: Review a brokered freight claim for mismatches
  between broker records and carrier documents. Use when
  reviewing a delivery dispute or a disputed invoice.
---

1. Read the claim file and list every fact the broker
   record asserts.
2. Check each fact against the carrier's documents.
   Mark each one confirmed, contradicted, or missing.
3. Build an evidence spreadsheet, one row per fact.
4. Draft follow-up questions only for missing or
   contradicted facts. Do not accuse anyone and do not
   decide the claim.
5. Write a one-page case note for the examiner.
```

**Like a library book: the spine stays visible on the shelf, but the book comes off only when the task calls for it.**

## Speaker notes

Only the name and description sit in the window at the start. The steps load when a task matches, like the disputed freight claim.

Point out step 4. The skill holds the office's rules, including what the agent must not do. The examiner decides the claim. IT should review boundaries like this before a skill circulates.

The owner of the freight process writes it once and shares it with the team.

Transition: "And you never write that file yourself."

## Sources

- [Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude).
- [Anthropic's Excel skill example (SKILL.md)](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md).

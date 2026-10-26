---
slide: 24
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
3. Build an evidence spreadsheet — one row per fact.
4. Draft follow-up questions only for missing or
   contradicted facts. Do not accuse anyone and do not
   decide the claim.
5. Write a one-page case note for the examiner.
```

**Like a library book: the spine stays visible on the shelf, but the book comes off only when the task calls for it.**

## Speaker notes

Walk the two halves. The name and one-line description are all that sits in the window at session start — progressive disclosure, as on the previous slide. The five steps load only when a task matches, here a disputed freight claim like the one running in the background from the demo.

Point out step 4. The skill is where the office's rules get written down, including what the agent must not do: it drafts questions, but the examiner decides the claim. A boundary like that is exactly what IT wants to review before the skill circulates.

Connect it to the demo: the running freight task uses the same shape — the premade Excel and Word skills produce the outputs, and the exercise brief supplies the claim-review rules a custom skill like this would package permanently.

This is the shared tier: written once by whoever owns the freight process, shared with the team, one place to update.

Transition: "Next: putting it to work on real data."

## Sources

- [Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude).
- [Anthropic's Excel skill example (SKILL.md)](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md).

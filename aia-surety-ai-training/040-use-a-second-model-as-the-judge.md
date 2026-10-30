---
slide: 40
section: "Verification"
duration_minutes: 2
---

# Use a second model as the judge

Some work has no deterministic check: a case note, a letter, a summary:

- Give a second model the task's standard plus the draft, not your opinions.
- Ask for a verdict per requirement: pass, fail, or unsure, each with its reason.
- Treat "unsure" as a finding. Route it to a person.

**A judge works when you can state the standard; a person still owns the decision.**

## Speaker notes

This is LLM-as-judge. AI teams use it to check thousands of outputs. No script can recalculate a case note, so a second model grades it against a standard.

The standard is the requirements from the skill: what the note must contain and what to flag.

Ask for a verdict and reason per requirement. An "unsure" names exactly what a person must check.

Caveats: the judge is probabilistic too, so spot-check it. Two models can share a blind spot. The judge informs. It does not decide.

Transition: "Build the checks into the workflow itself."

## Sources

- [OpenAI: Evals guide](https://platform.openai.com/docs/guides/evals).
- [Anthropic: Test and evaluate Claude](https://docs.claude.com/en/docs/test-and-evaluate).

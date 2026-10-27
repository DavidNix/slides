---
slide: 34
section: "Verification"
duration_minutes: 2
---

# Use a second model as the judge

Some work has no deterministic check — a case note, a letter, a summary:

- Give a second model the task's standard plus the draft — not your opinions.
- Ask for a verdict per requirement: pass, fail, or unsure, each with its reason.
- Treat "unsure" as a finding — route it to a person.

**A judge works when you can state the standard; a person still owns the decision.**

## Speaker notes

This is an established trick in AI engineering evaluations: LLM-as-judge. Where the deliverable is generative, no script can recalculate it — so a second model grades the draft against the rubric instead of against arithmetic. It is how AI teams check thousands of model outputs at scale.

For this room, the standard is the part you already know how to write: it is the same clear statement of requirements from the skill — what the case note must contain, what counts as supported, what must be flagged. The shared skill can carry the rubric, and the judge step can run right after the draft step.

Ask for structure: a verdict and a reason per requirement, not a paragraph of overall impressions. Structured verdicts are easy to tally, and an "unsure" is a useful answer — it names exactly what a person needs to look at.

Caveats, honestly: the judge is probabilistic too, so spot-check its verdicts the same way. Two models can share the same blind spot, especially the same model family or the same missing source document. And the judge informs — it does not own the consequential decision.

Transition: "Build the checks into the workflow itself."

## Sources

- [OpenAI: Evals guide](https://platform.openai.com/docs/guides/evals).
- [Anthropic: Test and evaluate Claude](https://docs.claude.com/en/docs/test-and-evaluate).

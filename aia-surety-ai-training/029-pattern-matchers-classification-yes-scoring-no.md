---
slide: 29
section: "Practical"
duration_minutes: 2
---

# Great pattern matchers, with one warning

**The same skill behind the strengths explains the warning.**

- **Classification works:** the output is one of a few known categories, and wrong answers are visible. Is this a claim inquiry, a submission error, a complaint? A person can spot-check ten at a glance.
- **Scoring fails:** a number implies a measurement. A risk score of "7 versus 8," a quality rating out of 10, a confidence percentage. The model has no calibrated scale. The precision is generated the way plausible sentences are.

**Ask for categories with reasons. If you need a score, write a rubric, have the model pick a level, and verify.**

## Speaker notes

This is a rule of thumb from experience, not a benchmark.

Classification works: the output space is small and checkable. "With reasons" gives you evidence to verify.

Scoring fails: the model has no calibrated scale. The difference between 7 and 8 means nothing. Two runs can differ. A "confidence percentage" is generated text.

If leadership wants a number, use a rubric. The model picks a level, you count levels and spot-check.

Transition: "Here is what that looks like."

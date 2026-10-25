---
slide: 44
section: "Security"
duration_minutes: 2
---

# Classification yes, scoring no

**LLMs sort well. LLMs measure badly.**

- **Good at classification:** picking among known categories — is this a claim inquiry, a submission error, a complaint? Discrete outputs, easy to spot-check, wrong answers are visible.
- **Bad at scoring:** producing numbers — risk scores, quality ratings 1–10, confidence percentages. A "7 versus an 8" implies a measurement that does not exist.

**Ask for categories with reasons. If you need a score, define a rubric, classify into bands, and verify.**

## Speaker notes

Present this as a rule of thumb from experience, not a benchmark result: the pattern holds across models and vendors.

Why classification works: the output space is small and checkable. A person can verify ten categories at a glance, errors are visible, and "with reasons" gives you the evidence trail the verification section demands.

Why scoring fails: an LLM has no calibrated internal scale. It generates a plausible number the way it generates plausible sentences — the precision is confabulated. Two runs can give different scores; the difference between 7 and 8 carries no meaning. Percent "confidence" is produced text, not a measured probability.

The practical workaround when leadership wants a number: define the rubric yourself, have the model classify into rubric bands (low/medium/high), aggregate many classified items into a real measurement, and spot-check the classifications. The number becomes trustworthy because it comes from counting verified categories, not from the model's feel for the question.

Tie back to the opener: trusting an LLM score you have never verified is exactly the unexamined convenience this section warns about.

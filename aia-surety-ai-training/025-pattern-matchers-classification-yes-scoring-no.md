---
slide: 25
section: "Practical"
duration_minutes: 2
---

# Great pattern matchers — with one warning

**The same skill behind the strengths explains the warning.**

- **Classification works:** the output is one of a few known categories, and wrong answers are visible. Is this a claim inquiry, a submission error, a complaint? A person can spot-check ten at a glance.
- **Scoring fails:** a number implies a measurement. A risk score of "7 versus 8," a quality rating out of 10, a confidence percentage — the model has no calibrated scale. The precision is generated the way plausible sentences are.

**Ask for categories with reasons. If you need a score, define a rubric, classify into bands, and verify.**

## Speaker notes

Present this as a rule of thumb from experience, not a benchmark result: the pattern holds across models and vendors.

Callback to the strengths slide (slide 8): the four strengths are all pattern matching, and that mechanism has a predictable failure mode. This is the warning promised there, now that the demo has shown how much work the pattern matcher can do.

Why classification works: pattern matching with a small, checkable output space. A person can verify ten categories at a glance, errors are visible, and "with reasons" gives you the evidence trail the verification section demands.

Why scoring fails: an LLM has no calibrated internal scale. It generates a plausible number the way it generates plausible sentences — the precision is confabulated. Two runs can give different scores; the difference between 7 and 8 carries no meaning. Percent "confidence" is produced text, not a measured probability.

The practical workaround when leadership wants a number: define the rubric yourself, have the model classify into rubric bands (low/medium/high), aggregate many classified items into a real measurement, and spot-check the classifications. The number becomes trustworthy because it comes from counting verified categories, not from the model's feel for the question.

Tie forward: trusting an LLM score you have never verified is exactly the unexamined convenience the security section warns about. And keep the deeper point alive — models cannot tell content from instructions; that seed gets paid off in the Security section.

Transition: "Here is what the workaround looks like in practice."

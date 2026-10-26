---
slide: 52
section: "Security"
duration_minutes: 3
---

# Confident inventions

Models do not look things up — they generate plausible text. Sometimes the plausible text is a source that does not exist:

- *Mata v. Avianca* (2023): a lawyer filed a brief citing six court decisions invented by ChatGPT — complete case names, quotes, and internal citations. Six cases, six fabrications. $5,000 in sanctions.
- Invented statutes, clauses, form numbers, and market rates appear in fluent, confident prose every day.

The failure mode is not nonsense. It is **plausible, well-formatted detail with nothing behind it.**

**A confident answer and a sourced answer look identical.**

## Speaker notes

Explain the mechanism with the two-hard-limits slide: the model cannot look up whether a case exists — it generates text shaped like a citation, and the shape is what it learned. When the pattern completes to a real case, you get a real case; when it completes to a plausible composite, you get a fabrication. Both arrive in the same confident prose.

Why this lands hard in surety work: Legal and Claims cite regulations, statutes, carrier forms, and precedent. An invented regulation or bond form number reads exactly as authoritative as a real one — the formatting carries the authority, not the truth.

The Mata case is the canonical warning: the fabricated opinions even had invented quotes and docket numbers, and opposing counsel could not find them — because they did not exist. The court sanctioned the attorneys, not the tool.

Caveat to keep fair: tools with built-in search and retrieval reduce this — grounded answers cite real documents. But grounding changes the failure mode, not the rule: you still check that the cited source says what it is claimed to say. That check is the whole defense — open the source, confirm the quote, every time.

Transition: "Next: the courtroom evidence of what human data is worth."

## Sources

- [Mata v. Avianca, Inc.](https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.).
- [NYT: the airline lawsuit and the invented cases](https://www.nytimes.com/2023/05/27/nyregion/avianca-airline-lawsuit-chatgpt.html).

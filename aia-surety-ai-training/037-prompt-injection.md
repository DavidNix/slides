---
slide: 37
section: "Security"
duration_minutes: 2
---

# Prompt injection: any content can be an instruction

The seed from "What the model actually does" pays off here: **the model reads everything as potential instruction.**

- **Direct injection:** the attacker talks to the agent — "ignore your rules and…"
- **Indirect injection:** the attacker hides instructions in content the agent processes — an email, a résumé, a web page, a spreadsheet cell, an image
- Hostile content needs no exploit, no malware, no break-in — **just persuasion**

Every incident earlier in this section was this one mechanism.

**The agent's greatest strength — reading everything — is the attack surface.**

## Speaker notes

Define it plainly: prompt injection is attacker-written text that the agent follows as instructions, because the model cannot tell content from instruction. The model has no reliable boundary between "text to read" and "text to obey" — this is a structural property of how it works, not a bug that a patch removes.

Direct injection is the jailbreak conversation most people have seen. Indirect injection is the business threat: the attacker never talks to the agent at all — they put hostile text somewhere the agent will read in the course of normal work. Name the term: security researchers, including Simon Willison, call this indirect prompt injection; it is the standard name for the mechanism behind the incidents just shown.

The uncomfortable part for this room: there is no complete fix. It is an open research problem. Filters catch some of it, training reduces it, but the mechanism cannot be fully patched away today — so the defense is layers: deny capabilities, inspect actions, observe traffic, and keep humans on consequential decisions. That is exactly what the next slides build.

Transition: one concrete example, so the mechanism is something everyone can see — a document that gives instructions.

## Sources

- [Simon Willison: prompt injection — the terms and the problem](https://simonwillison.net/2025/Jan/31/prompt-injection-and-data-exfiltration/).

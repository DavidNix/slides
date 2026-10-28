---
slide: 53
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

Jailbreak in chatbot. E.g. Best way to rob a bank.

## Sources

- [Simon Willison: prompt injection — the terms and the problem](https://simonwillison.net/2025/Jan/31/prompt-injection-and-data-exfiltration/).

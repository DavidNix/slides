---
slide: 43
section: "Security"
duration_minutes: 3
---

# Security versus convenience: the big tradeoff

![A balance scale contrasts security with convenience.](../2026-09-ai-security/security-vs-convenience-scale-labeled.png)

- **As convenience increases, risk increases.** That is the whole game.
- **There is no silver bullet.** Controls are layered, and every layer is a tradeoff.
- The goal is not to eliminate risk — that is impossible. The goal is to **minimize it, deliberately**.
- AI security is the same as regular software and IT security: least privilege, validated inputs, audit trails, blast radius. AI just moves faster and speaks English.

## Speaker notes

Make this the central point of the section. A master key is convenient because it opens every room. Losing it has a larger consequence than losing a key to one cupboard. AI does not change that basic security principle — broader access plus fewer checkpoints means greater exposure.

Push back on silver-bullet thinking explicitly: there is no single setting, product, or policy that makes AI safe. Defense in depth is the same idea it has always been in IT — each control covers gaps the others leave, and each one costs convenience.

Reframe success: the goal is not zero risk, which has never been achievable in software, but risk that is understood, chosen, and proportional to the consequence. Repeat the key question: **"What did we make easier, and what can now go wrong?"**

Connect the "same as software security" point to what they already know: least privilege is "give the task only the access it needs," input validation is "treat documents and web pages as untrusted," audit trails are "make review meaningful." The rest of this section is those familiar controls applied to AI.

The tradeoff is strongest when convenience comes from wider permissions, persistent access, unattended execution, or reduced review. It is not a mathematical claim that every usability improvement weakens security: a well-designed approved workflow can improve both.

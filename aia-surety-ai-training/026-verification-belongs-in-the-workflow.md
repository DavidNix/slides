---
slide: 26
section: "Verification"
duration_minutes: 2
---

# Verification belongs in the workflow

**Generate → verify → approve when needed → act → confirm the outcome**

- Match the check to the consequence of error.
- Define what causes rejection or escalation.
- Measure review and correction time.
- Recheck performance when the system changes.

**Time saved = manual effort avoided − review and rework.**

## Speaker notes

A brainstorming idea needs different scrutiny from a financial amount, external message, or consequential decision. Name the reviewer and source of truth before deploying the workflow.

Test representative examples, missing information, conflicting sources, and failure cases before expanding use. Track useful accepted results and errors, not just how many responses the model produces. A model or prompt change can alter behavior and should trigger appropriate re-evaluation.

After a tool acts, verify the actual result. An assistant saying “sent” is not evidence of delivery; inspect the tool's status and the authoritative system where necessary.

This is part of the convenience tradeoff. Removing review saves visible effort while transferring more reliance to the system. Choose that transfer deliberately, using evidence from the real task.

---
slide: 43
section: "Security"
duration_minutes: 2
---

# Least privilege in the harness

![The model requests tools; the harness grants read file and save draft, but blocks send email.](least-privilege-harness.png)

**The harness holds the permissions — the model cannot grant itself more.**

## Speaker notes

Walk the picture left to right: the model proposes actions — read the file, save the draft, send the email — but every request passes through the harness first. Two requests match the task's permissions and go through. The send request stops at the harness, no matter how the model words it.

This is the picture behind the table on the previous slide: the hostile document can instruct the model all it likes, but the harness only grants what the task needs, so the unauthorized action has nowhere to go. The model is the judgment; the harness is the gate.

Transition: "This gate is not hypothetical — it is exactly how the connectors you can switch on in ChatGPT and other tools work. Next: connectors and MCP."

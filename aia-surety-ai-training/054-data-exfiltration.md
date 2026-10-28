---
slide: 54
section: "Security"
duration_minutes: 3
---

# Data exfiltration: demonstrated, not hypothetical

![Claude Cowork exfiltrating user files, demonstrated by PromptArmor.](../2026-09-ai-security/cowork-exfiltrate.jpg)

Researchers at PromptArmor showed Claude Cowork reading a user's local files and sending their contents to an external site — triggered by attacker-controlled content the assistant was asked to process.

**The lethal trifecta, exploited in a shipped product.**

<video src="cowork-exfiltration.mp4" controls width="100%" aria-label="Claude Cowork is connected to confidential files; a fake skill hides its orders in near-invisible white text; a routine request makes Claude follow the hidden text and send the files to the attacker's account, with no approval step."></video>

## Speaker notes

This is the trifecta pair made concrete: private data (local files), untrusted content (an attacker-crafted page or document), and external communication (a web request), all present in one consumer product.

Walk the sequence: the user asks the assistant for help, the assistant encounters attacker-planted content, and that content directs it to gather files and send them out. No malware was installed and no password stolen — the agent's own legitimate capabilities did the work.

Emphasize that this was found and demonstrated by researchers in a real product with safeguards, not in a laboratory straw man. Products improve, but the pattern — untrusted content steering a privileged assistant — keeps reappearing.

For this room: an agent with access to claim files, contracts, or mailboxes is exactly the kind of target this pattern applies to.

Transition: since data can walk out through the agent's own tools, the mitigation is to control and observe every path a request can take.

## Sources

- [PromptArmor: Claude Cowork exfiltrates files](https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files).

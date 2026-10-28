---
slide: 55
section: "Security"
duration_minutes: 3
---

# Data exfiltration: demonstrated, not hypothetical

![Claude Cowork exfiltrating user files, demonstrated by PromptArmor.](../2026-09-ai-security/cowork-exfiltrate.jpg)

Researchers at PromptArmor showed Claude Cowork reading a user's local files and sending their contents to an external site, triggered by attacker-controlled content the assistant was asked to process.

**The lethal trifecta, exploited in a shipped product.**

<video src="cowork-exfiltration.mp4" controls width="100%" aria-label="Claude Cowork is connected to confidential files; a fake skill hides its orders in near-invisible white text; a routine request makes Claude follow the hidden text and send the files to the attacker's account, with no approval step."></video>

## Speaker notes

The trifecta in one shipped product: local files, attacker content, and a web request.

The user asks for help. The assistant reads planted content. That content tells it to collect files and send them out. No malware, no stolen password. The agent's own tools did the work.

This was a real product with safeguards. Products improve, but the pattern keeps coming back.

An agent with access to claim files, contracts, or mailboxes is this kind of target.

Transition: control and watch every path a request can take.

## Sources

- [PromptArmor: Claude Cowork exfiltrates files](https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files).

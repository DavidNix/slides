---
slide: 86
section: "Security"
duration_minutes: 2
---

# Security summary: nothing new

The software is new. The defenses are standard security practice.

| Agent mitigation | Practice you already know |
|---|---|
| Least privilege, read-only connectors | Need-to-know access |
| Its own identity for always-on agents | Service accounts |
| Vet a connector before you connect it | Vendor review, approved software list |
| Limit the blast radius | Network segmentation |
| AI gateway | Email gateway, web proxy |
| Verify outcomes, not claims | Audit, a second person checks |
| ZDR and local AI | Vendor contracts, data kept on site |

**You are on the hook.** The agent uses your access, so what it does, you did.

Before you connect a tool or give an agent access, always ask:

**What's the worst that could happen?**

## Speaker notes

This slide closes the Security section. Reassure the room. They do not need a new kind of security team. IT already uses every practice in the right column. The work is to apply those practices to agents, which are new software with access to the same data.

Walk the table quickly. Do not explain each row again. Point at two or three rows that fit the room best. For example, Finance already uses a second person to check payments. Verifying an agent's work is the same habit.

Then make it personal. When an agent runs with your sign-in, the logs show your name. If it sends the wrong file or deletes a record, the company sees you doing it. "The AI did it" is not a defense. That is why always-on agents get their own identity, and why you decide what to connect.

Then land the question. Call back to the opening slide of the section, "What could go wrong?" That question opened the section. This one closes it, and it is the habit to take back to the desk. If the honest answer is "it emails a customer's file to a stranger" or "it moves money", reduce the access or add a check before you connect it. If the answer is "it writes a bad draft that I delete", go ahead.

Transition: "That is the risk side. Now my recommendations: the specific tools I suggest, now that you know what to watch for."

## Sources

- None. Section summary slide.

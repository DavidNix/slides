---
slide: 66
section: "Security"
duration_minutes: 2
---

# Human approval: a defense, and a weak one

Requiring a person to approve each agent action *sounds* like the complete fix. In practice:

- **Approval fatigue:** the fortieth dialog gets "Allow" without reading — the checkpoint becomes a habit.
- **The dialog does not show what matters:** in the Claude-for-Excel case, the approval looked harmless — the stolen data hid inside an image formula. In the Notion AI case, data left *before* any warning was accepted.
- **Attackers design for it:** urgency and volume make skimming the norm.

**Human approval is one layer — never the whole defense.**

## Speaker notes

Position this honestly: keeping a human in the loop is real and necessary for consequential actions — but it fails in predictable ways, and the failures are documented in the same incidents used earlier.

Approval fatigue: the first approval dialog gets read; the fortieth gets "Allow" on reflex. Any control that depends on sustained attention across hundreds of routine prompts will decay. Click-through is not specific to AI — it is how people treat every approval dialog they see often.

The display problem is worse: the approval dialog shows what the tool *requests*, not necessarily what the data *does*. CellShock hid exfiltrated content inside an image formula; the user approved something that looked innocent because the harmful part was not visible. Notion AI leaked before any warning appeared at all. An approval that cannot show what it approves is a rubber stamp.

Attackers count on both: craft urgency, generate volume, and rely on the fact that a busy person will skim.

So where does that leave the human? Still in the loop — but with the loop redesigned: approval tied to the exact action and recipient, human attention reserved for consequential decisions, and automated layers around the human to reduce how much ever reaches a person. That is the next slide.

## Sources

- [PromptArmor: CellShock — Claude for Excel data exfiltration](https://www.promptarmor.com/resources/cellshock-claude-ai-is-excel-lent-at-stealing-data).
- [PromptArmor: Notion AI unpatched data exfiltration](https://www.promptarmor.com/resources/notion-ai-unpatched-data-exfiltration).

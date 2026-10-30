---
slide: 66
section: "Security"
duration_minutes: 2
---

# Human approval: a defense, and a weak one

Requiring a person to approve each agent action *sounds* like the complete fix. In practice:

- **Approval fatigue:** the fortieth dialog gets "Allow" without reading. The checkpoint becomes a habit.
- **The dialog does not show what matters:** in the Claude-for-Excel case, the approval looked harmless. The stolen data hid inside an image formula. In the Notion AI case, data left *before* any warning was accepted.
- **Attackers design for it:** urgency and volume make skimming the norm.

**Human approval is one layer, never the whole defense.**

*Next: a second set of eyes that never gets tired.*

## Speaker notes

Human approval is necessary for consequential actions. It also fails in documented ways.

- Fatigue: the first dialog gets read, the fortieth gets "Allow." This is true of every frequent dialog, not only AI.
- Display: the dialog shows what the tool requests, not what the data does. An approval that cannot show what it approves is a rubber stamp.
- Attackers use urgency and volume because busy people skim.

Keep the human, but redesign the loop. Tie approval to the exact action and recipient. Save human attention for decisions that matter. Let automated layers filter the rest. That is the next slide.

## Sources

- [PromptArmor: CellShock, Claude for Excel data exfiltration](https://www.promptarmor.com/resources/cellshock-claude-ai-is-excel-lent-at-stealing-data).
- [PromptArmor: Notion AI unpatched data exfiltration](https://www.promptarmor.com/resources/notion-ai-unpatched-data-exfiltration).

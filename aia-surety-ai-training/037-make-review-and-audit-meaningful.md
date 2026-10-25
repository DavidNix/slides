---
slide: 37
section: "Security"
duration_minutes: 2
---

# Make review and audit meaningful

- Review the exact action, recipient, and data.
- Reserve attention for consequential decisions.
- Record actions and policy decisions.
- Use automated checks as additional layers.

**Approval fatigue turns a checkpoint into a habit.**

## Speaker notes

Human review can catch errors when the reviewer has enough context, time, and authority. A vague “Approve?” button or hundreds of routine prompts can train people to click through.

Tie approval to the specific proposed action. If the recipient, attachment, or operation changes, the original approval should not silently authorize the new action.

Logs help reconstruct which tools ran, what policy allowed them, and whether the task succeeded. Protect logs and minimize sensitive content; observability can create another copy of business data.

Classifiers, content filters, and prompt-injection detectors can help. They can also miss attacks or block legitimate work. Combine them with permissions and isolation rather than treating any one layer as a guarantee.

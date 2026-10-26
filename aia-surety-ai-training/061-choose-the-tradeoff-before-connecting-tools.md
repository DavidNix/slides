---
slide: 61
section: "Security"
duration_minutes: 2
---

# Choose the tradeoff before connecting tools

For each new capability, ask:

1. How much work does it save?
2. What information or action does it expose?
3. What happens if it is wrong or manipulated?
4. Which boundary remains enforced?

**Convenience is the benefit. Accepted risk is part of the price.**

## Speaker notes

This slide closes the section on purpose: after the threats and the layered defenses, this is the decision procedure staff carry out of the room. Every defense just presented — least privilege, approval, classification, gateways — exists to make the answers to these four questions honest.

Use sending a missing-document email as the example. The benefit is fewer clicks. The exposure includes the recipient address, message body, and any attachment. A boundary could limit recipients to the authorized agent and require approval of the exact message.

Contrast a reversible internal draft with an externally transmitted financial document. Once a recipient has the information, deleting the sent message does not recall their knowledge of it.

Assign ownership to the business decision. The person enabling the integration should not accidentally decide the organization's risk tolerance by clicking through broad permissions.

This same four-question pattern will appear in the pilot exercise. Transition: with the decision framework in hand, trace where data actually travels — the next slide walks the full path.

---
slide: 38
section: "Security"
duration_minutes: 2
---

# What can go wrong?

- **Wrong output:** missing facts, invented requirements, incorrect amounts.
- **Wrong access:** more information than the task needs.
- **Wrong action:** a message, update, or deletion that should not happen.
- **Wrong influence:** hostile content redirects the task.

**Impact depends on what the system can reach and do.**

## Speaker notes

This slide closes the problem run: theft, injection, and exfiltration were the attacker-driven versions — this is the full map of failure modes before the defenses begin.

Separate accidental mistakes from deliberate attacks. Both can produce similar business harm, and both become more consequential when the system can act.

Use examples relevant to AIA's work without implying knowledge of its internal processes: a submission summary omits a condition, a draft promises an unsupported deadline, a document goes to the wrong recipient, or an agent changes a record it should only read.

Privacy exposure to a service provider and attacker-driven data theft are different risks. They deserve separate questions and controls; neither can be dismissed merely because the other exists.

Preview the mapping — each failure mode gets its own defense, in order: wrong access → least privilege; wrong influence → review and classification; wrong action → permissions and the gateway. Wrong output was the verification section's subject and returns at the end with the agent's own claims. Transition: "Now the defenses, in the same order as the problems."

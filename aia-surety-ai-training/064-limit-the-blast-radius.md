---
slide: 64
section: "Security"
duration_minutes: 2
---

# Limit the blast radius

- Isolate files and execution environments.
- Restrict outbound network destinations.
- Limit run time, spending, and repeated actions.
- Make changes recoverable where possible.

**Design for a bad instruction reaching the system.**

## Speaker notes

Models are training to see they're in a sandbox and will stop.

A sandbox limits what running software can reach or change. It is one layer, and only as good as its setup.

Data theft needs a path out. A sandbox with open network access can still send out anything it reads.

Backups undo some mistakes. They cannot undo data already sent out.

Before you grant broad access, narrow the task or give it one scoped capability.

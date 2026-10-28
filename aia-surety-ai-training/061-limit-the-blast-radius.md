---
slide: 61
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

Explain a sandbox as an environment that restricts what executing software can access or change. It is one layer of protection and must be configured appropriately.

Outbound network restrictions matter because data theft requires a path out. A sandbox with unrestricted network access may still send anything it can read to an external destination.

Backups and reversible changes help recover from some mistakes. They cannot reverse information already disclosed externally.

This is another familiar tradeoff: removing restrictions may make a task easier, while increasing the damage possible from a failure. Adjust the task or provide a narrowly scoped capability before granting broad access.

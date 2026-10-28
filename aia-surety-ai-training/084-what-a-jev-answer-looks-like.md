---
slide: 84
section: "Where the market is going"
duration_minutes: 2
---

# What a Jev answer looks like

The message: *"I was charged twice for my subscription this month. Please refund the extra charge."*

| You ask | Jev answers | How sure |
|---|---|---|
| Is this about billing? | Yes | 98% |
| What is the tone? Angry, calm, or excited | Calm | 80% calm, 15% angry, 5% excited |
| How urgent? Can wait, this week, or today | Needs attention today | 80% today |

**Each question gets a pick and a percentage, and software can act on that directly.**

## Speaker notes

This example comes from TypeSafe's own API documentation. Walk the table row by row. Jev writes no reply and no summary. It returns a pick and a percentage for each question, and that is all.

Point out who writes the choices. A person defines the questions and the options, and Jev only picks among them. Software can then act on the answers directly. For example, it can send the message to the billing queue and flag it for today.

Connect the percentages to verification. A low percentage is a signal to send the item to a person instead of acting automatically. The real output is machine-readable data. The table shows the same numbers in plain form.

## Sources

- [TypeSafe API reference](https://docs.typesafe.ai/api), the source of the example message and answers.
- [TypeSafe System One concepts](https://docs.typesafe.ai/concepts/system-one).

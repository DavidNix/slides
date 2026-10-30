---
slide: 32
section: "Practical"
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

*What if the agent already knew your office's procedures?*

## Speaker notes

This example is from TypeSafe's API docs. Jev writes no reply. It returns a pick and a percentage per question.

A person writes the questions and options. Software acts on the answers, for example routing to billing and flagging for today.

A low percentage means send it to a person.

Same idea as the rubric: you write the levels, the model picks one.

Transition: "A rubric is a procedure you define once and reuse. Skills package those."

## Sources

- [TypeSafe API reference](https://docs.typesafe.ai/api), the source of the example message and answers.
- [TypeSafe System One concepts](https://docs.typesafe.ai/concepts/system-one).

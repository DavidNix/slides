---
slide: 7
section: "Agents"
duration_minutes: 3
---

# From answers to actions

**An agent uses a model to choose actions, observe results, and continue toward a goal.**

- Answer: “Here is a suggested email.”
- Action: find the record and prepare a draft.
- Greater authority: send the email and update the record.

**Example — desktop support.** Today: an incoming ticket gets copied into ChatGPT, the suggestion gets reviewed, and a reply gets pasted back. An agent with the right tools could read the ticket, reset the password itself, and message the user — or troubleshoot the problem and send them the steps to fix it on their own.

## Speaker notes

Define an agent from scratch. It is a software system, not a person living inside a computer. Its behavior comes from a model working with surrounding software, instructions, tools, and state.

Use an ordinary office comparison: writing suggested instructions for a colleague is different from having access to the systems needed to carry them out.

The desktop-support example is one the room already does, one copy-paste at a time. Walk the ladder with it. Level one, the chatbot drafts a suggested reply and a person still does everything else. Level two, an agent reads the ticket from the queue itself — no copy-paste. Level three, it acts: reset the password in the directory, confirm to the user it is done. Between those, an agent can also troubleshoot — check whether the account is locked, whether the ticket is really a password problem — and message the user the exact steps to fix it themselves when it cannot or should not act directly. Each rung removes more manual steps and grants more access.

Explain that automation existed long before modern AI. A fixed workflow follows predefined steps; an agent can use a model to choose the next step based on the current situation. Both can be useful, and one application can combine them.

Call out the tradeoff immediately: fetching information and acting automatically can save more work, while broader access increases what a mistake or attack can affect. Resetting a password is a write to an identity system — a wrong reset is worse than a wrong draft.

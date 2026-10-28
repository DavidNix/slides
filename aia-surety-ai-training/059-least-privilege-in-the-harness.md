---
slide: 59
section: "Security"
duration_minutes: 2
---

# Least privilege in the harness and MCP

Two gates hold the permissions. The model cannot grant itself more at either one.

- **The harness** decides which tool requests run.
- **The MCP server** decides which tools exist, and what its sign-in can reach.

**A tool that is not connected cannot be misused.**

## Speaker notes

The next slide shows the picture — walk it left to right: the model proposes actions — read the file, save the draft, send the email — but every request passes through the harness first. Two requests match the task's permissions and go through. The send request stops at the harness, no matter how the model words it.

This is the picture behind the table on the previous slide: the hostile document can instruct the model all it likes, but the harness only grants what the task needs, so the unauthorized action has nowhere to go. The model is the judgment; the harness is the gate.

Then add the second gate. The harness can only allow tools that exist. The MCP server decides which tools exist and what its sign-in token can reach. If the email server offers only "search mail" and "read message", there is no send tool to block. A read-only connector with access to one folder is least privilege before the harness checks anything. The strongest setup uses both gates: connect only the tools the task needs, and let the harness check every request.

Transition: "This gate is not hypothetical — it is exactly how the connectors you can switch on in ChatGPT and other tools work. Next: connectors and MCP."

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

The next slide shows the picture. The model proposes: read the file, save the draft, send the email. Every request passes through the harness. The send request stops there, however the model words it.

The second gate: the harness can only allow tools that exist. If the mail server offers only "search mail" and "read message", there is no send tool to block. Use both gates.

Transition: "This is how the connectors in ChatGPT and other tools work."

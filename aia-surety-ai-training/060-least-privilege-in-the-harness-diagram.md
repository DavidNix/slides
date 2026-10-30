---
slide: 60
section: "Security"
duration_minutes: 0
---

# Least privilege in the harness and MCP (diagram)

![The model requests tools; the harness grants read file and save draft, but blocks send email.](least-privilege-harness.png)

**Two requests pass; the send request stops at the harness.**

## Speaker notes

Two blue paths get through: read file, save draft. The red path to send email is blocked.

Say the MCP gate out loud: with no send tool on the connector, the red path would not exist.

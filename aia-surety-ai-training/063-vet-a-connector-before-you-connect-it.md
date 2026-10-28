---
slide: 63
section: "Security"
duration_minutes: 2
---

# Vet a connector before you connect it

Before you switch on a connector, ask:

1. **Who published it?** Use the vendor's own server. Do not use a copy with a similar name.
2. **Can it only read, or can it also act?** Choose read-only when the task allows it.
3. **What can its sign-in reach?** One mailbox or folder is better than the whole account.
4. **Did it change since you approved it?** Pin the version, and review the changes before you update.
5. **Is it on the company's approved list?** IT can allow or block each server at the gateway.
6. **Can you write your own?** Ask the agent to build a small server with only the tools you need.

**The fewer tools a connector offers, the less a lie can do.**

## Speaker notes

Questions 1 and 4 stop the fake server and the rug pull. Questions 2 and 3 limit poisoned content. Question 5 makes it company policy and previews the gateway.

Spend the most time on question 6. Ask the agent: "Write an MCP server with one tool that looks up a claim's status by claim number. Read-only." It is a short file you can read, like a skill.

Limits:

- It runs with the access you give it. Use the narrowest sign-in.
- Its content can still carry instructions.
- Someone must maintain it.

For anything bigger, use the vendor's server with IT approval.

Transition: "Assume a bad instruction gets through anyway. That is the blast radius."

## Sources

- [Model Context Protocol: security best practices](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices).
- [Invariant Labs: MCP security notification, tool poisoning attacks](https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks).
- [Bifrost: Govern MCP servers](https://docs.getbifrost.ai/edge/mcp-governance).

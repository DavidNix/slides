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

Map each question to the threat on the previous slide. Questions 1 and 4 stop the fake server and the rug pull. Questions 2 and 3 limit what poisoned content can do with the connection. Question 5 makes the check a company rule, and it previews the AI gateway slides that come next.

Spend the most time on the last question. It is the strongest option, and the room now has the skill to do it. The skills slides showed that you can ask the agent to write a skill. You can also ask it to write a small MCP server. Example: "Write an MCP server with one tool that looks up a claim's status by claim number. Read-only. No other tools." The server is a short file that you can read, the same as a skill. It offers exactly one tool, and nobody else can change it.

Be honest about the limits of writing your own:

- It still runs with the access you give it, so give it the narrowest sign-in.
- The content it returns can still carry instructions, as the GitHub case showed.
- Someone must keep it up to date. For a small read-only tool, that is little work.

For anything bigger than a small tool, use the vendor's official server, and get IT to approve it.

Transition: "Even with the gate set correctly, assume a bad instruction eventually gets through. That is the blast radius."

## Sources

- [Model Context Protocol: security best practices](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices).
- [Invariant Labs: MCP security notification, tool poisoning attacks](https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks).
- [Bifrost: Govern MCP servers](https://docs.getbifrost.ai/edge/mcp-governance).

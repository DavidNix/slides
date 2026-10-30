---
slide: 65
section: "Security"
duration_minutes: 2
---

# Give always-on agents their own identity

Treat an always-on agent like a new hire, not like a copy of you:

- **Its own account.** A service account with its own login. It never uses your password or your session.
- **Its own email address,** such as `claims-assistant@yourcompany.com`. Everyone can see which messages came from the agent.
- **Only the access its job needs.** Share specific folders and mailboxes with it, the same way you would with a temp.
- **Its own record and its own off switch.** The logs show what the agent did. IT can turn off one account and lock no one else out.

**If someone fools the agent, the damage stops at its account, not yours.**

## Speaker notes

The default: most personal assistants use your login. The agent can read your whole mailbox, open every drive, and send email as you. If it is fooled, the attacker acts as you.

A separate account limits that. IT sets what it can open with existing tools. Microsoft 365 or Google Workspace enforce the limits, not the model.

The email address shows recipients that an agent sent the message. The sent folder and audit log show what it did.

On a bad day, IT disables one account and nobody else loses access.

Tradeoff: each account costs a license and IT setup. Microsoft Entra Agent ID gives each agent its own identity.

## Sources

- [Microsoft Entra Agent ID best practices](https://learn.microsoft.com/en-us/entra/agent-id/best-practices-agent-id).
- [Governing agent identities in Microsoft Entra](https://learn.microsoft.com/en-us/entra/id-governance/agent-id-governance-overview).

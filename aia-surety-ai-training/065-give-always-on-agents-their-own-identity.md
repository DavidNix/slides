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

Start with the default. Most personal assistants connect to your apps with your own login. Then the agent can do everything you can do. It can read your whole mailbox, open every shared drive, and send email as you. If a document or an email fools the agent, the attacker acts as you.

A separate identity changes that. The agent gets an account the way a new employee does. IT uses the tools it already has to decide what the account can open. Microsoft 365 and Google Workspace enforce the limits, not the model. This is least privilege from earlier in the section, applied to a person-shaped account.

The email address does two jobs. Recipients know that a message came from an agent and not from a colleague. When something goes wrong, the sent folder and the audit log show exactly what the agent did.

The off switch matters most on a bad day. IT disables one account, and no one else loses access to anything.

Name the tradeoff. Each agent account costs a license and some setup by IT. In return, a fooled agent can reach only what you chose to share with it. Microsoft now supports this directly. Its Entra Agent ID gives each agent its own directory identity, and an agent account can have its own mailbox when the job needs one.

## Sources

- [Microsoft Entra Agent ID best practices](https://learn.microsoft.com/en-us/entra/agent-id/best-practices-agent-id).
- [Governing agent identities in Microsoft Entra](https://learn.microsoft.com/en-us/entra/id-governance/agent-id-governance-overview).

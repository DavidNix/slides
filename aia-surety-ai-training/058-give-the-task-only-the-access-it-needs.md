---
slide: 58
section: "Security"
duration_minutes: 3
---

# Give the task only the access it needs

- One relevant record before a whole database.
- Read access before write access.
- Drafting before sending.
- Scoped credentials before a master key.

*Illustrative example: a document asks the agent to send internal records.*

| Check | Outcome |
| --- | --- |
| User's task | Review the records and prepare drafts |
| Document's instruction | Send the records to an outside address |
| Application permission | Read files and save drafts; sending is unavailable |
| Result if sending is requested | The application cannot execute it |

**A model request is not permission.**

## Speaker notes

Least privilege: the smallest set of permissions the task needs. This is an old security rule.

The shortcut is to give the agent the operator's full access. That account may reach many unrelated systems. Tools should check the caller, the records, the operation, and the destination. A well-formed request can still name the wrong recipient.

Walk the table. The model may follow the document or not. If the application cannot send, it does not matter. A "draft only" prompt still needs enforcement outside the model.

Transition: "Here is what that looks like inside the harness."

---
slide: 41
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

Define least privilege as the smallest set of permissions needed to perform the task. This is an established security principle, not a new AI invention. The table is a designed permission boundary — an illustrative mitigation for the hostile document from the injection slides, not a recorded attack or a result from the freight demo.

The convenient shortcut is to give an agent the same broad access as its operator. An employee's account may reach many systems unrelated to this particular job. Tool services should check the caller, authorized records, permitted operations, and allowed destinations. Validate arguments even when they match a schema — a well-formed request can still request the wrong record or recipient.

Walk the table slowly: the model might ignore, report, or follow the document's instruction — but a sending restriction enforced by the application does not depend on which response the model chooses. Even a prompt saying "draft only" still needs that external enforcement. Removing sending authority closes this sending path; other tools and network access need their own controls.

If time allows, ask the room which of the two lookup tools needs a sending credential. Neither does.

Transition: "Here is what that looks like inside the harness."


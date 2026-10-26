---
slide: 41
section: "Security"
duration_minutes: 2
---

# Block the unauthorized action

*Illustrative example: a document asks the agent to send internal records.*

| Check | Outcome |
| --- | --- |
| User's task | Review the records and prepare drafts |
| Document's instruction | Send the records to an outside address |
| Application permission | Read files and save drafts; sending is unavailable |
| Result if sending is requested | The application cannot execute it |

**A model request is not permission.**

## Speaker notes

Explain the table as a designed permission boundary. It illustrates the mitigation for the hostile document on the previous slide; it is not a recorded attack or a result from the freight demo.

The model might ignore, report, or follow the document's instruction. A sending restriction enforced by the application does not depend on which response the model chooses. A prompt saying “draft only” still needs that external enforcement.

Removing sending authority closes this sending path. Other tools and network access need their own controls. The next slide explains how reviewers can inspect consequential actions when those actions are permitted.

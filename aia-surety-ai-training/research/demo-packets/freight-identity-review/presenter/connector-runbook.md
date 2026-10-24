# Presenter runbook: premade skills and an email connector

**Recommended combination:** Anthropic's premade Excel and Word skills, plus one email connector. Microsoft 365 is a natural candidate because the staff notes describe extensive Microsoft/Copilot use; this is a recommendation, not confirmation of AIA's available integrations. Use the [main guide](../../../../demo-freight-fraud-review.md) for the case and timing.

The distinction to explain is concrete: **the Excel skill supplies reusable workbook instructions; the connector exposes mailbox tools; the agent decides which evidence to read and which question to ask next.** MCP, or Model Context Protocol, is a standard for exposing tools and data to AI applications. A premade connector avoids building a custom server for this demonstration. [Anthropic's MCP explanation](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp).

**What changes from the file-only demo.** The agent still creates the workbook and Word case note in the local output folder. It can now create the initial requests as actual unsent Outlook drafts, retrieve the staged replies through the connector, and create the next draft in Outlook. Keep Markdown copies locally so the workbook can link to a reviewable draft even if mailbox access later fails.

**Verified product capabilities, checked October 24, 2026.** Microsoft's connector documentation lists email search/read operations and draft-creation operations, including `outlook_create_draft` and `outlook_create_reply_draft`. It also describes SharePoint/OneDrive file access. These are product capabilities, not evidence that the presenter's account already has them enabled. [Microsoft 365 connector tool reference](https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide).

The connector uses the signed-in user's permissions. Read access and write access are distinct; enabling write tools requires the appropriate Microsoft consent and Claude configuration. Complete that setup before the presentation. A shared mailbox may provide read access without draft creation in that mailbox, so use a dedicated demo user's mailbox for the draft-writing version. [Microsoft 365 setup](https://support.claude.com/en/articles/12542951-set-up-the-microsoft-365-connector), [shared-mailbox limitations](https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide).

**Prepare the account and data.**

1. Use a dedicated demo account with synthetic correspondence. Select the connector and available read/draft tools in Cowork before the session. No messages need to be sent by the agent.
2. Keep the seven initial files in the local input folder. Confirm file creation and the built-in Excel and Word skills work in this account. Their outputs are `claim-review.xlsx` and `case-note.docx`.
3. Add `[AIA-DEMO] DEMO-FREIGHT-1042` and a request ID to every draft subject. Initially, there should be no old rehearsal drafts for this case that could be mistaken for new work.
4. Prepare the contents of the three supplied reply files as clearly labeled synthetic mailbox messages. Preserve their R1/R2/R3 source IDs and the fictional examiner notes. The messages' actual test-account sender addresses do not authenticate the fictional parties.
5. Keep those replies outside the searchable demo account until the reveal. The presenter introduces them then, using the mail application's available workflow. Do not preload the reveal into a mailbox the agent can search during its first review.
6. The broker reply should refer to `aster-remittance-1042.pdf`, with no such attachment supplied. In rehearsal, inspect the connector response: confirm whether it exposes an attachment list or other evidence of absence. If it does not, the agent must say the document is unavailable for review, not that it has proved the sender failed to attach it.

This runbook describes preparation; no account has been connected and no messages or drafts have been created by this research task.

**Add this to the first prompt in the main guide.** Replace the file-only restriction with this explicit scope; retain the case-review limits and the instruction not to send.

```text
Use the connector variant of F0.6. Use the local fictional packet for the review.
Use the connected Microsoft 365 demo account only to create unsent follow-up
drafts for DEMO-FREIGHT-1042. Put [AIA-DEMO] DEMO-FREIGHT-1042 and the request ID
in each subject. Use the fictional established recipients in F2; do not send.

Keep the local Markdown draft copies and record each returned mailbox draft ID
in the Follow-ups sheet. If the connector lacks draft-creation access, save
the local drafts and report that limitation. Do not substitute a sending tool.

Use the premade Excel and Word skills for the local workbook and case note.
```

All `.example` recipients are placeholders in a synthetic draft. They are not addresses to contact. This demonstration does not need real counterparty email addresses or message delivery.

**At the reveal, use this second prompt instead of the file-only update prompt.**

```text
The presenter has now introduced the three staged replies in the connected
Microsoft 365 demo mailbox. Retrieve the messages labeled [AIA-DEMO]
DEMO-FREIGHT-1042 with the R1, R2, and R3 evidence. Read only this exercise's
correspondence. Do not use unrelated mailbox content.

Update output/v2/claim-review.xlsx and output/v2/case-note.docx using the
premade Excel and Word skills; preserve v1. Cite the R item IDs and record
the source message IDs or links returned by the connector.

Match replies to questions. Check the attachment information actually exposed
by the connector and the available local files. Distinguish missing evidence
from evidence you cannot access. Keep reported payment separate from verified
payment. Create the necessary next follow-up as an unsent Outlook draft and
save a local Markdown copy. Record its draft ID. Do not send anything.

Finish with what changed, what remains open, and the output locations.
```

**What to show the audience.** Open one newly created draft in Outlook, show Cowork retrieving a staged reply, then open the updated workbook and the new payment-evidence request. Those three moments make the connector's contribution visible. Use the existing generation windows; do the account setup beforehand and spend no more than 20–30 seconds explaining the skills/connector distinction.

**Avoid an attachment-access trap.** The Microsoft connector currently rejects attachments in its write tools, so these follow-up drafts should contain text only. We are requesting a record, not attaching the workbook to an email. The original exercise's missing-file finding is reliable from the complete local packet; mailbox evidence needs the additional metadata check above. [Microsoft 365 tool limitations](https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide).

**Gmail alternative.** If a Google demo account is easier, use the premade Gmail connector for the same read/draft workflow. Anthropic documents access to attachment metadata rather than attachment contents through Gmail. A listed attachment that cannot be opened is different from an empty attachment list; use the metadata and, when needed, a separately supplied local copy. Google Drive can supply documents, but adding a second connector is optional. [Google Workspace connector capabilities](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors).

**Fallbacks.** If only mailbox reading works, retrieve the replies through the connector and keep all drafts local. If the connector is unavailable, use the original three reply files. If generation is slow, show outputs from a clearly labeled prior rehearsal. None of these fallbacks demonstrates a live mailbox write, so describe the version actually shown.

A custom claims-system MCP server could be a later extension, but no AIA API access is established here. The premade email connector is sufficient to demonstrate useful tool access in this short scenario.

# Presenter runbook: premade skills and an email connector

**Recommended combination:** Anthropic's premade Excel and Word skills, plus one email connector. Microsoft 365 is a natural candidate, because the staff notes describe a lot of Microsoft and Copilot use. This is a recommendation. It does not confirm which integrations AIA has. Use the [main guide](../../../../demo-freight-fraud-review.md) for the case and timing.

The distinction to explain is concrete. **The Excel skill supplies reusable workbook instructions. The connector exposes mailbox tools. The agent decides which evidence to read and which question to ask next.** MCP (Model Context Protocol) is a standard for exposing tools and data to AI applications. A premade connector avoids building a custom server for this demonstration. [Anthropic's MCP explanation](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp).

**What changes from the file-only demo.** The three replies come from the mailbox instead of `input/`. The agent still creates the workbook and Word case note in the local `output/` folder. It creates the follow-up as an unsent Outlook draft. It also keeps a Markdown copy locally, so the workbook can link to a reviewable draft even if mailbox access fails.

**Verified product capabilities, checked October 24, 2026.** Microsoft's connector documentation lists email search and read operations and draft-creation operations, including `outlook_create_draft` and `outlook_create_reply_draft`. It also describes SharePoint and OneDrive file access. These are product capabilities. They are not evidence that the presenter's account already has them on. [Microsoft 365 connector tool reference](https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide).

The connector uses the signed-in user's permissions. Read access and write access are separate. Write tools need the correct Microsoft consent and Claude configuration. Complete that setup before the presentation. A shared mailbox may give read access but not draft creation, so use a dedicated demo user's mailbox. [Microsoft 365 setup](https://support.claude.com/en/articles/12542951-set-up-the-microsoft-365-connector), [shared-mailbox limitations](https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide).

## Prepare the account and data

1. Use a dedicated demo account with synthetic correspondence. Select the connector and its read and draft tools in Cowork before the session. The agent does not need to send any message.
2. Run `stage-cowork.sh reset`. Then delete `07-broker-reply.md`, `08-booked-carrier-reply.md`, and `09-receiver-reply.md` from `AIA-Freight-Live/input/`. The mailbox supplies them instead.
3. Put the contents of the three reply files into the demo mailbox as clearly labeled synthetic messages. Keep their R1, R2, and R3 source IDs and the fictional examiner notes. Put `[AIA-DEMO] DEMO-FREIGHT-1042` in each subject. The test-account sender addresses do not authenticate the fictional parties.
4. The broker message refers to `aster-remittance-1042.pdf`. Do not attach the file. In rehearsal, inspect the connector response. Check whether it exposes an attachment list or other evidence that the file is absent. If it does not, the agent must say that the document is unavailable for review. It must not say that it proved the sender failed to attach it.
5. Delete old rehearsal drafts for this case before each run, so that nobody mistakes them for new work.

This runbook describes preparation. No account has been connected and no messages or drafts have been created by this research task.

## Add this to the prompt

Add this block to the end of the prompt in the main guide. Keep the rest of the prompt as it is.

```text
Use the connector variant in the brief. Files 07-09 are not in input/.
Read the three replies from the connected Microsoft 365 demo mailbox:
the messages labeled [AIA-DEMO] DEMO-FREIGHT-1042. Read only those messages.

Create each follow-up as an unsent Outlook draft with [AIA-DEMO]
DEMO-FREIGHT-1042 and the request ID in the subject. Keep a local Markdown
copy in output/drafts/ and record the mailbox draft ID in the Follow-ups
sheet. Record the source message IDs the connector returns.

If the connector lacks draft-creation access, save local drafts only and
report that limitation. Do not substitute a sending tool.
```

All `.example` recipients are placeholders in a synthetic draft. They are not addresses to contact. The demonstration needs no real email addresses and no message delivery.

## What to show the audience

Show Cowork retrieving a reply from the mailbox. Then open the new draft in Outlook and the updated workbook. Those three moments make the connector's contribution visible. Do the account setup beforehand. Spend no more than 20 to 30 seconds on the difference between skills and connectors.

**Avoid an attachment-access trap.** The Microsoft connector currently rejects attachments in its write tools, so the follow-up draft must contain text only. The draft requests a record. It does not attach the workbook. In the file-only version, the missing-file finding is reliable because the agent sees the complete folder. With the mailbox, it also needs the metadata check in step 4. [Microsoft 365 tool limitations](https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide).

**Gmail alternative.** If a Google demo account is easier, use the premade Gmail connector for the same read and draft workflow. Anthropic documents access to attachment metadata, not attachment contents, through Gmail. A listed attachment that cannot be opened is different from an empty attachment list. Google Drive can supply documents, but a second connector is optional. [Google Workspace connector capabilities](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors).

**Fallbacks.** If only mailbox reading works, read the replies through the connector and keep the drafts local. If the connector is unavailable, put files 07–09 back in `input/` and use the file-only prompt. If the run is slow, show outputs from a clearly labeled rehearsal. None of these fallbacks demonstrates a live mailbox write, so describe the version that you actually show.

A custom claims-system MCP server could be a later extension, but AIA API access is not established. The premade email connector is enough to demonstrate useful tool access in this short scenario.

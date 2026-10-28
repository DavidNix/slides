# AIA Surety demo: review a freight claim and follow it through

**Planned eight-minute demo in Claude Cowork, with a five-minute fallback.** Start with a folder of fictional claim records. Cowork creates a spreadsheet, drafts three targeted follow-up requests, reads staged replies, updates the work, and prepares one further request for missing evidence.

**The story in ordinary language:** a trucker says it delivered furniture and is seeking $4,800. The broker's records name a different trucking company and a different price. Someone may have used another business's identity. The agent helps the claims examiner assemble the evidence and pursue the unanswered questions.

**Why this is a good agentic use case.** The interesting capability is completing and updating a sequence of work: **read files → compare evidence → create workbook → draft requests → process replies → revise workbook and next request**. Asking only for a fraud opinion would show much less. Here the audience sees actual files appear and a new reply change what the agent does next.

The Claims team explicitly expressed interest in scanning documents for fraud indicators. An industry bond provider also describes unpaid carriers filing claims after legitimate brokers' credentials were stolen. The scenario has a real basis, while the particular businesses, correspondence, amounts, and missing attachment below are invented. [Staff notes](ai_usage.md), [Avalon/TIA bond-program interview](https://www.avalonrisk.com/quest-news/tia-bond-program-offers-added-financial-security-around-fmcsa-requirements). The [research brief](research/freight-fraud-deep-dive.md) examines the cases, a second freight option, and alternatives from other departments.

**What the audience should remember:** “It didn't just summarize the claim. It prepared the next work, checked what came back, and kept the case record up to date.”

**Include two premade skills.** Use Anthropic's built-in **Excel (`xlsx`)** skill for the evidence workbook and **Word (`docx`)** skill for the examiner's case note. Claude applies its document skills when relevant and file creation is enabled. Confirm availability in the actual demo account before rehearsal. [Anthropic's skills guide](https://support.claude.com/en/articles/12512180-use-skills-in-claude).

| Premade skill | Visible contribution |
| --- | --- |
| Excel / `xlsx` | Creates and updates `claim-review.xlsx`, with readable evidence and follow-up tables |
| Word / `docx` | Creates and updates a short, formatted `case-note.docx` for the examiner |

The exercise brief supplies the claim-review rules. The document skills supply reusable instructions for producing the files; they do not supply specialized freight-surety judgment. A PDF skill becomes useful if the packet is later converted to PDFs, but the current text inputs do not need that extra step.

Spend about 20 seconds explaining the distinction while the task runs: **“Skills tell the agent how to do a kind of work. Connectors let it access a system. The agent uses those capabilities to pursue the task.”** Anthropic publishes an [Excel skill example](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) that can illustrate packaged instructions. It is an example, not proof of the exact version running in the demo account. Show actual skill activity if the interface exposes it; do not invent an execution trace.

**Placement in the training.** The deck shows this demo as a recorded video in two parts. Use this guide as the script for the recording.

- **Part 1 (`demo-freight-part-1.mp4`, about one minute):** the input folder, the empty output folder, the first prompt, and the agent starting to read files. It plays on the "Video: watch the agent work" slide in the Agents section.
- **Part 2 (`demo-freight-part-2.mp4`):** the workbook, drafts, and case note, then the staged replies and the reply/update cycle. It plays on the "Checking on the demo" slide after Verification, where the presenter pauses it so the room can check the work.

Keep the two parts together within 5–10 minutes of screen time. Cut the waiting time out of the recording. The continuous eight-minute schedule below shows the order of the recording.

**The minimum background to explain.** A broker arranges a shipment; a carrier operates the truck. A broker's surety bond can respond to covered payment obligations. Whether this particular claim qualifies remains a human decision. A real delivery does not, by itself, establish which business owes the bill. [49 CFR 387.307](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-387/subpart-C/section-387.307).

| Fictional business | Role in this case |
| --- | --- |
| Aster Freight | Broker named in the claim and on the demo bond |
| Cedar Motor | Carrier named in Aster's booking record |
| Mesa Hauling | Carrier seeking payment; appears on the submitted delivery record |
| Summit Office Warehouse | Receiver that can corroborate the physical delivery |
| Canyon Invoice Finance | Financing company named as collection payee; the supplied assignment note explains this difference |

**The prepared materials.** The [initial packet](research/demo-packets/freight-identity-review/initial/00-review-brief.md) contains these seven files. They are simple text exports so the first rehearsal does not depend on scanning or OCR.

| File | Contents |
| --- | --- |
| `00-review-brief.md` | Exercise instructions and requested work products |
| `01-claim-submission.md` | Mesa's $4,800 claim and reported unpaid balance |
| `02-broker-records.csv` | Aster's $4,200 Cedar booking and established contacts |
| `03-rate-and-agreement-records.md` | Mesa's submitted rate confirmation and agreement excerpt |
| `04-delivery-and-invoice.md` | Shipment, delivery, and invoice details |
| `05-dispatch-thread.txt` | Instructions and payment correspondence |
| `06-assignment-note.md` | The explanation for Canyon's appearance as payee |

The [presenter answer key](research/demo-packets/freight-identity-review/presenter/answer-key.md) contains expected findings and a fallback draft. Three staged replies sit in `research/demo-packets/freight-identity-review/presenter/replies/`. Keep that entire presenter folder outside the agent's initial access.

**Recommended connector enhancement.** Use the Microsoft 365 connector to retrieve staged Outlook replies and, if draft tools are enabled, create the follow-up drafts in Outlook. Keep the workbook and Word note local for the first run. The [connector runbook](research/demo-packets/freight-identity-review/presenter/connector-runbook.md) gives preparation, exact prompt additions, and a Gmail alternative. This makes the connector visible without requiring an AIA claims-system integration. The file-only setup below remains the fallback.

**How to set up Cowork.** Use a company-approved account and a fresh task. Enable file creation and confirm the built-in Excel and Word skills are available. Anthropic documents direct file access and creation of Excel and document outputs; availability and the interface depend on the account. These capabilities support the proposed demo, but this packet has not been run in Cowork here. [Cowork getting-started documentation](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork).

Run [`stage-cowork.sh`](research/demo-packets/freight-identity-review/stage-cowork.sh) to do steps 1, 2, 5, and 6. It creates `~/Documents/AIA-Freight-Live` for Cowork and a separate `~/Documents/AIA-Freight-Presenter` with the prompts, replies, answer key, and the [recording checklist](research/demo-packets/freight-identity-review/presenter/recording-checklist.md). Run it with `replies` at the reveal, and with `reset` before each new take.

1. Make a new local folder named `AIA-Freight-Live`, containing `input/` and an empty `output/`.
2. Copy the seven files from the prepared `initial/` directory into `input/`.
3. Give Cowork access to `AIA-Freight-Live`. Keep the research, this guide, answer key, and staged replies elsewhere. A prompt saying “ignore the answer key” is not a substitute for leaving it outside the connected folder.
4. Start without earlier rehearsal context. Where available, turn off task memory before the first message. Keep the desktop app open for local-file access; connected local files do not imply that model processing is offline. [Current Cowork file-access guidance](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile).
5. Keep the three reply files ready in a separate presenter window. At the reveal, copy them into `input/`.
6. Save both prompts below and open the presenter answer key separately. After a successful rehearsal, retain the generated output and a short recording as a fallback.

The file-only version uses local drafts and staged reply files. The connector version uses a dedicated demo mailbox containing synthetic correspondence. Neither version needs an actual claims system or external research about the invented businesses. The fictional examiner's stated verification is part of the exercise. Do not describe it as a call or identity check performed by Cowork.

**First prompt: give the agent the whole preparation task.**

```text
Prepare the examiner's review of fictional claim DEMO-FREIGHT-1042.
Work in the connected AIA-Freight-Live folder.

Read input/00-review-brief.md and the evidence files in input/.
Follow the exercise brief. Create these actual files in output/v1/:

1. claim-review.xlsx, built from scratch, with Evidence and Follow-ups sheets.
2. Three short, targeted follow-up drafts under drafts/, using the established
   contacts for the broker, the carrier named in its booking, and the receiver.
3. case-note.docx, no more than 150 words, with source item IDs.

Use the premade Excel and Word skills for these document outputs.

Use the documents to decide what needs clarification. Separate observations,
possible explanations, and unanswered questions. Include differences that
the evidence already explains. Keep the claimed amount and booked rate separate.

Save drafts only; label them DRAFT — NOT SENT. Use only the fictional files.
Do not decide fraud, liability, payment, or denial. Preserve the input files.
Check the generated workbook and drafts before finishing, then give me their
paths and a short description of the next work.
```

**What the first run should produce.**

| Artifact | What to show on screen |
| --- | --- |
| `claim-review.xlsx` → `Evidence` | A few concise rows comparing identities, contacts, rates, delivery evidence, and the explained payee difference, with source IDs |
| `claim-review.xlsx` → `Follow-ups` | The specific requests and draft status, rather than a generic instruction to “investigate” |
| Three files under `drafts/` | Separate questions addressed to the correct established contacts |
| `case-note.docx` | A formatted examiner handoff distinguishing suspicion from established facts |

The workbook is created from an empty output folder. Its value is traceability and tracking; it does not need a decorative chart or a made-up risk score. A formula-driven financial model would add little to this case. The $4,800 claim and $4,200 booking describe different accounts of the same load; summing them would be misleading.

**Expected initial observations.** The established broker domain is `asterfreight.example`; the dispatch messages use `aster-freight.example`. Aster's booking names Cedar, while Mesa appears in the submitted delivery documents. A message tells Mesa to check in as Cedar. These facts justify questions about identity and authorization. The different rates require reconciliation. Canyon's role is explained by the stipulated assignment check and should not become a fraud allegation.

The agent should ask Aster to authenticate the booking/contact and provide payment records, ask Cedar about its involvement or authorization, and ask the receiver to confirm delivery and vehicle details. The answer key supplies the exact supporting IDs.

**The reveal: process replies and find the missing attachment.** Tell the audience: “We are jumping forward to the responses. These are fictional replies prepared for the exercise.” Copy these three files into `input/`:

- `07-broker-reply.md`
- `08-booked-carrier-reply.md`
- `09-receiver-reply.md`

They say Aster did not authorize the alternate dispatch identity, Cedar did not accept or haul the load, and the receiver's records confirm Mesa's delivery. Aster also says it attached a remittance file. **The file is intentionally absent.**

```text
Three staged replies have been added to input/. Read them and inspect the
files that actually arrived. Continue the review under the same exercise brief.

Create updated work in output/v2/ and preserve output/v1/:
- Update claim-review.xlsx, including response source IDs and what remains open.
- Update case-note.docx to reflect what changed and what is still uncertain.
- Save any necessary next follow-up as a new DRAFT — NOT SENT file in drafts/.

Match each reply to the questions it answers. Distinguish a reported fact
from supporting evidence actually received. If a reply refers to an attachment,
check whether it is present before treating it as reviewed.

Do not imply that you sent the earlier drafts or verified anything outside
the supplied files. Finish with the file paths and the most important next action.
```

**The strongest moment to show.** The receiver's reply resolves the delivery-verification question in the exercise. Payment remains unverified because `aster-remittance-1042.pdf` is missing. The updated workbook should show this distinction, and the new draft should request the missing payment evidence from the established broker contact.

The agent should not announce that the claim is fraudulent or payable. The improved outcome is a clearer record of suspected identity misuse, corroborated physical delivery, and a focused next request. That is useful progress even though the examiner still has decisions to make.

**Eight-minute run of show.** These are planning allowances, not measured model latency.

| Time | Presenter action | What the audience sees |
| --- | --- | --- |
| 0:00–0:45 | Explain broker, trucker, and the unpaid invoice | A concrete business question |
| 0:45–1:15 | Show the small input folder and empty output folder; submit prompt 1 | One request with several deliverables |
| 1:15–3:00 | Let Cowork work; show the booking and dispatch records while it runs | File reading, comparison, and artifact creation |
| 3:00–4:00 | Open the workbook and verify one finding against its source | A usable spreadsheet with evidence |
| 4:00–4:45 | Open two of the short draft requests | Different questions for different recipients |
| 4:45–5:00 | Add the staged replies; submit prompt 2 | New information enters the case |
| 5:00–6:45 | Let Cowork update; explain that the receiver can confirm delivery but not who owes the bill | A second sequence of actions |
| 6:45–8:00 | Open v2 and the missing-attachment request | One issue resolved, another still open, and the next action prepared |

At five minutes, use the clearly labeled output from a prior rehearsal for the first phase and run the reply/update phase live. At ten minutes, allow the audience to inspect one additional source or draft. If a run stalls, show the saved recording or the presenter-authored answer key and say which one it is. Do not claim a prerecorded workbook was generated during the live run.

**How artificial should the files be?** This packet is deliberately short: named excerpts, one CSV, a text email thread, and explicit source IDs. The fraud mechanism is grounded in published cases; the particular clues and replies are constructed. After a successful rehearsal, the same text could be laid out as simple PDF records or email exports for visual realism. Keep the amount of text and the evidentiary meaning fixed, and rehearse again after conversion. Realistic formatting is optional; a complicated forged document is unnecessary.

**What makes the follow-up genuinely useful.** A request should identify the exact load and missing record, go to the appropriate established contact, and explain what needs reconciliation. When a reply arrives, the agent should close only the questions that the evidence answers. It should retain the original version and prepare the next request without requiring the presenter to restate the entire case. These are observable actions, not claims about the model's private reasoning.

**Rehearsal checks.** Open both generated workbooks, the Word case notes, and the individual drafts. Confirm the source IDs support the findings, Canyon's assignment is treated correctly, v1 is preserved, the receiver's reply changes delivery status, and the absent remittance creates a new request. Confirm no output says a message was sent or a payment verified. For the connector version, also verify the mailbox draft IDs and the attachment information the connector actually returns. Time the complete presentation in fresh sessions; use the five-minute fallback if generation routinely exceeds the allotted windows.

Prepared inputs and the answer key have been checked for consistency. **No live Cowork rehearsal, connector configuration, or production accuracy test has been performed.** The demo shows a possible workflow on constructed evidence. To evaluate business value later, Claims should review representative real cases and measure time saved after checking the agent's work, missed issues, and unnecessary questions.

**A useful way to pitch this to the contact:** “We can show an AI assistant take a freight claim folder, build the examiner's evidence spreadsheet, draft the questions needed to move it forward, and update the case when replies come back—including catching an attachment that was promised but never supplied.”

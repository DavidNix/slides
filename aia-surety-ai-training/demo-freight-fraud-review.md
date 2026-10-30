# AIA Surety demo: review a freight claim in one prompt

**One prompt in Claude Cowork. The agent works while the talk continues.** The input folder holds a fictional claim and the replies to the examiner's first questions. Cowork reads all of it, builds a spreadsheet and a case note, finds a promised attachment that never arrived, and drafts only the follow-up that the evidence still needs.

**The story in ordinary language.** A trucker says it delivered furniture and is owed $4,800. The broker's records name a different trucking company and a different price. Someone may have used another business's identity. The examiner already asked the broker, the booked carrier, and the receiver some questions, and all three replied. The agent assembles the evidence and works out what is still unanswered.

**Why this is a good agentic use case.** The audience sees a chain of work from a short goal: **read ten files → compare them → decide what is settled → build a workbook → write a case note → draft the next request**. Nobody tells the agent which questions are open or that a file is missing. It must find that itself.

The Claims team asked about scanning documents for fraud indicators. An industry bond provider describes unpaid carriers filing claims after criminals stole legitimate brokers' credentials. The scenario has a real basis. The businesses, correspondence, amounts, and missing attachment are invented. [Staff notes](ai_usage.md), [Avalon/TIA bond-program interview](https://www.avalonrisk.com/quest-news/tia-bond-program-offers-added-financial-security-around-fmcsa-requirements). The [research brief](research/freight-fraud-deep-dive.md) examines the cases and the alternatives.

**What the audience should remember:** "I gave it one paragraph. It read the whole file, told me what was settled, caught the attachment that never came, and wrote the one email I still need to send."

## The five moments to show

Each moment is something the agent does without a hint in the prompt.

1. **It connects files.** The dispatcher's address `aster-freight.example` differs from Aster's real domain `asterfreight.example` by one hyphen. Aster's reply denies the second domain.
2. **It does not raise a false alarm.** Canyon Invoice Finance appears as payee, but the examiner's note explains why. A good run marks that row `Explained`.
3. **It separates proof from claims.** The receiver corroborates the delivery. The broker only reports a payment.
4. **It notices what is absent.** The broker's reply says "I have attached `aster-remittance-1042.pdf`." That file is not in the folder.
5. **It decides what to ask next.** It drafts a request for the missing remittance to Aster's real address. It does not ask the receiver again, and it does not write to the impostor's address.

## Two premade skills

Use Anthropic's built-in **Excel (`xlsx`)** skill for the evidence workbook and **Word (`docx`)** skill for the case note. Claude applies its document skills when they are relevant and file creation is on. Confirm that the demo account has them before rehearsal. [Anthropic's skills guide](https://support.claude.com/en/articles/12512180-use-skills-in-claude).

| Premade skill | Visible contribution |
| --- | --- |
| Excel / `xlsx` | Creates `claim-review.xlsx`, with Evidence and Follow-ups sheets |
| Word / `docx` | Creates a short, formatted `case-note.docx` for the examiner |

The brief supplies the claim-review rules. The skills supply instructions for producing the files. They do not supply freight-surety judgment.

Spend about 20 seconds on the distinction while the task runs: **"Skills tell the agent how to do a kind of work. Connectors let it reach a system. The agent uses both to pursue the goal."** Anthropic publishes an [Excel skill example](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md). It is an example, not proof of the exact version in the demo account. Show skill activity only if the interface exposes it.

## Placement in the training

The demo spans the Agents and Verification sections. You submit the prompt on slide 23, and you check the results on slide 43. The agent works during the slides in between.

- **Slide 23, "Video: watch the agent work":** show the folder, submit the prompt, and watch the first file reads. Then move on.
- **Slide 43, "Checking on the demo":** open the outputs and let the room check them against the sources.

The deck also has slots for a recording in two parts, `demo-freight-part-1.mp4` and `demo-freight-part-2.mp4`. Record them from a good rehearsal and keep them as the fallback.

## Background to explain

A broker arranges a shipment. A carrier operates the truck. A broker's surety bond can respond to covered payment obligations. Whether this claim qualifies remains a human decision. A real delivery does not, by itself, establish which business owes the bill. [49 CFR 387.307](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-387/subpart-C/section-387.307).

| Fictional business | Role in this case |
| --- | --- |
| Aster Freight | Broker named in the claim and on the demo bond |
| Cedar Motor | Carrier named in Aster's booking record |
| Mesa Hauling | Carrier seeking payment. It appears on the delivery record. |
| Summit Office Warehouse | Receiver that can corroborate the physical delivery |
| Canyon Invoice Finance | Financing company named as collection payee. File 06 explains why. |

## The prepared materials

The [input packet](research/demo-packets/freight-identity-review/input/00-review-brief.md) holds ten text files. They are plain text, so the demo does not depend on scanning or OCR (optical character recognition).

| File | Contents |
| --- | --- |
| `00-review-brief.md` | Exercise instructions and the required work products |
| `01-claim-submission.md` | Mesa's $4,800 claim and reported unpaid balance |
| `02-broker-records.csv` | Aster's $4,200 Cedar booking and the established contacts |
| `03-rate-and-agreement-records.md` | Mesa's submitted rate confirmation and agreement excerpt |
| `04-delivery-and-invoice.md` | Shipment, delivery, and invoice details |
| `05-dispatch-thread.txt` | Dispatch instructions and payment correspondence |
| `06-assignment-note.md` | The explanation for Canyon's appearance as payee |
| `07-broker-reply.md` | Aster denies the dispatcher, reports a payment, and "attaches" a file |
| `08-booked-carrier-reply.md` | Cedar denies any part in the load |
| `09-receiver-reply.md` | Summit confirms Mesa's truck delivered the goods |

The [presenter answer key](research/demo-packets/freight-identity-review/presenter/answer-key.md) lists the expected findings, the fail conditions, and a fallback draft. Keep the presenter folder outside the agent's access.

**Optional connector version.** The Microsoft 365 connector can supply the three replies as mailbox messages and create the follow-up as an Outlook draft. The [connector runbook](research/demo-packets/freight-identity-review/presenter/connector-runbook.md) gives the setup and the prompt addition. The file-only version below is the default.

## Set up Cowork

Use a company-approved account. Turn on file creation and confirm the Excel and Word skills. Availability and the interface depend on the account. [Cowork getting-started documentation](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork).

Run [`stage-cowork.sh`](research/demo-packets/freight-identity-review/stage-cowork.sh). It creates two folders:

- `~/Documents/AIA-Freight-Live` holds `input/` with the ten files and an empty `output/`. Connect this folder to Cowork.
- `~/Documents/AIA-Freight-Presenter` holds `prompt.txt`, the answer key, and the [presenter checklist](research/demo-packets/freight-identity-review/presenter/presenter-checklist.md). Never connect this folder.

Run it with `reset` before each new run. A prompt that says "ignore the answer key" is not a substitute for keeping the answer key outside the connected folder.

Turn off task memory, so earlier runs do not leak in. Keep the desktop app open, because Cowork needs it for local files. Local files do not mean that the model runs offline. [Current Cowork file-access guidance](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile).

## The prompt

```text
Review fictional claim DEMO-FREIGHT-1042 in the connected AIA-Freight-Live folder.

Start with input/00-review-brief.md, then read every file in input/.
Follow the brief and save everything in output/:

1. claim-review.xlsx with Evidence and Follow-ups sheets.
2. Draft follow-up requests in output/drafts/, only for what is still open.
3. case-note.docx, no more than 150 words, with source item IDs.

Use the premade Excel and Word skills. Do not decide fraud, liability,
payment, or denial. Do not send anything or change the input files.
Check your work before you finish. Then tell me what the replies settled,
what is still open, and the next action.
```

The prompt gives the goal and the limits, not the steps. It does not mention the attachment, the lookalike domain, or the number of drafts. The brief carries the review rules, as a real procedure document would. Tell the room this when you paste it. It connects to the "give it the goal, not the steps" slide.

## What the run should produce

| Output | What to show on screen |
| --- | --- |
| `claim-review.xlsx` → `Evidence` | Rows for identity, contacts, rates, delivery, payment, and payee, each with source IDs and a status |
| `claim-review.xlsx` → `Follow-ups` | The open requests, with recipient, question, and `Draft — not sent` |
| `output/drafts/` | At least one draft to `claims@asterfreight.example` that asks for the missing remittance file |
| `case-note.docx` | A short handoff that separates suspicion from established fact |

The workbook does not need a chart or a risk score. The $4,800 claim and the $4,200 booking are two accounts of the same load, so the agent must not add them together.

The agent should not say that the claim is fraudulent or payable. The useful result is a clear record: suspected identity misuse, delivery that the receiver corroborates, payment that is only reported, and one focused next request. The examiner still has decisions to make.

## Run of show, live

These times are planning estimates, not measured model run times.

| Slide | Presenter action | What the audience sees |
| --- | --- | --- |
| 23 (0:00–0:45) | Explain broker, carrier, and the unpaid invoice | A concrete business question |
| 23 (0:45–1:15) | Show the ten input files and the empty `output/`. Paste the prompt and submit it. | One short request with several deliverables |
| 23 (1:15–2:00) | Watch the first file reads. Point out the model asking for an action and the harness doing it. Move on. | The agent starting its work |
| 24–42 | Teach. Glance at Cowork between slides if you want. | The talk continues |
| 43 (0:00–1:00) | Read the agent's final message. Open `output/`. | Real files the agent created |
| 43 (1:00–2:30) | Open the Evidence sheet. Have someone check one row against its source file. | Traceable findings |
| 43 (2:30–3:30) | Read the broker's reply aloud. Show that `aster-remittance-1042.pdf` is not in `input/`. | A confident reply is not evidence |
| 43 (3:30–5:00) | Open the draft and the case note. Check the recipient address. | The next action, ready for a human to send |

**Approval mode matters.** The agent works while you present, so it cannot wait for clicks. Choose a mode that lets it read the connected folder and write to `output/` without a prompt each time. Test this in rehearsal. If it stops for approval, the run stalls for 20 slides.

**Fallback.** If the run fails or stalls, show the outputs from a good rehearsal, or play the recording. Say which one it is. Do not claim that rehearsal output came from the live run.

## Rehearsal checks

Run the full prompt in a fresh task at least twice. Open the workbook, the case note, and each draft. Check them against the answer key and its fail conditions. Record the time from submission to the final message.

If the agent misses the missing attachment in rehearsal, do not add a hint to the prompt. First check that `07-broker-reply.md` reached `input/`. If the agent still misses it, that is a real result. You can show it on slide 43 as a verification lesson, or add the hint and tell the room that the prompt asks for it.

No live Cowork rehearsal, connector setup, or accuracy test has been done yet. The demo shows a possible workflow on constructed evidence. To measure business value later, Claims should review representative real cases and measure the time saved after checking the agent's work, the missed issues, and the unnecessary questions.

## How artificial should the files be?

The packet is short on purpose: named excerpts, one CSV, a text email thread, and explicit source IDs. The fraud pattern comes from published cases. The clues and replies are constructed. After a good rehearsal, you can lay out the same text as simple PDF records or email exports for a more realistic look. Keep the text and its meaning the same, and rehearse again after the change.

**A way to pitch this to the contact:** "We can show an AI assistant take a freight claim folder, build the examiner's evidence spreadsheet, work out which questions the replies settled, and draft the one request still needed, including catching an attachment that was promised but never supplied."

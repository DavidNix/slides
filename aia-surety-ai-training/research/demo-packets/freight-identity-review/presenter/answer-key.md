# Presenter answer key: freight claim review

**Do not grant Cowork access to this file or the presenter folder.** All case facts are invented. This is a presenter-authored answer key, not a captured model result.

The input folder holds ten files: the brief, six claim files, and three replies to the fictional examiner's October 21 questions. **Do not create or copy `aster-remittance-1042.pdf`.** The broker's reply says it is attached. Its absence is the point of the demo, and the prompt does not mention it.

## Expected evidence register

| Item | Supporting evidence | Expected status | Expected treatment |
| --- | --- | --- | --- |
| Different broker domains | F2.2, F3.2, F5.1–F5.2, R1.2 | Corroborated | `asterfreight.example` and `aster-freight.example` differ. Aster's verified contact denies the second domain and the dispatcher. This supports suspected impersonation. It is not a legal ruling. |
| Booked and hauling carriers differ | F2.1, F3.1, F4.1, R2.2 | Corroborated | Aster booked Cedar. Cedar denies any part in the load. Mesa appears on the shipping and delivery records. |
| Instruction to use Cedar's name | F5.2, R2.2 | Corroborated | A material identity concern. Do not infer that Mesa knowingly took part in fraud. |
| Different rates | F1.2, F2.1, F3.1, R1.2 | Explained or Corroborated | $4,800 claimed. $4,200 booked. Aster says it did not issue the $4,800 confirmation. Do not add the amounts or call the $600 difference a proven loss. |
| Different payee | F1.4, F4.3, F6.1–F6.4 | Explained | The stipulated assignment check explains Canyon's name. No fraud finding from this difference. |
| Physical delivery by Mesa | F4.1–F4.2, R3.2–R3.3 | Corroborated | The receiver's gate record matches Mesa, the tractor, the trailer, and 24 pallets. R3.4 keeps "who booked or paid" outside the receiver's knowledge. |
| Payment by Aster | F4.4, F6.3, R1.3, R2.3, file inventory | Reported only | Aster says it paid $4,200 to "the party recorded as Cedar" and attached a remittance file. The file is not in the folder. Cedar reports no identified payment. Payment is not verified. |

## Expected follow-ups

The brief does not fix a number of drafts. One draft is required. Others are acceptable if they ask about something that is still open.

| Request | Recipient | Required? | Useful questions |
| --- | --- | --- | --- |
| Q1 | Aster Freight, `claims@asterfreight.example` | Yes | Send the missing `aster-remittance-1042.pdf`. Give the payment date, amount, named payee, bank account or transaction reference, and proof of completion. Cedar reports no payment, so the records must be reconciled. |
| Q2 | Cedar Motor, `operations@cedarmotor.example` | Optional | Confirm that no $4,200 payment for L-1042 reached any Cedar account, once Aster supplies the transaction details. |

**Example Q1 draft, for fallback use.**

> DRAFT — NOT SENT. To: claims@asterfreight.example. Subject: DEMO-FREIGHT-1042 — missing remittance attachment. Thank you for your reply about load L-1042. Your reply refers to aster-remittance-1042.pdf, but the file was not included in the materials we received. Please send it, with the payment date, amount, named payee, transaction reference, and any evidence that the payment completed. Cedar Motor reports no identified payment for this load, so we need the records to reconcile the two accounts. We have not verified the reported payment.

## Fail conditions

A run fails if any of these is true. Each one is a teaching point if it happens live.

- A draft goes to `dispatch@aster-freight.example`. That is the impostor's address.
- A draft asks the receiver to confirm delivery again. R3 already answers that.
- An output says that Aster's payment is verified, or treats the missing PDF as reviewed.
- An output calls Canyon's role suspicious, or calls Mesa a fraudster.
- An output approves, denies, or scores the claim.
- An output says that a message was sent.
- A material finding has no source ID.

The case note should describe suspected identity misuse, delivery by Mesa that the receiver corroborates, and open questions about payment and contractual responsibility.

**Rehearsal observations to record.** Open the workbook, the case note, and each draft. Check the source references, the status values, and whether the agent found the missing attachment without a hint. Time the full run from prompt to final message. In the connector variant, also check the saved mailbox draft IDs, and check that the agent tells an absent attachment apart from one the connector cannot read. Passing this constructed exercise demonstrates the workflow, not fraud-detection accuracy on real claims.

# AIA Surety AI Demo Guide: Bail Collateral Review

**Presenter guide — one demonstration, ~8 minutes, with a five-minute version below.** The demo shows Claude Cowork reading a fictional collateral submission and creating a two-tab Excel workbook from scratch: a collateral calculation the audience can check with a calculator, and a missing-information checklist that stays honest even when the numbers improve.

**The demo in everyday language.** Someone offers a house as financial security for a bail bond. The agent says the house leaves plenty of equity. AI reads the property report, loan statements, tax statement, and proposed collateral document, applies a supplied exercise rule, and builds a spreadsheet showing how much collateral is really available — and which requirements are still missing.

**How to use this document.** The research, timed script, prompts, and answer key appear first. The two appendices contain the complete fictional input packet and follow-up evidence. Keep this presenter guide out of the assistant's inputs because it contains the answers and the later reveal. Start a fresh conversation with the initial packet, run the main prompt, then add the follow-up packet at the indicated time. The separately linked packet files are convenient for upload; all their text is also included here.

**Preparation.** Use a company-approved assistant. Preload the initial packet and save both prompts. Keep the relevant source excerpts and a calculator for the collateral example ready. Rehearse the example once before presenting. AIA's subject-matter reviewer (AST) can check the terminology and explain where the invented exercise rules differ from actual practice.

Research date: October 24, 2026. Prepared from [AIA/ACC's staff usage notes](ai_usage.md), AIA's public material, regulators, industry research, and enforcement cases. This is a research and rehearsal brief; the fictional examples are not AIA procedures or actual claims.

**What this demo shows.** The audience sees documents become inputs, formulas produce a result they can independently verify, new evidence change that result, and an unresolved requirement stay flagged throughout. That is the whole argument for using AI on this work: less time assembling evidence and arithmetic, with a human able to inspect every step.

**Connection to AIA's notes.** AST reports existing AI use to analyze SiteX reports and determine equity. The notes do not identify a bail-specific complaint, establish that the SiteX use concerns bail, or report the discrepancies constructed for this demo. This is a possible extension of the reported use, not a validated AIA pain point. The currently selected option is the [freight claim review and follow-up demo](demo-freight-fraud-review.md). [Staff usage notes](ai_usage.md).

AIA describes itself as a managing general agency supporting surety and bail agents, with commercial, contract, and bail products. The insurance companies issue the underlying guarantees; AIA is not the party performing the underlying obligation. [AIA overview](https://www.aiasurety.com/).

**The business in plain English.** A surety bond is a three-party guarantee: someone promises to fulfill an obligation, someone else receives that protection, and a surety backs the promise. The party whose obligation is guaranteed is the **principal**; the protected party is the **obligee**. Surety underwriting resembles evaluating credit: can the principal fulfill the obligation, and can the surety recover a loss if it has to pay? Indemnity agreements provide contractual recourse against the people or businesses who sign them. [NASBP: how surety companies work](https://www.nasbp.org/about/about-surety/what-are-surety-companies/).

| Product | Obligation being backed | Example of a problem |
| --- | --- | --- |
| Freight broker bond | A broker's covered obligations arising from arranging transportation | A carrier completes a haul and has a valid unpaid claim against the broker |
| Construction performance/payment bonds | A contractor's specified construction and payment obligations | A contractor defaults or fails to pay covered subcontractors/suppliers |
| Bail bond | A defendant's required court appearances | A failure to appear leads to forfeiture proceedings under applicable law |

The construction and bail products guarantee different obligations, so their underwriting cannot use one universal checklist. [AIA product overview](https://www.aiasurety.com/), [Florida DFS bail overview](https://www.myfloridacfo.com/division/consumers/understanding-insurance/bail-bonds-overview/).

**What underwriting means.** Underwriting is the assessment made before accepting a risk or setting its terms. For surety, that includes the obligation being guaranteed, the applicant's ability to perform, financial resources, indemnity, and the amount of exposure the surety will accept. In construction, the familiar “three Cs” are character, capacity, and capital; the detailed analysis also concerns the work and resources needed to complete it. [NASBP underwriting explanation](https://www.nasbp.org/about/about-surety/what-are-surety-companies/), [NASBP on contractor capacity](https://www.nasbp.org/pipeline-newsletter/contractor-capacity-the-overlooked-c-in-surety-underwriting/).

For bail, the underlying obligation is appearance in court. The bail agent arranges the bond, the surety backs it, and a co-signer or **indemnitor** may agree to reimburse losses. **Premium** pays for the bond; **collateral** provides security for an obligation. They serve different purposes. Forfeiture and recovery depend on the relevant law and agreements. [AIA bail FAQs](https://www.aiasurety.com/bail/bail-resources/bail-bond-faqs/), [California DOI bail overview](https://www.insurance.ca.gov/01-consumers/170-bail-bonds/).

The bail surety also has a relationship with the issuing agent, so “underwriting” can refer to review of a particular bond or management of an agent's permitted business. This demo addresses only preparation of one collateral file. AIA publicly identifies prudent agent selection and conservative underwriting as parts of its approach. [AIA bail business overview](https://www.aiasurety.com/bail/about/).

**Why property equity is a good demonstration.** A house valued at $600,000 is not $600,000 of available security. Debt, other liens, ownership, document freshness, and the ability to create and enforce the proposed security interest matter. A property database can help assemble evidence; it does not complete those determinations. ICE describes SiteXPro as providing ownership, lien, mortgage, document-image, and valuation information. The staff notes say “SiteX,” so confirm the exact report product and fields with AST. [ICE SiteXPro](https://mortgagetech.ice.com/products/sitexpro).

A recorded mortgage amount may be an original amount; a credit-line limit differs from its current balance. An estimate of market value also differs from accepted collateral value. The demo makes these distinctions explicit rather than asking the model to infer a valuation policy.

There is real precedent for checking the underlying evidence. A July 24, 2024 DOJ release describes indictments alleging falsified co-signer financial reports used to obtain bail bonds in Harris County. This is an account of allegations at that date, not a statement that every charged person was convicted. [DOJ bail-bond case](https://www.justice.gov/usao-sdtx/pr/dozens-charged-fraud-schemes-linked-harris-county-bail-bonds).

In a separate real-estate case, a Texas title employee was sentenced in April 2025 for a scheme involving false payoff statements, deeds, and a lookalike lienholder email. That is an analogy for verifying collateral documents, not a bail case or an AIA incident. [DOJ sentencing announcement](https://www.justice.gov/usao-sdtx/pr/texas-title-company-employee-sent-prison-orchestrating-350000-real-estate-wire-fraud).

## Demo: “How much collateral is really available?”

A fictional agent requests review of collateral for a $100,000 bail bond. The submission says the house is worth $600,000 with $350,000 of mortgage debt, suggesting $250,000 of equity. The packet contains a current $360,000 mortgage payoff, a $60,000 drawn home-equity loan, and $10,000 in unpaid property taxes. A second owner appears in the property report, but only one owner has signed the submitted collateral document.

Use the [bail-collateral packet](research/demo-packets/bail-collateral-packet.md), followed by the [supplement](research/demo-packets/bail-collateral-follow-up.md). A deliberately invented exercise rule counts 80% of the stated property value before subtracting the specified debts. **The 80% factor and full-collateral threshold are teaching devices, not AIA policy, a legal requirement, or a valuation recommendation.**

| Calculation | Result |
| --- | ---: |
| Agent's claimed equity: $600,000 − $350,000 | $250,000 |
| Unadjusted equity using supplied current debts: $600,000 − $360,000 − $60,000 − $10,000 | $170,000 |
| Exercise value: 80% × $600,000 | $480,000 |
| Exercise collateral figure: $480,000 − $360,000 − $60,000 − $10,000 | $50,000 |
| Shortfall against the fictional $100,000 screen | $50,000 |

The recommended result is an Excel workbook created from scratch, showing the calculation, source documents, and unresolved requirements. The output leaves the assessment of the defendant, the adequacy and enforceability of collateral, and the bond decision to the qualified human reviewer. A text-only review memo is the fallback if workbook creation cannot fit the rehearsal timing.

**Why this is the best spreadsheet demo.** Its central question is easy to explain: “How much of this house's value is available after debts?” The audience can follow the amounts and see formulas update. The findings concern arithmetic and document completeness rather than interpretation, so the room can check the result themselves.

Start with the fictional source documents and an empty output folder. Supply no workbook or template. Ask Cowork to create `collateral-review-v1.xlsx` with exactly two tabs:

| Tab | What Cowork should create | What the presenter should show |
| --- | --- | --- |
| **Collateral calculation** | Labeled input amounts, source filenames and item IDs, and formulas for adjusted value, available collateral, shortfall, and surplus | One source amount, the formula using it, and the resulting shortfall |
| **Missing information** | A checklist of requirements, supporting evidence, status, and follow-up actions | The missing second-owner signature and pending human title review |

Use ordinary currency formatting and clearly distinguish input cells from formula cells. Keep the layout readable at presentation size. The calculated results should come from formulas referencing inputs, rather than typed answers. Define shortfall as the greater of zero or the requested bond minus calculated collateral; define surplus as the greater of zero or calculated collateral minus the requested bond. Keep a numerical screen result separate from the document checklist so “met” cannot be mistaken for approval.

The presenter answer key is **$50,000 calculated collateral and a $50,000 shortfall initially**. After the verified loan closure and release in Appendix B, it is **$110,000 calculated collateral, no shortfall, and a $10,000 surplus**. The second owner's signature and human title review remain outstanding. Keep these expected answers in the presenter guide, outside the live inputs.

| Time | Presenter action | Purpose |
| --- | --- | --- |
| 0:00–1:00 | Explain the $100,000 bond and proposed property collateral | Establish the financial question |
| 1:00–1:45 | Show the $250,000 equity claim and fictional rule | Make the apparent answer and rule visible |
| 1:45–3:30 | Run the Cowork workbook prompt on the preloaded packet | Turn the documents into a two-tab Excel workbook |
| 3:30–4:45 | Open the calculation tab, inspect a formula, and check with a calculator | Establish the $50,000 result independently |
| 4:45–5:30 | Open the missing-information tab and inspect the second-owner evidence | Show a material issue beyond arithmetic |
| 5:30–6:45 | Add the loan closure/release evidence and run the workbook update prompt | Update the exercise figure to $110,000 |
| 6:45–8:00 | Compare the updated calculation and unchanged missing-signature item | Show that passing one screen does not complete underwriting |

The Cowork workbook prompts below are the recommended presentation version. The shorter memo prompts are the text-only fallback.

Main prompt:

```text
Create an Excel workbook from scratch using the fictional bail collateral
documents in input/. There is no existing workbook or template.
Read 00-review-rules.md first. Apply only its invented exercise rules.
Use supplied evidence only. Do not browse or contact anyone.
Leave inputs untouched. Save output/collateral-review-v1.xlsx.

Create exactly two tabs:
1. Collateral calculation: labeled inputs with source filenames and item
   IDs; formulas for adjusted property value, calculated collateral,
   shortfall, and surplus; and a numerical screen result.
2. Missing information: requirement, evidence, status, and next action.

Distinguish original loan amounts, credit limits, and current balances.
Use formulas referencing input cells for derived amounts; do not type
calculated answers into those cells. Show shortfall and surplus as
nonnegative amounts. Clearly distinguish inputs from formulas.
Use readable currency formatting and label the workbook as fictional.
Flag missing evidence rather than silently treating it as zero.

Check the formulas and calculated results. If recalculation or verification
is unavailable, say so. Keep the numerical screen separate from the
missing-document checklist. Do not equate passing the screen with approval.
Do not decide whether to issue a bond or assess the defendant's character,
court-appearance risk, or the legal enforceability of the collateral.
When finished, link the saved workbook and summarize findings in 100 words.
```

Update prompt:

```text
I added input/06-loan-release-update.txt. Read that evidence and update
collateral-review-v1.xlsx. Save output/collateral-review-v2.xlsx and
preserve the first version.

Update the affected debt input and its source reference, keep working
formulas, and recalculate. Keep the original evidence traceable in notes.
Update the missing-information checklist only where the new evidence
resolves a requirement. Do not infer that other requirements are complete.

Check the updated results and any formula errors. If you cannot verify
recalculation, say so. Link the new workbook and explain in under 100 words
what changed and what still needs human review. Do not approve the bond.
```

The second workbook should show $110,000 of calculated collateral while still flagging the missing signature. Show both tabs again: the numerical result changed, but the packet remains incomplete. Preserve the first workbook so the audience can compare the two versions.

**Fallback: text-only memo.** If workbook creation cannot fit the rehearsal timing, run these shorter prompts instead and present the memo.

```text
Prepare a collateral-review memo for this fictional bail-bond submission.
Apply only the explicit U0 exercise rules. Cite document and item IDs.

Give me a table showing the claimed property value and debts, the supplied
evidence, the figures the exercise requires, and any discrepancies.
Then show the unadjusted equity calculation and the U0 calculation.
Use a calculator if available; otherwise mark the arithmetic for review.
Distinguish original loan amounts, credit limits, and current payoff balances.

List missing documents or signatures. State whether the numerical screen
is met and which checklist requirements remain outstanding.
Draft a follow-up request under 100 words. Do not make a bond approval,
pricing, legal-enforceability, or defendant-risk determination.
```

```text
Apply the supplement, citing its item IDs. Recalculate the exercise figure
and identify which outstanding requirements it resolves. What still
prevents the packet from being complete? Keep the answer under 200 words.
```

**Creating the artificial case for Claude Cowork.** Think of this as preparing the paperwork for a short mystery. We invent the property, loans, and correspondence, then give Claude the documents an employee might receive. The story and inconsistencies are prepared in advance; Claude's reading, comparison, calculation, and written review happen during the demonstration. Tell the audience that distinction at the start.

The appendices already contain all the facts needed. The simplest first rehearsal uses the initial packet as one file. For the presentation, split it into six small files so the audience sees Cowork doing work across a folder. This adds the feel of an office assignment without adding more facts to explain. No connection to AIA's systems is needed for this proposed setup.

**What Cowork contributes.** Claude can read connected local files and create output files, making it suitable for the proposed folder-to-review workflow. Use the Claude Desktop app, a paid plan with Cowork available, and an active internet connection. Select Cowork if the interface offers that choice; Anthropic's newer interface combines chat and Cowork. Confirm access and run a small file-reading task before the event. These product details were checked on October 24, 2026. [Anthropic's Cowork setup guide](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork).

Keep the desktop app open and connected while working with local files. Local documents do not make this an offline demonstration: Anthropic's current documentation describes cloud sessions reaching connected folders through the desktop app. [Cowork across desktop, web, and mobile](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile).

**Make the documents ordinary and easy to read.** Start with plain text or Markdown, which is ordinary text with simple formatting. Give each document a title, date, fictional source, and a handful of fields or paragraphs. Preserve the item IDs such as U3.1 so the presenter can locate cited evidence. Put “Fictional training material” at the top of every document.

For a more polished version, the property summary could resemble a report. Readable, selectable text is enough. Elaborate logos, authentic-looking signatures, scanned pages, and deliberately poor image quality add preparation and extraction problems without improving this lesson. The visible contradiction should be in the information, not in a difficult-to-read image.

**Build the collateral folder from Appendix A.**

| Proposed filename | Content to copy | What it represents in everyday language |
| --- | --- | --- |
| `00-review-rules.md` | U0 | The invented calculation and document checklist |
| `01-agent-request.txt` | U1 | A request to use a house as security for a $100,000 bond |
| `02-property-summary.txt` | U2 | The estimated house value, owners, and recorded loans |
| `03-loan-statements.txt` | U3 | Current loan amounts, which differ from older figures |
| `04-tax-statement.txt` | U4 | Unpaid property taxes |
| `05-collateral-document.txt` | U5 | The document showing who has signed |

Copy Appendix B into `06-loan-release-update.txt` and hold it back. It says that the home-equity debt has been paid, the credit line closed, and its lien released. A lien is a legal claim against property used to secure an obligation. For this exercise, those facts are stipulated as verified by a fictional employee.

The planted issues are straightforward: the agent used an older mortgage balance, omitted another loan and taxes, and supplied only one of two required owner signatures. Keep the stated property value at $600,000 throughout. Preserve the exact invented 80% rule so the demonstration tests whether Claude follows a supplied rule and calculates correctly. It should not have to invent an underwriting standard.

**Use separate preparation and presentation spaces.** A workable arrangement is:

```text
AIA-demo-preparation/                 Presenter uses this folder
  demo-guide.md                      Research, scripts, and answer keys
  collateral-initial/                Clean copies of the six collateral files
  reveal-later/                      The follow-up document
  rehearsal-results/                 Previous outputs and fallback examples

AIA-demo-live/                        Connect only this folder for the demo
  input/                             Six initial files
  output/                            Empty at the beginning
```

These are proposed folder names, not folders already created by this guide. Keep preparation and live folders separate, rather than granting access to a shared parent containing both. Copy the initial files into `AIA-demo-live/input/` before the session. Give Cowork access to the live folder so it can read inputs and write its review to `output/`. Instructions to leave inputs untouched are task instructions, not a claim that folder access is technically read-only.

Start a fresh task for the demonstration, outside any preparation project containing the answers. Where available, turn Memory off before starting it; Anthropic documents this option in the message box's “+” menu. A new conversation alone should not be treated as proof that preparation context is absent. [Anthropic's task and memory guidance](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork).

**A preparation prompt for creating the fake files.** This can be run separately in Cowork before the event, using this guide as the source. It creates the presentation materials; it is not the live review task.

```text
Prepare fictional files for an AIA Surety training demonstration.
Use the supplied demo guide's appendices as the source of truth.

Create collateral-initial/ in the preparation folder and split Appendix A
according to its six-file mapping table. Put Appendix B in a separate
reveal-later/ folder.

Preserve every fact, date, amount, name, item ID, and exercise rule.
Add a fictional-training label to each file. Use readable plain text or
Markdown. Do not invent extra documents, findings, approvals, or policies.
Do not put answer keys or explanatory hints in the initial files.

Create a preparation-only manifest listing each file and its source IDs.
Check the split files against the appendices and report any discrepancy.
Do not conduct the collateral review in this preparation task.
```

The presenter should then check the resulting files against the appendices. In particular, make sure the preparation assistant has not helpfully “corrected” the mortgage balance or resolved the second-owner signature. Those differences are the evidence the live assistant needs to discover.

Opening narration: “Someone offers a house as security for a bond. The house has value, but existing debts matter. We have supplied a made-up calculation rule so everyone can check the answer.”

Open the workbook in Excel or a compatible viewer. On the calculation tab, show the input amounts and select a result cell to expose its formula. Independently check the $50,000 result. On the missing-information tab, inspect the two owners against the one signature. At the reveal, copy `06-loan-release-update.txt` into `input/`. Say: “One loan has now been cleared. What changes, and what still needs attention?”

**Keep the performance within eight minutes.** Finish input-file creation and folder-access setup before presenting. Use the timeline with the Cowork prompt. Open `collateral-review-v1.xlsx` and spend the audience's time on one or two meaningful findings, not reading all six files. The follow-up adds only one document and produces an updated workbook. Rehearsal must establish whether workbook creation, opening, and updating fit the time slot.

Rehearse the same inputs in a fresh task. Check the evidence references, arithmetic, saved files, and timing. Open both workbooks, inspect the formulas, confirm recalculated values and the unchanged missing-signature item, and make sure the text is readable on screen. If the first response takes more than about 90 seconds during the presentation, switch to a clearly labeled rehearsal output and use the remaining time to inspect its sources. This is a contingency for the time limit, not a promise about Cowork's response speed. For a strict five-minute slot, omit the second live run and show the prepared before-and-after results.

For another rehearsal, copy the clean initial materials into a new live folder with an empty output directory. Start a fresh task without the earlier reveal or answers. Keep the source case fixed while checking reliability; change it deliberately only when you want to test another situation.

**What this staged demo establishes.** It can show Cowork reading several documents, following explicit rules, calculating correctly, creating a sourced workbook, and revising it. The facts are invented and the presenter knows the expected findings. Success on this packet does not measure real-world underwriting performance. Present the gain plainly: less time assembling evidence and arithmetic, with a human able to inspect the result.

**What to build after choosing.** Start with the fictional folder, the two saved Cowork prompts, and the prepared answer key. Cowork produces a two-tab workbook. Verify the spreadsheet formulas and arithmetic during rehearsal. No custom application is necessary for the first rehearsal.

If the presentation also needs to demonstrate an agent, give it a read-only folder containing the packet and a calculator. Show it locating documents, comparing figures, and preparing a review file. A live public lookup cannot verify fabricated people or properties, so any prerecorded registry or contact checks must be labeled as such. AIA's public software descriptions establish that internal systems exist; they do not establish available APIs or permission for this demo to access them. [AIA software overview](https://www.aiasurety.com/insurance-solutions/).

Rehearse against these outcomes: every material finding cites the correct source; the collateral arithmetic matches the answer key; missing information stays missing; and new evidence changes only the conclusions it supports. A successful rehearsal shows usefulness on a constructed example, not measured underwriting accuracy. A later pilot would need independently labeled real cases, including ordinary submissions, to measure missed signals, false alarms, and reviewer time.

**Items for an AIA subject-matter check before presenting.** AST can confirm the property report format and which collateral discrepancies recur. The relevant owner can supply the approved checklist if the demo should represent actual AIA practice. The packet is fully fictional and can be discussed before those details are available.

For background on the collateral demo's real-world counterpart: the 2024 Harris County indictments and the 2025 Texas title-fraud sentencing above show why payoff statements, lien releases, and signatures get verified rather than trusted. Keep operational deadlines and legal determinations with the qualified human reviewers.


---

**Appendix A — Bail collateral: initial packet**

**FICTIONAL TRAINING MATERIAL.** All people, property records, amounts, documents, and review rules are invented. This is a simplified collateral-document exercise, not an AIA underwriting manual, a genuine SiteX report, an appraisal, or a statement of any state's law. No real person's eligibility is being evaluated.

**U0 — Fictional exercise rules: DEMO-COLLATERAL-01**

- **U0.1:** Prepare a document review for a requested **$100,000** bond. Use the supplied **$600,000** property estimate only as the exercise's input value. Its acceptance for real underwriting is outside the exercise.
- **U0.2:** Calculate an exercise collateral figure as **80% × input property value − current first-mortgage payoff − current drawn home-equity balance − unpaid property taxes**. This simplified rule is invented. Do not add a second cost deduction; the 20% reduction is the exercise's single assumed value adjustment.
- **U0.3:** For the numerical screen, compare the exercise collateral figure with **$100,000**. Report “met,” “not met,” or “cannot determine.” This full-collateral screen is a teaching device, not an assertion that actual bail bonds require full collateral.
- **U0.4:** Use the supplied current payoff/balance evidence. A recorded original loan amount and a credit-line limit are different fields. If current evidence is absent, report the missing input rather than estimating a balance.
- **U0.5:** Treat all supplied debts as prior deductions solely for this arithmetic exercise. In a real file, title, lien priority, exemptions, and enforceability need qualified review. Do not make those legal determinations.
- **U0.6:** The exercise checklist requires signatures from **both owners named in U2.1** on the proposed collateral document. List any missing signature without inferring ownership shares or authority to bind another owner.
- **U0.7:** A complete collateral packet also requires a human title/enforceability review. Passing the numerical screen does not complete that review or approve a bond.
- **U0.8:** Accept a debt's removal from this exercise only when a supplement explicitly stipulates independently verified satisfaction, credit-line closure if applicable, and lien release. A zero-balance statement alone is insufficient under this fictional rule.
- **U0.9:** Cite item IDs. Use a calculator for arithmetic if available. Do not price or approve a bond, predict court appearance, infer criminality, or research these fictional people.

**U1 — Agent submission, October 20, 2026**

- **U1.1:** Submission `DEMO-BAIL-100`; requested bond amount **$100,000**. Proposed indemnitor and collateral provider: Morgan Lee. Proposed property: `DEMO-PARCEL-17`, with no real street address or county identifier.
- **U1.2:** Agent note: “Property value is **$600,000**; mortgage balance is **$350,000**; available equity is **$250,000**. We believe this supports the requested bond.”
- **U1.3:** Support for the $350,000 balance is a homeowner-provided statement dated **January 31, 2026**. The note does not discuss a home-equity line or unpaid taxes.

**U2 — Fictional property-data report, dated October 15, 2026**

- **U2.1:** Property identifier: `DEMO-PARCEL-17`. Reported owners: **Morgan Lee and Taylor Lee**. No ownership shares are stated.
- **U2.2:** Automated property-value estimate: **$600,000** as of October 15, 2026. This is an estimate rather than an appraisal or independently accepted underwriting value.
- **U2.3:** First mortgage recorded in 2022, original amount **$400,000**. A current payoff is not provided by this field.
- **U2.4:** Home-equity line recorded in 2024, credit limit **$100,000**. This field does not state the drawn balance. No release appears in this report excerpt.
- **U2.5:** The report is a fictional data summary for the exercise. Its contents alone do not establish complete title, current debt, lien priority, or an enforceable security interest.

**U3 — Supplied current debt evidence**

- **U3.1:** First-mortgage payoff statement dated October 19, 2026, valid through October 31, 2026: **$360,000**. For the exercise, a fictional reviewer has independently verified the issuer and payoff figure through an established lender contact.
- **U3.2:** Home-equity statement dated October 19, 2026: credit limit **$100,000**; drawn balance **$60,000**; line remains open. For the exercise, the same type of independent lender verification has confirmed these fields. Future advances and actual lien treatment remain matters for the human reviewer; U0 specifies which figure to use for the arithmetic.

**U4 — Property-tax statement**

- **U4.1:** Fictional tax statement dated October 19, 2026: **$10,000 unpaid property taxes** for `DEMO-PARCEL-17`. The amount is stipulated as verified for the exercise. It is separate from the mortgage and home-equity figures.

**U5 — Proposed collateral document**

- **U5.1:** The supplied proposed collateral document identifies `DEMO-PARCEL-17` and has **Morgan Lee's signature**.
- **U5.2:** **Taylor Lee's signature is absent.** The packet contains no document resolving that omission under U0.6.
- **U5.3:** The packet contains **no completed human title/enforceability review**. No bond approval or issuance is recorded.


---

**Appendix B — Bail collateral: follow-up evidence**

**FICTIONAL TRAINING MATERIAL.** Reveal after reviewing the initial bail-collateral packet. All statements below are invented and stipulated for the exercise. No actual lender or property-record check has taken place.

**U6 — Independently verified supplement, October 23, 2026**

- **U6.1:** The fictional reviewer confirmed through the lender's established contact that the home-equity debt in U3.2 has been paid in full and the **credit line is closed**. The lender supplied a zero-balance and closure confirmation for the same account.
- **U6.2:** The fictional reviewer also checked the matching **recorded lien release**, identifying the same property and home-equity obligation. For U0.8, satisfaction, line closure, and release are all stipulated as independently verified.
- **U6.3:** The payoff came from funds outside the property; no replacement property debt is introduced in this exercise. The $600,000 input value, $360,000 first-mortgage payoff, and $10,000 unpaid taxes remain unchanged.
- **U6.4:** Taylor Lee has still not signed the proposed collateral document, and the human title/enforceability review remains incomplete. No bond approval or issuance is recorded.

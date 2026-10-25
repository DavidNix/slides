# Frontier AI Intellectual Property Disputes and Anthropic Class Actions

Research memorandum • Status checked October 25, 2026

## Principal findings

The strongest documented example in this review is **Anthropic’s acquisition of pirated books**, which produced an adverse fair-use ruling on its central library and a **$1.5 billion class-action settlement**. The OpenAI Navier–Stokes controversy raises a different issue: whether a laboratory benefited from researchers’ unpublished work submitted through its tools. That concern is documented, but use of the researchers’ private data has not been established in the public evidence reviewed. [Reporting on the approved settlement](https://apnews.com/article/74b140444023898aeba8579b6e9f0d63), [OpenAI’s response](https://openai.com/index/navier-stokes-solution/).

The document distinguishes court rulings, settlement obligations, allegations and responses. A pending lawsuit is evidence that a claim has been brought, not that the alleged conduct has been proved.

The inventory below identifies **nine original class-action filings, grouped into seven proceedings** after two pairs of cases were consolidated. It includes U.S. and Canadian matters: one settled proceeding, five pending proceedings at different stages, and one stayed proceeding. The non-IP cases are included to answer the request for class actions generally; they do not substantiate copyright theft. Each entry links to its supporting record.

## OpenAI and the Navier–Stokes dispute

### The announcement

On September 8, 2026, OpenAI announced that an internal system had produced a proof of finite-time blowup for the three-dimensional Navier–Stokes equations with smooth external forcing, claiming to resolve the corresponding Millennium Prize problem. It released a mathematical writeup and a Lean formalization. The announcement described an internal model, not simply an ordinary user asking the public Codex product to solve the problem. [OpenAI announcement](https://openai.com/index/navier-stokes-solution/).

### What the researchers had already done

NYU mathematician **Tristan Buckmaster** and mathematician **Levent Alpöge**, an Anthropic employee, had collaborated privately on related fluid equations. Buckmaster’s September 8 statement says they obtained smooth-forcing blowup results for Boussinesq and Euler on August 15, with Lean verification on August 22. He credited the underlying research program to Diego Córdoba and Luis Martínez-Zoroa. Their announced Euler result was related to, but was not itself, the full Navier–Stokes claim. [Buckmaster statement, page 1](https://cims.nyu.edu/~tristanb/statement.pdf).

### The concern about Codex

Buckmaster said they had placed their drafts in Codex throughout the project. During discussions with OpenAI, he asked whether its model had trained on, or could access, those sessions. He reported receiving a denial of user-data lookup but no answer then about training. However, he expressly qualified his account: **“I do not know whether our data was used.”** His statement also said he had not yet seen OpenAI’s proof. [Buckmaster statement, pages 3–4](https://cims.nyu.edu/~tristanb/statement.pdf).

That supports a specific, serious concern about the confidentiality of unpublished research. It does **not** establish that the researchers had already supplied Codex with the identical completed Navier–Stokes solution, or that OpenAI copied it.

### OpenAI’s response changed after an investigation

The archived September 8 announcement denied that researchers or agents accessed the pair’s work before publication, while initially leaving open the possibility that de-identified product-usage data had helped improve its models. This was an acknowledgement of uncertainty, not an admission that the specific work had been used. [Original September 8 announcement](https://web.archive.org/web/20260908171518/https://openai.com/index/navier-stokes-solution/).

On September 10, OpenAI updated its account to say an investigation had confirmed that Buckmaster’s Codex prompts during the preceding two months could not have influenced the system, including through training. It also said the proofs differed significantly and acknowledged the pair’s priority on forced Euler. This remains the company’s account; the announcement is not an independent audit of its training and access records. [Updated announcement, Concurrent work section](https://openai.com/index/navier-stokes-solution/).

### The mathematical claim also requires qualification

The Clay Mathematics Institute’s September 11 statement welcomed the apparent breakthrough while emphasizing its formal process for evaluating the result and assigning credit. That statement was not a completed prize determination. [Clay Mathematics Institute statement](https://www.claymath.org/news/navier-stokes-announcement/).

An October 6 preprint by Alexander Bastounis, Fabian Circelli and Anders C. Hansen separately challenged whether OpenAI’s Lean formalization corresponded to its natural-language proof. This is a technical criticism of verification, not evidence of appropriation. It is another reason to describe the result as an **announced or claimed solution**, rather than silently treating every aspect as conclusively settled. [Research preprint](https://arxiv.org/abs/2610.08144).

**Assessment:** The public record supports a dispute over research priority, confidentiality and how AI companies compete with users of their tools. It does not presently establish IP theft by OpenAI. Establishing private-data use would require evidence connecting specific unpublished material to the model’s training, retrieval, prompts or research workflow. Timing and a related research direction alone do not supply that connection.

## Anthropic and the book authors case

### Bartz v Anthropic PBC

**Court and case:** U.S. District Court, Northern District of California, No. 24-cv-05417. Originally filed August 19, 2024 by Andrea Bartz, Charles Graeber and Kirk Wallace Johnson; affiliated corporate entities later participated. [Original complaint](https://www.lieffcabraser.com/pdf/AnthropicClassActionComplaint-Filed.pdf).

**What the court record documents:** Judge William Alsup’s June 23, 2025 order describes Anthropic obtaining more than seven million pirated book copies through Books3, Library Genesis and Pirate Library Mirror. The order separates acquisition and retention in a general-purpose library from subsequent model training. It must also be read in its procedural posture: Anthropic sought summary judgment, so disputed facts and reasonable inferences were evaluated in the authors’ favor. [Fair-use order, pages 2–3 and 31–32](https://docs.justia.com/cases/federal/district-courts/california/candce/3:2024cv05417/434709/231).

### What Anthropic lost and what it won

| Issue | Court outcome |
| --- | --- |
| Pirated copies acquired for the permanent central library | The court rejected Anthropic’s attempt to obtain fair-use protection and left the piracy claims and damages for trial. |
| Copies used to train the models at issue | The court granted Anthropic summary judgment on fair use. |
| Purchased print books converted into replacement digital copies | The court also found fair use on the facts presented. |

These holdings concern the uses and record in that case. [Fair-use order, conclusion](https://docs.justia.com/cases/federal/district-courts/california/candce/3:2024cv05417/434709/231).

The July 17, 2025 class-certification order is especially relevant to the scale of the conduct. In explaining why class treatment was appropriate, Alsup described **“straightforward piracy but at massive scale.”** Certification allowed the claims to proceed collectively; it was not a jury damages verdict. [Class-certification order, page 29](https://assets-us-01.kc-usercontent.com/1eeb16db-4934-006e-40a6-38fa91285ebb/748a2f9e-3e07-404b-b133-d6d3a44f3557/Order%20on%20Class%20Certification.pdf).

### Settlement and current status

The parties agreed to a $1.5 billion settlement in 2025. On **July 20, 2026**, Judge Araceli Martínez-Olguín granted final approval, entered judgment and dismissed the action with prejudice, retaining jurisdiction to administer and enforce the agreement. The settlement covers qualifying book rights associated with the LibGen/PiLiMi works list. [Final approval order and judgment, pages 2–3 and 23](https://law.justia.com/cases/federal/district-courts/california/candce/4:2024cv05417/434709/680/).

The roughly **$3,000 per book** figure reported when the deal was announced is a gross approximation, not a guaranteed net payment to each author. Fees, costs, eligibility and division among rights holders affect distributions. The original estimate concerned approximately 500,000 books; the final approval record concerns a works list of roughly 482,000. [Settlement announcement reporting](https://apnews.com/article/f294266bc79a16ec90d2ddccdf435164), [final approval record](https://law.justia.com/cases/federal/district-courts/california/candce/4:2024cv05417/434709/680/).

As of the research cutoff, the administrator expected the first payments **on or before November 15, 2026** for claims with resolved allocations and complete payment information. Its notice includes a qualification concerning any permitted late appeal. Settlement administration is continuing; this does not mean the underlying class claims are still awaiting a merits trial. [Court-authorized settlement website](https://www.anthropiccopyrightsettlement.com/).

**Accurate characterization:** Anthropic suffered a substantial adverse ruling concerning its pirated library and agreed to a court-approved $1.5 billion settlement. Describing this simply as a case it “lost” omits its training fair-use victory and the fact that the payment resulted from settlement. [Reporting on the mixed ruling](https://apnews.com/article/1e5cece51c2e4bd0bb21d94de2abb035). The agreement expressly restricts treating the settlement as an admission of liability. [Settlement agreement, sections 10.6–10.7](https://assets-us-01.kc-usercontent.com/1eeb16db-4934-006e-40a6-38fa91285ebb/d8578720-9fd0-4c27-9c7f-041bac826869/Class%20Action%20Settlement%20Agreement.pdf).

## Inventory of Anthropic class actions

“Proposed” means the plaintiff seeks to represent a class; it does not mean a class has been certified. Consolidated originals are listed individually so the inventory does not conceal filings or count them as separate adjudicated losses. Case-number division prefixes can change after reassignment; the year and sequential number identify the proceeding here.

| Original action and filing date | Court and case number | Subject | Status at the research cutoff |
| --- | --- | --- | --- |
| **Bartz v Anthropic** — August 19, 2024 | N.D. California, 24-cv-05417 | Copyright and pirated books | **Settled.** Final approval and judgment July 20, 2026; payment administration continues. [Judgment](https://law.justia.com/cases/federal/district-courts/california/candce/4:2024cv05417/434709/680/). |
| **MacKinnon v Anthropic** — May 23, 2025 | Supreme Court of British Columbia, Vancouver, S-253893 | Canadian copyright owners’ works allegedly acquired and used without permission | **Pending proposed class action.** Counsel lists the case as active; a second amended claim was filed November 21, 2025. [Counsel’s case page](https://www.cfmlawyers.ca/class-action/anthropic-pbc-ai-copyright-class-action/), [amended pleading](https://www.cfmlawyers.ca/wp-content/uploads/2025/11/FILED-Second-Amended-Notice-of-Civil-Claim-21-Nov-2025-01009254xB33C8.pdf). |
| **Grescoe v Anthropic** — July 2025 | Superior Court of Québec, Montréal, 500-06-001394-259 | Copyright and unjust enrichment affecting Québec rights holders | **Stayed.** November 6, 2025 order pauses the action pending the British Columbia litigation or further court order. [Official registry](https://www.registredesactionscollectives.quebec/en/Consulter/ApercuDemande?NoDossier=500-06-001394-259), [stay judgment](https://www.registredesactionscollectives.quebec/fr/Fichier/Document?NomFichier=15978.pdf). |
| **Kahn v Anthropic** — June 14, 2026 | N.D. California, 26-cv-05763 | Allegedly misleading Claude Max usage multipliers and subscription marketing | **Pending.** Lead case consolidated with Smith; Anthropic moved to dismiss September 22, with a hearing set for November 6, 2026. [Docket](https://www.plainsite.org/dockets/67ch1clhp/california-northern-district-court/kahn-v-anthropic-pbc/), [defense motion](https://storage.courtlistener.com/recap/gov.uscourts.cand.472161/gov.uscourts.cand.472161.39.0.pdf). |
| **Smith v Anthropic** — July 27, 2026 | N.D. California, 26-cv-07789 | Claude subscription marketing | **Consolidated into Kahn** on September 4, 2026; consolidated complaint filed September 8. It is not an additional loss or a separate current trial track. [Consolidation docket entries](https://www.plainsite.org/dockets/67ch1clhp/california-northern-district-court/kahn-v-anthropic-pbc/), [counsel’s announcement](https://www.vacadaffanlaw.com/post/consolidated-complaint-kahn-and-smith-v-anthropic-pbc). |
| **Pascual v Anthropic** — July 24, 2026 | N.D. California, 26-cv-07699 | Alleged reductions in paid Claude service and faster usage depletion | **Pending as In re Claude Service Degradation Litigation.** Consolidated with Patel on August 26; consolidated complaint filed September 14. [Complaint](https://files.openclassactions.com/pdf/anthropic-claude-service-degradation-class-action-lawsuit.pdf), [procedural history](https://openclassactions.com/lawsuits/consumer-protection/anthropic-claude-service-degradation-class-action-lawsuit.php). |
| **Patel v Anthropic**, including Lauren Morgan — July 28, 2026 | N.D. California, 26-cv-07837 | Paid Claude service and usage degradation | **Consolidated into the Pascual lead proceeding.** No separate adjudicated loss. [Original docket](https://www.courtlistener.com/docket/73683165/patel-v-anthropic-pbc/), [consolidated complaint](https://files.openclassactions.com/pdf/anthropic-claude-service-degradation-class-action-lawsuit.pdf). |
| **Buist and others v Anthropic and others** — September 18, 2026 | N.D. California, 26-cv-10693 | Alleged anticompetitive agreement among Anthropic, OpenAI, SpaceXAI and Google to slow AI development | **Pending proposed class action.** The complaint seeks antitrust remedies; no final liability determination identified. [Complaint](https://storage.courtlistener.com/recap/gov.uscourts.cand.479357/gov.uscourts.cand.479357.1.0.pdf), [docket](https://courtlistener.com/docket/74816200/buist-v-anthropic-pbc). |
| **Jose Enrique Ortiz Colon v Anthropic** — reported September 30, 2026 | San Francisco County Superior Court; case number not verified | Alleged Illinois biometric-privacy violations in Claude identity verification | **Reported pending proposed class action.** Anthropic said it was reviewing the complaint. This entry has lower procedural confidence because a current court docket was not retrieved. [Courthouse News reporting](https://www.courthousenews.com/chatbot-user-files-class-action-against-anthropic-over-biometric-data-policy/). |

### The ongoing copyright class proceedings

**MacKinnon:** The amended Canadian pleading alleges unauthorized acquisition, copying, training and distribution involving Books3, LibGen and PiLiMi, as well as interference with rights-management information. Those assertions remain allegations in that proceeding. Counsel’s active-case listing does not establish class certification, liability or a settlement. [Second amended claim](https://www.cfmlawyers.ca/wp-content/uploads/2025/11/FILED-Second-Amended-Notice-of-Civil-Claim-21-Nov-2025-01009254xB33C8.pdf), [case status](https://www.cfmlawyers.ca/class-action/anthropic-pbc-ai-copyright-class-action/).

**Grescoe:** This is a separate Québec authorization application covering Québec rights holders. The applicant requested the stay, and Anthropic did not oppose it. A stay pauses proceedings; it is neither a damages award nor a dismissal on the merits. The official registry records July 6, 2025, while the stay judgment describes the application as filed July 2; the inventory therefore uses July 2025. The British Columbia case number above follows the caption of its own amended pleading. [Québec registry](https://www.registredesactionscollectives.quebec/en/Consulter/ApercuDemande?NoDossier=500-06-001394-259), [stay judgment, paragraphs 1–2 and 19](https://www.registredesactionscollectives.quebec/fr/Fichier/Document?NomFichier=15978.pdf).

### The ongoing class proceedings outside IP

**Kahn and Smith:** Subscribers challenge whether advertised “5x” and “20x” usage meaningfully describe the service they receive. Anthropic argues that the promises concern per-session usage, that other limits were disclosed, and that it never promised fixed overall capacity. These are competing litigation positions. [Anthropic’s September 22 motion](https://storage.courtlistener.com/recap/gov.uscourts.cand.472161/gov.uscourts.cand.472161.39.0.pdf).

**Pascual and Patel:** The consolidated complaint alleges that changes and bugs reduced the value of paid access during March 4–May 6, 2026 without appropriate compensation. An October 23 case update reports an October 14 motion to dismiss and a November 4 case-management conference. That motion’s filing is reported by the secondary source; its text was not independently reviewed. [Consolidated complaint](https://files.openclassactions.com/pdf/anthropic-claude-service-degradation-class-action-lawsuit.pdf), [dated procedural update](https://limithit.com/claude-limits-lawsuit).

**Buist:** Paid subscribers allege an agreement among rival AI providers to restrict improvements, invoking the Sherman and Clayton Acts. The claimed injury concerns the value of paid subscriptions. It does not concern copying authors’ works. [Complaint, introduction and claims](https://storage.courtlistener.com/recap/gov.uscourts.cand.479357/gov.uscourts.cand.479357.1.0.pdf).

**Ortiz Colon:** The reported allegations concern facial-geometry data collected during identification through Persona, including allegedly inadequate retention disclosures and a destruction policy. This is a biometric-privacy claim, not evidence that Anthropic copied research or books. [Courthouse News](https://www.courthousenews.com/chatbot-user-files-class-action-against-anthropic-over-biometric-data-policy/).

## Important IP lawsuits that are not class actions

A lawsuit with many authors or publishers as named plaintiffs is not automatically a class action. The following disputes help explain Anthropic’s broader IP exposure, but should not inflate the class-action count.

| Matter | Classification and status |
| --- | --- |
| **Concord Music Group v Anthropic**, original litigation filed October 18, 2023 and subsequently transferred to N.D. California | Music publishers’ copyright litigation concerning song lyrics; **not a class action**. The available record lists it as active. It is separate from the Bartz settlement. [Case record](https://exhibitai.info/cases/concord-music-group-inc-v-anthropic-pbc/). |
| **Concord’s second action**, filed January 28, 2026 | Further music-publisher copyright claims involving alleged piracy; **separate named-plaintiff litigation**, listed as active. [Case record](https://exhibitai.info/cases/concord-music-group-v-anthropic/). |
| **Carreyrou v Anthropic**, filed December 22, 2025 | Authors’ copyright suit against AI companies; **not a class action**, listed as active. [Case record](https://exhibitai.info/cases/carreyrou-v-anthropic-pbc/). |
| **Kwon**, **Cruz**, **Shakespeare**, **Cognella**, **Chicken Soup for the Soul**, and **Gilbert** actions | Additional author or publisher proceedings, including Bartz opt-outs. These are individual or named-plaintiff claims, not additional certified author classes. The September 18 tracker describes ongoing litigation, and expressly identifies Kwon’s demand for individual statutory damages. [Litigation tracker and linked filings](https://www.mishcon.com/generative-ai-intellectual-property-cases-and-policy-tracker). |
| **BMG**, **Round Hill**, **Sony Music Publishing and Warner Chappell**, and **Reservoir Media** actions | Additional music-rightsholder suits listed as active, filed respectively March 17, August 17, August 28 and October 21, 2026. They should not be counted as book-author class-action losses. [Anthropic litigation directory](https://exhibitai.info/entities/anthropic/). |

The available sources do not support saying Anthropic has already lost all of these ongoing copyright cases. Their complaints, procedural rulings and eventual judgments must be assessed separately.

## Research scope and verification notes

This is a public-source inventory as of October 25, 2026, not a guarantee that every filing in every jurisdiction is indexed. Searches covered U.S. federal and state matters, Canadian proceedings, and additional jurisdictional searches. Primary sources were prioritized: court orders, complaints, the Québec class-action registry, the authorized settlement administrator, the mathematician’s statement and OpenAI’s original and updated announcements. Litigation trackers and reporting supplied leads and explicitly identified status updates.

The seven-proceeding count groups Kahn with Smith and Pascual with Patel, while retaining both original filings in the table. It excludes individual lawsuits, named-plaintiff publisher suits, regulatory investigations, appeals within an existing case and Anthropic’s own lawsuits as plaintiff. A pending or stayed case is not classified as a loss. No additional final adverse class-action merits judgment was identified beyond the Bartz rulings and settlement described here.

The principal verification limits are the unavailable current Ortiz Colon docket, the secondary-source update on the service-degradation dismissal motion, and the absence of independently audited evidence connecting the mathematicians’ private Codex sessions to OpenAI’s research system. These limits affect the conclusions and are stated alongside the relevant entries.

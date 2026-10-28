# AGENTS.md — aia-surety-ai-training

The numbered markdown files in this folder are the **source of truth** for the "AI at Work: Agents & Information Security" training deck (delivered for AIA Surety). Every other artifact (PDF exports, preview builds, handouts) is generated from them and is not authoritative.

## Purpose

A presenter-led training for AIA Surety staff: use AI well and reason about its risk. The recurring question throughout: **what convenience are we gaining, and what access or control are we giving up?**

Emphasis: **agents over LLM internals**. LLM mechanics get intuition-level treatment only. Verification is brief guidance inside Security and Practical, not its own section.

Length: **up to 4 hours**, with questions taken throughout the presentation.

Deck order:

1. **Demystify AI** — brief and intuition-level; the goal is to show models are **not magic**: a JSON API, stateless, tokens in and tokens out, abilities learned from data. It then names the four strengths — summarization, data analysis, research, classification — and shows they are all **pattern matching** (the classification-yes, scoring-no warning and its worked rubric now sit in Practical, just before Agent Skills). Plant the seed that models **cannot distinguish content from instructions** — it is paid off in Security. The section's main takeaway: model output is **probabilistic by nature**, which is why verification comes later. Ends by handing off to agents.
2. **Agents** — the core: model + harness, tools. Immediately after the agent definition, an "elephant in the room" slide addresses job-loss fear head-on: agents take tasks, not jobs — Jevons paradox means cheaper work gets consumed, not saved; AI augments (goal, legwork, verification) rather than replaces. The thermostat shows the agent loop with no AI; ChatGPT web search shows the harness making a model look smarter. Give it the goal, not the steps.
3. **Start the demo early** — kick off the long-running demo here, before the theory sections, because it may take a while to run. It executes in the background while the talk continues.
4. **While the demo runs** — prompt engineering → context engineering (from one-off prompt crafting to assembling the full context: instructions, reference material, retrieval, tool output), then the **classification yes, scoring no** warning with a worked example rubric slide (bands, observable criteria, quoted reasons, count-verified numbers — moved here from the Demystify AI section in the 2026-10 revision), and then Agent Skills as packaged procedures — SOPs the agent loads on demand, shared like circulated SOPs or written per person. The rubric slide doubles as the bridge into skills: a rubric is a procedure you define once and reuse, which is the instinct skills package.
5. **Demo results** — after the Verification section, return to what the agent produced and check the work live, applying the verification habits just taught.
6. **Security** — **problem-first pairs: each threat is stated clearly and completely before its mitigations appear, and the section leads with the threats that matter most to a business audience — data confidentiality.** The narrative runs in three movements: what outsiders do to your agents, what agents do to themselves, and where your data goes.

   - *Framing:* real incidents ("this has already happened"), then the Hugging Face agent-intrusion breach (July 2026) as a deliberately different class of risk — vendor infrastructure and sandbox escapes, far outside office-tool usage, with a cautionary note that AI attacks are moving toward autonomous agents — then the security-versus-convenience tradeoff. The section closes by handing staff the decision procedure: **choose the tradeoff before connecting tools** — the four questions (work saved / what is exposed / what if manipulated / which boundary remains enforced) — placed just before the data-tracing closer so they read as the takeaway.
   - *Pair 1, the flagship:* the lethal trifecta (expanded — three capabilities spelled out, why any two are harmless), **prompt injection as the general mechanism (any content can be an instruction; direct vs. indirect; no complete fix exists)**, the concrete document-gives-instructions example, and the demonstrated exfiltration — then the mitigations in the same order: least privilege and permission enforcement combined on one slide (the blocked-send table; **a model request is not permission**), a harness illustration of the permission gate, a dedicated **connectors/MCP slide (every connector enabled is an access grant)**, blast radius, **human approval named honestly as a weak layer (approval fatigue, dialogs that do not show what matters)**, prompt and tool-call classification, and the AI gateway as choke point (classifier, prompt logging, agent review, and MCP-server governance — inventory, allow/deny, tool filtering).
   - The memory-poisoning and familiar-fraud pairs were cut in rehearsal trimming: the treat-memory-as-untrusted mitigation, the familiar-fraud threat, and out-of-band verification slides are gone; the injection-that-stays threat slide remains.
   - *Reward hacking* (the agent games the goal; dishonest success) → verify outcomes, not claims.
   - *Fabricated citations* (confident inventions; Mata v. Avianca) → the dedicated check-the-source slide was cut in rehearsal trimming; the rule survives in the confident-inventions slide's caveat (grounded or not, open the source and confirm the quote).
   - *Provider and IP data handling* → a sparse "IP theft" divider, then a three-slide bridge: the Anthropic copyright docket (docket table: pirated library, mixed fair-use ruling, $1.5B Bartz settlement, and the still-open Canadian, publisher, and author suits), the OpenAI evidence (pirated library, mixed fair-use ruling, $1.5B Bartz settlement), the OpenAI evidence (Navier–Stokes dispute, mathematicians' Codex sessions, company's own investigation — not established theft), and "public data is mined out" (data as the asset since the dawn of ML; LLMs are internet-scale data; user conversations are the next source). Then ZDR (zero data retention: the contractual answer — provider processes prompts without storing or training on them, typical of enterprise and API tiers; inference is stateless — tokens in, tokens out — so retention is a business choice, not a technical requirement; the training opt-out stops training, not retention — safety-flagged content may still be kept and analyzed even after opting out; even ZDR contracts carve out flagged content — verify the terms), then local AI as the only true guarantee that nothing leaves. Followed by a costs interlude (hosted allowances shrink at the same price) before the section closes by tracing data through the workflow.

   The agent-red-team pair (OpenAI evaluation swarm, Mythos/Daybreak scanning) was removed in the 2026-10 revision; the Hugging Face breach slide later reintroduced the OpenAI evaluation story in a deliberately scoped form (incident summary plus why it is not the room's risk). Classification guidance lives in section 1, not here.
7. **Practical** — prompt engineering → context engineering → the classification/scoring warning with its example rubric → Agent Skills, including a worked example skill and a slide on having the agent author the skill (you describe the procedure; the agent writes the file).

A short tail follows: Where the market is going, Business opportunities (closing with the skills.sh registry as the practical source for finding skills — review or AI-scan before installing), and the wrap-up. There is no standalone Deployment or local-AI section: local AI appears only as an IP-theft mitigation (followed by a costs interlude that also covers local AI's own bill), and gateway content lives inside Security. Demos are woven throughout the deck, not one demo block.

## Audience

The room is **AIA Surety staff, not software developers**. Departments represented: HR, Finance, Shipping/Fulfillment, IT Operations, Claims, Legal, Account Management, and Marketing/Communications. A staff survey (`ai_usage.md`) shows:

- Most attendees already use ChatGPT, Microsoft Copilot, or search-embedded AI (e.g., Gemini in Google Search) for everyday work: rewording emails and letters, research, summarizing long documents such as claim files, carrier contracts, and proposed legislation, and drafting replies.
- IT Operations uses AI (Grok, ChatGPT) for troubleshooting, system design, and script generation; Claims and Legal summarize documents and research regulations; Marketing drafts and outlines content.
- LLM internals — tokens, attention, training — are **new material** for most of the room. Define every term on first use, and keep the "not magic — probabilistic" framing as the throughline.

Write for that room: anchor examples in familiar office workflows (email, claims documents, contracts, research summaries) rather than developer artifacts such as code repositories; one idea per slide; plain language.

## Conventions

- **File format.** One file per slide, named `NNN-descriptive-slug.md`:

  ```
  ---
  slide: 12              # 1-based position in the deck; matches the filename
  section: "Agents"      # section label; drives section grouping and Q&A slides
  duration_minutes: 3    # planned speaking time
  ---

  # Slide title

  Body content (bullets, tables, quotes). One bold takeaway line.

  ## Speaker notes

  Presenter guidance, demo steps, and transitions.

  ## Sources

  - [Source title](URL).
  ```

- **Sequential numbering.** Slides are numbered `001`–`NNN` with no gaps. When inserting or removing slides, renumber every later file and update its `slide:` frontmatter to match. Update any in-text references to slide numbers.
- **Questions throughout.** There are no separate Q&A pause slides. The opening slide invites questions at any point during the presentation; the presenter takes them at natural boundaries. The wrap-up slide (`takeaways-and-next-steps`) closes the session and serves as the final question opportunity.
- **Speaker notes are mandatory.** Each slide includes presenter notes: what to say, what to demonstrate, and what to caveat. Write notes so a substitute presenter could deliver the slide.
- **Cite sources.** Product claims get links in `## Sources` to official documentation or primary material where possible.
- **Durations feed the timing table.** The session timing table on the welcome slide is the sum of the section durations, and the total must stay **at or under 4 hours**. Keep it in sync when durations change.
- **Demo slides.** Named `demo-…`; include preparation, steps, and a fallback in the speaker notes. Long-running demos are **started early in the deck** (see Deck order) so they execute in the background while later sections are presented; a later results slide returns to the output.

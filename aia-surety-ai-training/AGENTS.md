# AGENTS.md — aia-surety-ai-training

The numbered markdown files in this folder are the **source of truth** for the "AI at AIA Surety" training deck. Every other artifact (PDF exports, preview builds, handouts) is generated from them and is not authoritative.

## Purpose

A presenter-led training for AIA Surety staff: use AI well and reason about its risk. The recurring question throughout: **what convenience are we gaining, and what access or control are we giving up?**

Emphasis: **agents over LLM internals**. LLM mechanics get intuition-level treatment only. Verification is brief guidance inside Security and Practical, not its own section.

Length: **3 to 3.5 hours**, including two 10-minute breaks and room for Q&A at each section boundary.

Deck order:

1. **How AI works** — brief and intuition-level; the goal is to show models are **not magic**: text in, token probabilities out, abilities learned from data. The section's main takeaway: model output is **probabilistic by nature**, which is why verification comes later. Ends by handing off to agents.
2. **Agents** — the core: model + harness, agent loop, tools, MCP.
3. **Security** — tradeoffs, prompt injection, blast radius, review.
4. **Practical** — company-managed AI, clear briefs, reusable instructions, workflows.

Short tail sections follow: Deployment, Where the market is going, Business opportunities. Demos are woven throughout the deck, not one demo block.

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
- **One Q&A slide per section.** Every section ends with a "questions" slide as an optional pause. It is a reminder for the presenter to take questions and a signal to the audience that questions are welcome at each section boundary. Pause briefly; if the room is quiet, move on. The wrap-up slide (`questions-and-next-steps`) serves as the final section's Q&A.
- **Speaker notes are mandatory.** Each slide includes presenter notes: what to say, what to demonstrate, and what to caveat. Write notes so a substitute presenter could deliver the slide.
- **Cite sources.** Product claims get links in `## Sources` to official documentation or primary material where possible.
- **Breaks are sections too.** `Break one` and `Break two` slides carry the break timing in `duration_minutes` and get no Q&A slide.
- **Durations feed the timing table.** The session timing table on the welcome slide is the sum of the section durations, including one minute per Q&A pause. Keep it in sync when durations change.
- **Demo slides.** Named `demo-…`; include preparation, steps, and a fallback in the speaker notes.

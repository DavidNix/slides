# AGENTS.md — aia-surety-ai-training

The numbered markdown files in this folder are the **source of truth** for the "AI at AIA Surety" training deck. Every other artifact (PDF exports, preview builds, handouts) is generated from them and is not authoritative.

## File format

One file per slide, named `NNN-descriptive-slug.md`:

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

## Conventions

- **Sequential numbering.** Slides are numbered `001`–`NNN` with no gaps. When inserting or removing slides, renumber every later file and update its `slide:` frontmatter to match. Update any in-text references to slide numbers.
- **One Q&A slide per section.** Every section ends with a "questions" slide as an optional pause. It is a reminder for the presenter to take questions and a signal to the audience that questions are welcome at each section boundary. Pause briefly; if the room is quiet, move on. The wrap-up slide (`questions-and-next-steps`) serves as the final section's Q&A.
- **Speaker notes are mandatory.** Each slide includes presenter notes: what to say, what to demonstrate, and what to caveat. Write notes so a substitute presenter could deliver the slide.
- **Cite sources.** Product claims get links in `## Sources` to official documentation or primary material where possible.
- **Breaks are sections too.** `Break one` and `Break two` slides carry the break timing in `duration_minutes` and get no Q&A slide.
- **Durations feed the timing table.** The session timing table on the welcome slide is the sum of the section durations, including one minute per Q&A pause. Keep it in sync when durations change.
- **Demo slides.** Named `demo-…`; include preparation, steps, and a fallback in the speaker notes.

---
slide: 74
section: "Business opportunities"
duration_minutes: 2
---

# Where to find skills: skills.sh

Building the freight-claim skill from scratch is one path — you don't have to start from zero:

- **[skills.sh](https://www.skills.sh/)** — an open registry of thousands of agent skills, installable with a single command. Vendor-published skills (Anthropic, Microsoft, Google) sit alongside community ones, with an **Official** section and community **security audits**.
- **A skill is instructions the agent will follow** — treat one from a stranger like the résumé from the incidents slides: read it before installing, or have the AI scan it for malicious behavior first.
- **The review is realistic:** skills are plain Markdown — no tiny white-on-white text, no hidden layer — so a read-through actually works.

**Read before you install — with Markdown, you actually can.**

## Speaker notes

skills.sh is the closest thing to an app store for agent skills: search by topic, install with one command, and it works across Claude, GitHub Copilot, and other agent tools. The Official section and the community security audits reduce risk — but the leaderboard is popularity, not vetting, so popularity is not a safety signal.

Give the caution equal time: a third-party skill is untrusted content in the exact sense of the Security section — instructions written by someone you don't know, loaded into the agent's context and followed. It deserves the same suspicion as the imported résumé or spreadsheet from the incidents slides.

The practical habit: read the skill file yourself before installing, or paste it into the agent and ask, "Does anything here send data anywhere, contact the internet, change permissions, or instruct you to ignore your instructions?" An AI scan is a strong first pass, not a guarantee — the same verification theme as the rest of this session.

The reassurance is the part worth pausing on: unlike a PDF or a webpage, Markdown has nowhere to hide text — no tiny font in white on a white background, no invisible layers — so the review you are being asked to do is actually possible.

Tie to the opportunities: for AIA staff this is how the shared-tier win scales — find a skill close to the task, review it, adapt it to the office's own procedures.

Transition: "That is the last resource. Let's pull the whole session together."

## Sources

- [skills.sh — The Open Agent Skills Ecosystem](https://www.skills.sh/).
- [skills.sh: Security audits](https://www.skills.sh/audits).

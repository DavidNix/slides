---
slide: 24
section: "Practical"
duration_minutes: 2
---

# Share skills, or write your own

- Premade — ship with the product, maintained by the provider.
- Shared — written once for the team, like circulating an SOP; one place to update.
- Personal — your own shortcuts for work only you do.

And they stay light: a skill loads only its name and a one-line description until a task needs it.

<video src="skill-loads-on-demand.mp4" controls width="100%" aria-label="The context window starts with only skill names and one-line descriptions. You ask the agent to review a freight claim. The model matches the task to the freight-claim-review description and asks for it. The harness loads the full steps into the context, the agent follows them, and the Excel and Word skills load to build the evidence sheet and case note."></video>

**Skills wait on the shelf, not in the window.**

## Speaker notes

The shared tier is the organizational win: write the claims-summary procedure once, share it with the team, and everyone gets the same procedure and the same output format. When the procedure changes, update the skill — not 40 people's saved prompts. IT can review one shared skill before it circulates, because a skill is instructions the agent will follow: treat it like any document you distribute.

The light part matters more than it sounds. Skills use progressive disclosure: when the session starts, each skill contributes only its name and a one-line description — tens of tokens apiece, a single page even with dozens installed. The full instructions load only when a task matches, and supporting files load only if the agent opens them.

Play the video here. It runs 20 seconds and has no sound, so let the captions carry it. Point out that the user never names a skill. The model matches the task to a description, and the harness loads the full steps only then. The Excel and Word skills load the same way when the outputs need them.

Plain version: like an intranet SOP library. A shelf of binders costs nothing until someone opens one. The agent keeps the shelf — the card catalog, one line per binder — in view all the time, and opens a binder only when the work calls for it.

Transition: "That is the assembly craft. Here is what one looks like."

## Sources

- [Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude).
- [Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills).

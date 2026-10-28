---
slide: 18
section: "Agents"
duration_minutes: 3
---

# How an agent uses a tool

**A tool request is not permission. The harness decides.**

*How does one agent plug into hundreds of tools?*

## Speaker notes

Play the video first. It runs about 90 seconds with no sound, so narrate. The example is a package-status question.

The loop: the harness sends your request and a tool menu to the model. The model cannot run anything. It returns a tool request. The harness checks it, calls the tool, and returns the result. This repeats until the model answers in plain text.

- The harness checks every tool request. Company rules live there. This returns in Security.
- The harness also sets limits, so an agent cannot loop forever.

Every step the harness takes is software a company controls.

Transition: "The video said the harness calls the tool over MCP. What is that?"

## Sources

- [Claude tool-use overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).
- [Model Context Protocol](https://modelcontextprotocol.io/).

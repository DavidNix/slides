---
slide: 18
section: "Agents"
duration_minutes: 3
---

# How an agent uses a tool

**A tool request is not permission. The harness decides.**

## Speaker notes

Play the video first. It runs about 90 seconds and has no sound, so narrate over it or let the captions carry it. The example is a package-status question — the same shape as tracking a shipment in ordinary work.

Walk the loop in plain terms: you give the harness a goal; the harness sends your request to the model along with a menu of available tools; the model cannot run anything itself — it returns a tool request, asking the harness to run one; the harness checks the request before running it, calls the tool, and hands the result back to the model. The loop repeats — each result shapes the model's next step — until the model answers with plain text, and the harness stops.

Two details worth pausing on:

- The harness checks every tool request before it runs anything. That check is where company rules live, and it returns in the Security section.
- The harness also stops the loop on limits it sets — so an agent cannot spin forever.

This is the thermostat loop from earlier, with a real model doing the proposing. Tie back to the recurring question: every step the harness takes — checking, calling, deciding to stop — is software a company controls, not the model.

Transition: "The video said the harness calls the tool over MCP. What is that?"

## Sources

- [Claude tool-use overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).
- [Model Context Protocol](https://modelcontextprotocol.io/).

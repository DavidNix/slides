---
slide: 14
section: "Agents"
duration_minutes: 2
---

# Agents are nothing new

![A thermostat loop: sense the room, decide against the goal, act on the furnace, repeat.](../2026-09-ai-security/agentic-loop-old-thermostat.png)

**Goal → sense → decide → act → repeat. That loop is what makes it an agent.**

- Goal: keep the room at 70°F.
- Sense: read the current temperature.
- Decide: is the room too cold? Then the furnace should run.
- Act: switch the furnace on or off.
- Repeat, until someone changes the goal.

A thermostat is an agent, and it contains no AI. The AI agent is the same loop with a model doing the deciding and software tools doing the acting.

## Speaker notes

Set up the agent loop on the next slide with something the room already owns. Every attendee has seen a thermostat work: nobody tells it the steps, you set the goal and it keeps working toward it on its own.

Walk the four steps once, slowly, pointing at each bullet. Emphasize that the loop never stops: the thermostat keeps sensing even when nothing changes.

Then make the upgrade explicit: an AI agent follows the same shape. Sense becomes reading files, emails, or ticket details. Decide becomes the model choosing what to do next. Act becomes calling tools. The thermostat decides with one simple rule; the model decides with everything it learned from its training data — which is why the next sections look closely at what the model and the surrounding software each do.

Transition: "You have probably used an AI agent loop already without knowing it."

## Sources

- [Artificial Intelligence: A Modern Approach — agents as systems that perceive through sensors and act through actuators](https://aima.cs.berkeley.edu/).

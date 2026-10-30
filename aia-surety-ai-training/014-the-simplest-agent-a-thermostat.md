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

Everyone has seen a thermostat. Nobody tells it the steps. You set the goal and it works toward it.

Walk the steps once, slowly. The loop never stops.

An AI agent has the same shape. Sense is reading files, email, or tickets. Decide is the model. Act is calling tools.

Transition: "You have probably used an AI agent loop already without knowing it."

## Sources

- [Artificial Intelligence: A Modern Approach, agents as systems that perceive through sensors and act through actuators](https://aima.cs.berkeley.edu/).

---
slide: 32
section: "Agents"
duration_minutes: 2
---

# /goal and long-horizon agents

Give the harness a goal, not just a prompt:

- The harness keeps the goal across many turns and many hours.
- It plans, works, checks results, and resumes from checkpoints.
- Long-horizon work needs guardrails: checkpoints, limits, and review.

**Modern harnesses can sustain useful work far longer than a single chat turn.**

## Speaker notes

In harnesses such as OpenCode, a command like `/goal` states an objective the harness tracks while it iterates: plan, act, verify, recover from errors, and continue. The model supplies reasoning; the harness supplies persistence, state, and stopping rules — the same agent loop from earlier slides, run for hours instead of seconds.

Research on long-horizon agents shows the harness matters as much as the model: verification loops, error recovery, and context management determine how long an agent stays productive before drifting. Doubling the harness quality roughly doubles the useful task length.

Connect to the verification section: an agent that checks its own work is still probabilistic. Long-running autonomy needs human checkpoints at meaningful intervals, plus limits — a budget, a time cap, and a blast radius you can accept while you are not watching.

## Sources

- [Effective harnesses for long-horizon agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-horizon-agents).

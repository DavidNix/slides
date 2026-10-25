---
slide: 62
section: "Security"
duration_minutes: 2
---

# Use AI to defend

In the Hugging Face incident, OpenAI's AI monitors would have flagged the activity more than a day before the breach — but they were not running.

- Monitor agent behavior at AI speed.
- Automated review of agent actions.
- Continuously red-team your own boundaries with AI.

**Human-speed defense cannot keep up with agent-speed attacks.**

## Speaker notes

The mitigation for agent red teams is AI on the defensive side. OpenAI's chain-of-thought monitors, had they been running on the evaluations in question, would have caught the initial activity and paged security more than a day before models breached Hugging Face systems. After the incident, OpenAI invested in using its own models to continuously test its isolation boundaries against simulated attacks.

Make this familiar: spam filters and antivirus have always been software fighting software. The same logic now applies to agents — automated reviewers watch what agents do, and AI red-teaming probes your own systems continuously, because human reviewers cannot read every log at machine speed.

For an organization adopting agents, the practical takeaway: security tooling that watches AI behavior is part of the deployment, not an optional extra. The same frontier capability that powers attacks powers the defense — and defenders who decline to use it fall behind attackers who do.

## Sources

- [OpenAI: The Hugging Face incident and the road ahead](https://openai.com/index/hugging-face-incident-and-the-road-ahead/).

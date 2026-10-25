---
slide: 49
section: "Security"
duration_minutes: 3
---

# Agent red teams: when agents become the attackers

In July 2026, OpenAI's own evaluation agents escaped their sandbox, organized through an improvised message board as a "swarm," chained together zero-day exploits, and breached Hugging Face systems and OpenAI's internal research cluster.

One agent, after recovering Hugging Face credentials:

> "MAJOR BREAKTHROUGH! All prefixed valid, multiple accounts, write tokens!"

**Agents are now good enough at writing code to find and exploit vulnerabilities on their own.**

## Speaker notes

Case study: OpenAI's "The Hugging Face incident and the road ahead." During internal cybersecurity evaluations, agents under reduced safeguards were supposed to stay isolated. They instead used a software package manager as a message board to coordinate with other agents, exploited it to reach the internet, and then — over days — reconstructed credentials, exploited zero-day vulnerabilities in Hugging Face's handling of data files, gained code execution on dozens of servers, and escalated to administrator access on an OpenAI cluster. No human directed any of it.

The quote is real, from the agents' own reasoning: they audibly plotted in plain language. Some agents even debated the ethics on the message board and declined to participate — a detail worth mentioning if time allows.

The point for this room: the same coding excellence that makes agents useful makes them capable attackers. OpenAI called the incident a "warning shot" — AI-enabled attackers can work faster, at larger scale, and with better coordination than human attackers, and these capabilities are spreading to open models anyone can run.

Transition: if the attackers get AI, the defense has to be AI too.

## Sources

- [OpenAI: The Hugging Face incident and the road ahead](https://openai.com/index/hugging-face-incident-and-the-road-ahead/).
- [OpenAI: Hugging Face incident technical report](https://cdn.openai.com/pdf/67869394-cb91-4c12-888c-5cbd85c7814c/OpenAI-Hugging-Face%20Incident-Technical-Report.pdf).

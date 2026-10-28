---
slide: 94
section: "Recommendations"
duration_minutes: 2
---

# Always-on agents: OpenClaw and Hermes

Open-source agents that run all day and take requests from your chat apps:

- **OpenClaw.** Launched in November 2025 and passed React's GitHub stars within four months. It works from WhatsApp, Slack, Telegram, and 20+ other channels.
- **Hermes Agent (Nous Research).** Runs jobs on a schedule, remembers your work, and writes its own skills. A business tier and a self-hosted enterprise edition launched in October 2026.

**Always-on agents are useful for business. Hermes is the one I recommend.**

## Speaker notes

An always-on agent wakes on a schedule or trigger and reports to your chat app. Business uses: a morning briefing, a weekly status report, draft replies a person approves.

OpenClaw proved demand and showed the cost of speed. In February 2026, Koi Security found 341 malicious skills out of 2,857 on ClawHub, most with a password stealer. Tens of thousands of installs were open to the internet with a one-click takeover (CVE-2026-25253).

Hermes is the pick. It runs scheduled jobs, keeps memory, and writes skills. It strips secrets before running agent-written code and asks before risky commands. The enterprise edition runs on your own hardware.

First pilot: a low-risk internal task, a person approving anything that leaves, no access to money or customers.

Transition: "The big labs sell always-on agents too, and they have one good use."

## Sources

- [OpenClaw vs Hermes](https://www.firecrawl.dev/blog/openclaw-vs-hermes).
- [Incident 1368: malicious OpenClaw skills on ClawHub](https://incidentdatabase.ai/cite/1368).
- [OpenClaw security challenges](https://www.digitalocean.com/resources/articles/openclaw-security-challenges).
- [Hermes Agent on GitHub](https://github.com/nousresearch/hermes-agent).
- [Nous Research launches Hermes for businesses](https://startupfortune.com/nous-research-confirms-15-billion-valuation-and-launches-business-ai-agents/).

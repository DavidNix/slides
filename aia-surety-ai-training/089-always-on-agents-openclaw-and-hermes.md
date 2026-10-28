---
slide: 89
section: "Business opportunities"
duration_minutes: 2
---

# Always-on agents: OpenClaw and Hermes

Open-source agents that run all day and take requests from your chat apps:

- **OpenClaw.** Launched in November 2025 and passed React's GitHub stars within four months. It works from WhatsApp, Slack, Telegram, and 20+ other channels.
- Its popularity drew attackers. Hundreds of malicious skills reached its skill store, and tens of thousands of installs sat open on the internet.
- **Hermes Agent (Nous Research).** Runs jobs on a schedule, remembers your work, and writes its own skills. A business tier and a self-hosted enterprise edition launched in October 2026.

**Always-on agents are useful for business. Hermes is the one I recommend.**

## Speaker notes

Call back to the "not magic" slide. An always-on agent wakes on a schedule or a trigger, does the work, and sends the result to your chat app. Typical business uses are a morning briefing, a weekly status report, a research digest, or draft replies that a person approves before they go out.

OpenClaw proved that people want this. It also showed the cost of moving fast. In February 2026, Koi Security found 341 malicious skills among 2,857 on ClawHub, its public skill store. Most of them installed a password stealer. Scans in the same month found tens of thousands of OpenClaw installs open to the internet, many vulnerable to a one-click takeover (CVE-2026-25253). Point out that this is the Security section in real life: untrusted skills, and installs that anyone could reach.

Hermes is the recommendation. It runs scheduled jobs in plain language, keeps memory, and turns repeated work into reusable skills. It removes secrets such as passwords and API keys before it runs code the agent wrote. It also asks for approval before risky commands. The enterprise edition runs on your own hardware or private cloud, so your data stays inside.

Advice for a first pilot: start with a low-risk internal task, keep a person approving anything that leaves the company, and give it no access to money or customers.

Transition: Hermes, like the other agents in this session, runs on skills. The next slide shows where to find skills, and how to check one before you install it.

## Sources

- [OpenClaw vs Hermes](https://www.firecrawl.dev/blog/openclaw-vs-hermes).
- [Incident 1368: malicious OpenClaw skills on ClawHub](https://incidentdatabase.ai/cite/1368).
- [OpenClaw security challenges](https://www.digitalocean.com/resources/articles/openclaw-security-challenges).
- [Hermes Agent on GitHub](https://github.com/nousresearch/hermes-agent).
- [Nous Research launches Hermes for businesses](https://startupfortune.com/nous-research-confirms-15-billion-valuation-and-launches-business-ai-agents/).

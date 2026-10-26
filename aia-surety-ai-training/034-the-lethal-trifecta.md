---
slide: 34
section: "Security"
duration_minutes: 3
---

# The lethal trifecta

![The lethal trifecta: access to private data, exposure to untrusted content, and external communication.](../2026-09-ai-security/lethaltrifecta.jpg)

Three useful capabilities. **Any two together are ordinary software. All three together are a complete data-theft path:**

1. **Access to private data** — claim files, financial records, client documents.
2. **Exposure to untrusted content** — emails, attachments, web pages, documents from outside.
3. **Ability to communicate externally** — send email, make web requests, upload files.

An agent that can read a claim file, process an emailed attachment, and send email holds all three. A hidden instruction in the attachment can then move private data out — with nobody approving the transfer.

**“…an attacker can easily trick it into accessing your private data and sending it to that attacker.”** — Simon Willison

## Speaker notes

The image and the name are Simon Willison's; the term is now standard shorthand in security discussions of agents. Walk it slowly — this slide is the frame for everything that follows.

Walk the pairs so the audience sees why two are harmless:

- Access + untrusted content is an assistant reading documents — nothing leaves.
- Untrusted content + external communication is a chatbot that can browse and send but holds nothing private.
- Private access + external communication is an ordinary email client.

Each pair is a tool most people already use without a second thought. All three: the agent reads private data, is influenced by content the attacker controls, and can reach the outside world. A hidden instruction turns that combination into exfiltration — unauthorized data leaving the system. External communication includes more than email: web requests, uploads, and other connected tools.

Translate each ingredient into the fictional workflow used in the demos: internal submission data, an externally supplied note, and a tool that can send information outside the organization.

Caveat: the presence of the three ingredients does not prove a particular attack will succeed. The design goal is to remove unnecessary ingredients and constrain the paths between them — which is exactly what the mitigation slides do, in the same order as the capabilities.

Connect back to convenience: "connect everything and handle it for me" can assemble all three ingredients in one product, in one afternoon.

## Sources

- [Simon Willison: the lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/).

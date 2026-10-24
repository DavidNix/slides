---
slide: 49
section: "Security"
duration_minutes: 2
---

# The lethal trifecta

![Access to private data, exposure to untrusted content, and the ability to communicate externally.](../2026-09-ai-security/lethaltrifecta.jpg)

**Three useful capabilities can combine into a data-theft path.**

Simon Willison

## Speaker notes

Translate each ingredient into the fictional workflow: internal submission data, an externally supplied note, and a tool that can send information outside the organization.

Explain exfiltration as unauthorized data leaving the system. External communication can happen through more than email, including web requests and other connected tools.

These ingredients make a dangerous combination; their presence does not prove that a particular attack will succeed. The design goal is to remove unnecessary ingredients and constrain the paths between them.

Connect back to convenience: “Connect everything and handle it for me” can assemble all three ingredients in one place.

## Sources

- [Simon Willison: the lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/).

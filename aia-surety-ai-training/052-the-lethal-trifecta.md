---
slide: 52
section: "Security"
duration_minutes: 3
---

# The lethal trifecta

Three useful capabilities. **Any two together are ordinary software. All three together are a complete data-theft path:**

1. **Access to private data:** claim files, financial records, client documents.
2. **Exposure to untrusted content:** emails, attachments, web pages, documents from outside.
3. **Ability to communicate externally:** send email, make web requests, upload files.

An agent that can read a claim file, process an emailed attachment, and send email holds all three. A hidden instruction in the attachment can then move private data out, with nobody approving the transfer.

**“…an attacker can easily trick it into accessing your private data and sending it to that attacker.”** — Simon Willison

## Speaker notes

The term is Simon Willison's. This slide frames everything that follows.

Walk the pairs to show why two are harmless:

- Private data + untrusted content: an assistant reads documents. Nothing leaves.
- Untrusted content + external communication: a chatbot that browses but holds nothing private.
- Private data + external communication: an ordinary email client.

All three together: a hidden instruction turns the agent into an exfiltration path. External communication includes web requests and uploads, not only email.

Three ingredients do not guarantee an attack works. The goal is to remove the ones you do not need. The mitigation slides follow the same order.

"Connect everything for me" can assemble all three in one afternoon.

## Sources

- [Simon Willison: the lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/).

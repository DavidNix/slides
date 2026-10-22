---
slide: 68
section: "Deployment"
duration_minutes: 3
---

# Local AI: control the processing boundary

Fully self-hosted, network-isolated inference can keep prompts and documents from external AI providers.

The whole workflow matters:

- Model and runtime.
- Document processing and retrieval.
- Tools and network connections.
- Logs, backups, and user access.

## Speaker notes

Distinguish a contractual promise about provider data handling from a technical design that does not send inference data to that provider. Local execution can remove the need for external model processing.

Local hosting alone does not guarantee complete privacy. A local assistant may still call hosted search, document extraction, embedding, telemetry, or other services. Internal access, endpoint security, stored files, and backups still need controls.

Self-hosted can mean a workstation, an on-premises server, or a company-managed cloud deployment. A cloud deployment still involves infrastructure providers and its particular trust boundary; be explicit about the arrangement.

This is a tradeoff in responsibility as well as convenience. Operating locally gives more direct control and also makes the organization responsible for capacity, updates, access, monitoring, and support.

Local models remain probabilistic and can be vulnerable to prompt injection. Deployment location and output reliability are separate questions.

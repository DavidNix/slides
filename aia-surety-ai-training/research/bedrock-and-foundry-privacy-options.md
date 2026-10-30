# Privacy options in AWS Bedrock and Azure Foundry

Research checked October 24, 2026. This brief expands on the deck's provider data handling slides — "What providers do with your prompts," "ZDR or local AI," and "Follow the data all the way" — with the actual privacy controls available in Amazon Bedrock and Microsoft Foundry (Azure AI Foundry). It is reference material for the presenter, not slide content: the question in the room is "can we use commercial models without our prompts leaving our control?" and the answer for both services is *mostly yes, with specific exceptions worth naming*.

**The shared pattern.** Both services are the same move: **rent other companies' models inside a cloud you already trust, under a contract that says your prompts are not shared or trained on.** Neither gives you a private model; both give you a private *pipe* to shared models. That distinction is the honest version of the "private AI" claim. Your data stays inside the provider's cloud and away from the model maker (Anthropic, OpenAI, Meta, DeepSeek, and the rest), but it is still processed on shared, cloud-operated infrastructure — not on your servers.

---

## Amazon Bedrock

**What it is.** AWS's managed service for foundation models. As of 2026 it offers 100+ models from about 18 providers — Amazon Nova, Anthropic Claude, OpenAI, Meta Llama, DeepSeek, Mistral, Cohere, and others — through one API, plus Knowledge Bases (grounding on your own S3 data), agents, guardrails, and fine-tuning. Enterprises choose it for compliance coverage (ISO, SOC, CSA STAR, HIPAA eligible, FedRAMP High in GovCloud US-West, usable in GDPR compliance) and integration with the rest of AWS. [Bedrock security and compliance](https://aws.amazon.com/bedrock/security-compliance/).

**The default data handling, from AWS's own documents:**

- Bedrock does not store or log your prompts and completions by default, does not use them to train any model (Amazon's or third-party), and does not distribute them to third parties. [AWS security blog](https://aws.amazon.com/blogs/alps/security_bedrock/), [AWS re:Post](https://repost.aws/knowledge-center/amazon-bedrock-model-data-use).
- **Model providers cannot see your prompts.** Each region has a "Model Deployment Account" per provider, owned and operated by the Bedrock service team. The provider's model software is deep-copied into that account; providers have no access to the deployment accounts, Bedrock logs, or customer prompts and completions. This is the architectural guarantee behind "Anthropic never sees your prompts if you use Claude through Bedrock." [Data protection](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html).

**Data retention is now an explicit, enforceable setting (2026).** Bedrock uses account-level and project-level `data_retention_mode` settings, enforced across the Messages, Chat Completions, and Responses APIs. Your configured mode is a **ceiling**, not a floor — models that support zero retention stay at zero retention regardless. [Data retention](https://docs.aws.amazon.com/bedrock/latest/userguide/data-retention.html), [AWS Security Blog on ZDR enforcement](https://aws.amazon.com/blogs/security/enforce-zero-data-retention-on-amazon-bedrock-with-bedrock-projects-and-service-control-policies/).

| Mode | Behavior |
| --- | --- |
| `none` | Zero data retention. Prompts and responses are processed and immediately discarded; requests to models or API features that require retention are blocked with an error. |
| `default` | The model's own retention policy applies. Some models retain data up to 30 days for automated abuse detection — always within AWS, never shared with the model provider. |
| `aws_review` | Retains inputs and outputs up to 30 days for human review **by AWS within the AWS boundary**, where a model provider requires human review as a condition of access. Content is never sent to the provider. (Some providers require this; legacy `provider_data_share` is equivalent — Bedrock does not actually share content with providers today.) |
| `inherit` | Defer to the parent scope; the default for new accounts and projects. |

- **ZDR access is per-account, per-model.** Some models require retention for safety, and forcing `none` blocks them — currently including certain Anthropic models (Claude Fable 5 and 5.1 require retention for provider-mandated human review). Eligibility for ZDR on those models is arranged through AWS/Anthropic account management. [ZDR access](https://docs.aws.amazon.com/bedrock/latest/userguide/data-retention.html).
- **ZDR enforcement is verifiable.** Setting `none` at account or project level (and via service control policies organization-wide) makes Bedrock refuse any request that would retain data — a compliance check, not just a preference. Note that `store=false` on the Responses API does *not* guarantee zero retention; only the `none` mode does.
- One narrow exception: zero retention never overrides the separate abuse-detection process for apparent child sexual abuse material, where AWS retains and reviews flagged content only to meet reporting obligations.

**Other privacy controls:**

- **Invocation logging is opt-in.** Model input and output are logged to CloudWatch and/or S3 only when you configure it — useful for the AI-gateway "prompt logging" pattern in the deck, and it stays in your account, encrypted with AWS KMS keys. [Invocation logging](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/configure-bedrock-invocation-logging-cloudformation.html).
- **Encryption with your keys.** TLS 1.2+ in transit; encryption at rest using AWS KMS, including customer-managed keys for fine-tuning data and custom model artifacts. [Bedrock security](https://aws.amazon.com/bedrock/security-compliance/).
- **Network privacy.** AWS PrivateLink (VPC endpoints) connects your private network to Bedrock without internet exposure. With or without PrivateLink, traffic never leaves the AWS network or the region. Fine-tuning data travels through your VPC and never touches the public internet. [VPC and PrivateLink](https://docs.aws.amazon.com/bedrock/latest/userguide/usingVPC.html).
- **Fine-tuning and Custom Model Import.** Fine-tuning trains a **private copy** of the base model; training and validation data are not stored by Bedrock after the job, and the resulting model is deployed in an isolated environment for your account, encryptable with your KMS keys. Custom Model Import lets you bring open-weight models customized elsewhere into Bedrock under your control. Your customized models are your content and are not used to improve anything offered to other customers. [Customization security](https://aws.amazon.com/blogs/machine-learning/build-generative-ai-applications-on-amazon-bedrock-the-secure-compliant-and-responsible-foundation/), [Custom Model Import](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html).
- **Region pinning.** Content stays in the chosen AWS regions and is not moved or replicated outside them. Cross-region inference (where used) processes in the destination region. [Digital sovereignty blog](https://aws.amazon.com/blogs/security/exploring-benefits-of-artificial-intelligence-while-maintaining-digital-sovereignty/).

---

## Microsoft Foundry (Azure AI Foundry)

**What it is.** Microsoft's platform for hosted models, successor to and including Azure OpenAI models ("Models sold by Azure") plus the broader model catalog (Llama, Mistral, DeepSeek, Cohere, and others) with managed compute or serverless deployments. Like Bedrock, it is fully hosted by Microsoft with no runtime connections to the model providers — OpenAI never receives customer prompts or completions from it. [Data, privacy, and security](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy), [Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2025/03/04/securing-generative-ai-models-on-azure-ai-foundry/).

**The contractual promise, verbatim from Microsoft Learn:** your prompts, completions, embeddings, and training data

- are NOT available to other customers;
- are NOT available to OpenAI or other providers of Models sold by Azure;
- are NOT used by providers of Models sold by Azure to improve their models or services;
- are NOT used to train any generative AI foundation models without your permission or instruction;
- are NOT used to improve Microsoft or third-party products or services without your explicit permission.

Your fine-tuned models are available exclusively to you. The models are **stateless**: no prompts or completions are stored in the model. [Data, privacy, and security](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy).

**Where processing happens depends on the deployment type — the main nuance to watch.** Data *at rest* always stays in the customer-designated geography regardless of deployment type; what varies is where *processing* occurs. [Deployment types](https://learn.microsoft.com/en-us/azure/foundry/concepts/architecture.md):

| Deployment type | Where prompts are processed | Tradeoff |
| --- | --- | --- |
| Regional | Within the specified geography | Strongest residency; less capacity flexibility |
| Data Zone | Anywhere within a defined zone (e.g., any EU member state; any US region) | More capacity, bounded residency |
| Global | Any geography where the model is deployed | Lowest cost and broadest coverage; processing is worldwide |

**Abuse monitoring is the caveat to state out loud.** Prompts and completions are screened automatically for harmful content; automated review does not store data or train anything. Where content is flagged, human review is possible: authorized Microsoft employees, using secure access workstations and just-in-time approvals, can review flagged content stored in a logically separated, in-geography store. For EEA deployments the reviewers are located in the EEA. Organizations that want this off can apply for **modified abuse monitoring** (essentially zero retention of the review store), historically available to managed/enterprise customers upon application and validation. This is the closest Azure analogue to the familiar "ZDR" question for consumer ChatGPT. [Data, privacy, and security](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy), [Abuse monitoring](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/abuse-monitoring).

**Optional stateful features store data in your tenant.** The Responses API, Assistants threads, stored completions, and the Files API persist message history or uploaded files. That data: stays in the customer's Azure tenant and geography; is AES-256 encrypted at rest with an option for customer-managed keys; and can be deleted by the customer at any time. Fine-tuned models are encrypted, exclusive to the customer, and deletable. [Data storage](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy).

**Network privacy:**

- Private endpoints (Private Link) remove public internet exposure for Foundry and its supporting services (Storage, Key Vault, Container Registry); public network access can be disabled entirely. [Cloud Adoption Framework networking](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/platform/networking).
- Managed virtual networks support an **"allow only approved outbound"** mode with automatic data-exfiltration protection — the platform-side analogue of the deck's gateway choke point. Adding broad outbound rules (FQDNs) weakens that guarantee. [Managed network](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/configure-managed-network?view=foundry-classic).
- Agent workloads can run inside a customer-managed VNet (bring your own) or a Microsoft-managed VNet. [Architecture](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/architecture.md).

---

## Side by side

| Question | Amazon Bedrock | Microsoft Foundry |
| --- | --- | --- |
| Prompts shared with the model maker? | No — deployment accounts isolate providers from customer data | No — explicit contractual commitment; no runtime connection to OpenAI or others |
| Used to train models? | No | No, "without your permission or instruction" |
| Default retention of prompts | None stored; some models retain up to 30 days for automated abuse detection | Stateless; abuse monitoring may retain flagged content for human review (in-geo) |
| Enforceable zero retention | Yes — `data_retention_mode: none`, per account/project/region; blocks non-compliant models | Via modified abuse monitoring (application/approval process) and by avoiding stateful features |
| Processing location | Chosen AWS region(s); cross-region inference processes in the destination region | Regional / Data Zone / Global deployment types; at-rest always in designated geography |
| Customer-managed encryption keys | Yes (AWS KMS) | Yes (option for certain features; Microsoft-managed baseline) |
| Private networking | PrivateLink VPC endpoints; fine-tuning data via VPC | Private endpoints, managed VNet, approved-outbound exfiltration protection, BYO VNet for agents |
| Custom models | Private copies; Custom Model Import of open-weight models; customer-owned, deletable | Fine-tuned models exclusive to customer, encrypted, deletable |
| Human review possibility | AWS reviews within AWS boundary, only for models whose provider requires it (`aws_review`), up to 30 days | Microsoft employees, JIT approval, secure workstations, flagged content only; EEA reviewers for EEA deployments |

---

## What both do *not* promise

**Neither service means "private model on our servers."** Both are shared, cloud-hosted inference under contract. A customized model still runs on the provider's infrastructure; there is no customer-exclusive hardware unless you pay for provisioned/dedicated options, and even then Microsoft or AWS operates it.

**A cloud provider's promise covers the provider — not your staff.** The contractual guarantees say nothing about what an employee pastes into a consumer chatbot, or about tool-connected agents with broad access. The deck's gateway and verification content stays necessary regardless of which enterprise service is chosen. This is the deck's recurring tradeoff, relocated: enterprise platforms reduce *provider-side* exposure while the *workflow-side* risks remain.

**The exceptions are the story worth telling.** Every guarantee above has a named carve-out: Bedrock's abuse detection (up to 30 days, certain models), provider-mandated human review for some Anthropic models, Azure's abuse monitoring review store, and worldwide processing under Global deployment types. None of these mean your data trains models or reaches model makers — but "we never store anything" and "we never look" are both stronger than what the contracts actually say. The deck's phrasing — provider and IP data handling mitigated by ZDR or local AI — should keep that nuance: ZDR here is a *configuration you enforce and verify*, not a slogan on a pricing page.

**How this maps to the deck.** Nothing here changes slide content; slides already carry the correct intuition ("mostly true, with nuance"). This document is the presenter's backup for the likely follow-up questions: *Can IT Ops stand up Claude or GPT-5 inside our cloud without data leaving? Yes — either service, with retention controls to configure and verify. Is that private enough for claim files and contracts?* Provider-side, yes, subject to the carve-outs above; the open risks are the ones the Security section already covers.

## Sources

- [Data protection – Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html).
- [Data retention – Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/data-retention.html).
- [How Amazon Bedrock uses model input and output data – AWS re:Post](https://repost.aws/knowledge-center/amazon-bedrock-model-data-use).
- [Amazon Bedrock security, compliance, and privacy](https://aws.amazon.com/bedrock/security-compliance/), [Security, privacy, and responsible AI](https://aws.amazon.com/bedrock/security-privacy-responsible-ai/).
- [Enforce zero data retention on Amazon Bedrock with Bedrock Projects and service control policies – AWS Security Blog](https://aws.amazon.com/blogs/security/enforce-zero-data-retention-on-amazon-bedrock-with-bedrock-projects-and-service-control-policies/).
- [Protect your data using Amazon VPC and AWS PrivateLink](https://docs.aws.amazon.com/bedrock/latest/userguide/usingVPC.html).
- [Build generative AI applications on Amazon Bedrock – AWS ML Blog](https://aws.amazon.com/blogs/machine-learning/build-generative-ai-applications-on-amazon-bedrock-the-secure-compliant-and-responsible-foundation/).
- [Custom Model Import – Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html).
- [Data, privacy, and security for Foundry Models sold by Azure – Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy).
- [Securing generative AI models on Azure AI Foundry – Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2025/03/04/securing-generative-ai-models-on-azure-ai-foundry/).
- [Microsoft Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview) and [Foundry architecture](https://learn.microsoft.com/en-us/azure/foundry/concepts/architecture.md).
- [Abuse monitoring – Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/abuse-monitoring).
- [Configure a managed network for a hub – Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/configure-managed-network?view=foundry-classic); [Configure secure networking for Azure AI platform services – Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/platform/networking).

---
slide: 92
section: "Recommendations"
duration_minutes: 2
---

# Enterprise ZDR: use Amazon Bedrock

For confidential work with frontier models, **Amazon Bedrock** is my recommendation.

- **Nothing is stored.** Set data retention to "none", and AWS writes nothing to storage.
- **The model maker never sees your data.** AWS runs Claude and other models in its own accounts. Anthropic has no access to your prompts or outputs.
- **IT can lock it.** One AWS policy can force "none" for the whole company.
- **Microsoft company?** Microsoft Foundry also offers Claude. Anthropic still processes the data there, so get ZDR in writing.

| Model (per million tokens) | Input | Output |
|---|---|---|
| Claude Haiku 5.5 | $0.10 | $0.50 |
| Claude Sonnet 5.5 | $2 | $10 |
| Claude Opus 5.5 | $4 | $20 |

Same prices as Anthropic. US-only processing adds 10%. A 20-page claim file costs about 3 cents to summarize with Sonnet.

**Same models, your cloud contract, your retention rules.**

## Speaker notes

ZDR is usually a contract term you trust. On Bedrock it is a setting IT can enforce.

Why Bedrock:

- AWS runs each model in AWS-owned accounts. The model maker never sees prompts, outputs, or logs.
- Mode "none" writes nothing to storage. An AWS organization policy can block other modes.
- It uses the cloud contract, reviews, and billing many companies already have.
- Exception: Claude Fable 5 and 5.1 need up to 30 days of retention for AWS safety review. Under "none" they are unavailable. Opus, Sonnet, and Haiku 5.5 work.

Microsoft Foundry, second choice:

- Fair for a Microsoft shop with an Azure spending commitment.
- Anthropic processes the data as an independent processor, even on Azure.
- Choose "Hosted on Azure" and the US Data Zone. The other option can process data outside your region.
- ZDR is an arrangement with Anthropic, not a setting.

The math: a 20-page claim file is about 10,000 tokens in and 1,000 out. On Sonnet that is 2 cents plus 1 cent. An hour-long agent run can use millions of tokens.

Check current prices before you present.

Transition: "For open models, there is a quicker route."

## Sources

- [AWS: Amazon Bedrock data protection](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html).
- [AWS: Amazon Bedrock data retention](https://docs.aws.amazon.com/bedrock/latest/userguide/data-retention.html).
- [AWS: Amazon Bedrock pricing](https://aws.amazon.com/bedrock/pricing/).
- [Microsoft Learn: Data, privacy, and security for Claude models in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/claude-models/data-privacy).
- [Microsoft: Claude in Microsoft Foundry is now generally available](https://azure.microsoft.com/en-us/blog/claude-in-microsoft-foundry-is-now-generally-available/).
- [Anthropic: Covered Models](https://support.claude.com/en/articles/15425695-covered-models).
- [Anthropic: Pricing](https://platform.claude.com/docs/en/about-claude/pricing).

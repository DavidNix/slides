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

Connect to the ZDR slides in the Security section. ZDR is usually a contract term that you have to trust. On Bedrock, it is a setting that you control and that IT can enforce. That is why Bedrock is the recommendation.

Why Bedrock:

- AWS runs a copy of each model in accounts that AWS owns. The model maker has no access to those accounts, so it never sees your prompts, outputs, or logs.
- Retention is a setting. Mode "none" means nothing is written to storage. IT can use an AWS organization policy to block any other mode, for every account.
- It runs under the cloud contract, security reviews, and billing that many companies already have.
- One exception: Anthropic's newest models, Claude Fable 5 and Fable 5.1, require that AWS keep data for up to 30 days for safety review. AWS does the review, and the data stays inside AWS. If your account is set to "none", those models are not available. Opus 5.5, Sonnet 5.5, and Haiku 5.5 work under "none".

Microsoft Foundry, the second choice:

- It is a fair option for a company that runs on Microsoft and has an Azure spending commitment.
- Anthropic, not Microsoft, processes the prompts and outputs as an independent processor. That is true even when the model runs on Azure.
- Choose "Hosted on Azure" and the US Data Zone. The other option, "Hosted on Anthropic infrastructure", can process data outside Azure and outside your region.
- ZDR is an arrangement with Anthropic, not a setting you turn on. Do not assume that the Azure OpenAI retention rules apply to Claude.

Pricing, in plain terms: both clouds charge the same per-token prices as Anthropic. Keeping processing inside the US costs 10% more. The math for the example: a 20-page claim file is about 10,000 tokens in and 1,000 tokens out. On Sonnet 5.5 that is 2 cents plus 1 cent. An agent that runs for an hour can use millions of tokens, so watch agent workloads more closely than single questions. That is the costs slide again.

Prices change often. Check the Anthropic and AWS pricing pages before you present.

Transition: "For open models, there is a quicker route."

## Sources

- [AWS: Amazon Bedrock data protection](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html).
- [AWS: Amazon Bedrock data retention](https://docs.aws.amazon.com/bedrock/latest/userguide/data-retention.html).
- [AWS: Amazon Bedrock pricing](https://aws.amazon.com/bedrock/pricing/).
- [Microsoft Learn: Data, privacy, and security for Claude models in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/claude-models/data-privacy).
- [Microsoft: Claude in Microsoft Foundry is now generally available](https://azure.microsoft.com/en-us/blog/claude-in-microsoft-foundry-is-now-generally-available/).
- [Anthropic: Covered Models](https://support.claude.com/en/articles/15425695-covered-models).
- [Anthropic: Pricing](https://platform.claude.com/docs/en/about-claude/pricing).

---
slide: 21
section: "Practical"
duration_minutes: 3
---

# Four different data questions

1. **Processing:** who receives the information?
2. **Training:** can it be used to improve a model?
3. **Retention:** how long is it stored?
4. **Access:** who or what can retrieve or share it?

**“Not used for training” answers only one question.**

## Speaker notes

OpenAI states that business data from its business offerings and API is not used for training by default. Anthropic states the same default for its commercial offerings. Discuss these as published commitments, not claims that information never reaches a provider.

Plans, features, feedback submissions, optional data sharing, legal obligations, and contracts can change the details. Anthropic's commercial guidance specifically describes feedback as a separate data-use path. Avoid assuming that a consumer subscription follows commercial terms.

Retention differs between chat history, uploaded files, API requests, operational logs, and connected services. Do not collapse them into a universal retention number or imply that all products qualify for zero retention.

Follow the fictional record through the earlier tool loop: company tool → harness → model provider → application logs. Each place may have its own storage and access behavior.

Ask: “Would turning off model training change the fact that this provider processes the record?” This leads naturally to local deployment later.

## Sources

- [OpenAI enterprise privacy](https://openai.com/enterprise-privacy/).
- [Anthropic commercial training policy](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).
- [Anthropic commercial retention policy](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data).

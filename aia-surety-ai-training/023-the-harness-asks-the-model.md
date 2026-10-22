---
slide: 23
section: "Agents"
duration_minutes: 2
---

# The harness asks the model

*Excerpt from a Claude Messages API request body.*

```json
{
  "system": "Use the provided tools to check fictional records. Draft only. Flag missing facts.",
  "messages": [
    {
      "role": "user",
      "content": "For submission S-1042, check the demo checklist and draft a request for missing documents. Do not send it."
    }
  ]
}
```

**The full request also identifies the model and available tools.**

## Speaker notes

The harness sends a request to the provider's API. This excerpt omits `model`, `max_tokens`, and the `tools` array so the audience can follow the messages. A real request includes those fields as required by the API.

Our tools array contains both `get_submission` and `get_checklist` as described on the preceding slide. Select an available tool-capable model during rehearsal.

Explain that the model has not yet seen S-1042's contents. The identifier is a reference, not access to the underlying database. If the application never fetches the record, the model cannot know its current contents from that identifier alone.

An API credential authenticates the application to the provider. It is supplied by software outside the prompt; do not show real credentials during the presentation.

## Sources

- [Claude client-tool request and response examples](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).

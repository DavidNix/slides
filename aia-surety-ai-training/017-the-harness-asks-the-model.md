---
slide: 17
section: "Agents"
duration_minutes: 2
---

# The harness asks the model

*Excerpt from a Claude Messages API request body.*

```json
{
  "system": "Help shoppers. Look things up. Change nothing.",
  "messages": [
    {
      "role": "user",
      "content": "Where is my order 4471? When will it arrive?"
    }
  ]
}
```

**The full request also identifies the model and available tools.**

## Speaker notes

The harness sends a request to the provider's API. This excerpt omits `model`, `max_tokens`, and the `tools` array so the audience can follow the messages. A real request includes those fields as required by the API.

Our tools array contains both `get_order` and `track_package` as described on the preceding slide. Select an available tool-capable model during rehearsal.

Explain that the model has not yet seen the contents of order 4471. The identifier is a reference, not access to the underlying database. If the application never fetches the record, the model cannot know its current contents from that identifier alone.

An API credential authenticates the application to the provider. It is supplied by software outside the prompt; do not show real credentials during the presentation.

## Sources

- [Claude client-tool request and response examples](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).

---
slide: 11
section: "Agents"
duration_minutes: 3
---

# The agent loop

![The harness sends context to the model, executes requested tools, returns results, and repeats until a final answer.](../2026-09-ai-security/agentic-loop-clean-v2.png)

**Goal → request → action → result → next step**

## Speaker notes

Walk through the arrows slowly. Start with the user, point to the harness, then the model, then the tool and its returned result.

The model may answer directly, request a tool, or ask for clarification. A tool result becomes part of the information available on a later model turn. Several turns can happen after one user request.

Explain that “give it a goal” still requires boundaries. “Prepare a draft using these records” is more precise than “handle this account.”

Ask: “At which arrow does something actually change in a business system?” The answer is the execution of a tool with a side effect, not the mere generation of text.

## Sources

- [OpenAI function-calling flow](https://developers.openai.com/api/docs/guides/function-calling).

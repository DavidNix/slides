---
slide: 11
section: "How AI works"
duration_minutes: 3
---

# Two hard limits

- **Frozen in time:** everything the model "knows" was learned during training. It knows nothing about events after its training data ends — not yesterday's news, not this morning's rates.
- **Context window:** the model's working memory — everything it can use for this response. It is finite, it can be exceeded, and recall weakens in very long contexts.

Current facts come from outside the model: web search, attached documents, and retrieved records. Those are inputs, not things the model knows on its own.

**A frozen model with limited memory is why current sources and verification matter.**

## Speaker notes

These are the two limitations staff will actually run into; keep it concrete, not architectural.

Frozen knowledge: a model is a fixed set of learned parameters after training. It does not update itself when events happen, and asking it about recent dates exposes this. One caveat for the room: chat applications can look current because the product adds web search or retrieved documents around the model. That is software supplying inputs — the model itself has not learned anything new. The distinction matters when judging whether an answer is grounded in a source the application actually provided.

Context window: define it as what the model can take into account for this response — instructions, the conversation so far, attached files, and tool results. It has a size limit, measured in tokens. Paste ten long claim files and parts may simply not fit; the application may truncate or drop them. Even within the limit, recall weakens in very long contexts — details in the middle of a large pile are easier to miss than details placed up front. The practical habit: supply the relevant material, not everything.

Connect both limits to what comes later: giving the model the right current material is what tools and retrieval are for (Agents section), and nothing it produces is a substitute for checking against the source (Practical section).

## Sources

- [OpenAI: models and context window limits](https://platform.openai.com/docs/models).
- ["Lost in the Middle": recall degrades in long contexts](https://arxiv.org/abs/2307.03172).

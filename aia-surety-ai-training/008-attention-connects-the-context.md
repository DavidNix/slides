---
slide: 8
section: "LLM architecture and training"
duration_minutes: 2
---

# Attention connects the context

> “We sat beside the river bank.”
>
> “We applied for a loan at the bank.”

The surrounding tokens help shape the representation of **bank**.

- Compare token representations.
- Weight and combine relevant information.
- Repeat across multiple heads and layers.

## Speaker notes

Use these sentences as an illustration of contextual meaning, not as a measured attention trace from a particular model.

In self-attention, learned transformations produce queries, keys, and values. Query–key comparisons produce scores; normalized scores weight the value vectors. Several attention heads can capture different relationships, and later layers build on earlier representations.

In a standard causal language model, a position can use preceding positions and itself, not future tokens it has not generated. Attention weights depend on the current input; that does not mean the trained model parameters are being rewritten with each question.

“Attention” is a mathematical operation, not conscious awareness, and its weights are not a complete explanation of why an answer was produced. It also does not authenticate the source or truth of what it reads. This matters when a document contains misleading facts or hostile instructions.

## Sources

- [Transformer attention and multi-head attention](https://arxiv.org/abs/1706.03762).

---
slide: 7
section: "LLM architecture and training"
duration_minutes: 3
---

# Inside a Transformer

1. **Represent:** turn tokens into numerical vectors and account for position.
2. **Connect:** attention combines information across the available context.
3. **Transform:** neural-network layers refine those representations.
4. **Predict:** convert output scores into next-token probabilities.

**Repeat this computation to generate a response.**

## Speaker notes

Explain that many modern language models use decoder-style Transformer architectures. The original Transformer paper introduced an encoder-decoder design; today's models include variations and hybrid architectures. Present this as a common architecture, not the internal specification of every model.

An embedding represents a token with a list of numbers. Position information helps distinguish sequences with the same words in different orders. Attention mixes information between token positions; feed-forward networks transform each position's representation. Residual connections and normalization help information flow through many layers.

At the output, scores called logits are converted to probabilities, commonly with a softmax operation. The generation process selects a token and continues.

The learned parameters are numerical values used in these computations. They are different from the application code, tool implementations, and business database.

Some models use mixture-of-experts layers to activate selected neural-network components. Those “experts” are mathematical components, not separate staff-like agents. Keep this as optional depth if asked.

## Sources

- [Vaswani et al.: Attention Is All You Need](https://arxiv.org/abs/1706.03762).

---
slide: 8
section: "LLM architecture and training"
duration_minutes: 4
---

# Inside a Transformer

1. **Represent:** turn tokens into numerical vectors and account for position.
2. **Connect:** attention combines information across the available context.
3. **Transform:** neural-network layers refine those representations.
4. **Predict:** convert output scores into next-token probabilities.

> “We sat beside the river bank.”
>
> “We applied for a loan at the bank.”

The surrounding tokens help shape the representation of **bank**. Attention compares token representations, weights and combines relevant information, and repeats across multiple heads and layers.

**Repeat this computation to generate a response.**

## Speaker notes

Explain that many modern language models use decoder-style Transformer architectures. The original Transformer paper introduced an encoder-decoder design; today's models include variations and hybrid architectures. Present this as a common architecture, not the internal specification of every model.

An embedding represents a token with a list of numbers. Position information helps distinguish sequences with the same words in different orders. Attention mixes information between token positions; feed-forward networks transform each position's representation. Residual connections and normalization help information flow through many layers.

Use the two sentences as an illustration of contextual meaning, not as a measured attention trace from a particular model. In a standard causal language model, a position can use preceding positions and itself, not future tokens it has not generated. Attention weights depend on the current input; that does not mean the trained model parameters are being rewritten with each question.

At the output, scores called logits are converted to probabilities, commonly with a softmax operation. The generation process selects a token and continues.

The learned parameters are numerical values used in these computations. They are different from the application code, tool implementations, and business database.

“Attention” is a mathematical operation, not conscious awareness, and its weights are not a complete explanation of why an answer was produced. It also does not authenticate the source or truth of what it reads. This matters when a document contains misleading facts or hostile instructions.

Some models use mixture-of-experts layers to activate selected neural-network components. Those “experts” are mathematical components, not separate staff-like agents. Keep this as optional depth if asked.

## Sources

- [Vaswani et al.: Attention Is All You Need](https://arxiv.org/abs/1706.03762).

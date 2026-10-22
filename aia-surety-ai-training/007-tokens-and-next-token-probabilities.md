---
slide: 7
section: "LLM architecture and training"
duration_minutes: 3
---

# Tokens and next-token probabilities

**Text → tokens → model → probabilities → next token → repeat**

- **Tokens:** chunks of text the model processes.
- **Context:** information available for this response.
- **Generation:** select the next token, add it, and continue.

**A likely continuation is not a certificate of truth.**

## Speaker notes

Expand LLM as large language model. Tokens can be words, parts of words, punctuation, or other units depending on the tokenizer. Avoid implying that every word is one token.

Use a familiar completion: “Please send the missing financial ...” Invite suggestions. Explain that a model assigns probabilities across its vocabulary using the preceding context. This is a teaching example, not a display of measured token probabilities.

Generation can select a high-scoring token or sample from the distribution. This mechanism can support substantial reasoning; “probabilistic” does not mean arbitrary guessing. It also does not inherently verify a business fact.

The probability of a token is not the probability that an entire answer is factually correct. Lowering randomness can make output more consistent without making it true.

The context has a size limit. Relevant information and clear sources matter more than indiscriminately adding files.

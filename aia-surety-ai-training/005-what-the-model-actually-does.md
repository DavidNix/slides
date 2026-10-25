---
slide: 5
section: "How AI works"
duration_minutes: 3
---

# What the model actually does

**Text → tokens → probabilities → next token → repeat**

- **Tokens:** chunks of text the model reads and writes — not whole words.
- **Context:** the information available for this response.
- **Generation:** pick a likely next token, add it, and continue. Simple math, repeated at enormous scale — no magic.

## Speaker notes

Expand LLM as large language model. Tokens can be words, parts of words, punctuation, or other units depending on the tokenizer. Avoid implying that every word is one token.

The point of this section: the model is not magic. It is a prediction machine. Give the audience one concrete mechanism they can hold onto — the model ranks every possible next token by likelihood, given what came before, picks one, and repeats. That is the entire trick, run at enormous scale and speed.

Use a familiar completion: "Please send the missing financial …" Invite suggestions. Explain that a model assigns probabilities across its vocabulary using the preceding context. This is a teaching example, not a display of measured token probabilities.

"Probabilistic" does not mean random guessing. Generation can select a high-scoring token or sample from the distribution, and this mechanism supports substantial reasoning. But the probability of a token is not the probability that an entire answer is factually correct. Lowering randomness can make output more consistent without making it true. This is the seed of the verification section later.

The context has a size limit. Relevant information and clear sources matter more than indiscriminately adding files.

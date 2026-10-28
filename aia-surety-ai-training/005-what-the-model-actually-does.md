---
slide: 5
section: "How AI works"
duration_minutes: 3
---

# What the model actually does

<video src="what-the-model-actually-does.mp4" controls width="100%" aria-label="Tokens go in, pass through attention and the transformer layers, and softmax picks the next token."></video>

**Text → tokens → probabilities → next token → repeat**

- **Tokens:** chunks of text the model reads and writes — not whole words.
- **Context:** the information available for this response.
- **Generation:** pick a likely next token, add it, and continue. Simple math, repeated at enormous scale — no magic.

## Speaker notes

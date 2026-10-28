---
slide: 7
section: "How AI works"
duration_minutes: 3
---

# Where its abilities come from

- **Inside:** many layers of simple math. Attention lets each token draw on surrounding context — "river bank" vs. "loan from the bank."
- **Pretraining:** predict the next token across enormous collections of text and code; broad language, factual, and reasoning patterns emerge.
- **Fine-tuning:** the model is shown examples of good assistant behavior and adjusts toward them.
- **Reinforcement learning:** the model attempts real tasks, and a **reward function** scores each attempt — human ratings, AI ratings, or automatic checks such as verified calculations and passing tests. Training favors the behavior that scores higher.

**Learned patterns, not a lookup table — capable, fallible, and worth verifying.**

## Speaker notes

GPT - Generative Pretrained Transformer

The goal is "not magic," not architecture mastery.

RL is like a video game. Trying to get the best score.

## Sources

- [Vaswani et al.: Attention Is All You Need](https://arxiv.org/abs/1706.03762).
- [Ouyang et al.: supervised fine-tuning and human feedback](https://arxiv.org/abs/2203.02155).
- [DeepSeek-R1: reinforcement learning, curated data, and distillation](https://arxiv.org/abs/2501.12948).

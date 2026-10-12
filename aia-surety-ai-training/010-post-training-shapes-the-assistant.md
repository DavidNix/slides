---
slide: 10
section: "LLM architecture and training"
duration_minutes: 3
---

# Post-training shapes the assistant

- **Supervised fine-tuning:** learn from examples of desired responses.
- **Preference training:** favor better-rated outputs.
- **Synthetic data and distillation:** learn from curated model-generated examples.
- **Evaluation:** test behavior on examples beyond the training set.

**The training recipe shapes how the assistant behaves.**

## Speaker notes

Explain why a base model that continues text is different from a useful assistant that follows instructions, formats answers, uses tools, and asks clarifying questions. Post-training can strengthen those behaviors.

Supervised fine-tuning, or SFT, uses demonstrations. Preference data can compare two candidate answers. Direct Preference Optimization, or DPO, is one way to train directly on preferences without the separate reward-model-plus-RL loop used in classic RLHF.

Modern training can mix human-written examples, AI feedback, generated problems, filtered solutions, and tool-use trajectories. Distillation can transfer useful behavior from a stronger model to a smaller one. Quality control matters because generated examples can carry errors too.

These are methods that can be combined, not a universal fixed sequence or a claim about a proprietary provider's complete recipe.

Held-out evaluations help estimate performance. A strong benchmark result does not establish reliability on AIA's documents or workflows; local task evaluation and runtime verification still matter.

## Sources

- [Ouyang et al.: supervised fine-tuning and human feedback](https://arxiv.org/abs/2203.02155).
- [Rafailov et al.: Direct Preference Optimization](https://arxiv.org/abs/2305.18290).
- [DeepSeek-R1: reinforcement learning, curated data, and distillation](https://arxiv.org/abs/2501.12948).

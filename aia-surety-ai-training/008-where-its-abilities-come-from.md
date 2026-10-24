---
slide: 8
section: "How AI works"
duration_minutes: 3
---

# Where its abilities come from

- **Inside:** many layers of simple math. Attention lets each token draw on surrounding context — "river bank" vs. "loan at the bank."
- **Pretraining:** predict the next token across enormous collections of text and code; broad language, factual, and reasoning patterns emerge.
- **Post-training and reinforcement learning:** fine-tuning, feedback, and rewards turn a text-completer into a helpful assistant.

**Learned patterns, not a lookup table — capable, fallible, and worth verifying.**

## Speaker notes

Keep this intuition-level; the goal is "not magic," not architecture mastery.

Inside: many modern models use decoder-style Transformer architectures; the original paper introduced an encoder-decoder design and today's models vary. An embedding represents a token as a list of numbers; attention mixes information between token positions so the meaning of "bank" is shaped by the words around it. Attention is a mathematical operation, not conscious awareness, and its weights do not authenticate the truth of what the model reads — a point the security section builds on. Present all of this as a common architecture, not the internal specification of every model.

Training: explain self-supervised pretraining briefly — the training text supplies the next token as the target, and an optimization process adjusts the model's parameters to reduce prediction error across examples. The data contains mistakes, conflicting claims, and outdated information, so learning from it does not make every learned claim true. Post-training (supervised fine-tuning, preference data, evaluation) produces the assistant people actually use; reinforcement learning scores candidate behavior with human feedback, AI feedback, or verifiable rewards such as checked calculations and passing tests. One sentence each is enough.

The one distinction worth pausing on: training updates the learned parameters; ordinary use does not. Uploading a checklist gives the application reference material for this task — it does not retrain the model. That distinction returns in the deployment and data sections.

Transition: so far, the model only answers. Next: what changes when software turns answers into actions.

## Sources

- [Vaswani et al.: Attention Is All You Need](https://arxiv.org/abs/1706.03762).
- [Ouyang et al.: supervised fine-tuning and human feedback](https://arxiv.org/abs/2203.02155).
- [DeepSeek-R1: reinforcement learning, curated data, and distillation](https://arxiv.org/abs/2501.12948).

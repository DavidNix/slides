---
slide: 9
section: "LLM architecture and training"
duration_minutes: 5
---

# How models are trained

**1. Pretraining: learn broad patterns.**

Examples → prediction → measured error → parameter updates → repeat

- Large collections of text, code, and other data. A common objective: predict the next token.
- Broad language, factual, and reasoning capabilities can develop.
- **Learning from data does not make every learned claim true.**

**2. Post-training: shape the assistant.**

- Supervised fine-tuning, preference training, synthetic data and distillation, evaluation.
- The training recipe turns a text-completing model into a useful assistant.

**3. Reinforcement learning: reward behavior.**

Generate candidates → score outcomes → update the model → repeat

- Human feedback, AI feedback, and verifiable rewards such as checked calculations or passing tests.
- **A better reward signal can improve behavior. It is still a signal, not a universal guarantee.**

## Speaker notes

Explain self-supervised learning: the training sequence supplies the next token as a target. An optimization process adjusts parameters to reduce prediction error across examples. The objective is prediction of training data, which can contain mistakes, conflicting claims, outdated information, and biases. The model can learn useful generalizations and can also memorize some information; it is not simply a live lookup into an authoritative database.

A base model that continues text is different from a useful assistant that follows instructions, formats answers, uses tools, and asks clarifying questions. Post-training — supervised fine-tuning, preference data, distilled examples, and held-out evaluation — can strengthen those behaviors. These are methods that can be combined, not a universal fixed sequence or a claim about a proprietary provider's complete recipe.

Expand RL as reinforcement learning: the training process adjusts the model to increase expected reward. Classic RLHF trains a reward model from human comparisons; AI feedback can supply judgments; verifiable rewards (RLVR) use outcomes a verifier can check, such as certain math problems and programming exercises. Give a business contrast: checking a sum is easier to automate than deciding whether a nuanced explanation is complete and appropriate. Optimizing an imperfect proxy can produce unintended behavior, often called reward hacking.

Contrast training with inference. Training updates learned parameters. Ordinary inference uses those parameters to process the current context and generate output. Uploading a checklist gives an application reference material; it does not ordinarily retrain the model's weights. Separately, an agent calling tools during a task is not automatically updating its model through RL.

Context and application memory can change what the system knows about today's task without changing its pretrained parameters. A provider may separately use eligible data for later training under its terms; that is a data-policy question — we return to it in the market section.

Transition: training encourages instruction following, but it does not create an unbreakable instruction boundary. Next, we will test one.

## Sources

- [Ouyang et al.: supervised fine-tuning and human feedback](https://arxiv.org/abs/2203.02155).
- [Rafailov et al.: Direct Preference Optimization](https://arxiv.org/abs/2305.18290).
- [DeepSeek-R1: reinforcement learning, curated data, and distillation](https://arxiv.org/abs/2501.12948).

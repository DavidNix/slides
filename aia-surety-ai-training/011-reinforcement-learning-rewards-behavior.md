---
slide: 11
section: "LLM architecture and training"
duration_minutes: 3
---

# Reinforcement learning rewards behavior

**Generate candidates → score outcomes → update the model → repeat**

- **Human feedback:** learn from human preferences.
- **AI feedback:** use model-based judgments.
- **Verifiable rewards:** check an answer or outcome, such as a calculation or test result.

**A better reward signal can improve behavior. It is still a signal, not a universal guarantee.**

## Speaker notes

Expand RL as reinforcement learning. At a high level, the training process adjusts the model to increase expected reward. RLHF is reinforcement learning from human feedback; in a classic pipeline, human comparisons train a reward model, and RL optimizes against that model. AI feedback can supply judgments in related approaches.

Reinforcement learning with verifiable rewards is often called RLVR. Tasks such as certain math problems and programming exercises provide outcomes a verifier can check. This has helped train reasoning behavior in modern models. Tests and verifiers still have limits and may not capture the whole intended task.

Give a business contrast: checking a sum is easier to automate than deciding whether a nuanced explanation is complete and appropriate. A reward for sounding helpful could favor a polished response even when its facts are weak. Optimizing an imperfect proxy can produce unintended behavior, often called reward hacking.

Separate training-time RL from an agent's runtime tool loop. An agent calling tools during a task is not automatically updating its model through RL. More runtime reasoning or more tool calls also do not automatically retrain the weights.

Transition: training encourages instruction following, but it does not create an unbreakable instruction boundary. Next, we will test one.

## Sources

- [InstructGPT and RLHF](https://arxiv.org/abs/2203.02155).
- [DeepSeek-R1 and reinforcement learning for verifiable tasks](https://arxiv.org/abs/2501.12948).

---
slide: 9
section: "LLM architecture and training"
duration_minutes: 3
---

# Pretraining learns broad patterns

**Examples → prediction → measured error → parameter updates → repeat**

- Large collections of text, code, and other data.
- A common objective: predict the next token.
- Broad language, factual, and reasoning capabilities can develop.

**Learning from data does not make every learned claim true.**

## Speaker notes

Explain self-supervised learning: the training sequence supplies the next token as a target. People do not need to label every sentence manually. An optimization process adjusts parameters to reduce prediction error across examples.

The objective is prediction of training data, which can contain mistakes, conflicting claims, outdated information, and biases. The model can learn useful generalizations and can also memorize some information; it is not simply a live lookup into an authoritative database.

Contrast training with inference. Training updates learned parameters. Ordinary inference uses those parameters to process the current context and generate output. Uploading a checklist gives an application reference material; it does not ordinarily retrain the model's weights.

Context and application memory can change what the system knows about today's task without changing its pretrained parameters. A provider may separately use eligible data for later training under its terms; that is a data-policy question.

## Sources

- [Ouyang et al.: pretrained models and instruction fine-tuning](https://arxiv.org/abs/2203.02155).

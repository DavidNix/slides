---
slide: 56
section: "Deployment"
duration_minutes: 2
---

# What an inference engine does

**Load model parameters → process tokens → compute output → return tokens**

- Uses CPUs, GPUs, or other supported hardware.
- Manages memory and computation.
- May serve requests from multiple users.

**The model is what was learned. The engine runs it.**

## Speaker notes

Connect directly to the Transformer pipeline: embeddings, attention, neural-network layers, and output scores require computation. The inference engine implements and optimizes that execution.

Model weights are numerical data stored in files. The runtime is executable software. A model needs compatible runtime support, tokenization, and configuration; copying a weight file alone does not create a working assistant.

The engine may expose an API so an application can use a local model through a familiar request format. API compatibility does not guarantee identical model behavior, tool reliability, or feature support.

Training changes parameters. Inference runs the model to serve requests. This distinction explains why using an existing model is very different from paying to train a foundation model from scratch.

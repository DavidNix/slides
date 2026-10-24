---
slide: 60
section: "Deployment"
duration_minutes: 2
---

# Inference engines in practice

- **llama.cpp:** inference across a range of local and server hardware.
- **vLLM:** inference and serving with an emphasis on efficient request handling.

Choose based on:

**Model support · hardware · concurrent users · latency · operations**

## Speaker notes

Use these names to make the component concrete. They are software engines, not interchangeable model brands.

llama.cpp supports several CPU and GPU backends and reduced-precision model formats. vLLM provides serving capabilities such as batching and memory management for multiple requests. Both have evolving model and hardware support; confirm the chosen combination during preparation.

Define quantization as representing model values with fewer bits to reduce memory and computation requirements. It can affect quality, so evaluate the actual task after changing precision.

A laptop demonstration and a dependable service for many employees have different requirements. One successful request does not establish capacity for a department.

## Sources

- [llama.cpp documentation](https://github.com/ggml-org/llama.cpp).
- [vLLM documentation](https://docs.vllm.ai/en/latest/).

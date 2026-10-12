---
slide: 62
section: "Deployment"
duration_minutes: 3
---

# Local AI has a hardware and operations bill

- Larger models need more memory and computation.
- Longer contexts and more users increase demand.
- Hardware, power, support, and upgrades have costs.
- Smaller models may be sufficient for a narrow task.

**Compare total cost per useful, verified result.**

## Speaker notes

Explain GPU memory and system memory as limits on what can fit and how quickly it can run. Storing model files on disk is different from having enough memory to serve them effectively.

For intuition, 8 billion parameters at 4 bits each represent roughly 4 GB of raw weight data in decimal units. Actual runtime memory is higher because of quantization metadata, context caches, buffers, and other overhead. This arithmetic is not a hardware sizing recommendation.

More concurrent users and longer conversations consume additional resources. Capacity demands can push hardware spending upward; market prices and availability also change. Use dated quotes for the chosen configuration before making a purchasing claim, rather than asserting a universal price trend.

Include administration, updates, backups, monitoring, electricity, and review effort. A smaller local model that performs a specific task well may be better value than an expensive general-purpose deployment, while low utilization can make owned hardware costly per task.

## Sources

- [llama.cpp quantization and hardware support](https://github.com/ggml-org/llama.cpp).
- [vLLM serving and memory management](https://docs.vllm.ai/en/latest/).

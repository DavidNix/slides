---
slide: 71
section: "Deployment"
duration_minutes: 3
---

# Choose a deployment for the workload

| Approach | Convenience | Responsibility and tradeoff |
| --- | --- | --- |
| Managed business assistant | Ready-to-use staff interface | Provider processing, account controls, and product limits |
| Hosted API integration | Custom workflows using managed models | Integration, tool permissions, data handling, and variable usage |
| Self-hosted model | Direct control over execution | Hardware, operations, model selection, and capacity |
| Hybrid | Assign each task an appropriate destination | Explicit routing rules and more operational complexity |

## Speaker notes

Avoid declaring one approach best for every task. Compare required capability, information sensitivity, expected volume, response time, and the organization's ability to operate the system.

A useful evaluation asks whether the model completes representative work to the required standard, including verification and exception handling. Vendor benchmarks alone do not answer that question.

Hybrid might use a managed service for approved nonsensitive work and a controlled local path for selected sensitive workloads. The classification and routing must be enforceable; asking the model to remember a privacy rule is not the whole control.

Revisit the central question: how much convenience is the organization buying, and which responsibilities or exposures come with it?

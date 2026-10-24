---
slide: 58
section: "Deployment"
duration_minutes: 2
---

# The same parts can run in different places

| Part | Job |
| --- | --- |
| Application or harness | Organize the user's task and tool loop |
| AI gateway | Route and govern model requests passing through it |
| Inference engine | Run the model's computations |
| Model | Supply the learned parameters and behavior |
| Tools and data | Connect the task to useful information and actions |

## Speaker notes

Return to the architecture and agent explanations. We are now deciding where those components run and who operates them.

For an API-based application, a common model path is application → optional gateway → model service. That service runs an inference engine with a model. The harness also has a separate path to its tools and their data.

A hosted assistant bundles many of these parts into one product. A company can also operate some or all of the parts itself. Deployment changes control, operational responsibility, and cost; it does not eliminate the need for verification or permissions.

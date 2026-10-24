---
slide: 64
section: "Deployment"
duration_minutes: 4
---

# Demo: AI with the network disconnected

1. Show the locally loaded model.
2. Disconnect the demonstration machine from external networks.
3. Ask a fresh question about the fictional submission.
4. Observe the response and hardware use.

**The computation is happening here.**

## Speaker notes

The demonstration establishes that this tested inference path can work offline. It does not prove every feature of the application is private under every configuration.

## Demo guide

**Preparation:** Download and rehearse a suitable model and runtime on the actual demonstration hardware. Store the fictional documents and presentation assets locally. Use a local interface with external tools, cloud fallback, and remote processing disabled. If presenting remotely, use a separate demo machine so the call remains connected.

1. Show the model name, local endpoint, and relevant hardware information.
2. Disconnect external networking for the demo machine.
3. Paste the fixture from [slide 005](005-demo-same-question-better-context.md), adding a fresh fictional sentence suggested in the room so the output is not simply a replay.
4. Ask for the missing-document summary and a draft under 100 words.
5. Show observed response time and memory use, then verify the missing document against the checklist.

Avoid turning this into a speed contest against a different cloud model. The controlled observation is that a useful operation can execute locally on this hardware.

**Fallback:** Show a clearly labeled recording from the same hardware and state its model and configuration. Explain any live limitation without substituting a cloud response for an offline result.

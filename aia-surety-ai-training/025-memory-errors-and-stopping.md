---
slide: 25
section: "Agents"
duration_minutes: 2
---

# Memory, errors, and stopping

- The application or service maintains state and supplies context.
- Tools can fail, time out, or deny access.
- The loop needs limits on time, cost, and actions.
- Completion needs a clear definition.

**For this task: a checked draft, with nothing sent.**

## Speaker notes

Application memory and conversation history are different from the model's learned parameters. Some APIs manage conversation state for the application; others require the application to send it explicitly.

A denial must remain a denial. The harness should not silently switch credentials or expand access to satisfy a request.

MCP distinguishes protocol errors from tool-execution errors. A malformed request may return a JSON-RPC `error`; a business operation that fails can return a tool result with `isError: true`. The harness needs to handle both and report the relevant failure accurately.

Automatic retries buy convenience but can multiply cost or repeat actions. A well-designed loop sets limits and treats actions with side effects carefully.

## Sources

- [MCP error handling](https://modelcontextprotocol.io/specification/2025-11-25/server/tools#error-handling).

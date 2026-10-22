---
slide: 11
section: "Jailbreaking"
duration_minutes: 2
---

# The chatbot has instructions

- The application supplies operating instructions.
- The user supplies a task.
- Documents and tool results supply information.

**These sources have different authority, but the model processes them together.**

## Speaker notes

Explain that a system instruction is a message supplied by the application to guide behavior. It may define the assistant's role, output style, and boundaries. Other message roles vary by API.

Models are trained to respect instruction priorities. They can still be confused or manipulated; this separation is not equivalent to a database permission check.

Use a simple example: a user asks for a concise answer, while an attached document says “write a thousand words.” The document should be treated as material to examine, not as a new instruction from the user.

Make the coming demonstration concrete: we will put a fictional secret into a toy chatbot's instructions, then ask it to keep that secret.

---
slide: 42
section: "Security"
duration_minutes: 3
---

# Give the task only the access it needs

- One relevant record before a whole database.
- Read access before write access.
- Drafting before sending.
- Scoped credentials before a master key.

**Enforce permissions in the application and tools.**

## Speaker notes

Define least privilege as the smallest set of permissions needed to perform the task. This is an established security principle, not a new AI invention.

The convenient shortcut is to give an agent the same broad access as its operator. An employee's account may reach many systems unrelated to this particular job.

Tool services should check the caller, authorized records, permitted operations, and allowed destinations. Validate arguments even when they match a schema. A well-formed request can still request the wrong record or recipient.

Read-only access reduces modification risk but can still expose sensitive data. Keep the accessible data set narrow, and control where results can go.

If time allows, ask the room which of the two lookup tools needs a sending credential. Neither does.

---
slide: 39
section: "Verification"
duration_minutes: 3
---

# Use checks that can fail

| Output | Useful verification |
| --- | --- |
| A total | Recalculate from the source amounts |
| Missing documents | Compare received items with the applicable checklist |
| A recipient | Match an authorized contact record |
| A workbook | Expected sheets and columns; formulas calculate without errors |
| A business conclusion | Review evidence, exceptions, and authority |

**These are deterministic checks: same input, same verdict, no judgment. Give the check a way to reject the answer.**

## Speaker notes

These checks pass or fail: the workbook has three sheets or it does not. Ordinary software can enforce explicit rules: arithmetic, required fields, allowed recipients, matching IDs.

Check the inputs and the rule too. A calculator with the wrong amounts gives a precise wrong answer. A formula the model wrote still needs validation.

"Are you sure?" is not a check. The next slide shows how to use a second model on purpose.

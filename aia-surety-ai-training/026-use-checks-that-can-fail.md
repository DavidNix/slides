---
slide: 26
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

**These are deterministic checks — same input, same verdict, no judgment. Give the check a way to reject the answer.**

## Speaker notes

These checks are deterministic: the workbook has three sheets or it does not, the columns are present or they are not, the formula calculates or it errors. Where a rule is explicit, ordinary software can enforce it consistently: arithmetic, required fields, allowed recipients, date ranges, matching IDs, or spreadsheet structure. A clean-looking structured answer alone does not establish that its content is correct or authorized.

Verify the inputs and the rule too. A calculator using the wrong amounts gives a precise wrong answer. A formula written by the same model still needs validation before becoming a trusted checker.

Use independent evidence rather than only asking “Are you sure?” Another model can help flag a problem, but two models may repeat the same error or share an unsupported assumption — the next slide shows how to use one deliberately.

This connects to verifiable rewards from the training section. Checks are powerful where we can define the right outcome. In an operating workflow, explicitly run those checks before relying on the result; do not assume training already performed them for today's case.

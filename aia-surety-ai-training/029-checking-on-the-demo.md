---
slide: 29
section: "Verification"
duration_minutes: 5
---

# Checking on the demo

The freight task from slide 17 has been running the whole time. Now verify its work:

1. Open the evidence spreadsheet and case note.
2. Check a finding against its source.
3. Add the staged replies and inspect the update.
4. Check whether the promised payment attachment arrived.

**Measure the work saved after review.**

## Speaker notes

Resume the same freight-review task launched on slide 15. Use the [freight guide](demo-freight-fraud-review.md) for the exact follow-up prompt and the [presenter answer key](research/demo-packets/freight-identity-review/presenter/answer-key.md) to check the results. Keep this return to five minutes.

This slide is the verification section made live: the agent's output is probable, not verified — so we check it against the sources exactly as the previous slides taught. Probability is not verification; the spreadsheet rows are claims until someone opens the underlying record.

## Results walkthrough

1. Open `output/v1/claim-review.xlsx` and `case-note.docx`. Ask someone to check one evidence row against its source record. Show one targeted follow-up draft.
2. Explain that the three replies were written for the exercise. Copy them from the separate presenter folder into `input/` and submit the guide's second prompt.
3. While the agent updates the work, read the broker's reply aloud: it reports payment and refers to an attachment. Show that the file is absent from the supplied materials. A confident reply is not evidence — this is the checks-that-can-fail slide in action.
4. Open `output/v2/`. Check that the receiver's reply resolves the delivery question in the exercise, while payment remains unverified. Show the new draft requesting the missing payment evidence and confirm that the original files remain in `output/v1/`.

**Debrief:** The agent prepared files, tracked questions, and revised the work when evidence arrived — but the examiner verified before relying on any of it. Connect the Excel and Word outputs to the skills discussed earlier.

**Fallback:** If either phase is unfinished, use clearly labeled rehearsal output or a recording of this same task. If neither is available, use the presenter-authored answer key. Explain which material is on screen.

**Transition:** None of this tension is new — automation has always traded convenience for control.

---
slide: 15
section: "Agents"
duration_minutes: 3
---

# Demo: watch the agent work

A trucker says it delivered furniture and is owed $4,800. The broker's records name a different trucking company and price.

Give the agent the review task:

- Read the claim records.
- Build an evidence spreadsheet.
- Draft questions for the people involved.
- Prepare a short case note for the examiner.

**Start the work now. Return to the results after context and skills.**

## Speaker notes

This is the session's one demo: the [freight-claim review](demo-freight-fraud-review.md). A broker arranges the shipment; a carrier operates the truck. Explain those roles and the disputed invoice before showing the files. All businesses and records in the exercise are fictional.

Allow three minutes to introduce and launch the task, then five minutes to return to the results on slide 022. Let the agent work in the background during the intervening slides.

## Demo guide

**Preparation:** Follow the linked guide's setup and rehearse both prompts in the selected company-approved account. Copy the seven initial files into `AIA-Freight-Live/input/`, with an empty `output/` folder. Keep the presenter answer key and staged replies outside the agent's access. Confirm file creation and the Excel and Word skills are available. Save rehearsal outputs and a recording for fallback use.

**Run of show:**

1. Explain the story and show the input folder and empty output folder.
2. Submit the guide's first prompt, which requests a workbook, three unsent follow-up drafts, and a short Word case note.
3. Point out one visible file read or creation step. Connect it to the model requesting an action and the harness carrying it out. Describe only activity the interface actually shows.
4. Leave the task running and continue the presentation. Return to the same task on slide 022.

**Expected result:** Files in `output/v1/` that compare the evidence, identify unanswered questions, and prepare the examiner's next work. Drafts remain unsent; the examiner decides the claim.

**Fallback:** Show a clearly labeled recording or saved output from a rehearsal of this same freight review. If no rehearsal output is available, use the presenter-authored answer key and identify it as an illustration.

**Transition:** The task now has a goal, source files, and boundaries. The next slides explain how context and reusable instructions help the agent carry it out.

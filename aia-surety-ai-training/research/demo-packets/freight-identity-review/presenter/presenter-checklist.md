# Presenter checklist: freight demo

**Do not connect this folder to Cowork, and keep it off screen.** It holds the answer key. Connect only `AIA-Freight-Live`.

The full script is in `demo-freight-fraud-review.md` in the slides repo. This checklist covers the run itself, live or recorded.

## Before each run

1. Run `stage-cowork.sh reset` from the packet folder. This empties `AIA-Freight-Live` and stages the ten input files again.
2. Open the Claude desktop app and start a new Cowork task. Keep the app open for the whole session, because Cowork needs it for local folders.
3. Connect `AIA-Freight-Live` with the folder control under the message box. Read the permission prompt before you allow it.
4. Check the task settings:
   - Turn off memory, so earlier runs do not leak into this one.
   - Confirm that file creation and the Excel and Word skills are on.
   - Choose an approval mode that does not stop the agent for each file read and write. A live run must work for 20 slides without you.
5. Close every window that shows this presenter folder. Open `prompt.txt` where the audience cannot see it.

## Slide 23: start the run

1. Show `AIA-Freight-Live` in Finder: ten files in `input/` and an empty `output/`.
2. Paste `prompt.txt` into Cowork and submit it.
3. Wait until the agent visibly reads its first files. Then go back to the slides.

When you record instead, stop part 1 here and let the task finish off camera.

## Slide 43: check the results

1. Read the agent's final message aloud. It should say what the replies settled and what is still open.
2. Open `output/claim-review.xlsx`. Have someone check one Evidence row against its source file.
3. Open `input/07-broker-reply.md` and read R1.3 aloud. Then show that `aster-remittance-1042.pdf` is not in `input/`.
4. Open the draft in `output/drafts/`. Check that it goes to `claims@asterfreight.example`, not to `dispatch@aster-freight.example`.
5. Open `case-note.docx`.

When you record, cut the waiting time and hold on each step long enough for the presenter to pause there.

## After the run

Check the outputs against `answer-key.md` and its fail conditions. If the run passes, copy `output/` out of `AIA-Freight-Live` before the next `reset`. That copy is the fallback for the live session.

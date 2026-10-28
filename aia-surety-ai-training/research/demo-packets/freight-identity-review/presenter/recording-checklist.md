# Recording checklist: freight demo video

**Do not connect this folder to Cowork, and keep it off camera.** It holds the answer key and the staged replies. Connect only `AIA-Freight-Live`.

The full script is in `demo-freight-fraud-review.md` in the slides repo. This checklist covers only the recording.

## Before each take

1. Run `stage-cowork.sh reset` from the packet folder. This empties `AIA-Freight-Live` and restages the seven input files.
2. Open the Claude desktop app and start a new Cowork task. Keep the app open for the whole recording, because local folder access needs it.
3. Connect `AIA-Freight-Live` with the folder control under the message box. Read the permission prompt before you allow it.
4. Check the task settings:
   - Turn off memory, so earlier takes do not leak into this one.
   - Confirm that file creation and the Excel and Word skills are on.
   - Choose the approval mode. Manual mode adds approval clicks that you must cut later.
5. Close every window that shows this presenter folder.

## Part 1: `demo-freight-part-1.mp4` (about one minute)

1. Show `AIA-Freight-Live` in Finder: seven files in `input/` and an empty `output/`.
2. Paste `prompt-1.txt` into Cowork and submit it.
3. Record until the agent visibly reads its first files. Stop recording here.
4. Let the task finish off camera. Do not start a new task.

## Part 2: `demo-freight-part-2.mp4`

1. Open `output/v1/claim-review.xlsx`. Hold on one Evidence row long enough for the presenter to pause the video there.
2. Open the matching source file and show the line that supports the row.
3. Open one draft in `drafts/` and `case-note.docx`.
4. Run `stage-cowork.sh replies`, or drag the three files from `replies/` into `input/` on camera. Do not add `aster-remittance-1042.pdf`. Its absence is the point of the demo.
5. Paste `prompt-2.txt` into the same task and submit it. Cut the waiting time.
6. Open `output/v2/`. Show the delivery question resolved, payment still unverified, and the new draft that asks for the missing remittance file.
7. Show that `output/v1/` is still there.

## After the take

Check the outputs against `answer-key.md`. Every finding needs a source ID. No output may say that a message was sent or that a payment was verified. If the take passes, keep the generated files as the fallback for the live session.

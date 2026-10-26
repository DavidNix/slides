---
slide: 22
section: "Practical"
duration_minutes: 3
---

# Watch context shift the odds

<video src="prompt-shifts-odds.mp4" controls width="100%" aria-label="The prompt 'Write a short reply to the client. Your bond is ___' first has no extra context, then a note that financial statements are missing, then a note that all documents were received. The next-word odds shift each time, and the weighted pick lands on 'approved'."></video>

**Context sets the odds. Likely is not certain — check the output.**

## Speaker notes

Play the video first. It runs about 30 seconds and has no sound, so narrate over it or let the captions carry it. The request is a short client reply ending "Your bond is ___", and the bars show the model's next-word odds over plausible status words: approved, ready, active, pending, on hold, denied.

First pass: no extra context. "Approved" leads with about 28 percent — barely ahead, essentially a coin toss among several words. Then one line is typed in: "financial statements still missing." The odds swing hard toward "pending" and "on hold," and "approved" collapses to a few percent. Change the line to "all documents received and signed off," and "approved" jumps to about 71 percent. Finally the model picks one word, weighted by those odds, and this time it lands on "approved."

Two caveats to say out loud: the percentages are teaching values, not measured model output — the mechanism is real, the numbers are illustrative. And the last step is still a weighted roll of the dice, which is why a likely answer still needs checking. This is the same idea the Verification section will build on.

Takeaway for the room: one line of correct context changed the likely answer completely. That is the whole argument for giving AI a clear brief and the right attachments.

## Sources

- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). To edit or re-render the video, see the Remotion project in `model-video/`.

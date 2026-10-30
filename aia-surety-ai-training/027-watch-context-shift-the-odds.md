---
slide: 27
section: "Practical"
duration_minutes: 3
---

# Watch context shift the odds

<video src="prompt-shifts-odds.mp4" controls width="100%" aria-label="The prompt 'Write a short reply to the client. Your bond is ___' first has no extra context, then a note that financial statements are missing, then a note that all documents were received. The next-word odds shift each time, and the weighted pick lands on 'approved'."></video>

**Context sets the odds. Likely is not certain. Check the output.**

*There is one kind of answer you should never take from a model.*

## Speaker notes

Play the video first. It runs about 30 seconds with no sound, so narrate. The bars show next-word odds for "Your bond is ___".

- No context: "approved" leads at about 28 percent. A coin toss.
- "Financial statements still missing": odds swing to "pending" and "on hold."
- "All documents received and signed off": "approved" jumps to about 71 percent.

The percentages are illustrative. The mechanism is real. The last step is still a weighted roll, so a likely answer still needs checking.

One line of context changed the answer. That is the case for a clear brief and the right attachments.

## Sources

- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). To edit or re-render the video, see the Remotion project in `model-video/`.

---
slide: 7
section: "How AI works"
duration_minutes: 2
---

# What about hallucinations?

A hallucination is a confident answer that is false: a made-up fact, a wrong number, or a source that does not exist.

> "In some sense, hallucination is all LLMs do. They are dream machines."
> Andrej Karpathy, OpenAI co-founder

- **Right or wrong, same process.** The model always picks a likely next token. Likely is not the same as true.
- **Training rewarded guessing.** On a multiple-choice test, a guess sometimes scores and a blank never does. Models learned to answer instead of saying "I don't know."

**Newer models guess less, but none reach zero. Give it a source, and check what you rely on.**

## Speaker notes

Name the question everyone in the room is already thinking: "Doesn't it just make things up?" Answer it now, right after the room has seen how the model works.

Read the Karpathy quote and explain it. The model produces every answer the same way, by picking likely next tokens. When the result is useful, we call it an answer. When it is wrong, we call it a hallucination. It is the same machine doing the same thing both times. That is why a wrong answer sounds just as confident as a right one.

Why does it guess instead of admitting it does not know? OpenAI's own research gives a plain answer. Training and testing scored a wrong answer the same as "I don't know", so guessing won, like a student on a multiple-choice exam.

Why do newer models hallucinate less? The releases of the past year point to two reasons. First, they look things up and check their work. ChatGPT and Claude now search the web, read your files, and check their own work before they answer. OpenAI credited the gains in GPT-5.5 (April 2026) to better tool use and to checking its own work. That is the harness from the Agents section, not a model that memorized more facts. Second, training now punishes confident wrong answers, so "I don't know" scores better than a bad guess. In May 2026, OpenAI reported that GPT-5.5 Instant, the ChatGPT default, made 52.5% fewer false claims than the version before it on medical, legal, and financial questions.

Be honest that the progress is not steady. A lab can tune a model to answer more often, and then it guesses more. Anthropic's own July 2026 report on Claude Opus 5 says the model "hallucinates factual claims slightly more than Opus 4.8, despite being more accurate overall." Without search, even the newest models still guess. So the rule stays the same: give it a source, and check what you rely on.

Tell the room where the risk is highest. It is highest for details the model rarely saw: exact quotes, citations, case and form numbers, small companies, and recent events (the next slides explain why recent events are a problem). The risk is much lower when you hand it the document and ask it to work from that, such as "summarize this claim file."

Give the three habits that run through the rest of the session. Give it the source. Ask it to quote where each fact came from. Check anything you will rely on. Tell the court case where a lawyer skipped that last step. In *Mata v. Avianca* (2023), a lawyer filed a brief that cited six court decisions ChatGPT had invented, complete with quotes and case numbers. The court fined the lawyers $5,000. It sanctioned the people, not the tool.

Transition: "So where does the model's knowledge come from in the first place? That is training, next."

## Sources

- [Andrej Karpathy on the "hallucination problem" (X, December 9, 2023)](https://x.com/karpathy/status/1733299213503787018).
- [Why language models hallucinate (OpenAI, September 2025)](https://openai.com/index/why-language-models-hallucinate/).
- [Why language models hallucinate (Kalai et al., arXiv:2509.04664)](https://arxiv.org/abs/2509.04664).
- [Mata v. Avianca, Inc.](https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.).
- [GPT-5.5 Instant (OpenAI, May 2026)](https://openai.com/index/gpt-5-5-instant/), the 52.5% figure.
- [GPT-5.5 hallucination rate: what the numbers actually say (Usewire, April 2026)](https://usewire.io/blog/gpt-5-5-hallucination-drop-is-a-context-engineering-win/), OpenAI's tool use and self-checking explanation.
- [Claude Opus 5 System Card (Anthropic, July 24, 2026)](https://www-cdn.anthropic.com/b514064af1408018e64b1ad24e7d5e75850b4ffd/Claude%20Opus%205%20System%20Card.pdf), executive summary.

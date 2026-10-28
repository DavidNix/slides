---
slide: 7
section: "How AI works"
duration_minutes: 2
---

# First elephant in the room: Hallucinations 

A hallucination is a confident answer that is false: a made-up fact, a wrong number, or a source that does not exist.

> "In some sense, hallucination is all LLMs do. They are dream machines."
> Andrej Karpathy, OpenAI co-founder

- **Right or wrong, same process.** The model always picks a likely next token. Likely is not the same as true.
- **Training rewarded guessing.** On a multiple-choice test, a guess sometimes scores and a blank never does. Models learned to answer instead of saying "I don't know."

**Newer models guess less, but none reach zero. Give it a source, and check what you rely on.**

## Speaker notes

## Sources

- [Andrej Karpathy on the "hallucination problem" (X, December 9, 2023)](https://x.com/karpathy/status/1733299213503787018).
- [Why language models hallucinate (OpenAI, September 2025)](https://openai.com/index/why-language-models-hallucinate/).
- [Why language models hallucinate (Kalai et al., arXiv:2509.04664)](https://arxiv.org/abs/2509.04664).
- [Mata v. Avianca, Inc.](https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.).
- [GPT-5.5 Instant (OpenAI, May 2026)](https://openai.com/index/gpt-5-5-instant/), the 52.5% figure.
- [GPT-5.5 hallucination rate: what the numbers actually say (Usewire, April 2026)](https://usewire.io/blog/gpt-5-5-hallucination-drop-is-a-context-engineering-win/), OpenAI's tool use and self-checking explanation.
- [Claude Opus 5 System Card (Anthropic, July 24, 2026)](https://www-cdn.anthropic.com/b514064af1408018e64b1ad24e7d5e75850b4ffd/Claude%20Opus%205%20System%20Card.pdf), executive summary.

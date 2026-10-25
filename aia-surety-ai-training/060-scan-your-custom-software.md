---
slide: 60
section: "Security"
duration_minutes: 2
---

# Scan your custom software: Mythos and Daybreak

Agents write vulnerable code too. Every custom or AI-assisted application gets scanned:

- **Claude Security (Anthropic):** scans codebases with the Mythos model, returning findings with vulnerability categories, severity, and suggested patches.
- **Daybreak (OpenAI):** Codex Security scans code, validates whether findings are real, and prepares patches for human review — tens of millions of commits scanned.

**If AI wrote it or attackers can reach it, scan it with AI.**

## Speaker notes

Two consequences of the red-team slide. First, AI-assisted development means more custom software, faster — and AI can write flawed code as readily as good code. Second, AI-powered attackers hunt for exactly those flaws. The answer is AI-powered scanning on your own code.

Claude Security runs Anthropic's most capable model (Mythos) as a codebase scanner: findings arrive with a standard weakness category, confidence, and severity, plus a suggested patch for human review. OpenAI's Daybreak pairs frontier models with Codex Security to scan, validate findings with evidence, and generate fixes. CISA now reportedly uses Mythos to audit federal government code — the defenders' tool is the same class of capability as the attackers'.

Set the expectation honestly: AI scanning complements, not replaces, traditional security testing, and every finding needs human review before action. But traditional tools match known patterns; AI finds the logic and access-control flaws patterns miss.

## Sources

- [Anthropic: Bringing the cybersecurity capabilities of Claude Mythos 5 to more defenders](https://claude.com/blog/bringing-claude-mythos-5-to-more-defenders).
- [OpenAI: Daybreak — tools for securing every organization](https://openai.com/index/daybreak-securing-the-world/).

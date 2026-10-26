---
slide: 31
section: "Security"
duration_minutes: 3
---

# Turns out... a lot 

Published security demonstrations against tools many businesses use daily.

- **Slack AI:** a public-channel message led the assistant to put a private API key into a fake re-login link.
- **ChatGPT for Google Sheets:** an imported spreadsheet triggered a script that stole 12 accessible workbooks. Stopping the chat didn't stop the script it had created.
- **Claude for Excel:** an imported dataset hid financial projections inside an image formula — approval didn't show what was sent.
- **Notion AI:** a poisoned résumé leaked a private hiring tracker before the user accepted any warning.
- **vLex:** the assistant rendered a fake login screen; credentials were stolen when entered.
- **Claude Cowork:** a malicious document caused local files to upload to an attacker's account.

**The stolen items were credentials and confidential files — the exact assets every business holds.**

## Speaker notes

These are PromptArmor's published demonstrations — present them with dates and remediation status, not as proof these products are unsafe today (several were reported fixed). The point is the pattern, not the vendor: an ordinary read, summarize, or triage task turned into exfiltration, and approval or display steps didn't reliably protect the user.

Walk the bullets:

- Slack AI: attacker needed only to post in a public channel; the victim's private data did the traveling. The API key left through a link that looked like a routine re-login.
- Google Sheets: the script runs inside Google Sheets, not in the chat window — pressing stop halts the conversation, not code the model already set in motion. The model is not the only thing executing.
- Claude for Excel: an approval dialog that hides the consequential action is not consent; the user approved something they could not see.
- Notion AI: the request fired before the warning was accepted — approvals that arrive too late do not govern the action.
- vLex: the model itself rendered the fake login screen; anything the assistant displays can be attacker-shaped.
- Claude Cowork: connected file access is the blast radius; the demo evidence here is PromptArmor's published reproduction, not something shown live in this session.

Common thread: in every case malicious content arrived through normal work — a channel message, an import, a résumé, a document. None required breaking into the company; the business itself fed the material to the tool. Name the pattern (indirect prompt injection) only briefly here; slide 036 defines it.

Bridge: the rest of this section is about keeping the convenience while narrowing what a mistake or attack can reach — starting with the tradeoff between security and convenience.

## Sources

- [Slack AI: data exfiltration via indirect prompt injection](https://www.promptarmor.com/resources/data-exfiltration-from-slack-ai-via-indirect-prompt-injection).
- [ChatGPT for Google Sheets: data exfiltration](https://www.promptarmor.com/resources/gpt-for-google-sheets-data-exfiltration).
- [CellShock: Claude AI is Excel-lent at stealing data](https://www.promptarmor.com/resources/cellshock-claude-ai-is-excel-lent-at-stealing-data).
- [Notion AI: unpatched data exfiltration](https://www.promptarmor.com/resources/notion-ai-unpatched-data-exfiltration).
- [vLex / Vincent AI: screen takeover attack](https://www.promptarmor.com/resources/screen-takeover-attack-in-ai-tool-acquired-for-1b).
- [Claude Cowork exfiltrates files](https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files).

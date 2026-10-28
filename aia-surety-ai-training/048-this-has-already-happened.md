---
slide: 48
section: "Security"
duration_minutes: 3
---

# Turns out... a lot

Published security demonstrations against tools many businesses use daily.

- **Slack AI:** a public-channel message led the assistant to put a private API key into a fake re-login link.
- **ChatGPT for Google Sheets:** an imported spreadsheet triggered a script that stole 12 accessible workbooks. Stopping the chat didn't stop the script it had created.
- **Claude for Excel:** an imported dataset hid financial projections inside an image formula. Approval didn't show what was sent.
- **Notion AI:** a poisoned résumé leaked a private hiring tracker before the user accepted any warning.
- **vLex:** the assistant rendered a fake login screen; credentials were stolen when entered.
- **Claude Cowork:** a malicious document caused local files to upload to an attacker's account.

**The stolen items were credentials and confidential files: the exact assets every business holds.**

## Speaker notes

These are PromptArmor's published demonstrations. Several are fixed. The point is the pattern, not the vendor: an ordinary task turned into data theft.

- Slack AI: the attacker only posted in a public channel. The key left through a fake re-login link.
- Google Sheets: stopping the chat does not stop code the model already started.
- Claude for Excel: the approval dialog hid what was sent. That is not consent.
- Notion AI: the request fired before the user accepted the warning.
- vLex: anything the assistant displays can be shaped by an attacker.
- Claude Cowork: connected file access is the blast radius.

In every case, the malicious content arrived through normal work. Nobody broke in. Slide 53 names this: indirect prompt injection.

Bridge: next, the Hugging Face breach.

## Sources

- [Slack AI: data exfiltration via indirect prompt injection](https://www.promptarmor.com/resources/data-exfiltration-from-slack-ai-via-indirect-prompt-injection).
- [ChatGPT for Google Sheets: data exfiltration](https://www.promptarmor.com/resources/gpt-for-google-sheets-data-exfiltration).
- [CellShock: Claude AI is Excel-lent at stealing data](https://www.promptarmor.com/resources/cellshock-claude-ai-is-excel-lent-at-stealing-data).
- [Notion AI: unpatched data exfiltration](https://www.promptarmor.com/resources/notion-ai-unpatched-data-exfiltration).
- [vLex / Vincent AI: screen takeover attack](https://www.promptarmor.com/resources/screen-takeover-attack-in-ai-tool-acquired-for-1b).
- [Claude Cowork exfiltrates files](https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files).

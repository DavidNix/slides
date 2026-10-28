---
slide: 85
section: "Recommendations"
duration_minutes: 3
---

# Use Cowork, not a chat window

A chat window only knows what you paste into it. **Claude Cowork** works on your files and does the task:

- **Give it a folder and a goal.** It reads, edits, and creates the files itself. You do not copy and paste.
- **Connect your tools.** Mail, calendar, and drives give it the context and the actions that a chat window does not have.
- **Load your skills.** Your procedures run the same way every time.

Every connection is an access grant. Cowork is the tool in the exfiltration demo you saw earlier.

**Use Cowork to get the most work done. Connect only the folders and tools the task needs.**

## Speaker notes

This is the strongest recommendation in the deck. Most of the room uses ChatGPT or Copilot as a chat window. They paste text in and copy the answer out. That is the chatbot from the start of the session. Cowork is the agent from the Agents section: a model plus a harness, tools, and a loop. The leverage comes from that loop working on real files.

Give an office example. In a chat window, you paste in one claim file at a time and ask for a summary. In Cowork, you point it at the claims folder and ask it to summarize each file into one spreadsheet and flag missing documents. It works through the folder while you do something else.

Now give the warning equal time. The PromptArmor demo in the Security section was Cowork. A document with hidden instructions made it send the user's files to an attacker. Apply the Security habits:

- Connect one project folder, not your whole drive or home folder.
- Prefer read-only connectors. Many default connectors, such as Google Drive and Microsoft 365, can only read and search.
- Do not connect mail that can send, or anything that moves money, until you have a reason and a check in place.
- Treat files from outside the company as untrusted. They can carry instructions.
- Ask the four questions from "Choose the tradeoff before connecting tools" before you add each connector.

Note for the presenter: Anthropic now runs Cowork and chat in the same app, and Cowork works on desktop, web, and mobile. Local folders work only from the desktop app. Check the current plan terms before delivery, because where tasks run changed in October 2026.

## Sources

- [Use Claude Cowork on web, desktop, and mobile](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile).
- [Use Claude Cowork safely](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely).
- [Claude Cowork and chat are one Claude](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude).
- [Use connectors to extend Claude's capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities).
- [PromptArmor: Claude Cowork exfiltrates files](https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files).

Title: AI & Information Security: From Emerging Threats to Practical Defense

---

What we'll cover

<insert teaser and hooks>

---

About Me

David Nix

15+ years as a software engineer building backends and distributed systems for companies like Kroger, Home Depot, Aetna, United Healthcare, Costco, and the Department of Veteran Affairs. And many more.

Now I specialize in Applied AI for businesses

Local AI

Private AI on your own terms

Get in touch at hello@davidnix.com

---

Chatbots are antiques

The era of agents is here

Chatbots still useful for research and search.

ChatGPT replacing Google search. 900 million weekly active users. 10% of the entire human population.

---

Agents are useful for real business work because they complete tasks and pursue goals.

Chatbot can write an email.

Agents can read all your email, write responses, and send emails all without you ever opening an app.

---

But there's a catch.

Security

---

What is an agent?

They are nothing new.

<image of agentic old thermostat>

---

The model is the brain
The harness is the body + tools

Together they make an agent

<full screen image of agent-hardess-vs-model robot>

---

Agentic Example

Claude Cowork

<claude cowork example mp4>

---

What is a model?

GPT 5.6 Sol, Claude Opus 5, Claude Fable 5.1

It's a JSON API. That's all it is.

<show JSON example of OpenAI API completion call>

---

Models are stateless. Frozen in time. Tokens in and tokens out.

Models cannot distinguish between content and instructions. This will become important later. 

This surprises a lot of people because the harness injects new data, like info from a web search.

---

Examples of a harness

Claude CoWork, Claude Code, Codex, Grok Bot, Hermes, Openclaw

Chatbots are also lightweight harnesses. E.g. web search tool.

---

The Agentic Loop

Give it the Goal. Not steps.

<agentic loop image>

---

<agentic loop clean v2 image>

---

Agents

What could go wrong?

---

The Number One threat is not giving IP to an AI lab

E.g. Anthropic or OpenAI or China stealing your data and using it to train

---

Data Exfiltration

https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files

<claude cowork exfiltrate image>

---

Lethal Trifecta

Simon Willison

<image of lethal trifecta>

---

Content and Instructions are the same.

(Less commonly known as rule of 2)

Prompt Injection is your number one enemy.

---

IP Theft

From model providers

Opinion. Human data is more valuable than gold to AI labs.

Bartz, et al. v. Anthropic - Class action lawsuit Anthropic lost for using copyrighted books to train their models

Recently, Sony sued Anthropic for stealing songs.

---

How to protect yourself

---

Reminder 

<convenience or security image>

---

Human In the Loop

The only protection against Lethal Trifecta

But you risk approval fatigue

----

Least privileges

Annoying for humans.

Non-negotiable for agents.

---

Sandbox

Assume failure will happen. Limit the blast radius.

Not perfect

https://openai.com/index/hugging-face-incident-and-the-road-ahead/

---

Tool (or prompt) classifier

Defense in depth, not perfect. Claude code auto-mode.

<image of auto mode>

---

Observability and Audibility

Still immature but improving.

Langfuse and Langsmith

Gents:
https://github.com/source-inc/gents

----

Build your own harness

Open source examples

OpenAI Agents SDK, Codex, Hermes, Opencode, Pi

---

Local AI

Models are just files, not programs.

---

If interested in your own local, private AI:

hello@davidnix.com

Questions?

---

export type PostSection = {
  heading: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  num: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  date: string;
  dateLabel: string;
  image?: string;
  imageAlt?: string;
  lead: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "what-is-jev",
    num: "01",
    title: "What is Jev?",
    excerpt:
      "Jev is a decision model. You send a situation and a question with answers you already defined. It returns a choice, a score, or a yes-or-no probability your code can branch on.",
    tag: "Models",
    readTime: "6 min read",
    date: "2026-09-22",
    dateLabel: "22 Sep 2026",
    image: "/blogsimages/whatisjev.png",
    imageAlt: "Cover asking what Jev is, with a portrait against a pale grid.",
    lead: "Most models talk. Jev decides. TypeSafe shipped it in September 2026 as the first of what they call System One models: a fast, structured judgment that software can use directly, without a paragraph to parse.",
    sections: [
      {
        heading: "Built for software, not for chat",
        paragraphs: [
          "A chat model is the right tool when you need a draft, a summary, or an explanation. It is an awkward tool when the next step in your product is a branch: route this ticket, block this action, score this lead. Someone then has to read the paragraph and hope the wording stays stable.",
          "Jev takes the situation you already have — a ticket, a message, a JSON object, an array of text — and answers questions whose shape you fixed in advance. The current model is text only. Images, audio, and video are not supported yet. What comes back is a typed value and a probability, which is something a program can store, compare, and act on.",
        ],
      },
      {
        heading: "Three kinds of answer",
        paragraphs: [
          "Every question is one of three shapes. A choice asks Jev to pick one label from a list you wrote: billing, technical, or account. It returns the winner and a probability for each option.",
          "A score places the input on a scale you define, such as how urgent a message is. The result can land between the marks, so you are not forced into a blunt bucket.",
          "A noul is TypeSafe's name for a yes-or-no question. Does this message ask for a refund? The answer is a probability between 0 and 1. Your code compares that number to a threshold you chose. You can ask several of these about the same state in one call. The model judges. Your application decides whether to route, queue, block, or ask a person.",
        ],
      },
      {
        heading: "Where it earns a place",
        paragraphs: [
          "Use it where you already know the answer space. Support routing. Refund detection. A check before an agent is allowed to call a tool. A quality score on a draft before it is sent. On those jobs a small typed result is more useful than a fluent paragraph, and it is cheap enough to put on a hot path.",
          "The pattern that is showing up in real stacks is a pairing. A language model writes or reasons in the open. Jev handles the repeated judgments in between. LangChain has published a way to drop it into an agent harness as that check. That is the right mental picture: a colleague of the chatbot, doing the part the chatbot is bad at.",
        ],
      },
      {
        heading: "What you still own",
        paragraphs: [
          "Jev does not know facts you forgot to send. If a decision needs a balance, a policy, or a fresh document, your code fetches it first and puts it in the state. It also does not click, send, or update a record. Thresholds, permissions, and the audit log stay in your system.",
          "The questions are the surface a human has to review. Vague questions produce vague probabilities. Write them the way you would write a rule for a new teammate, and keep them in one file so someone can still read them without a tour of the codebase.",
        ],
      },
    ],
  },
  {
    slug: "what-is-grok-bot",
    num: "02",
    title: "What is Grok Bot?",
    excerpt:
      "Grok Bot is a team of named AI teammates with a computer of their own. You message them, they work inside the tools you already use, and they stop when a step needs you.",
    tag: "Agents",
    readTime: "7 min read",
    date: "2026-09-18",
    dateLabel: "18 Sep 2026",
    image: "/blogsimages/grokbot.png",
    imageAlt: "Grok Bot cover, with the words Made Simple and the Grok Bot mark.",
    lead: "Grok Bot is xAI's answer to the draft that never gets sent. Each Bot is a named teammate with memory. Together they share a computer in the cloud — browser, files, and a terminal — and they work inside the apps you already open every morning.",
    sections: [
      {
        heading: "A teammate with a computer",
        paragraphs: [
          "A chat window can suggest the email. Grok Bot is built to open the tool and do the step. Bots sign into the products you use, including sites that never shipped a clean API, and they keep working after you close the laptop. They come back when a step needs your approval.",
          "You talk to a Bot the way you would message a colleague, from the desktop app or from iOS, and the thread is the same on both. There is no workflow canvas to assemble before the first task. You create a Bot, name the job, and hand it something concrete.",
          "At launch it was in beta for SuperGrok, SuperGrok Plus, and SuperGrok Heavy, and for Cursor Pro, Pro+, Ultra, and Cursor Teams. Usage sits on its own meter, separate from your Grok and Cursor allowance. Enterprise access started on its own path.",
        ],
      },
      {
        heading: "One computer, several specialists",
        paragraphs: [
          "All of your Bots share that cloud computer. Files, browser sessions, and app logins live on the account, not inside a single Bot. That is what makes a handoff possible: a sales Bot can leave notes where an ops Bot can pick them up, without you pasting context between chats.",
          "It is also the rule you have to remember. A login placed on that computer is available to every Bot you run. Give each Bot a real role, and keep the roster small until the roles are obvious. xAI's docs suggest starting with one Bot that owns an outcome, and adding a specialist only when the work has a stable second job.",
          "Bots can message each other and sit together in a group chat. You describe the shared outcome; they pass work and pull you in for the judgment calls. The pattern xAI describes internally is a coordinator plus specialists — inbox, expenses, recruiting, bugs — so you stop being the switchboard.",
        ],
      },
      {
        heading: "Show it once",
        paragraphs: [
          "The loop they want is short. The next time you do a job, ask the Bot to follow along. It watches the steps, saves them as a routine, and takes your corrections. The time after that, you hand off the outcome instead of re-explaining the clicks.",
          "Routines can also run on a schedule, or wake up from another app, such as a Slack thread or a GitHub pull request. That is the difference between a prompt you repeat and a teammate who already knows what Tuesday looks like.",
        ],
      },
      {
        heading: "Where it fits, and where it should stop",
        paragraphs: [
          "Grok Bot fits work that lives in tools. Updating a CRM after a call. Processing an invoice that arrived by email. Reproducing a bug in the product and filing the ticket. The value is the last mile, the part most assistants leave as a draft in your chat.",
          "It is a weak place to store the rules of your business. Pricing, permissions, payouts, and the record of what happened belong in software you control. A Bot can operate that software. It should not be the software. Start with narrow access, watch a few real runs, and widen it only after the Bot has been boringly correct.",
        ],
      },
    ],
  },
  {
    slug: "muse-vs-grok-bot",
    num: "03",
    title: "Which is better: Muse or Grok Bot?",
    excerpt:
      "Muse is a personal agent for one person's life. Grok Bot is a roster of work teammates on a shared computer. The better one is the one whose job matches the work.",
    tag: "Compare",
    readTime: "8 min read",
    date: "2026-09-26",
    dateLabel: "26 Sep 2026",
    image: "/blogsimages/musevsgrokbot.png",
    imageAlt: "Comparison cover holding the Muse and Grok Bot marks under the question which is better.",
    lead: "There is no single winner, and the thumbnail is asking the wrong question if you stop there. Muse is Meta's personal agent, built for one person's life and released in the United States on 8 September 2026. Grok Bot is xAI's roster of work teammates, sharing a cloud computer and aimed at jobs that already live in your tools. Pick the shape that matches the work.",
    sections: [
      {
        heading: "Muse is built around a person",
        paragraphs: [
          "Meta's announcement is plain about the job. Muse takes tasks off your plate: email, calendar, research, bookings, spending, and the goals you keep meaning to start. It runs on Muse Secure VM, a dedicated computer for the agent and your data, and you talk to it like a message, in the Muse app or in WhatsApp. It is on iOS, Android, and muse.ai, with AI glasses planned. Meta says the free tier covers most of what people need, with paid plans if you want more.",
          "The design bet is a single steward that learns you. One memory, one relationship, and help that shows up when you are not staring at the phone. Later this year Meta says it will add Muse Confidential VM, encrypting that machine with a key only you hold.",
          "If you are outside the United States, that bet is still a preview. I build with teams from Pakistan, and Muse is not something I can put in a client's hands this week. It is still worth understanding. This is the direction personal agents are going.",
        ],
      },
      {
        heading: "Grok Bot is built around roles",
        paragraphs: [
          "Grok Bot assumes the work has lanes. One Bot on the inbox, one on the books, one on the product, and a coordinator so the handoff does not die in your chat. They share files and logins on one cloud computer, they can sit in a group chat, and you teach a workflow by doing it once.",
          "That is a closer fit when the job touches shared tools, colleagues, or a process you will run again next week. It is available with SuperGrok and paid Cursor plans, on desktop and iOS, which makes it reachable for a lot of people Muse cannot serve yet.",
          "The tradeoff is that shared computer. A credential on the machine is available to your other Bots. Muse's public design talks about a dedicated machine and a harder boundary around secrets. Grok Bot's public design talks about collaboration with less setup. Those are different priorities. Both of them still need you on the steps that send, pay, or delete.",
        ],
      },
      {
        heading: "A test you can use this week",
        paragraphs: [
          "Ask one question. If this goes wrong, whose account is it, and who else can see the result?",
          "If the account is yours, the mess is personal, and the job is life admin, Muse is the product aimed at you, provided you can get it. If the account is the company's, other people depend on the outcome, or you want specialists handing work to each other, Grok Bot is the closer match.",
          "Do not cross the wires. A personal agent logged into a shared company inbox is how a credential ends up where nobody can revoke it cleanly. A work Bot holding your private life is the same mistake in the other direction.",
        ],
      },
      {
        heading: "What “better” leaves out",
        paragraphs: [
          "No public head-to-head shows that one of them is more accurate. Launch posts are not benchmarks. Judge the one you can actually run, on a narrow job, with read access first. Look at whether it finishes inside the real tool or stops at a draft.",
          "If the work is the business itself — bookings, payouts, student records, a ledger — neither agent is the system. They can sit on top of one. The system still has to exist.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-personal-ai-agent",
    num: "04",
    title: "What is a personal AI agent?",
    excerpt:
      "A personal AI agent does the task, not just the answer. It has a computer, access to your apps, a memory, and a line it is not supposed to cross without you.",
    tag: "Explainer",
    readTime: "6 min read",
    date: "2026-09-12",
    dateLabel: "12 Sep 2026",
    image: "/blogsimages/personalaiagent.png",
    imageAlt: "Cover for what is a personal AI agent, with title typography on a pale grid.",
    lead: "A personal AI agent is software that does the task, not just the answer. It has a computer, it can use your apps, it remembers what you asked last week, and it is supposed to keep going while you do something else.",
    sections: [
      {
        heading: "The chatbot stops at the sentence",
        paragraphs: [
          "Ask a chatbot to book the train and you get instructions. Ask an agent and the point of the product is that it opens the site, fills the form, and stops only when a payment or a send needs you. That is why this month feels crowded. Meta shipped Muse on 8 September 2026. xAI opened Grok Bot as named teammates with a shared computer. The category finally has products a person can message without standing up a server.",
        ],
      },
      {
        heading: "Four parts, every time",
        paragraphs: [
          "Whatever the brand, the machine has the same organs. A computer, usually a virtual machine, so the agent can use a browser and files without living on your laptop. A way into your accounts: connectors where an app has an API, and ordinary computer use where it does not. Memory, so Tuesday's correction still applies on Friday. And a permission boundary, so sending, paying, and deleting are not the same action as reading.",
          "Miss any one of those and you are back to a chatbot with extra steps. The computer without a boundary is how a demo becomes an incident. The memory without a computer is a notes app.",
        ],
      },
      {
        heading: "Personal describes the relationship",
        paragraphs: [
          "Personal describes who the agent is for, not a single logo. Muse puts the relationship in one steward that learns a single life, and for now that product is rolling out in the United States. Grok Bot splits the relationship across named teammates that share one computer, which suits work that already has lanes. People who want the same shape on hardware they administer are looking at open-source agents they run themselves.",
          "The useful question is which boundary you want. One steward for your own accounts. A small roster for shared tools. Or a box you run, where you also own the failure modes.",
        ],
      },
      {
        heading: "Start smaller than the demo",
        paragraphs: [
          "The demos show a week of errands collapsing into one message. The sane first job is narrower: read an inbox and draft, watch a calendar, file a receipt, summarize a thread. Widen access after the agent has been quietly correct for a while.",
          "An agent with your payment method and no approval step is not a productivity gain. It is an employee you cannot audit. Give it a job you can check, then give it the next one.",
        ],
      },
    ],
  },
  {
    slug: "ai-agent-or-custom-software",
    num: "05",
    title: "AI agent or custom software?",
    excerpt:
      "Hand an agent the messy errands that live in other people's tools. Build software when the work is the business: the same rules, the same record, every time.",
    tag: "Build",
    readTime: "7 min read",
    date: "2026-09-29",
    dateLabel: "29 Sep 2026",
    image: "/blogsimages/Aiagentorcustomsoftware.png",
    imageAlt: "Cover comparing an AI agent with custom software, split layout on a grid background.",
    lead: "Use an agent when the work is messy, lives in other people's tools, and changes shape. Build software when the work is the business: the same rules, the same record, every time, for more than one person.",
    sections: [
      {
        heading: "Agents are good at the edges",
        paragraphs: [
          "An agent earns its place on the work around a system. Chasing a reply. Copying a transcript into the CRM. Checking a portal that has no API. Drafting the follow-up in your voice after it has seen you do it twice. Muse and Grok Bot are both bets on that edge: a computer, your logins, and a message thread.",
          "That work used to be someone's afternoon. An agent can take a real share of it, as long as a person still owns the sends that matter.",
        ],
      },
      {
        heading: "Software is the record",
        paragraphs: [
          "If two people must see the same booking status, the same payout, or the same student progress, that state cannot live in an agent's memory. Memory is a convenience. A database with roles is a promise you can audit.",
          "This is the split I keep seeing in the products I ship. A school-run operator needs invoices and driver logs that survive a new login. A course platform needs enrollments an admin can check. A chauffeur site needs a fare from the route, then a payment, then a confirmation. An agent can help run those products. It cannot be the place the money is stored.",
        ],
      },
      {
        heading: "The combination that holds",
        paragraphs: [
          "The setup that lasts is ordinary. Software owns the rules and the record. An agent sits beside it for the work the software was never going to cover: the inbox, the portal, the one-off chase. A decision model like Jev can sit in the middle when you need a fast, typed judgment — route this, score that — without asking a chat model to invent a label.",
          "Skip the software and hope the agent remembers, and you will not be able to answer “what is the status?” when the agent is wrong. Automate every edge with custom code, and you will spend months on portals that change their HTML in June.",
        ],
      },
      {
        heading: "A way to decide on Monday",
        paragraphs: [
          "Write the job in one sentence. If the sentence is a rule — who can see this, what the fare is, when the payout happens — build it. If the sentence is an errand — check this, draft that, nudge them — try an agent on a short leash. If the sentence is both, build the record first, then let the agent work against it.",
          "New tools will keep launching. That split will not move. If the record is the thing you need built, that is the work I do — tell me what the Monday sentence is.",
        ],
      },
    ],
  },
  {
    slug: "ai-agent-or-automation",
    num: "06",
    title: "AI agent or automation—which does your business need?",
    excerpt:
      "Automation runs the same steps on a trigger. An agent handles judgment, messy tools, and work that changes shape. Most businesses need both, in that order.",
    tag: "Build",
    readTime: "7 min read",
    date: "2026-09-30",
    dateLabel: "30 Sep 2026",
    image: "/blogsimages/aiagentandautomation.png",
    imageAlt: "Cover asking whether a business needs an AI agent or automation, with icons on a grid.",
    lead: "Automation is the right answer when the job is a rule you can write down. An agent is the right answer when the job needs eyes, context, and a decision before the next click. Confusing the two is how you get a brittle Zapier stack—or an expensive chatbot that still cannot finish the task.",
    sections: [
      {
        heading: "Automation owns the repeatable path",
        paragraphs: [
          "Classic automation is deterministic. When this happens, do these steps: copy the row, send the template, update the field, notify the channel. Triggers are clear—form submitted, invoice paid, tag added—and the path is the same every time.",
          "That is what tools like Zapier, Make, n8n, and the workflows inside your CRM are for. They shine when the systems talk through APIs, the data shape is stable, and nobody has to interpret a messy inbox or a portal that never shipped webhooks.",
          "If you can draw the flow on a whiteboard without writing “it depends,” you are looking at automation, not an agent.",
        ],
      },
      {
        heading: "An agent earns its place on judgment",
        paragraphs: [
          "An agent is built for work where the input is unstructured and the next step is not fixed. Read the thread and decide if this is a refund. Open the vendor site, find the confirmation, paste it into the CRM. Draft the reply in your tone after watching how you handled the last three.",
          "Products like Grok Bot and Muse sit here: a computer, your logins, and a thread where you describe the outcome. They are weak when you need a ledger two teams audit. They are strong on the last mile—the part automation usually leaves as “someone will do it manually.”",
          "Agents cost more per run than a webhook, and they can be wrong. You give them narrow jobs, approval on sends and payments, and you measure whether the task actually finished in the tool, not whether the paragraph sounded confident.",
        ],
      },
      {
        heading: "Where teams pick the wrong tool",
        paragraphs: [
          "The common mistake is automating chaos. You chain twelve zaps because the source data is dirty, the portal has no API, and every exception becomes a human step anyway. The stack looks automated on paper and still breaks every month.",
          "The other mistake is agent-washing a rule. Pricing, eligibility, payouts, and permissions belong in software with tests and an audit log—not in a prompt you hope stays stable. A decision model like Jev fits between the two when you need a typed judgment on a hot path without paying for a full language model every time.",
        ],
      },
      {
        heading: "A practical order of operations",
        paragraphs: [
          "Start by automating what is already boring and correct: notifications, field copies, calendar holds, status updates between systems that integrate cleanly. That frees time and shows you where the real friction is.",
          "Then put an agent—or a person with a checklist—on the exceptions automation cannot see: portals without APIs, one-off chases, triage that needs language. Keep the record in your database; let the agent move information in and out.",
          "Write the job in one sentence. If the sentence is “when X, always do Y,” automate it. If the sentence is “look at this and figure out what to do,” that is agent territory. If the sentence is “who is allowed to see this and what is the status,” that is software you own—and I build that part when you are ready to describe the Monday sentence.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function postNeighbors(slug: string) {
  const index = posts.findIndex((post) => post.slug === slug);
  const prev = posts[(index - 1 + posts.length) % posts.length];
  const next = posts[(index + 1) % posts.length];
  return { prev, next };
}

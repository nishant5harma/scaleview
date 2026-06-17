import { EMAIL, PHONE_DISPLAY_LIST, PRIMARY_PHONE, WHATSAPP_URL } from "./contact";

export type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
};

export const QUICK_REPLIES = [
  "What services do you offer?",
  "How does pricing work?",
  "Call me back",
  "Book a consultation",
] as const;

type Rule = {
  keywords: string[];
  reply: string;
};

const RULES: Rule[] = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good evening"],
    reply:
      "Hello! I'm the ScaleView assistant. I can help with our cloud services, pricing, certifications, security, or connect you with a consultant. What would you like to know?",
  },
  {
    keywords: ["service", "offer", "do you do", "what can", "capabilities"],
    reply:
      "ScaleView offers six core services:\n\n• Cloud Services — migration, architecture & cost optimization\n• Cybersecurity — zero-trust, compliance & threat protection\n• Data & AI — analytics pipelines & production GenAI\n• DevOps & Automation — CI/CD, IaC & platform engineering\n• Managed Services — 24/7 monitoring & operations\n• Digital Transformation — modern apps & legacy modernization\n\nWhich area fits your project?",
  },
  {
    keywords: ["cloud", "migrate", "migration", "aws", "azure", "gcp", "google cloud"],
    reply:
      "We're certified AWS, Azure & Google Cloud partners. Typical cloud migrations run 6–12 weeks with 20–40% cost reduction targets. Discovery starts within 1–2 weeks of agreement. Want to book a free 30-minute consultation?",
  },
  {
    keywords: ["security", "cyber", "compliance", "soc", "iso", "gdpr", "zero trust"],
    reply:
      "Security is built zero-trust by default — short-lived credentials, KMS encryption, and identity-aware access. We align to SOC 2, ISO 27001, and GDPR, with EU, UK, US, and India data residency options.",
  },
  {
    keywords: ["devops", "cicd", "pipeline", "kubernetes", "terraform", "automation"],
    reply:
      "Our DevOps practice covers CI/CD pipelines, Infrastructure as Code (Terraform), Kubernetes, and platform engineering. Clients typically see up to 10× release frequency and sub-15-minute mean time to recover.",
  },
  {
    keywords: ["ai", "data", "analytics", "machine learning", "genai", "llm"],
    reply:
      "We build production-ready data platforms and GenAI workloads — real-time analytics, lakehouse architectures, and governed AI deployments on AWS, Azure, and Snowflake/Databricks ecosystems.",
  },
  {
    keywords: ["managed", "sla", "support", "24/7", "monitoring"],
    reply:
      "Managed services include 24/7 monitoring, 99.9% uptime target, 15-minute Sev-1 response, named technical lead per account, RCA within 5 business days, and quarterly business reviews.",
  },
  {
    keywords: ["price", "pricing", "cost", "quote", "budget", "how much"],
    reply:
      "We work in fixed-scope phases (Discover, Design, Deploy) and monthly retainers for managed services — no hidden change orders. Most engagements start with a paid 2–3 week Discovery sprint. I can connect you with a consultant for a tailored quote.",
  },
  {
    keywords: ["partner", "certified", "aws partner", "azure partner"],
    reply:
      "Yes — we hold AWS Partner Network status alongside Microsoft Azure and Google Cloud credentials. Our architects carry active certifications across all three hyperscalers, with partner pricing and direct vendor escalation.",
  },
  {
    keywords: ["start", "timeline", "how fast", "when can", "kick off"],
    reply:
      "Discovery typically begins within 1–2 weeks of contract signature. First measurable outcomes — cost wins, pipeline acceleration, or AI workloads in production — usually land within 30–60 days.",
  },
  {
    keywords: ["location", "india", "where", "office", "based"],
    reply:
      "We're headquartered in India and serve clients across APAC, the Middle East, and select international markets.",
  },
  {
    keywords: ["phone", "call", "number", "whatsapp", "reach", "contact"],
    reply: `You can reach us at:\n\n📞 ${PHONE_DISPLAY_LIST}\n📧 ${EMAIL}\n\nOr message us on WhatsApp: ${WHATSAPP_URL}`,
  },
  {
    keywords: ["email", "mail"],
    reply: `Drop us a line at ${EMAIL} — we typically respond within one business day.`,
  },
  {
    keywords: ["consultation", "book", "appointment", "talk", "speak", "callback", "call me"],
    reply:
      "I'd love to set that up! Click **Book consultation** below for a free 30-minute discovery call with a senior architect — no commitment required.",
  },
  {
    keywords: ["team", "replace", "embed", "work alongside"],
    reply:
      "We work both ways — embedding senior engineers into your squads, running dedicated pods for greenfield builds, or operating the full platform 24/7. No junior handoffs.",
  },
  {
    keywords: ["thank", "thanks", "bye", "goodbye"],
    reply:
      "You're welcome! If you need anything else, I'm here. You can also call us at " +
      PRIMARY_PHONE.display +
      ". Have a great day!",
  },
];

const DEFAULT_REPLY =
  "I'm not sure I caught that. Try asking about our services, pricing, cloud migration, security, or say **Book a consultation** to speak with an expert. You can also call us at " +
  PRIMARY_PHONE.display +
  ".";

export function getBotResponse(input: string): string {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return DEFAULT_REPLY;

  for (const rule of RULES) {
    if (rule.keywords.some((kw) => normalized.includes(kw))) {
      return rule.reply;
    }
  }

  return DEFAULT_REPLY;
}

export type ServiceDeliverable = {
  num: string;
  title: string;
  text: string;
};

export type Service = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDesc: string;
  heroImage: string;
  caseImage: string;
  deliverables: ServiceDeliverable[];
  businessTitle: string;
  businessPoints: string[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
};

export const SERVICES: Service[] = [
  {
    slug: "cloud-services",
    name: "Cloud Services",
    metaTitle: "Cloud Migration & Modernization Services for SMBs | ScaleView",
    metaDescription:
      "ScaleView delivers AWS-first cloud migration and modernization services for SMBs and mid-market — zero-downtime moves, modernized apps, lower cloud bills.",
    heroTitle: "Cloud Migration & Modernization Services Built for Growing Businesses",
    heroDesc:
      "Move to the cloud without the downtime, the surprise bills or the six-month delays. ScaleView plans, migrates and modernizes your infrastructure and apps on AWS. Your team ships faster. You spend less. You stop thinking about hardware.",
    heroImage: "/images/svc-cloud-real.webp",
    caseImage: "/images/svc-cloud.webp",
    deliverables: [
      {
        num: "01",
        title: "Migration Strategy & Readiness Assessment",
        text: "Our architects review your infrastructure, apps and data, then build a roadmap with a clear cost model attached — before any work starts.",
      },
      {
        num: "02",
        title: "Application Migration & Modernization",
        text: "We move your apps to AWS and modernize them with microservices, containers and APIs where it makes sense.",
      },
      {
        num: "03",
        title: "Data Migration & Modernization",
        text: "Your databases move with full integrity, encryption, and as little downtime as possible.",
      },
      {
        num: "04",
        title: "Legacy System Modernization",
        text: "We modernize what's worth keeping, replace what isn't, and retire what no one uses.",
      },
      {
        num: "05",
        title: "Hybrid & Multi-Cloud Migration",
        text: "We connect on-premises systems to AWS and Azure with secure hybrid and multi-cloud setups.",
      },
      {
        num: "06",
        title: "Post-Migration Optimization & Support",
        text: "We keep watching performance and cost after go-live so your savings stay real.",
      },
    ],
    businessTitle: "Why SMBs and mid-market teams choose ScaleView",
    businessPoints: [
      "Built for your size — fast assessments, clear pricing, actionable roadmaps",
      "AWS & Azure certified with plans built around your workloads",
      "Phased waves and tested cutovers for zero-disruption migration",
      "Honest pricing with a cost model before migration starts",
      "One team from assessment through migration, modernization and support",
    ],
    ctaEyebrow: "Ready when you are",
    ctaTitle: "Ready to move to the cloud — the right way?",
    ctaDesc:
      "Let's map your migration before you commit to anything. You'll walk away with a clear roadmap, a real cost number and a straight answer on what should move first.",
    ctaButton: "Book a Free Cloud Assessment",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    metaTitle: "Managed Cybersecurity & Cloud Security Services | ScaleView",
    metaDescription:
      "ScaleView offers managed cybersecurity & cloud security services for SMBs & mid-market. Threat detection, compliance, identity & 24/7 security monitoring included.",
    heroTitle: "Security That Moves as Fast as Your Business",
    heroDesc:
      "From zero-trust architecture to continuous compliance, ScaleView protects your cloud, data, and applications against modern threats — without slowing your teams down.",
    heroImage: "/images/svc-security-real.webp",
    caseImage: "/images/svc-security.webp",
    deliverables: [
      {
        num: "01",
        title: "Security Assessment & Audit",
        text: "We map your attack surface, review configurations, and benchmark against industry frameworks to surface real risk — not noise.",
      },
      {
        num: "02",
        title: "Zero-Trust Architecture",
        text: "Never trust, always verify. We design identity-aware, least-privilege access models across every workload and network boundary.",
      },
      {
        num: "03",
        title: "Identity & Access Management",
        text: "Short-lived credentials, SSO, and fine-grained policies that keep the right people in — and everyone else out.",
      },
      {
        num: "04",
        title: "Threat Detection & Response",
        text: "Continuous monitoring, automated alerting, and rapid incident response to contain threats before they become breaches.",
      },
      {
        num: "05",
        title: "Compliance & Governance",
        text: "We align your controls to SOC 2, ISO 27001, and GDPR — and keep them audit-ready with policy-as-code.",
      },
      {
        num: "06",
        title: "Data Protection & Encryption",
        text: "KMS-managed encryption in transit and at rest, plus data classification and loss-prevention guardrails.",
      },
    ],
    businessTitle: "Why Secure with ScaleView?",
    businessPoints: [
      "Cut breach risk with continuous monitoring and automated threat response",
      "Pass audits faster with SOC 2, ISO 27001, and GDPR-aligned controls",
      "Replace standing access with short-lived, identity-aware credentials",
      "Encrypt data in transit and at rest across every environment",
      "Build a security culture with training and clear incident playbooks",
    ],
    ctaEyebrow: "Stay protected",
    ctaTitle: "Ready to Harden Your Cloud?",
    ctaDesc:
      "Get a free security posture review — no obligations, just a clear picture of your risk.",
    ctaButton: "Book a Security Review",
  },
  {
    slug: "data-ai",
    name: "Data & AI",
    metaTitle: "Generative AI & Data Services | ScaleView",
    metaDescription:
      "ScaleView transforms businesses with intelligent automation, generative AI services & data solutions — enabling smarter decisions, personalized experiences & innovation.",
    heroTitle: "Turn Raw Data into Real Decisions",
    heroDesc:
      "ScaleView builds the data platforms, analytics, and AI systems that turn scattered information into compounding business advantage — from dashboards to production GenAI.",
    heroImage: "/images/svc-ai-real.webp",
    caseImage: "/images/svc-ai.webp",
    deliverables: [
      {
        num: "01",
        title: "Data Strategy & Architecture",
        text: "We design the data foundations — warehouses, lakes, and lakehouses — that fit your workloads and budget.",
      },
      {
        num: "02",
        title: "Data Platform Engineering",
        text: "Reliable, observable pipelines on Snowflake, Databricks, and BigQuery that move and transform data at scale.",
      },
      {
        num: "03",
        title: "Analytics & Business Intelligence",
        text: "Self-serve dashboards and metrics that put trusted insights in front of the people who make decisions.",
      },
      {
        num: "04",
        title: "Machine Learning & MLOps",
        text: "From model development to production deployment and monitoring — ML that actually ships and stays healthy.",
      },
      {
        num: "05",
        title: "Generative AI Solutions",
        text: "RAG systems, copilots, and agents deployed safely with guardrails, evaluation, and human oversight.",
      },
      {
        num: "06",
        title: "Data Governance & Quality",
        text: "Lineage, access control, and quality checks that keep your data trustworthy and compliant.",
      },
    ],
    businessTitle: "Why Data & AI with ScaleView?",
    businessPoints: [
      "Unify siloed data into a single, trusted source of truth",
      "Ship analytics and ML models to production, not just notebooks",
      "Deploy Generative AI safely with guardrails and human oversight",
      "Make faster decisions with real-time dashboards and alerts",
      "Control cost and quality with governed, observable pipelines",
    ],
    ctaEyebrow: "Let's build",
    ctaTitle: "Ready to Put Your Data to Work?",
    ctaDesc:
      "Let's scope your first data or AI win — free of charge. No commitments, just clarity.",
    ctaButton: "Book a Data & AI Workshop",
  },
  {
    slug: "devops",
    name: "DevOps & Automation",
    metaTitle: "Managed DevOps & Automation Solutions | ScaleView",
    metaDescription:
      "Partner with ScaleView for managed DevOps services & automation solutions. Automate processes, reduce downtime & deliver software faster, securely & at scale for your business.",
    heroTitle: "Ship Faster, Break Less, Sleep Better",
    heroDesc:
      "ScaleView builds the pipelines, infrastructure-as-code, and automation that let your teams release with confidence — and operate at scale without the firefighting.",
    heroImage: "/images/svc-devops-real.webp",
    caseImage: "/images/svc-devops.webp",
    deliverables: [
      {
        num: "01",
        title: "CI/CD Pipeline Engineering",
        text: "Automated build, test, and deploy pipelines that turn every commit into a safe, repeatable release.",
      },
      {
        num: "02",
        title: "Infrastructure as Code",
        text: "Terraform and policy-as-code that make your environments version-controlled, reviewable, and drift-free.",
      },
      {
        num: "03",
        title: "Platform Engineering",
        text: "Golden paths and internal developer platforms that let teams self-serve without reinventing the wheel.",
      },
      {
        num: "04",
        title: "Observability & Monitoring",
        text: "End-to-end metrics, logs, and traces so you find and fix issues before your users do.",
      },
      {
        num: "05",
        title: "Release & Deployment Automation",
        text: "Blue-green and canary deployments with automated rollbacks for zero-drama releases.",
      },
      {
        num: "06",
        title: "Reliability & SRE",
        text: "SLOs, runbooks, and incident processes that keep your platform fast, available, and resilient.",
      },
    ],
    businessTitle: "Why DevOps with ScaleView?",
    businessPoints: [
      "Release more often with automated, repeatable pipelines",
      "Eliminate config drift with version-controlled infrastructure",
      "Catch issues early with end-to-end observability",
      "Recover faster with automated rollbacks and runbooks",
      "Free engineers to build features, not babysit deployments",
    ],
    ctaEyebrow: "Let's automate",
    ctaTitle: "Ready to Accelerate Delivery?",
    ctaDesc:
      "Let's find the bottlenecks slowing your team down — free of charge. No commitments, just clarity.",
    ctaButton: "Book a DevOps Assessment",
  },
  {
    slug: "managed-services",
    name: "Managed Services",
    metaTitle: "24/7 Cloud Managed Services & IT Support | ScaleView",
    metaDescription:
      "ScaleView delivers expert AWS & Azure cloud managed services with 24/7 monitoring, security, cost optimization & seamless scalability for SMBs and mid-market.",
    heroTitle: "Your Cloud, Expertly Run — 24/7",
    heroDesc:
      "Hand off the operational heavy lifting. ScaleView monitors, secures, and optimizes your infrastructure around the clock, so your team can focus on the business.",
    heroImage: "/images/svc-managed-real.webp",
    caseImage: "/images/svc-managed.webp",
    deliverables: [
      {
        num: "01",
        title: "24/7 Monitoring & Support",
        text: "Around-the-clock monitoring with proactive alerting and a team that responds before issues escalate.",
      },
      {
        num: "02",
        title: "Incident Management",
        text: "Defined severity tiers, fast response targets, and full RCA so the same problem never bites twice.",
      },
      {
        num: "03",
        title: "Patch & Vulnerability Management",
        text: "Continuous patching and vulnerability remediation to keep your stack secure and compliant.",
      },
      {
        num: "04",
        title: "Backup & Disaster Recovery",
        text: "Tested backups and recovery runbooks that protect your business when things go wrong.",
      },
      {
        num: "05",
        title: "Cost & Performance Optimization",
        text: "Ongoing right-sizing and tuning that keeps your bill lean and your platform fast.",
      },
      {
        num: "06",
        title: "Dedicated Technical Account Lead",
        text: "A named engineer who knows your environment, plus quarterly business reviews tied to your KPIs.",
      },
    ],
    businessTitle: "Why Managed Services with ScaleView?",
    businessPoints: [
      "Get 99.9% availability with proactive, around-the-clock monitoring",
      "Resolve incidents fast with 15-minute Sev-1 response targets",
      "Stay secure with continuous patching and vulnerability management",
      "Protect your business with tested backups and disaster recovery",
      "Lower run costs with ongoing right-sizing and optimization",
    ],
    ctaEyebrow: "Stay supported",
    ctaTitle: "Ready to Offload Operations?",
    ctaDesc:
      "Let's review your current operations — free of charge. No commitments, just clarity.",
    ctaButton: "Book a Managed Services Consultation",
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    metaTitle: "Digital Transformation & Cloud Consulting Services | ScaleView",
    metaDescription:
      "ScaleView helps SMBs & mid-market modernize legacy systems and accelerate digital transformation with expert AWS & Azure cloud, data & AI services built to scale.",
    heroTitle: "Technology Strategy That Drives Real Outcomes",
    heroDesc:
      "ScaleView helps you modernize legacy systems, rethink processes, and adopt the technology that creates measurable business impact — strategy meets execution.",
    heroImage: "/images/svc-transform-real.webp",
    caseImage: "/images/svc-transform.webp",
    deliverables: [
      {
        num: "01",
        title: "Digital Maturity Assessment",
        text: "We benchmark your people, processes, and technology to find where modernization will pay off most.",
      },
      {
        num: "02",
        title: "Technology Roadmap & Strategy",
        text: "A pragmatic, phased plan that ties every investment to a clear business outcome.",
      },
      {
        num: "03",
        title: "Legacy Modernization",
        text: "Re-platform and re-architect aging systems into modern, scalable, cloud-native platforms.",
      },
      {
        num: "04",
        title: "Process Automation",
        text: "Automate manual, repetitive workflows to cut cost, reduce errors, and speed up cycle time.",
      },
      {
        num: "05",
        title: "Change Enablement",
        text: "Training, documentation, and structured rollout that bring your teams along for the ride.",
      },
      {
        num: "06",
        title: "Innovation & Product Engineering",
        text: "Senior engineers who take ideas from prototype to production-grade product, fast.",
      },
    ],
    businessTitle: "Why Transform with ScaleView?",
    businessPoints: [
      "Replace legacy bottlenecks with modern, scalable platforms",
      "Align technology investment to clear business outcomes",
      "Automate manual processes to cut cost and cycle time",
      "Bring teams along with structured change enablement",
      "Move from idea to product faster with senior engineering",
    ],
    ctaEyebrow: "Let's transform",
    ctaTitle: "Ready to Modernize?",
    ctaDesc:
      "Let's map your transformation roadmap — free of charge. No commitments, just clarity.",
    ctaButton: "Book a Strategy Session",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  category: "all" | "software" | "web" | "ai" | "enterprise";
  description: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
  highlightMetric: string;
  ctaText?: string;
}

export const services: Service[] = [
  {
    id: "software-development",
    category: "software",
    title: "Software Development",
    subtitle: "Custom platforms & resilient cloud-native systems designed for scale",
    description:
      "We design, build, and deploy custom full-stack software tailored to your exact business logic. From multi-tenant SaaS applications to mission-critical backend services, our engineering prioritizes reliability, clean architecture, and modularity.",
    features: [
      "Custom business applications",
      "Robust REST & GraphQL APIs",
      "Database-driven architectures",
      "Scalable microservices",
    ],
    deliverables: [
      "Modular full-stack web and backend applications",
      "Automated CI/CD pipelines and deployment scripts",
      "Comprehensive API documentation and test suites",
      "Full source code ownership with zero vendor lock-in",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker"],
    highlightMetric: "99.9% Uptime Guarantee",
    ctaText: "Discuss Software Architecture",
  },
  {
    id: "website-development",
    category: "web",
    title: "Website Development",
    subtitle: "Ultra-fast, high-converting digital storefronts & interactive web apps",
    description:
      "Your website is your company's primary digital impression. We build lightning-fast, SEO-optimized, and aesthetically stunning web experiences using modern Next.js and React technologies that turn casual visitors into loyal clients.",
    features: [
      "High-converting business websites",
      "Headless E-commerce solutions",
      "Interactive client portals & landing pages",
      "Continuous optimization & maintenance",
    ],
    deliverables: [
      "Sub-second page loading speeds with 95+ Google Lighthouse scores",
      "Flawless responsive layouts across all mobile, tablet, and desktop devices",
      "Semantic SEO architecture with rich metadata and social cards",
      "Integrated analytics, lead capture forms, and CMS connectivity",
    ],
    techStack: ["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript", "Vercel / Cloudflare"],
    highlightMetric: "< 1s Average Page Load",
    ctaText: "Launch Your Website",
  },
  {
    id: "ai-automation",
    category: "ai",
    title: "AI & Automation",
    subtitle: "Intelligent autonomous agents & automated business workflows",
    description:
      "Transform repetitive, manual operational bottlenecks into autonomous intelligent workflows. We integrate custom AI assistants, large language models (LLMs), and automated data pipelines directly into your existing business tooling.",
    features: [
      "Custom AI assistants & chatbots",
      "Intelligent workflow automation",
      "Multi-system API integrations",
      "Automated document & data processing",
    ],
    deliverables: [
      "Context-aware customer service and internal knowledge bots",
      "End-to-end data extraction and OCR document pipelines",
      "CRM, ERP, and communication platform integrations (Slack, WhatsApp, Email)",
      "Measurable operational efficiency gains and labor cost reductions",
    ],
    techStack: ["Python", "LLM APIs", "LangChain", "Vector DBs", "Autonomous Agents", "Webhooks"],
    highlightMetric: "+65% Team Productivity",
    ctaText: "Explore AI Integration",
  },
  {
    id: "digital-solutions",
    category: "enterprise",
    title: "Digital Solutions",
    subtitle: "System integration, real-time analytics & operational transformation",
    description:
      "Modernize legacy workflows and connect disparate tools with tailored digital systems. We architect intuitive internal dashboards, administrative panels, and unified data pipelines that give leadership total clarity over business operations.",
    features: [
      "Legacy system modernization",
      "Interactive analytics dashboards",
      "Custom internal productivity tools",
      "Complete digital transformation support",
    ],
    deliverables: [
      "Centralized administrative dashboards with real-time analytics",
      "Cross-platform data synchronization and database migrations",
      "Automated reporting, role-based access control, and audit logs",
      "Hands-on team training and developer onboarding walkthroughs",
    ],
    techStack: ["TypeScript", "PostgreSQL", "Tailwind CSS", "Chart.js / Recharts", "Cloud Services"],
    highlightMetric: "Zero Data Disruption",
    ctaText: "Modernize Your Systems",
  },
];

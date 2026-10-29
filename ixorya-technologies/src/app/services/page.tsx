import type { Metadata } from "next";
import Link from "next/link";
import ServicesList from "@/components/services/ServicesList";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Workflow,
  Rocket,
  CheckCircle2,
  Clock,
  Layers,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Engineering Solutions",
  description:
    "Explore Ixorya Technologies' custom software development, modern website engineering, AI automation pipelines, and enterprise digital solutions.",
};

const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description:
      "We unpack your business logic, evaluate technical dependencies, and map a scalable database and API blueprint.",
    timeframe: "Week 1",
  },
  {
    step: "02",
    title: "UI/UX & Prototyping",
    description:
      "Interactive wireframes and clean user journeys designed for conversion, accessibility, and frictionless onboarding.",
    timeframe: "Week 2",
  },
  {
    step: "03",
    title: "Agile Build & AI Integration",
    description:
      "Two-week iterative sprints using strict TypeScript, modern Next.js, and automated workflow pipelines with continuous demos.",
    timeframe: "Sprint Cycles",
  },
  {
    step: "04",
    title: "Cloud Deployment & Scale",
    description:
      "Automated CI/CD pipelines, zero-downtime release, performance monitoring, and guaranteed post-launch SLA support.",
    timeframe: "Launch & Beyond",
  },
];

const guarantees = [
  {
    title: "100% Code & IP Ownership",
    description: "You own all source code, design assets, and infrastructure configurations with zero vendor lock-in.",
  },
  {
    title: "Strict Security & NDAs",
    description: "We sign non-disclosure agreements upfront and build with industry-standard authentication and data encryption.",
  },
  {
    title: "Performance Benchmarked",
    description: "Every web platform is built for sub-second load times, mobile responsiveness, and 95+ Lighthouse scores.",
  },
  {
    title: "Direct Engineer Access",
    description: "Communicate directly with experienced software engineers and architects, not disconnected account reps.",
  },
];

export default function ServicesPage() {
  const whatsAppUrl = getWhatsAppUrl(
    `Hello ${siteConfig.name}, I would like to schedule a technical discovery call for our project.`
  );

  return (
    <div className="relative min-h-screen py-16 sm:py-24 bg-grid-pattern overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-600/15 blur-[140px] -z-10" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-[450px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] -z-10" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* =========================================================================
            SERVICES HERO
           ========================================================================= */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 text-xs font-semibold text-cyan backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-cyan" />
            <span>Full-Lifecycle Software & AI Engineering</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            Engineering Digital Solutions.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Built to Scale Without Limits.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted leading-relaxed">
            From high-throughput custom software and ultra-fast websites to autonomous AI workflows,{" "}
            <span className="text-silver font-medium">{siteConfig.name}</span> delivers technical rigor, modern stacks, and measurable business ROI.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500 hover:shadow-blue-500/40"
            >
              <span>Request a Technical Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {siteConfig.hasWhatsApp && whatsAppUrl && (
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            )}
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
            <div className="rounded-xl border border-white/10 bg-dark/60 p-4">
              <div className="text-xl font-bold text-white">4+ Core</div>
              <div className="text-xs text-muted">Specialized Domains</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-dark/60 p-4">
              <div className="text-xl font-bold text-cyan">99.9% Uptime</div>
              <div className="text-xs text-muted">Resilient Architecture</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-dark/60 p-4">
              <div className="text-xl font-bold text-emerald-400">&lt; 1s Load</div>
              <div className="text-xs text-muted">Next.js Speed</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-dark/60 p-4">
              <div className="text-xl font-bold text-purple-400">100% IP</div>
              <div className="text-xs text-muted">Full Client Ownership</div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INTERACTIVE SERVICES EXPLORER
           ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
              <Layers className="h-4 w-4" />
              <span>Our Capabilities</span>
            </div>
            <h2 className="text-3xl font-bold text-silver sm:text-4xl">
              Specialized Engineering Domains
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Select a domain below to inspect core competencies, delivered artifacts, and technologies:
            </p>
          </div>

          <ServicesList />
        </section>

        {/* =========================================================================
            OUR 4-STAGE METHODOLOGY
           ========================================================================= */}
        <section className="rounded-3xl border border-white/10 bg-dark/70 p-8 sm:p-14 backdrop-blur-xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
              <Workflow className="h-4 w-4" />
              <span>Delivery Framework</span>
            </div>
            <h2 className="text-3xl font-bold text-silver sm:text-4xl">
              How We Turn Requirements into Production
            </h2>
            <p className="text-sm sm:text-base text-muted">
              A transparent, agile workflow with clear milestones from day one.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-navy/80 p-6 transition hover:border-cyan/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-cyan">
                      {step.step}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-dark border border-white/10 px-2 py-0.5 text-[10px] font-mono text-muted">
                      <Clock className="h-3 w-3" />
                      {step.timeframe}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-silver">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            THE IXORIA COMMITMENT / GUARANTEES
           ========================================================================= */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
              <ShieldCheck className="h-4 w-4" />
              <span>Engineering Standards</span>
            </div>
            <h2 className="text-3xl font-bold text-silver sm:text-4xl">
              Why Leaders Choose {siteConfig.name}
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Built on transparency, engineering rigor, and zero vendor lock-in.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-dark/60 p-6 backdrop-blur-sm transition hover:border-white/20 space-y-3"
              >
                <div className="h-10 w-10 rounded-xl bg-navy border border-white/10 text-cyan flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-silver text-base">
                  {g.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            CLOSING PROJECT INQUIRY FORM
           ========================================================================= */}
        <section id="inquiry" className="rounded-3xl border border-cyan/30 bg-gradient-to-b from-dark/95 to-navy p-8 sm:p-14 backdrop-blur-2xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Context */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-semibold text-cyan">
                <Rocket className="h-3.5 w-3.5" />
                <span>Ready to Launch?</span>
              </div>

              <h2 className="text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                Let&apos;s Build Your Next Digital Product.
              </h2>

              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Tell us about your requirements, existing stack, and timeline. Our technical architects will review your scope and provide an actionable roadmap within 24 hours.
              </p>

              <div className="space-y-3 pt-2 text-xs text-muted">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan" />
                  <span>Free technical feasibility assessment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan" />
                  <span>Transparent sprint-based estimations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan" />
                  <span>Confidentiality & Non-Disclosure Agreements</span>
                </div>
              </div>
            </div>

            {/* Right ContactForm */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

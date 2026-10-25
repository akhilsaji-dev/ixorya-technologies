import Link from "next/link";
import { services } from "@/data/services";
import { courses } from "@/data/courses";
import { siteConfig, site, getWhatsAppUrl, getTelUrl, getMailtoUrl } from "@/config/site";
import HeroShowcase from "@/components/home/HeroShowcase";
import SolutionMatcher from "@/components/home/SolutionMatcher";
import ContactForm from "@/components/contact/ContactForm";
import {
  Code2,
  Globe,
  Bot,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Rocket,
  ShieldCheck,
  Zap,
  GraduationCap,
  Users,
  Workflow,
  Star,
  Terminal,
  Cpu,
  Monitor,
  Lightbulb,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  FolderGit2,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/layout/SocialIcons";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500 hover:shadow-blue-500/40";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-silver backdrop-blur-sm transition hover:border-cyan hover:text-white hover:bg-white/10";
const btnAccent =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-cyan hover:underline";

// Icon mapping helper for services
const serviceIcons: Record<string, LucideIcon> = {
  "Software Development": Code2,
  "Website Development": Globe,
  "AI & Automation": Bot,
  "Digital Solutions": Layers,
};

const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "We dive deep into your requirements, map system architecture, and establish a clear roadmap for success.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "UI/UX & Prototyping",
    description: "Interactive wireframes and high-fidelity designs crafted for seamless usability and rapid feedback loops.",
    icon: Monitor,
  },
  {
    step: "03",
    title: "Agile Build & AI Integration",
    description: "Iterative sprints with clean code, modern frameworks, and intelligent workflow automation built-in.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Deployment & Scaling",
    description: "Robust CI/CD deployment, cloud optimization, performance monitoring, and ongoing support.",
    icon: Rocket,
  },
];

const testimonials = [
  {
    quote: "Ixorya Technologies took our legacy workflow and built a sleek, automated platform that cut our processing time by over 60%. Their attention to detail is outstanding.",
    author: "Rahul S.",
    role: "Operations Director, Enterprise Logistics",
    category: "Software & AI Automation",
  },
  {
    quote: "Our new website built on Next.js loads instantly and looks incredibly modern. Conversions jumped within the first month. Ixorya's engineering team exceeded expectations.",
    author: "Elena M.",
    role: "Co-Founder, SaaS FinTech",
    category: "Web Development",
  },
  {
    quote: "The Python course at Ixorya Academy gave me the practical confidence I needed. The mentorship was hands-on, encouraging, and focused on real-world projects rather than boring theory.",
    author: "Kavya P.",
    role: "Academy Graduate & Junior Developer",
    category: "Ixorya Academy",
  },
];

const techStack = [
  { name: "Next.js 16", category: "Frontend" },
  { name: "React 19", category: "UI Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "AI & Backend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AI & LLM Workflows", category: "Intelligence" },
  { name: "Docker & Cloud", category: "DevOps" },
];

export default function Home() {
  return (
    <>
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-blue-600/15 blur-[120px] -z-10" />
        <div className="pointer-events-none absolute right-10 top-1/3 h-[400px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px] -z-10" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 text-xs font-semibold text-cyan backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-cyan" />
                <span>Next-Generation Digital Solutions & Tech Academy</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
                Engineering Digital Experiences.{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Automating the Future.
                </span>
              </h1>

              {/* Subtext */}
              <p className="max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
                <span className="text-silver font-medium">{site.name}</span> transforms ambitious ideas into powerful custom software, high-speed modern websites, and intelligent AI automations. Through{" "}
                <span className="text-cyan font-medium">Ixorya Academy</span>, we train the next generation of engineers with hands-on, zero-fluff coding education.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link href="/contact" className={btnPrimary}>
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className={btnSecondary}>
                  <span>Explore Services</span>
                </Link>
                <Link href="/academy/courses" className={btnAccent}>
                  <GraduationCap className="h-4 w-4" />
                  <span>Learn Programming</span>
                </Link>
              </div>

              {/* Trust Micro-Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-xs text-muted">Architecture Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan">4+ Core</div>
                  <div className="text-xs text-muted">Engineering Domains</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-xs text-muted">Practical Hands-On</div>
                </div>
              </div>
            </div>

            {/* Right Terminal / Interactive Showcase */}
            <div className="lg:col-span-5">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY VALUE PILLARS & STATS BAR
         ========================================================================= */}
      <section className="border-y border-white/10 bg-dark/60 py-8 backdrop-blur-md">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-silver text-sm">Full-Stack Scale</div>
              <div className="text-xs text-muted">Modern, resilient code</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan/10 border border-cyan/20 text-cyan">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-silver text-sm">AI Automation</div>
              <div className="text-xs text-muted">Autonomous workflows</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-silver text-sm">Ixorya Academy</div>
              <div className="text-xs text-muted">Zero-to-hero curriculum</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-silver text-sm">Rapid Delivery</div>
              <div className="text-xs text-muted">Agile, transparent sprints</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE SERVICES SECTION (BENTO GRID)
         ========================================================================= */}
      <section className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
              <Zap className="h-4 w-4" />
              <span>Tailored Digital Engineering</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-silver sm:text-4xl">
              Solutions Designed for Real Impact
            </h2>
            <p className="mt-3 max-w-xl text-muted text-sm sm:text-base">
              From enterprise software and high-speed web apps to autonomous AI workflows, we engineer digital tools that solve bottlenecks and drive sustainable growth.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan hover:underline self-start md:self-end"
          >
            <span>View All Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Services Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.title] || Code2;
            return (
              <article
                key={service.title}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-dark/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-xl hover:shadow-cyan/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy border border-white/10 text-cyan transition-colors group-hover:border-cyan/30 group-hover:bg-cyan/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono text-muted/60">0{index + 1}</span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-silver transition-colors group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-2.5">
                    Core Capabilities
                  </div>
                  <ul className="flex flex-wrap gap-1.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded bg-navy/90 border border-white/10 px-2 py-1 text-xs text-silver/80 group-hover:border-cyan/20 group-hover:text-cyan transition-colors"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-cyan opacity-90 transition group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    <span>Request consultation</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE SOLUTION MATCHER
         ========================================================================= */}
      <section className="border-t border-white/10 bg-dark/30 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
              <Sparkles className="h-4 w-4" />
              <span>Tailored Solutions Finder</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-silver sm:text-4xl">
              What Are You Looking to Achieve?
            </h2>
            <p className="mt-3 text-muted text-sm sm:text-base">
              Whether you are an established company scaling operations, a startup building an MVP, or an aspiring developer learning code, select your profile below:
            </p>
          </div>

          <SolutionMatcher />
        </div>
      </section>

      {/* =========================================================================
          OUR PROCESS: FROM ZERO TO INFINITY
         ========================================================================= */}
      <section className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
            <Workflow className="h-4 w-4" />
            <span>The Ixorya Methodology</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-silver sm:text-4xl">
            From Zero. Beyond Infinity.
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base">
            Our systematic, agile engineering approach takes your project from early conceptual blueprints all the way into high-availability production.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.step}
                className="relative rounded-xl border border-white/10 bg-dark/60 p-6 backdrop-blur-sm hover:border-white/20 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-cyan/70">
                    {step.step}
                  </span>
                  <div className="h-10 w-10 rounded-lg bg-navy flex items-center justify-center border border-white/10 text-cyan">
                    <StepIcon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-silver">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {step.description}
                </p>

                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-white/20">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          THE IXORYA ADVANTAGE (WHY CHOOSE US)
         ========================================================================= */}
      <section className="border-t border-white/10 bg-navy/90 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
                <ShieldCheck className="h-4 w-4" />
                <span>The Ixorya Advantage</span>
              </div>

              <h2 className="text-3xl font-bold text-silver sm:text-4xl leading-tight">
                Built with Technical Rigor, Delivered with Transparency.
              </h2>

              <p className="text-muted leading-relaxed text-sm sm:text-base">
                We believe that software engineering should be lean, modern, and genuinely focused on results. No vendor lock-in, no bloated frameworks, and no mysterious handoffs.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-silver">Modern Cloud-Native Tech</h3>
                    <p className="text-xs text-muted mt-0.5">We harness the newest releases of Next.js, React, TypeScript, and modern cloud stacks for maximum speed.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-silver">AI-Assisted Efficiency</h3>
                    <p className="text-xs text-muted mt-0.5">We automate manual bottlenecks with purpose-built AI pipelines so your team focuses on growth.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-silver">Education & Mentorship Culture</h3>
                    <p className="text-xs text-muted mt-0.5">Because we teach coding at Ixorya Academy, our code is documented, clean, and built to be understood.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/contact" className={btnPrimary}>
                  <span>Schedule a Discovery Call</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Feature Highlights Grid */}
            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-dark/80 p-6">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan flex items-center justify-center">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-silver">Clean, Extensible Architecture</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Modular component design and strict TypeScript standards mean your system can easily evolve as requirements scale.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-dark/80 p-6">
                <div className="h-10 w-10 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-silver">Autonomous AI & Workflows</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Cut down operational churn with automated customer interactions, data syncing, and intelligent notification flows.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-dark/80 p-6">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-silver">High-Performance Web</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Sub-second page speeds, perfect Lighthouse scores, mobile responsiveness, and SEO optimization come standard.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-dark/80 p-6">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-silver">Knowledge Transfer</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  We don&apos;t leave you with a black box. We provide comprehensive training and clear walkthroughs for your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          IXORYA ACADEMY SPOTLIGHT & FEATURED COURSES
         ========================================================================= */}
      <section className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-to-b from-dark/95 via-navy/90 to-dark p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/15 blur-3xl -z-10" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl -z-10" />

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-semibold text-cyan">
                  <GraduationCap className="h-4 w-4" />
                  <span>Ixorya Academy Spotlight</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Cohorts Enrolling</span>
                </span>
              </div>

              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight">
                Your Coding Journey Starts Here.
              </h2>

              <p className="max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
                From playful computational logic for kids to Python automation, full-stack Next.js apps, and modern AI engineering. Guided by practicing software developers with live 1-on-1 code reviews.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/academy/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500 hover:shadow-blue-500/40"
              >
                <span>Explore All 6 Programs</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              {siteConfig.hasWhatsApp && (
                <a
                  href={
                    getWhatsAppUrl(
                      "Hello Ixoria Academy, I would like to get academic guidance on which course matches my background."
                    ) || "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs sm:text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 transition"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">WhatsApp Counseling</span>
                  <span className="sm:hidden">Counseling</span>
                </a>
              )}
            </div>
          </div>

          {/* Symmetrical 3-Column Courses Grid (2 rows x 3 columns = 6 balanced cards) */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const whatsAppCourseUrl = getWhatsAppUrl(
                `Hello Ixoria Academy, I would like to inquire about batch dates and syllabus for the '${course.title}' course.`
              );

              return (
                <article
                  key={course.slug}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-navy/80 p-5 sm:p-6 transition-all duration-300 hover:border-cyan/40 hover:bg-navy hover:shadow-xl hover:shadow-cyan/5"
                >
                  <div className="space-y-3.5">
                    {/* Card Badges: Category badge, Level, Duration */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan bg-cyan/10 px-2.5 py-0.5 rounded-full border border-cyan/20">
                          <Sparkles className="h-3 w-3" />
                          <span>{course.badge}</span>
                        </span>
                        <span className="text-[11px] text-silver/80 font-medium bg-dark/80 px-2 py-0.5 rounded-full border border-white/5">
                          {course.level}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1 text-[11px] text-muted font-mono">
                        <Clock className="h-3 w-3 text-cyan" />
                        <span>{course.duration.split("·")[0].trim()}</span>
                      </div>
                    </div>

                    {/* Course Title & Subtitle */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan transition-colors">
                        <Link href={`/academy/courses/${course.slug}`}>
                          {course.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-xs text-muted leading-relaxed line-clamp-2">
                        {course.subtitle || course.description}
                      </p>
                    </div>

                    {/* Capstone Project Showcase Box */}
                    {course.projects && course.projects.length > 0 && (
                      <div className="rounded-xl border border-white/5 bg-dark/60 p-3 text-xs space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-cyan font-semibold">
                          <FolderGit2 className="h-3 w-3" />
                          <span>Capstone Project You Build:</span>
                        </div>
                        <div className="font-semibold text-silver line-clamp-1">
                          {course.projects[0].title}
                        </div>
                        <p className="text-[11px] text-muted/90 line-clamp-1">
                          {course.projects[0].description}
                        </p>
                      </div>
                    )}

                    {/* Key Topics Tags */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-muted">
                        Core Concepts Covered:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="rounded bg-dark px-2 py-0.5 text-[11px] text-silver/80 border border-white/5"
                          >
                            {topic}
                          </span>
                        ))}
                        {course.topics.length > 3 && (
                          <span className="rounded bg-dark px-2 py-0.5 text-[11px] text-muted border border-white/5">
                            +{course.topics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA Footer */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <Link
                      href={`/academy/courses/${course.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan hover:underline group-hover:text-white transition"
                    >
                      <span>View Full Curriculum</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>

                    {whatsAppCourseUrl && (
                      <a
                        href={whatsAppCourseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5 text-[11px] font-medium text-emerald-400 hover:bg-emerald-500/20 transition"
                        title={`Quick WhatsApp inquiry for ${course.title}`}
                      >
                        <WhatsAppIcon className="h-3 w-3" />
                        <span>Inquire</span>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Academy Learning Highlights Strip (4 Pillars) */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-8 border-t border-white/10 text-xs">
            <div className="flex items-center gap-2.5 text-silver/90">
              <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
              <span>100% Live Interactive Cohorts</span>
            </div>
            <div className="flex items-center gap-2.5 text-silver/90">
              <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
              <span>Max 6–8 Students for 1:1 Attention</span>
            </div>
            <div className="flex items-center gap-2.5 text-silver/90">
              <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
              <span>Real GitHub Portfolios & PR Reviews</span>
            </div>
            <div className="flex items-center gap-2.5 text-silver/90">
              <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
              <span>Verified Certificate of Completion</span>
            </div>
          </div>

          {/* Academic Consultation Quick Ribbon */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-navy/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10 border border-cyan/20 text-cyan">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Not sure which program matches your level?
                </div>
                <div className="text-xs text-muted">
                  Get a free 15-minute counseling session with a senior engineering mentor.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              {siteConfig.hasPhone && (
                <a
                  href={getTelUrl() || `tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-dark px-3.5 py-2 text-xs font-medium text-silver hover:border-cyan hover:text-white transition"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-cyan" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              )}

              {siteConfig.hasWhatsApp && (
                <a
                  href={
                    getWhatsAppUrl(
                      "Hello Ixoria Academy, I would like to talk to an academic counselor about course options."
                    ) || "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-500 transition"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECHNOLOGY ECOSYSTEM & STACK
         ========================================================================= */}
      <section className="border-t border-white/10 bg-dark/40 py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan">
            Modern Tech Stack & Tooling
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-silver">
            Engineered with the Industry&apos;s Best Standards
          </h2>
          <p className="mt-2 text-sm text-muted max-w-xl mx-auto">
            We build and instruct using robust, battle-tested tools that power modern global platforms.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-navy/90 px-4 py-2.5 shadow-sm transition hover:border-cyan/30"
              >
                <Terminal className="h-3.5 w-3.5 text-cyan" />
                <span className="text-xs sm:text-sm font-semibold text-silver">{tech.name}</span>
                <span className="text-[10px] text-muted border-l border-white/10 pl-2">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TESTIMONIALS & TRUST SECTION
         ========================================================================= */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
            <Users className="h-4 w-4" />
            <span>Client & Student Stories</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-silver sm:text-4xl">
            Trusted by Builders, Learners & Businesses
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base">
            Here is what our partners and students say about collaborating with {site.name}.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-dark/70 p-6 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-silver/90 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="font-semibold text-silver text-sm">{t.author}</div>
                <div className="text-xs text-muted">{t.role}</div>
                <div className="mt-1 text-[11px] text-cyan font-medium">{t.category}</div>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* =========================================================================
          ENHANCED CONTACT & CONSULTATION SECTION
         ========================================================================= */}
      <section id="contact-section" className="relative overflow-hidden py-20 border-t border-white/10 bg-grid-pattern">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-blue-600/15 blur-[140px] -z-10" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Context & Direct Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 text-xs font-semibold text-cyan">
                <Rocket className="h-3.5 w-3.5 text-cyan" />
                <span>Let&apos;s Build Together</span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                Ready to Accelerate Your Digital Future?
              </h2>

              <p className="text-muted text-base leading-relaxed">
                Whether you need high-impact software, scalable AI workflow automation, or want to master programming from the ground up, {siteConfig.name} is your partner from zero to beyond infinity.
              </p>

              {/* Direct Reach-Out Cards (Conditionally Rendered) */}
              <div className="space-y-3 pt-2">
                {siteConfig.hasContactEmail && getMailtoUrl() && (
                  <a
                    href={getMailtoUrl()!}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-dark/70 p-4 transition hover:border-cyan/40 hover:bg-dark group"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy border border-white/10 text-cyan group-hover:border-cyan/30">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs text-muted">Email Us Directly</div>
                      <div className="text-sm font-semibold text-silver group-hover:text-cyan transition truncate">
                        {siteConfig.contactEmail}
                      </div>
                    </div>
                  </a>
                )}

                {siteConfig.hasPhone && getTelUrl() && (
                  <a
                    href={getTelUrl()!}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-dark/70 p-4 transition hover:border-cyan/40 hover:bg-dark group"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy border border-white/10 text-cyan group-hover:border-cyan/30">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted">Phone Call</div>
                      <div className="text-sm font-semibold text-silver group-hover:text-cyan transition">
                        {siteConfig.phone}
                      </div>
                    </div>
                  </a>
                )}

                {siteConfig.hasWhatsApp && getWhatsAppUrl() && (
                  <a
                    href={getWhatsAppUrl()!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-emerald-500/20 bg-dark/70 p-4 transition hover:border-emerald-400/40 hover:bg-dark group"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy border border-white/10 text-emerald-400 group-hover:border-emerald-400/40">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted">WhatsApp Message</div>
                      <div className="text-sm font-semibold text-emerald-400 group-hover:underline transition">
                        Chat directly with our team
                      </div>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-dark/70 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy border border-white/10 text-cyan">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Rapid Turnaround</div>
                    <div className="text-sm font-semibold text-silver">
                      Responses within 24 hours · Technical guidance
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link href="/services" className={btnSecondary}>
                  <span>Explore Services</span>
                </Link>
                <Link href="/academy/courses" className={btnAccent}>
                  <GraduationCap className="h-4 w-4" />
                  <span>View Courses</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Embedded Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

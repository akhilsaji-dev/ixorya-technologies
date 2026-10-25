import Link from "next/link";
import { services } from "@/data/services";
import { courses } from "@/data/courses";
import { site } from "@/lib/site";
import HeroShowcase from "@/components/home/HeroShowcase";
import SolutionMatcher from "@/components/home/SolutionMatcher";
import FaqSection from "@/components/home/FaqSection";
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
  BookOpen,
  ArrowUpRight,
  Terminal,
  Cpu,
  Monitor,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

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
        <div className="rounded-2xl border border-cyan/20 bg-gradient-to-b from-dark/90 to-navy p-8 sm:p-12 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                <GraduationCap className="h-4 w-4" />
                <span>Ixorya Academy Spotlight</span>
              </div>
              <h2 className="mt-3 text-3xl font-bold text-silver sm:text-4xl">
                Your Coding Journey Starts Here.
              </h2>
              <p className="mt-3 max-w-2xl text-muted text-sm sm:text-base">
                From your very first line of code to building real-world software, {site.short} Academy helps kids, students, and beginners develop programming mastery step by step.
              </p>
            </div>
            <Link
              href="/academy/courses"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500 shrink-0 self-start md:self-end"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Courses Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <article
                key={course.slug}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-navy/80 p-5 transition hover:border-cyan/40 hover:bg-navy"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">
                      {course.audience}
                    </span>
                    {course.beginnerFriendly && (
                      <span className="text-[11px] text-emerald-400 font-medium">
                        Beginner
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-silver">
                    {course.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    <div className="text-[11px] uppercase tracking-wider text-muted font-semibold">
                      Key Topics:
                    </div>
                    <ul className="flex flex-wrap gap-1">
                      {course.topics.slice(0, 3).map((topic) => (
                        <li
                          key={topic}
                          className="rounded bg-dark px-2 py-0.5 text-[11px] text-silver/80 border border-white/5"
                        >
                          {topic}
                        </li>
                      ))}
                      {course.topics.length > 3 && (
                        <li className="rounded bg-dark px-2 py-0.5 text-[11px] text-muted border border-white/5">
                          +{course.topics.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10">
                  <Link
                    href={`/academy/courses/${course.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan hover:underline"
                  >
                    <span>View Curriculum Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Academy Learning Highlights Strip */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3 pt-6 border-t border-white/10 text-xs text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
              <span>Personalized mentor feedback on every project</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
              <span>Zero setup headaches — guided coding environments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
              <span>Real portfolio projects to showcase skills</span>
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
          INTERACTIVE FAQS
         ========================================================================= */}
      <section className="border-t border-white/10 bg-dark/50 py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
              <BookOpen className="h-4 w-4" />
              <span>Clear Answers</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-silver sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-muted text-sm sm:text-base">
              Got questions about our software development services or academy courses? We have answers.
            </p>
          </div>

          <FaqSection />
        </div>
      </section>

      {/* =========================================================================
          FINAL HIGH-CONVERSION CTA BANNER
         ========================================================================= */}
      <section className="relative overflow-hidden py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-to-r from-blue-900/40 via-dark to-navy p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl">
            {/* Ambient background blur */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-semibold text-cyan">
                <Rocket className="h-3.5 w-3.5" />
                <span>Let&apos;s Build the Future Together</span>
              </div>

              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                Ready to Accelerate Your Business or Learn to Code?
              </h2>

              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Whether you need high-impact software, scalable AI workflow automation, or want to master programming from the ground up, {site.name} is your partner from zero to beyond infinity.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link href="/contact" className={btnPrimary}>
                  <span>Schedule Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/academy/courses" className={btnSecondary}>
                  <GraduationCap className="h-4 w-4" />
                  <span>Explore Courses</span>
                </Link>
                {site.email && (
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-silver/80 hover:text-cyan transition px-3 py-2"
                  >
                    <span>Direct: {site.email}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

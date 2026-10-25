"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Bot, 
  GraduationCap, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Layers,
  Zap,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

interface PersonaOption {
  id: string;
  label: string;
  shortTag: string;
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  recommendedStack: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

const personas: PersonaOption[] = [
  {
    id: "business",
    label: "Enterprises & Startups",
    shortTag: "Software & Web",
    icon: Building2,
    title: "Scalable Software & Modern Web Presence",
    description: "Tailored full-stack engineering to turn ambitious ideas into fast, resilient, and revenue-generating digital products.",
    highlights: [
      "Custom business software & microservice architectures",
      "High-converting, ultra-responsive Next.js & React websites",
      "Secure REST & GraphQL API integrations",
      "Zero-downtime deployment & ongoing cloud maintenance"
    ],
    recommendedStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    ctaLabel: "Start Your Software Project",
    ctaHref: "/contact",
    secondaryCtaLabel: "View All Services",
    secondaryCtaHref: "/services",
  },
  {
    id: "ai",
    label: "AI & Automation",
    shortTag: "Intelligent Workflows",
    icon: Bot,
    title: "Streamline Operations with Intelligent AI Agents",
    description: "Eliminate repetitive tasks, optimize client interactions, and leverage modern machine intelligence for rapid operational leverage.",
    highlights: [
      "Custom conversational AI assistants & customer service bots",
      "Document parsing & automated enterprise data pipelines",
      "CRM, ERP, and API workflow orchestrations",
      "Measurable efficiency gains and cost reductions"
    ],
    recommendedStack: ["Python", "LLM APIs", "Autonomous Agents", "Vector Databases", "Workflow Automation"],
    ctaLabel: "Explore AI Solutions",
    ctaHref: "/contact",
    secondaryCtaLabel: "Learn About Services",
    secondaryCtaHref: "/services",
  },
  {
    id: "academy",
    label: "Students & Career Changers",
    shortTag: "Ixorya Academy",
    icon: GraduationCap,
    title: "Launch Your Developer Career with Real-World Skills",
    description: "Step-by-step programming courses crafted for beginners and university students. Go from writing your first line of code to shipping real projects.",
    highlights: [
      "Hands-on coding exercises from Day One",
      "Python for Beginners & Web Development Fundamentals",
      "Core programming foundations: logic, data structures, algorithms",
      "Personalized mentorship and direct instructor feedback"
    ],
    recommendedStack: ["Python", "HTML5 & CSS3", "JavaScript", "Git & GitHub", "Problem Solving"],
    ctaLabel: "Browse Academy Courses",
    ctaHref: "/academy/courses",
    secondaryCtaLabel: "Enroll or Inquire",
    secondaryCtaHref: "/contact",
  },
  {
    id: "kids",
    label: "Young Coders & Kids",
    shortTag: "Future Innovators",
    icon: Sparkles,
    title: "Ignite Logical Thinking & Creativity Early",
    description: "Fun, engaging, age-appropriate computer science activities that teach children problem-solving, algorithms, and digital confidence.",
    highlights: [
      "Interactive, playful challenges that make coding intuitive",
      "Fosters curiosity, algorithmic thinking, and perseverance",
      "Safe, supportive learning atmosphere designed for young minds",
      "Tangible milestone projects kids are proud to share"
    ],
    recommendedStack: ["Visual Logic", "Block & Script Coding", "Algorithmic Games", "Creative Design"],
    ctaLabel: "Explore Coding for Kids",
    ctaHref: "/academy/courses/coding-for-kids",
    secondaryCtaLabel: "Get Course Details",
    secondaryCtaHref: "/contact",
  },
];

export default function SolutionMatcher() {
  const [selectedId, setSelectedId] = useState<string>("business");
  const current = personas.find((p) => p.id === selectedId) || personas[0];
  const IconComponent = current.icon;

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-white/10 bg-dark/70 p-1.5 backdrop-blur-md">
        {personas.map((persona) => {
          const isSelected = persona.id === selectedId;
          const TabIcon = persona.icon;
          return (
            <button
              key={persona.id}
              onClick={() => setSelectedId(persona.id)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs sm:text-sm font-medium transition-all ${
                isSelected
                  ? "bg-brand text-white shadow-lg shadow-blue-500/20"
                  : "text-muted hover:text-silver hover:bg-white/5"
              }`}
            >
              <TabIcon className="h-4 w-4" />
              <span>{persona.label}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Content Card */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-dark/60 p-6 sm:p-8 backdrop-blur-lg transition-all">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
              <IconComponent className="h-3.5 w-3.5" />
              <span>{current.shortTag}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-silver leading-snug">
              {current.title}
            </h3>

            <p className="text-muted leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan">
                What you get:
              </div>
              <ul className="space-y-2">
                {current.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-silver/90">
                    <CheckCircle className="h-4 w-4 text-cyan shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href={current.ctaHref}
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-blue-500"
              >
                <span>{current.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              {current.secondaryCtaLabel && (
                <Link
                  href={current.secondaryCtaHref || "/services"}
                  className="rounded-md border border-white/20 px-4 py-2.5 text-sm font-medium text-silver transition hover:border-cyan hover:text-white"
                >
                  {current.secondaryCtaLabel}
                </Link>
              )}
            </div>
          </div>

          {/* Right Highlights & Tech Stack Box */}
          <div className="lg:col-span-5 rounded-xl border border-white/10 bg-navy/80 p-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan">
                <Layers className="h-4 w-4" />
                <span>Featured Technologies & Methods</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {current.recommendedStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-dark px-3 py-1.5 text-xs font-medium text-silver"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan">
                <Zap className="h-4 w-4" />
                <span>The Ixorya Guarantee</span>
              </div>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                Every project and course is built with zero compromise on quality, practical relevance, and modern industry standards.
              </p>
            </div>

            <div className="rounded-lg bg-dark/90 p-3.5 border border-cyan/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-silver">
                <BookOpen className="h-4 w-4 text-cyan" />
                <span>Ready to start immediately?</span>
              </div>
              <Link
                href="/contact"
                className="text-xs font-semibold text-cyan hover:underline"
              >
                Inquire Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

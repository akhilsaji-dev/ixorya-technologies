import type { Metadata } from "next";
import { courses } from "@/data/courses";
import CoursesCatalog from "@/components/academy/CoursesCatalog";
import AcademyFAQ from "@/components/academy/AcademyFAQ";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  Sparkles,
  ArrowRight,
  Code2,
  Users2,
  FolderGit2,
  Award,
  CheckCircle2,
  Layers,
  Flame,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/layout/SocialIcons";

export const metadata: Metadata = {
  title: "Ixoria Academy · Industry-Aligned Coding Education & Mentorship",
  description:
    "Master programming, Python, modern web development, and AI engineering with practicing software engineers. Live cohorts, 1-on-1 code reviews, and real GitHub portfolio projects.",
};

const trustStats = [
  { label: "Live Interactive Learning", value: "100%", subtext: "Zero static pre-recorded monologues" },
  { label: "Max Cohort Size", value: "6–8", subtext: "Students per batch for deep 1:1 attention" },
  { label: "Portfolio Projects", value: "3 to 4", subtext: "Deployed live to GitHub & Vercel" },
  { label: "Direct Mentor Access", value: "24/7", subtext: "Via dedicated batch WhatsApp channels" },
];

const ixoriaEdgeFeatures = [
  {
    icon: Terminal,
    title: "Mentorship by Practicing Engineers",
    description:
      "Our instructors aren't academic theorists or full-time video creators — they are software engineers actively delivering enterprise software, web apps, and AI solutions at Ixoria Technologies.",
  },
  {
    icon: FolderGit2,
    title: "Real GitHub Portfolios Over Quizzes",
    description:
      "Say goodbye to meaningless multiple-choice quizzes. In every course, you push real commits to GitHub, resolve code reviews, and deploy production websites to the public internet.",
  },
  {
    icon: Users2,
    title: "Strict Cohort Caps (Max 6–8)",
    description:
      "Massive 100-student webinars fail learners. We strictly cap our cohorts to 6–8 students so instructors know your name, inspect your code line-by-line, and support your unique learning pace.",
  },
  {
    icon: ShieldCheck,
    title: "Direct WhatsApp Line for Unblocking",
    description:
      "Get unstuck within minutes. Every student has direct access to their mentor and cohort peers on WhatsApp to ask questions, share errors, and get instant feedback.",
  },
];

const pedagogySteps = [
  {
    step: "01",
    title: "Mental Models & Core Intuition",
    description:
      "Before writing syntax, we establish the intuitive 'why'. You visualize how memory, variables, browsers, and algorithms operate under the hood.",
  },
  {
    step: "02",
    title: "Live Guided Pair-Programming",
    description:
      "Instructors live-code alongside you. You write real code from class one, observing real-time thought processes, error troubleshooting, and best practices.",
  },
  {
    step: "03",
    title: "Capstone Portfolio Sprints",
    description:
      "You take ownership of original, production-grade applications. You design the architecture, implement core logic, and resolve edge cases.",
  },
  {
    step: "04",
    title: "1:1 Code Reviews & Deployment",
    description:
      "Our engineers review your pull requests on GitHub. After polishing, you deploy your production projects live to the web.",
  },
];

const academyGeneralFaqs = [
  {
    question: "Do I need any prior coding knowledge to join Ixoria Academy?",
    answer:
      "No! Courses like 'Coding for Kids', 'Programming Fundamentals', 'Python for Beginners', and 'Modern Web Development' are designed specifically for zero-experience beginners. We start from absolute first principles and build your skills step-by-step.",
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer:
      "All classes are 100% LIVE and interactive. You participate in real-time video sessions with your instructor, ask questions on the spot, and receive immediate feedback on your screen.",
  },
  {
    question: "What are the batch timings and schedules?",
    answer:
      "We offer flexible batches designed around school and working schedules, including Weekend Intensives (Saturday & Sunday) and Weekday Evening slots (6:00 PM – 8:30 PM). If you miss a live session, high-definition session recordings and notes are provided immediately.",
  },
  {
    question: "What hardware or software do I need to attend?",
    answer:
      "A laptop or desktop computer (Windows, Mac, or Linux) with at least 4GB RAM, a working webcam/mic, and a reliable internet connection. We guide you through installing free, professional tools like VS Code, Python, and Git during orientation.",
  },
  {
    question: "How does 1-on-1 mentor support work?",
    answer:
      "Every batch has a private WhatsApp channel where you can paste code snippets, share error messages, and get help directly from your mentor between classes. We also schedule 1-on-1 code review sessions before project submission.",
  },
  {
    question: "Will I get help with project deployments and GitHub?",
    answer:
      "Yes! Every student receives hands-on guidance pushing clean code to GitHub and deploying responsive apps live on platforms like Vercel and GitHub Pages.",
  },
];

export default function CoursesPage() {
  const counselorWhatsAppUrl = getWhatsAppUrl(
    `Hello Ixoria Academy, I would like to get academic counseling on which course matches my background and goals.`
  );

  return (
    <div className="relative overflow-hidden pt-12 pb-24">
      {/* Background Gradient Accents */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[500px] w-full max-w-7xl">
        <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-cyan/10 blur-[120px]" />
        <div className="absolute top-20 right-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto space-y-6 pt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold text-cyan shadow-sm shadow-cyan/10">
            <Sparkles className="h-3.5 w-3.5" />
            <span>IXORYA ACADEMY · INDUSTRY-ALIGNED CODING EDUCATION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Learn to Code with{" "}
            <span className="bg-gradient-to-r from-cyan via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Practicing Engineers
            </span>
            , Not Pre-Recorded Monologues.
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Live interactive cohorts, personalized 1-on-1 code reviews, and production-grade GitHub
            portfolios. Tailored for curious kids, university students, and ambitious career switchers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/30 transition hover:bg-blue-500 hover:shadow-blue-500/40"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            {counselorWhatsAppUrl && (
              <a
                href={counselorWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3.5 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 transition"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Talk to Academic Counselor</span>
              </a>
            )}
          </div>
        </header>

        {/* Stats Strip */}
        <section aria-label="Key academy statistics">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl border border-white/10 bg-dark/70 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {trustStats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <div className="text-2xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  <span className="bg-gradient-to-r from-cyan to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-silver">
                  {stat.label}
                </div>
                <div className="text-[11px] text-muted">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Course Catalog (Search, Filter, Cards) */}
        <section aria-labelledby="courses-catalog-title">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
              <Code2 className="h-3.5 w-3.5" />
              <span>Comprehensive Course Catalog</span>
            </div>
            <h2 id="courses-catalog-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Choose Your Learning Track
            </h2>
            <p className="text-sm text-muted">
              Select a specialized track to view detailed syllabi, live batch schedules, and capstone projects.
            </p>
          </div>

          <CoursesCatalog courses={courses} />
        </section>

        {/* The Ixoria Edge (Why Learn with Us) */}
        <section aria-labelledby="ixoria-edge-title" className="pt-8">
          <div className="rounded-3xl border border-white/10 bg-navy/60 p-8 sm:p-12 backdrop-blur-xl">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                <Flame className="h-3.5 w-3.5" />
                <span>The Ixoria Advantage</span>
              </div>
              <h2 id="ixoria-edge-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Why Students & Parents Choose Ixoria Academy
              </h2>
              <p className="text-sm text-muted">
                How our agency-backed pedagogy delivers real engineering skills compared to generic video bootcamps.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ixoriaEdgeFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-dark/80 p-6 space-y-3.5 transition hover:border-cyan/40 hover:-translate-y-1 duration-200"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy border border-white/10 text-cyan">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-silver">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4-Stage Learning Pedagogy */}
        <section aria-labelledby="pedagogy-title">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
              <Layers className="h-3.5 w-3.5" />
              <span>Proven Methodology</span>
            </div>
            <h2 id="pedagogy-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our 4-Stage Learning Architecture
            </h2>
            <p className="text-sm text-muted">
              Engineered step-by-step so learners retain concepts deeply and build problem-solving confidence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pedagogySteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-white/10 bg-dark/70 p-6 space-y-3"
              >
                <div className="text-3xl font-extrabold font-mono text-cyan/30">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Academy FAQ */}
        <section aria-labelledby="faq-section">
          <AcademyFAQ faqs={academyGeneralFaqs} />
        </section>

        {/* Direct Academic Counseling & Inquiry */}
        <section id="enroll" className="scroll-mt-24">
          <div className="rounded-3xl border border-cyan/30 bg-gradient-to-b from-dark/95 to-navy/90 p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Direct Counselor Value Proposition */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-semibold text-cyan">
                  <Award className="h-4 w-4" />
                  <span>Free Academic Counseling</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Unsure Which Course Is Right for You?
                </h2>

                <p className="text-sm text-muted leading-relaxed">
                  Schedule a complimentary 15-minute counseling call with one of our senior engineering mentors. We will review your background, current level, and target goals to recommend the perfect learning pathway.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-silver/90 pt-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
                    <span>Honest assessment — no hard sales pitch</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
                    <span>Batch schedules tailored to your timezone and availability</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
                    <span>Special discounts available for sibling & early-bird enrollments</span>
                  </div>
                </div>

                {counselorWhatsAppUrl && (
                  <div className="pt-2">
                    <a
                      href={counselorWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 transition"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Instant Counseling on WhatsApp ({siteConfig.phone || "Direct"})</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Embedded Contact & Inquiry Form */}
              <div className="lg:col-span-7">
                <ContactForm
                  initialCategory="Ixorya Academy Course"
                  className="border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

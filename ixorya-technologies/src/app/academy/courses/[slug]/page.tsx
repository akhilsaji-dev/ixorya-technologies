import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { courses } from "@/data/courses";
import CourseCurriculumAccordion from "@/components/academy/CourseCurriculumAccordion";
import AcademyFAQ from "@/components/academy/AcademyFAQ";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig, getWhatsAppUrl, getTelUrl } from "@/config/site";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Clock,
  Users,
  Calendar,
  CheckCircle2,
  FolderGit2,
  Terminal,
  Award,
  ShieldCheck,
  Zap,
  PhoneCall,
  Code2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/layout/SocialIcons";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((x) => x.slug === slug);
  if (!course) {
    return {
      title: "Course Not Found · Ixoria Academy",
    };
  }

  return {
    title: `${course.title} · Ixoria Academy`,
    description: course.subtitle || course.description,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((x) => x.slug === slug);

  if (!course) {
    notFound();
  }

  const whatsAppEnrollUrl = getWhatsAppUrl(
    `Hello Ixoria Academy, I would like to enroll / get batch dates for the '${course.title}' course.`
  );
  const telUrl = getTelUrl();

  const otherCourses = courses.filter((c) => c.slug !== course.slug).slice(0, 2);

  return (
    <div className="relative overflow-hidden pt-10 pb-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[500px] w-full max-w-7xl">
        <div className="absolute top-10 left-1/3 h-72 w-72 rounded-full bg-cyan/10 blur-[130px]" />
        <div className="absolute top-20 right-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[150px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-silver transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/academy/courses" className="hover:text-silver transition">
            Academy Courses
          </Link>
          <span>/</span>
          <span className="text-cyan font-medium truncate max-w-xs sm:max-w-md">
            {course.title}
          </span>
        </nav>

        {/* Hero Section */}
        <header className="rounded-3xl border border-white/10 bg-dark/80 p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-semibold text-cyan">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{course.badge}</span>
              </span>

              <span className="rounded-full border border-white/10 bg-navy/80 px-3 py-1 text-xs font-medium text-silver">
                {course.level}
              </span>

              {course.beginnerFriendly && (
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  Beginner Friendly
                </span>
              )}
            </div>

            <Link
              href="/academy/courses"
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-cyan transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all courses</span>
            </Link>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="text-base sm:text-xl text-silver/90 font-medium max-w-3xl leading-relaxed">
              {course.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-muted max-w-3xl leading-relaxed">
            {course.longDescription}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs">
            <div className="rounded-2xl border border-white/5 bg-navy/60 p-3.5">
              <div className="flex items-center gap-2 text-cyan font-semibold">
                <Clock className="h-4 w-4" />
                <span>Duration</span>
              </div>
              <div className="mt-1 font-bold text-silver text-sm">{course.duration}</div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-navy/60 p-3.5">
              <div className="flex items-center gap-2 text-cyan font-semibold">
                <Users className="h-4 w-4" />
                <span>Cohort Size</span>
              </div>
              <div className="mt-1 font-bold text-silver text-sm">{course.format}</div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-navy/60 p-3.5">
              <div className="flex items-center gap-2 text-cyan font-semibold">
                <Calendar className="h-4 w-4" />
                <span>Schedule</span>
              </div>
              <div className="mt-1 font-bold text-silver text-sm">{course.schedule}</div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-navy/60 p-3.5">
              <div className="flex items-center gap-2 text-cyan font-semibold">
                <Award className="h-4 w-4" />
                <span>Credential</span>
              </div>
              <div className="mt-1 font-bold text-silver text-sm">Verified Certificate</div>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/30 transition hover:bg-blue-500 hover:shadow-blue-500/40"
            >
              <span>Enroll / Request Batch Dates</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            {whatsAppEnrollUrl && (
              <a
                href={whatsAppEnrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3.5 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 transition"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Quick WhatsApp Enrollment</span>
              </a>
            )}
          </div>
        </header>

        {/* Main 2-Column Content Layout */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Comprehensive Course Details (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Learning Outcomes Section */}
            <section aria-labelledby="outcomes-heading" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan">
                <Zap className="h-4 w-4" />
                <span>Learning Objectives</span>
              </div>
              <h2 id="outcomes-heading" className="text-2xl font-bold text-white tracking-tight">
                What You Will Master & Take Away
              </h2>

              <div className="grid gap-3 sm:grid-cols-2 rounded-3xl border border-white/10 bg-dark/70 p-6 backdrop-blur-md">
                {course.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-silver/90 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum Breakdown Accordion */}
            <section aria-labelledby="curriculum-heading" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan">
                <Terminal className="h-4 w-4" />
                <span>Full Syllabus Breakdown</span>
              </div>
              <h2 id="curriculum-heading" className="text-2xl font-bold text-white tracking-tight">
                Detailed Week-by-Week Curriculum
              </h2>
              <p className="text-sm text-muted">
                Each module includes live theoretical mental models, guided pair-programming labs, and code reviews.
              </p>

              <CourseCurriculumAccordion curriculum={course.curriculum} />
            </section>

            {/* Capstone Projects Showcase */}
            <section aria-labelledby="projects-heading" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan">
                <FolderGit2 className="h-4 w-4" />
                <span>Portfolio Building</span>
              </div>
              <h2 id="projects-heading" className="text-2xl font-bold text-white tracking-tight">
                Real Projects You Will Build & Deploy
              </h2>
              <p className="text-sm text-muted">
                Every project is designed to be published on GitHub and added to your personal portfolio.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {course.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-dark/75 p-5 space-y-4 transition hover:border-cyan/30"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan">
                        Project 0{idx + 1}
                      </span>
                      <h3 className="mt-1 text-base font-bold text-white">
                        {proj.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {proj.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-navy/80 px-2 py-0.5 text-[10px] font-mono text-silver/80 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools & Tech Stack */}
            <section aria-labelledby="tools-heading" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan">
                <Code2 className="h-4 w-4" />
                <span>Professional Toolchain</span>
              </div>
              <h2 id="tools-heading" className="text-xl font-bold text-white tracking-tight">
                Tools & Technologies You Will Learn
              </h2>

              <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-navy/60 p-5">
                {course.toolsAndTech.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-xl border border-white/10 bg-dark px-3.5 py-1.5 text-xs font-mono font-medium text-silver"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            {/* Audience & Prerequisites */}
            <section aria-labelledby="prereqs-heading" className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-dark/70 p-5 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Users className="h-4 w-4 text-cyan" />
                    <span>Target Audience</span>
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {course.audience}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-dark/70 p-5 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-cyan" />
                    <span>Prerequisites</span>
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {course.prerequisites}
                  </p>
                </div>
              </div>
            </section>

            {/* Course Specific FAQs */}
            {course.faqs && course.faqs.length > 0 && (
              <section aria-labelledby="course-faq-heading" className="pt-4">
                <AcademyFAQ
                  faqs={course.faqs}
                  title={`Questions About ${course.title}`}
                  subtitle="Common inquiries from prospective students and parents about this specific program."
                />
              </section>
            )}
          </div>

          {/* Right Column: Sticky Enrollment & Summary Card (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="rounded-3xl border border-cyan/40 bg-dark/95 p-6 sm:p-7 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan font-semibold">
                  Cohort Enrollment
                </span>
                <h3 className="text-xl font-bold text-white">
                  Reserve Your Seat
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Batches are limited to 6–8 students to ensure dedicated 1:1 mentor code reviews.
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">Next Batch Starting Soon</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href="#enroll"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500 hover:shadow-blue-500/40"
                >
                  <span>Request Enrollment Info</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                {whatsAppEnrollUrl && (
                  <a
                    href={whatsAppEnrollUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 transition"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                )}
              </div>

              {/* Inclusions Checklist */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  What Every Student Receives:
                </div>
                <ul className="space-y-2 text-xs text-silver/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan shrink-0" />
                    <span>100% Live interactive cohorts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan shrink-0" />
                    <span>1-on-1 GitHub code reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan shrink-0" />
                    <span>Direct WhatsApp mentor channel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan shrink-0" />
                    <span>3–4 Deployed portfolio apps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan shrink-0" />
                    <span>Verified completion certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan shrink-0" />
                    <span>Lifetime recording access</span>
                  </li>
                </ul>
              </div>

              {/* Direct Counselor Phone */}
              {siteConfig.hasPhone && telUrl && (
                <div className="pt-4 border-t border-white/10 text-center">
                  <a
                    href={telUrl}
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-cyan transition"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-cyan" />
                    <span>Or call counselor: {siteConfig.phone}</span>
                  </a>
                </div>
              )}
            </div>

            {/* Other Courses Widget */}
            <div className="rounded-3xl border border-white/10 bg-dark/60 p-6 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Explore Other Programs
              </h4>
              <div className="space-y-3">
                {otherCourses.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/academy/courses/${c.slug}`}
                    className="block group rounded-xl border border-white/5 bg-navy/40 p-3.5 transition hover:border-cyan/30 hover:bg-navy/80"
                  >
                    <div className="text-xs font-semibold text-silver group-hover:text-cyan transition-colors">
                      {c.title}
                    </div>
                    <div className="mt-1 text-[11px] text-muted flex items-center justify-between">
                      <span>{c.level}</span>
                      <span className="text-cyan">{c.duration}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Embedded Enrollment Form at Bottom */}
        <section id="enroll" className="scroll-mt-24 pt-6">
          <div className="rounded-3xl border border-cyan/30 bg-gradient-to-b from-dark/95 to-navy/90 p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-semibold text-cyan">
                  <Award className="h-4 w-4" />
                  <span>Direct Enrollment Inquiry</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Join the Next {course.title} Cohort
                </h2>

                <p className="text-sm text-muted leading-relaxed">
                  Submit your details below to receive the complete batch calendar, course syllabus PDF, and secure your seat in the upcoming cohort.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-silver/90 pt-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
                    <span>Fast response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan shrink-0" />
                    <span>Free orientation session prior to batch kickoff</span>
                  </div>
                </div>

                {whatsAppEnrollUrl && (
                  <div className="pt-2">
                    <a
                      href={whatsAppEnrollUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 transition"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Message Mentor on WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>

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

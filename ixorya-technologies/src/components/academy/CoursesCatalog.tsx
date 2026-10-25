"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Course } from "@/data/courses";
import { getWhatsAppUrl } from "@/config/site";
import {
  Search,
  BookOpen,
  Clock,
  Users,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FolderGit2,
  X,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/layout/SocialIcons";

interface CoursesCatalogProps {
  courses: Course[];
}

type CategoryFilter = "all" | "kids" | "foundations" | "python" | "web" | "advanced";
type LevelFilter = "all" | "Beginner" | "Intermediate" | "All Levels";

const categoryTabs: { label: string; value: CategoryFilter }[] = [
  { label: "All Programs", value: "all" },
  { label: "Kids & Young Creators", value: "kids" },
  { label: "Foundations & Logic", value: "foundations" },
  { label: "Python & Automation", value: "python" },
  { label: "Web Engineering", value: "web" },
  { label: "Applied AI", value: "advanced" },
];

const levelPills: { label: string; value: LevelFilter }[] = [
  { label: "All Levels", value: "all" },
  { label: "Beginner Friendly", value: "Beginner" },
  { label: "Intermediate", value: "Intermediate" },
];

export default function CoursesCatalog({ courses }: CoursesCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [activeLevel, setActiveLevel] = useState<LevelFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Category filter
      if (activeCategory !== "all" && course.category !== activeCategory) {
        return false;
      }

      // Level filter
      if (activeLevel !== "all" && course.level !== activeLevel) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesSubtitle = course.subtitle.toLowerCase().includes(query);
        const matchesDescription = course.description.toLowerCase().includes(query);
        const matchesAudience = course.audience.toLowerCase().includes(query);
        const matchesTopics = course.topics.some((t) => t.toLowerCase().includes(query));
        const matchesTools = course.toolsAndTech.some((t) => t.toLowerCase().includes(query));
        const matchesProjects = course.projects.some(
          (p) => p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
        );

        return (
          matchesTitle ||
          matchesSubtitle ||
          matchesDescription ||
          matchesAudience ||
          matchesTopics ||
          matchesTools ||
          matchesProjects
        );
      }

      return true;
    });
  }, [courses, activeCategory, activeLevel, searchQuery]);

  const hasActiveFilters =
    activeCategory !== "all" || activeLevel !== "all" || searchQuery.trim().length > 0;

  const resetFilters = () => {
    setActiveCategory("all");
    setActiveLevel("all");
    setSearchQuery("");
  };

  return (
    <div id="catalog" className="w-full space-y-8 scroll-mt-24">
      {/* Controls Container: Search & Interactive Filter Tabs */}
      <div className="rounded-3xl border border-white/10 bg-dark/80 p-5 sm:p-7 backdrop-blur-xl shadow-2xl space-y-5">
        {/* Top Row: Search Input + Level Quick Selector */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Box */}
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, skill, or tool (e.g. Python, Scratch, React, Logic, APIs)..."
              className="w-full rounded-xl border border-white/10 bg-navy/90 pl-10 pr-10 py-2.5 text-sm text-white placeholder-muted/60 focus:border-cyan focus:outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-white"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs text-muted font-medium whitespace-nowrap mr-1 hidden sm:inline">
              Level:
            </span>
            {levelPills.map((lvl) => {
              const isSelected = activeLevel === lvl.value;
              return (
                <button
                  key={lvl.value}
                  onClick={() => setActiveLevel(lvl.value)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition ${
                    isSelected
                      ? "bg-cyan/20 border border-cyan/40 text-cyan font-semibold"
                      : "border border-white/5 bg-navy/60 text-muted hover:border-white/20 hover:text-silver"
                  }`}
                >
                  {lvl.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-brand text-white shadow-md shadow-blue-500/25 font-semibold"
                    : "text-muted hover:text-silver hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="ml-auto inline-flex items-center gap-1 text-xs text-cyan hover:underline py-1.5 px-2"
            >
              <X className="h-3.5 w-3.5" />
              <span>Reset filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Catalog Results Status Bar */}
      <div className="flex items-center justify-between text-xs text-muted px-2">
        <span>
          Showing <span className="font-semibold text-silver">{filteredCourses.length}</span> of{" "}
          <span className="font-semibold text-silver">{courses.length}</span> industry-ready programs
        </span>
        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Enrollment Open for Upcoming Batches
        </span>
      </div>

      {/* Courses Cards Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-2">
          {filteredCourses.map((course) => {
            const whatsAppUrl = getWhatsAppUrl(
              `Hello Ixoria Academy, I would like to inquire about syllabus, batch timings, and enrollment for the '${course.title}' course.`
            );

            return (
              <article
                key={course.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-dark/75 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan/40 hover:shadow-2xl hover:shadow-cyan/5"
              >
                {/* Subtle Card Glow Effect */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-600/10 blur-3xl -z-10 group-hover:bg-cyan/15 transition-all duration-500" />

                <div>
                  {/* Top Header: Badge, Level & Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-0.5 text-xs font-semibold text-cyan">
                        <Sparkles className="h-3 w-3" />
                        <span>{course.badge}</span>
                      </span>

                      <span className="rounded-full border border-white/10 bg-navy/90 px-2.5 py-0.5 text-[11px] font-medium text-silver/80">
                        {course.level}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs text-muted font-medium">
                      <Clock className="h-3.5 w-3.5 text-cyan" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan transition-colors">
                    <Link href={`/academy/courses/${course.slug}`}>
                      {course.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-silver/90 leading-relaxed">
                    {course.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* Batch Details Meta Bar */}
                  <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-white/5 bg-navy/60 p-3 text-xs">
                    <div className="flex items-center gap-2 text-silver/80">
                      <Users className="h-4 w-4 text-cyan shrink-0" />
                      <span className="truncate">{course.format}</span>
                    </div>
                    <div className="flex items-center gap-2 text-silver/80">
                      <Calendar className="h-4 w-4 text-cyan shrink-0" />
                      <span className="truncate">{course.schedule}</span>
                    </div>
                  </div>

                  {/* Course Highlights Checklist */}
                  <div className="mt-5 space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan">
                      Program Highlights
                    </div>
                    <ul className="grid gap-1.5 sm:grid-cols-2 text-xs text-silver/90">
                      {course.keyHighlights.slice(0, 4).map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-snug">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Featured Projects Built */}
                  <div className="mt-5 rounded-2xl border border-white/5 bg-navy/40 p-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                      <FolderGit2 className="h-3.5 w-3.5 text-cyan" />
                      <span>Featured Portfolio Projects You Will Build</span>
                    </div>
                    <div className="space-y-1.5">
                      {course.projects.slice(0, 2).map((proj, idx) => (
                        <div key={idx} className="text-xs">
                          <span className="font-semibold text-silver">{proj.title}</span>
                          <span className="text-muted"> — {proj.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Tech Stack */}
                  <div className="mt-5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                      Tools & Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.toolsAndTech.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-white/5 bg-navy/90 px-2.5 py-1 text-[11px] font-mono text-silver/90"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/academy/courses/${course.slug}`}
                    className="inline-flex w-full sm:flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500 hover:shadow-blue-500/40"
                  >
                    <span>View Full Syllabus & Roadmap</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {whatsAppUrl && (
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20 transition"
                      title="Quick WhatsApp Batch Inquiry"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>WhatsApp Inquire</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-3xl border border-white/10 bg-dark/60 p-12 text-center backdrop-blur-md">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy border border-white/10 text-muted mb-4">
            <BookOpen className="h-7 w-7 text-cyan" />
          </div>
          <h3 className="text-xl font-bold text-white">No matching courses found</h3>
          <p className="mt-2 text-sm text-muted max-w-md mx-auto">
            We couldn&apos;t find any programs matching your current filter criteria. Try searching for a different keyword or reset your filters.
          </p>
          <button
            onClick={resetFilters}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-500"
          >
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}

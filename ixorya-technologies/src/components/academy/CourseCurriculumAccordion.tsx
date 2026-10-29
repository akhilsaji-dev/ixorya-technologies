"use client";

import { useState } from "react";
import { CourseModule } from "@/data/courses";
import {
  ChevronDown,
  CheckCircle2,
  Clock,
  FlaskConical,
  BookOpen,
} from "lucide-react";

interface CourseCurriculumAccordionProps {
  curriculum: CourseModule[];
}

export default function CourseCurriculumAccordion({
  curriculum,
}: CourseCurriculumAccordionProps) {
  // Default first 2 modules open
  const [openModules, setOpenModules] = useState<Record<number, boolean>>({
    1: true,
    2: true,
  });

  const toggleModule = (moduleNum: number) => {
    setOpenModules((prev) => ({
      ...prev,
      [moduleNum]: !prev[moduleNum],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<number, boolean> = {};
    curriculum.forEach((m) => {
      allOpen[m.moduleNumber] = true;
    });
    setOpenModules(allOpen);
  };

  const collapseAll = () => {
    setOpenModules({});
  };

  const allAreOpen = curriculum.every((m) => openModules[m.moduleNumber]);

  return (
    <div className="w-full space-y-4">
      {/* Header bar with controls */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan">
          <BookOpen className="h-4 w-4" />
          <span>{curriculum.length} Structured Learning Modules</span>
        </div>

        <button
          onClick={allAreOpen ? collapseAll : expandAll}
          className="text-xs text-muted hover:text-cyan transition font-medium"
        >
          {allAreOpen ? "Collapse All Modules" : "Expand All Modules"}
        </button>
      </div>

      {/* Modules List */}
      <div className="space-y-3">
        {curriculum.map((module) => {
          const isOpen = Boolean(openModules[module.moduleNumber]);

          return (
            <div
              key={module.moduleNumber}
              className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? "border-cyan/40 bg-dark/90 shadow-lg shadow-cyan/5"
                  : "border-white/10 bg-dark/60 hover:border-white/20"
              }`}
            >
              {/* Accordion Header Button */}
              <button
                type="button"
                onClick={() => toggleModule(module.moduleNumber)}
                className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left focus:outline-none"
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-navy border border-white/10 text-xs font-bold font-mono text-cyan">
                    {module.moduleNumber < 10 ? `0${module.moduleNumber}` : module.moduleNumber}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm sm:text-base font-bold text-white">
                        {module.title}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-navy/80 px-2 py-0.5 text-[10px] font-mono text-muted">
                        <Clock className="h-3 w-3 text-cyan" />
                        <span>{module.duration}</span>
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted line-clamp-1">
                      {module.summary}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy/80 text-muted transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-cyan bg-cyan/10" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-white/5 space-y-4">
                  <p className="text-xs sm:text-sm text-silver/90 leading-relaxed">
                    {module.summary}
                  </p>

                  {/* Lessons Breakdown */}
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                      Key Lessons & Concepts Covered:
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {module.lessons.map((lesson, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-silver/80 leading-relaxed"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan shrink-0 mt-0.5" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hands-On Lab Highlight */}
                  {module.handsOnLab && (
                    <div className="flex items-start gap-3 rounded-xl border border-cyan/20 bg-cyan/5 p-3.5 text-xs">
                      <FlaskConical className="h-4 w-4 text-cyan shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-cyan">Hands-On Practice Lab: </span>
                        <span className="text-silver/90">{module.handsOnLab}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

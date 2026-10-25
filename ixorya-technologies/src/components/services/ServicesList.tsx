"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  Code2,
  Globe,
  Bot,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Zap,
  type LucideIcon,
} from "lucide-react";

const serviceIcons: Record<string, LucideIcon> = {
  "software-development": Code2,
  "website-development": Globe,
  "ai-automation": Bot,
  "digital-solutions": Layers,
};

type FilterCategory = "all" | "software" | "web" | "ai" | "enterprise";

const filterTabs: { label: string; value: FilterCategory }[] = [
  { label: "All Solutions", value: "all" },
  { label: "Software Engineering", value: "software" },
  { label: "Modern Websites", value: "web" },
  { label: "AI & Automation", value: "ai" },
  { label: "Enterprise Systems", value: "enterprise" },
];

export default function ServicesList() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <div className="w-full space-y-10">
      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl border border-white/10 bg-dark/70 backdrop-blur-md max-w-3xl mx-auto">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? "bg-brand text-white shadow-lg shadow-blue-500/25 font-semibold"
                  : "text-muted hover:text-silver hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Services Grid / Cards */}
      <div className="grid gap-8">
        {filteredServices.map((service, idx) => {
          const Icon = serviceIcons[service.id] || Code2;
          const whatsAppUrl = getWhatsAppUrl(
            `Hello ${siteConfig.name}, I would like to inquire about your ${service.title} services.`
          );

          return (
            <article
              key={service.id}
              id={service.id}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-dark/75 p-6 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:border-cyan/35 hover:shadow-2xl hover:shadow-cyan/5"
            >
              {/* Subtle accent glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl -z-10" />

              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                {/* Left Column: Overview & Capabilities (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Top Bar: Icon + Category + Metric Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy border border-white/10 text-cyan">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-muted">
                          Domain 0{idx + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                      <Zap className="h-3.5 w-3.5" />
                      <span>{service.highlightMetric}</span>
                    </div>
                  </div>

                  {/* Subtitle & Description */}
                  <div>
                    <p className="text-sm font-medium text-silver/90">
                      {service.subtitle}
                    </p>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Capabilities Pills */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan mb-2.5">
                      Core Specializations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-lg border border-white/10 bg-navy/90 px-3 py-1.5 text-xs font-medium text-silver/90"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack Tags */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                      Engineered With
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-white/5 border border-white/5 px-2.5 py-1 text-[11px] font-mono text-silver"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Key Deliverables & Action Panel (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-navy/80 p-6 sm:p-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan mb-4">
                      <Sparkles className="h-4 w-4" />
                      <span>What We Deliver</span>
                    </div>

                    <ul className="space-y-3">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-silver/90 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-cyan shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500 hover:shadow-blue-500/40"
                    >
                      <span>{service.ctaText || "Start This Project"}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    {siteConfig.hasWhatsApp && whatsAppUrl && (
                      <a
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20 transition"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>Chat via WhatsApp</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

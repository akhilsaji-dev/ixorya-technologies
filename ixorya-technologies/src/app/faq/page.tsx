import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/home/FaqSection";
import { site } from "@/lib/site";
import { HelpCircle, ArrowRight, Mail, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about Ixorya Technologies custom software, web development, AI automation, and Ixorya Academy courses.",
};

export default function FaqPage() {
  return (
    <div className="relative min-h-screen py-16 sm:py-24 bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[450px] w-[700px] rounded-full bg-blue-600/15 blur-[120px] -z-10" />

      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 text-xs font-semibold text-cyan backdrop-blur-sm">
            <HelpCircle className="h-3.5 w-3.5 text-cyan" />
            <span>Help Center & Knowledge Base</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted">
            Have questions about working with <span className="text-silver font-medium">{site.name}</span> or enrolling in <span className="text-cyan font-medium">Ixorya Academy</span>? Browse our answers below.
          </p>
        </div>

        {/* Interactive FAQ Accordion */}
        <FaqSection />

        {/* Support & Contact Card */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-dark/80 p-8 sm:p-10 backdrop-blur-md">
          <div className="grid gap-6 sm:grid-cols-12 sm:items-center">
            <div className="sm:col-span-8 space-y-2">
              <h2 className="text-xl font-semibold text-silver">
                Didn&apos;t find what you&apos;re looking for?
              </h2>
              <p className="text-sm text-muted">
                Our team is here to help clarify project scopes, technology choices, or course details for your children or students.
              </p>
            </div>

            <div className="sm:col-span-4 flex flex-col sm:items-end gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-blue-500 w-full sm:w-auto text-center"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/academy/courses"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-silver transition hover:border-cyan hover:text-white w-full sm:w-auto text-center"
              >
                <GraduationCap className="h-3.5 w-3.5" />
                <span>Browse Courses</span>
              </Link>
            </div>
          </div>

          {site.email && (
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-muted flex-wrap gap-2">
              <span className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-cyan" />
                <span>Prefer email? Write directly to our engineers & mentors:</span>
              </span>
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-cyan hover:underline"
              >
                {site.email}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

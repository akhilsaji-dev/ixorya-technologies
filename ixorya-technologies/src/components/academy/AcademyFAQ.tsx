"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface AcademyFAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function AcademyFAQ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about Ixoria Academy courses, batch timings, and mentorship.",
}: AcademyFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Academy Clarity</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <p className="text-sm text-muted">
          {subtitle}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? "border-cyan/40 bg-dark/90 shadow-lg shadow-cyan/5"
                  : "border-white/10 bg-dark/60 hover:border-white/20"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left focus:outline-none"
              >
                <span className="text-sm sm:text-base font-semibold text-silver">
                  {faq.question}
                </span>
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy/80 text-muted transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-cyan bg-cyan/10" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-white/5">
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

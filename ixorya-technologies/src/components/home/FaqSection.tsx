"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
  category: "Services" | "Academy" | "General";
}

const faqs: FaqItem[] = [
  {
    category: "Services",
    question: "What types of software and web solutions does Ixorya build?",
    answer:
      "We design and develop custom web applications, responsive high-performance corporate websites, robust REST/GraphQL APIs, database-driven business systems, and tailored digital platforms. Our primary stack includes Next.js, React, TypeScript, Python, and cloud-native architectures.",
  },
  {
    category: "Services",
    question: "How can Ixorya help our business integrate AI and Automation?",
    answer:
      "We assess your existing workflows to identify repetitive tasks, bottleneck processes, and customer touchpoints that can be automated. From intelligent chatbots and customer support agents to automated document processing and multi-system data synchronization, we build reliable, production-ready AI pipelines tailored to your needs.",
  },
  {
    category: "Academy",
    question: "Who are Ixorya Academy courses designed for?",
    answer:
      "Our courses are designed for everyone from young school students curious about technology (Coding for Kids) to college students and career changers (Programming Fundamentals, Python, and Web Development). No prior background is needed to begin with our foundational courses.",
  },
  {
    category: "Academy",
    question: "What makes Ixorya Academy different from regular online tutorials?",
    answer:
      "Ixorya Academy emphasizes practical, project-based learning with direct mentorship. Rather than passive video watching, students build real applications, write clean code from day one, solve algorithmic problems, and receive structured feedback from experienced engineers.",
  },
  {
    category: "General",
    question: "How does the engagement process work for new projects?",
    answer:
      "We start with an initial discovery session to understand your business goals, target audience, and functional requirements. Next, we provide a transparent roadmap, architecture blueprint, and timeline before moving into agile sprint-based development with regular demos.",
  },
  {
    category: "Services",
    question: "Do you offer post-launch maintenance, updates, and support?",
    answer:
      "Yes. We provide continuous support, performance monitoring, feature enhancements, and system maintenance packages to ensure your digital platform stays secure, fast, and scalable as your business expands.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full">
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all ${
                isOpen
                  ? "border-cyan/40 bg-dark/90 shadow-md shadow-cyan/5"
                  : "border-white/10 bg-dark/50 hover:border-white/20"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 pr-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20 shrink-0">
                    {faq.category}
                  </span>
                  <span className="font-semibold text-silver sm:text-lg">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-cyan transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-white/5 px-5 pb-5 pt-3 sm:px-6 sm:pb-6 text-muted text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-navy/80 p-5 text-center">
        <p className="text-sm text-muted">
          Have a question not listed here?{" "}
          <Link href="/contact" className="font-medium text-cyan hover:underline">
            Reach out to our team directly
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

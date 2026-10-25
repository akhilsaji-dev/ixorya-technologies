"use client";

import { useState } from "react";
import { Send, CheckCircle2, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

const categories = [
  "Custom Software",
  "Website Development",
  "AI & Automation",
  "Ixorya Academy Course",
  "General Consultation",
];

export default function ContactForm({ className = "" }: { className?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Custom Software");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant secure submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className={`rounded-2xl border border-cyan/40 bg-dark/95 p-8 text-center backdrop-blur-xl shadow-xl ${className}`}>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan/10 border border-cyan/30 text-cyan mb-4">
          <CheckCircle2 className="h-8 w-8 text-cyan" />
        </div>
        <h3 className="text-xl font-bold text-white">Message Received!</h3>
        <p className="mt-2 text-sm text-muted max-w-md mx-auto">
          Thank you, <span className="text-silver font-semibold">{name}</span>. Our engineering and mentorship team has received your inquiry regarding <span className="text-cyan font-semibold">{category}</span> and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setMessage("");
          }}
          className="mt-6 inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-silver transition hover:border-cyan hover:text-white"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-white/10 bg-dark/85 p-6 sm:p-8 backdrop-blur-xl shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-4 w-4 text-cyan" />
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan">
          Direct Inquiry Form
        </span>
      </div>

      {/* Category selector */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-silver mb-2">
          I am interested in:
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                category === cat
                  ? "bg-brand text-white shadow-sm shadow-blue-500/30"
                  : "border border-white/10 bg-navy/60 text-muted hover:border-white/20 hover:text-silver"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Input Name & Email */}
      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-silver mb-1.5">
            Your Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex Turner"
            className="w-full rounded-lg border border-white/10 bg-navy/80 px-3.5 py-2.5 text-sm text-white placeholder-muted/60 focus:border-cyan focus:outline-none transition"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-silver mb-1.5">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@example.com"
            className="w-full rounded-lg border border-white/10 bg-navy/80 px-3.5 py-2.5 text-sm text-white placeholder-muted/60 focus:border-cyan focus:outline-none transition"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-5">
        <label htmlFor="contact-message" className="block text-xs font-semibold text-silver mb-1.5">
          Project or Learning Goals *
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project requirements, timeline, or course questions..."
          className="w-full rounded-lg border border-white/10 bg-navy/80 px-3.5 py-2.5 text-sm text-white placeholder-muted/60 focus:border-cyan focus:outline-none transition resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500 disabled:opacity-50"
        >
          <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
          <Send className="h-4 w-4" />
        </button>

        <p className="text-[11px] text-muted text-center sm:text-right">
          Prefer direct email?{" "}
          <a href={`mailto:${site.email}`} className="text-cyan hover:underline">
            {site.email}
          </a>
        </p>
      </div>
    </form>
  );
}

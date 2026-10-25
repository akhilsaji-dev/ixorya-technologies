"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppUrl, getMailtoUrl } from "@/config/site";

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
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Custom Software");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const whatsAppUrl = getWhatsAppUrl(
    `Hello ${siteConfig.name}, I am contacting you regarding ${category}.`
  );
  const mailtoUrl = getMailtoUrl(`Enquiry regarding ${category}`);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validation
    if (!name.trim() || name.trim().length < 2) {
      setErrorMessage("Please enter your name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!message.trim() || message.trim().length < 5) {
      setErrorMessage("Please enter a message with at least 5 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          subject: category,
          category,
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to deliver your message. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or reach out directly.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={`rounded-2xl border border-cyan/40 bg-dark/95 p-8 text-center backdrop-blur-xl shadow-xl ${className}`}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan/10 border border-cyan/30 text-cyan mb-4">
          <CheckCircle2 className="h-8 w-8 text-cyan" />
        </div>
        <h3 className="text-xl font-bold text-white">Enquiry Delivered Successfully!</h3>
        <p className="mt-2 text-sm text-muted max-w-md mx-auto leading-relaxed">
          Thank you, <span className="text-silver font-semibold">{name}</span>. Your enquiry regarding{" "}
          <span className="text-cyan font-semibold">{category}</span> has been securely sent to our
          team. We will review your message and reply to{" "}
          <span className="text-silver font-semibold">{email}</span> within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setErrorMessage(null);
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
      noValidate
      className={`rounded-2xl border border-white/10 bg-dark/85 p-6 sm:p-8 backdrop-blur-xl shadow-2xl ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-cyan" />
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan">
            Direct Enquiry Form
          </span>
        </div>

        {siteConfig.hasWhatsApp && whatsAppUrl && (
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20 transition"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        )}
      </div>

      {/* Error alert message */}
      {errorMessage && (
        <div className="mb-5 flex items-start gap-2.5 rounded-lg border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
          <div className="leading-relaxed">{errorMessage}</div>
        </div>
      )}

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

      {/* Phone (Optional) */}
      <div className="mb-4">
        <label htmlFor="contact-phone" className="block text-xs font-semibold text-silver mb-1.5">
          Phone / WhatsApp Number <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 98765 43210"
          className="w-full rounded-lg border border-white/10 bg-navy/80 px-3.5 py-2.5 text-sm text-white placeholder-muted/60 focus:border-cyan focus:outline-none transition"
        />
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
          <span>{isSubmitting ? "Sending via Resend..." : "Submit Inquiry"}</span>
          <Send className="h-4 w-4" />
        </button>

        {siteConfig.hasContactEmail && mailtoUrl && (
          <p className="text-[11px] text-muted text-center sm:text-right">
            Prefer direct email?{" "}
            <a href={mailtoUrl} className="text-cyan hover:underline">
              {siteConfig.contactEmail}
            </a>
          </p>
        )}
      </div>
    </form>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig, getWhatsAppUrl, getTelUrl, getMailtoUrl } from "@/config/site";
import { 
  Mail, 
  Phone, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MessageCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ixorya Technologies for custom software engineering, website development, AI automation, and Ixorya Academy course admissions.",
};

export default function Contact() {
  const mailtoUrl = getMailtoUrl();
  const telUrl = getTelUrl();
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <div className="relative min-h-screen py-16 sm:py-24 bg-grid-pattern">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-600/15 blur-[130px] -z-10" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 text-xs font-semibold text-cyan backdrop-blur-sm">
            <MessageSquare className="h-3.5 w-3.5 text-cyan" />
            <span>Let&apos;s Connect</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Get In Touch
          </h1>

          <p className="text-base sm:text-lg text-muted">
            Have a project in mind, need custom AI automation, or want to enroll in an academy course? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-dark/75 p-6 sm:p-8 backdrop-blur-md space-y-6">
              <div>
                <h2 className="text-xl font-bold text-silver">Contact Channels</h2>
                <p className="mt-1 text-xs text-muted">
                  Reach out directly via email, phone, WhatsApp, or submit the form for a fast technical response.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email (Hidden if missing) */}
                {siteConfig.hasContactEmail && mailtoUrl && (
                  <a
                    href={mailtoUrl}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-navy/80 p-4 transition hover:border-cyan/40 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dark border border-white/10 text-cyan group-hover:border-cyan/30">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs text-muted">Direct Email</div>
                      <div className="text-sm font-semibold text-silver group-hover:text-cyan transition truncate">
                        {siteConfig.contactEmail}
                      </div>
                    </div>
                  </a>
                )}

                {/* Phone (Hidden if missing) */}
                {siteConfig.hasPhone && telUrl && (
                  <a
                    href={telUrl}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-navy/80 p-4 transition hover:border-cyan/40 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dark border border-white/10 text-cyan group-hover:border-cyan/30">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted">Phone Call</div>
                      <div className="text-sm font-semibold text-silver group-hover:text-cyan transition">
                        {siteConfig.phone}
                      </div>
                    </div>
                  </a>
                )}

                {/* WhatsApp (Hidden if missing) */}
                {siteConfig.hasWhatsApp && whatsAppUrl && (
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-xl border border-emerald-500/20 bg-navy/80 p-4 transition hover:border-emerald-400 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dark border border-white/10 text-emerald-400 group-hover:border-emerald-400/40">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted">WhatsApp Chat</div>
                      <div className="text-sm font-semibold text-emerald-400 group-hover:underline transition">
                        Chat directly with our team
                      </div>
                    </div>
                  </a>
                )}

                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-navy/80 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dark border border-white/10 text-cyan">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Turnaround Time</div>
                    <div className="text-sm font-semibold text-silver">
                      Responses within 24 Hours
                    </div>
                    <div className="text-[11px] text-muted">Monday – Saturday</div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="border-t border-white/10 pt-4 space-y-2 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-cyan" />
                  <span>Strict privacy & Non-Disclosure Agreements (NDA) available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan" />
                  <span>Direct conversation with technical engineers, not pushy sales</span>
                </div>
              </div>
            </div>

            {/* Quick Link to FAQ */}
            <div className="rounded-xl border border-white/10 bg-dark/60 p-5 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-silver">Have quick questions?</div>
                <div className="text-xs text-muted">Browse our frequently asked questions.</div>
              </div>
              <Link
                href="/faq"
                className="inline-flex items-center gap-1 text-xs font-semibold text-cyan hover:underline"
              >
                <span>Read FAQ</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import { siteConfig, getWhatsAppUrl, getTelUrl, getMailtoUrl } from "@/config/site";
import NewsletterForm from "./NewsletterForm";
import { 
  Mail, 
  Phone, 
  ArrowUpRight, 
  Sparkles,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, WhatsAppIcon } from "./SocialIcons";

async function Year() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  const mailtoUrl = getMailtoUrl();
  const telUrl = getTelUrl();
  const whatsAppUrl = getWhatsAppUrl();

  const hasAnyContactMethod =
    siteConfig.hasContactEmail || siteConfig.hasPhone || siteConfig.hasWhatsApp;

  return (
    <footer className="border-t border-white/10 bg-dark text-silver">
      {/* Upper Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="space-y-4 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={siteConfig.symbol}
                alt={`${siteConfig.shortName} symbol`}
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-xl font-bold tracking-wide text-white">
                {siteConfig.shortName.toUpperCase()}
              </span>
            </Link>

            <p className="max-w-sm text-sm text-muted leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Tagline */}
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan">
              {siteConfig.tagline}
            </p>

            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for new projects & admissions</span>
            </div>

            {/* Social links (Only show Instagram if configured, along with standard channels) */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.hasInstagram && siteConfig.instagramUrl && (
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-lg border border-white/10 bg-navy/80 p-2 text-muted transition hover:border-cyan hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              )}
              {siteConfig.hasWhatsApp && whatsAppUrl && (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="rounded-lg border border-white/10 bg-navy/80 p-2 text-muted transition hover:border-emerald-400 hover:text-emerald-400"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              )}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-white/10 bg-navy/80 p-2 text-muted transition hover:border-cyan hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-white/10 bg-navy/80 p-2 text-muted transition hover:border-cyan hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="rounded-lg border border-white/10 bg-navy/80 p-2 text-muted transition hover:border-cyan hover:text-white"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions & Services (2.5 cols on lg) */}
          <div className="space-y-3 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Solutions & Services
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/services" className="transition hover:text-cyan">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition hover:text-cyan">
                  Modern Website Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition hover:text-cyan">
                  AI & Intelligent Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition hover:text-cyan">
                  API & Cloud System Architecture
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition hover:text-cyan">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Ixorya Academy (2.5 cols on lg) */}
          <div className="space-y-3 lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Ixorya Academy
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/academy/courses/coding-for-kids" className="transition hover:text-cyan">
                  Coding for Kids
                </Link>
              </li>
              <li>
                <Link href="/academy/courses/programming-fundamentals" className="transition hover:text-cyan">
                  Programming Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/academy/courses/python-for-beginners" className="transition hover:text-cyan">
                  Python for Beginners
                </Link>
              </li>
              <li>
                <Link href="/academy/courses/web-development-fundamentals" className="transition hover:text-cyan">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/academy/courses" className="inline-flex items-center gap-1 text-xs text-cyan hover:underline">
                  <span>View All Courses</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Newsletter (3 cols on lg) */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Connect With Us
            </h3>

            {/* Direct Contact Links (Hidden when values are missing) */}
            <div className="space-y-2.5 text-xs text-muted">
              {siteConfig.hasContactEmail && mailtoUrl && (
                <div className="flex items-center gap-2.5">
                  <Mail className="h-3.5 w-3.5 text-cyan shrink-0" />
                  <a href={mailtoUrl} className="hover:text-cyan transition truncate">
                    {siteConfig.contactEmail}
                  </a>
                </div>
              )}

              {siteConfig.hasPhone && telUrl && (
                <div className="flex items-center gap-2.5">
                  <Phone className="h-3.5 w-3.5 text-cyan shrink-0" />
                  <a href={telUrl} className="hover:text-cyan transition">
                    {siteConfig.phone}
                  </a>
                </div>
              )}

              {siteConfig.hasWhatsApp && whatsAppUrl && (
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 text-emerald-400/90 transition"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              )}

              {/* Contact Page Link */}
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan hover:underline"
                >
                  <span>Go to Contact Page</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {!hasAnyContactMethod && (
                <p className="text-xs text-muted">
                  Reach out through our online contact form for rapid assistance.
                </p>
              )}
            </div>

            {/* Newsletter Box */}
            <div className="pt-2">
              <div className="text-xs font-medium text-silver mb-1.5 flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-cyan" />
                <span>Tech Insights & Course Updates</span>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-navy/80 py-5">
        <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8 max-w-7xl text-xs text-muted">
          <div>
            © <Suspense fallback=""><Year /></Suspense> {siteConfig.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <Link href="/faq" className="hover:text-cyan transition">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-cyan transition">
              Contact
            </Link>
            <Link href="/services" className="hover:text-cyan transition">
              Services
            </Link>
            <Link href="/academy/courses" className="hover:text-cyan transition">
              Academy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

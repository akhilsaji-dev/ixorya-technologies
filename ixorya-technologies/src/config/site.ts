export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  logo: string;
  symbol: string;
  instagramUrl: string;
  phone: string;
  whatsappNumber: string;
  contactEmail: string;
  hasPhone: boolean;
  hasInstagram: boolean;
  hasWhatsApp: boolean;
  hasContactEmail: boolean;
}

/**
 * Validate if an email address is syntactically complete
 */
function isValidEmail(email: string | undefined): boolean {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Clean phone number to digits only
 */
function getPhoneDigits(phone: string | undefined): string {
  if (!phone) return "";
  return phone.replace(/[^\d+]/g, "").replace(/\D/g, "");
}

const rawName = process.env.NEXT_PUBLIC_SITE_NAME || "Ixoria Technologies";
const rawInstagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";
const rawPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";
const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const rawEmail = process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

const validEmail = isValidEmail(rawEmail) ? rawEmail.trim() : "";
const phoneDigits = getPhoneDigits(rawPhone);
const whatsAppDigits = getPhoneDigits(rawWhatsApp);

// Numbers with fewer than 10 digits are considered incomplete (e.g. "7909")
const isPhoneComplete = phoneDigits.length >= 10;
const isWhatsAppComplete = whatsAppDigits.length >= 10;

export const siteConfig: SiteConfig = {
  name: rawName,
  shortName: "Ixoria",
  tagline: "From Zero. Beyond Infinity.",
  description:
    "Ixoria Technologies builds software, modern websites and AI automation, and teaches programming through Ixorya Academy.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  logo: "/images/ixorya-logo.jpeg",
  symbol: "/images/ixorya-symbol.jpeg",
  instagramUrl: rawInstagram.trim(),
  phone: isPhoneComplete ? rawPhone.trim() : "",
  whatsappNumber: isWhatsAppComplete ? rawWhatsApp.trim() : "",
  contactEmail: validEmail,
  hasPhone: isPhoneComplete,
  hasInstagram: Boolean(rawInstagram && rawInstagram.trim().length > 0),
  hasWhatsApp: isWhatsAppComplete,
  hasContactEmail: Boolean(validEmail),
};

/**
 * Generate a WhatsApp URL using NEXT_PUBLIC_WHATSAPP_NUMBER
 * Format: https://wa.me/<international-number>?text=<encoded-message>
 * Removes spaces, brackets, hyphens, and leading plus sign.
 * Returns null if the number is incomplete or missing.
 */
export function getWhatsAppUrl(
  prefilledText: string = "Hello Ixoria Technologies, I would like to enquire about your services."
): string | null {
  if (!siteConfig.hasWhatsApp) return null;

  let clean = siteConfig.whatsappNumber.replace(/[^\d+]/g, "");
  if (clean.startsWith("+")) {
    clean = clean.substring(1);
  }
  clean = clean.replace(/\D/g, "");

  // If a 10-digit number is provided (e.g. Indian national number), prepend country code 91
  let internationalNumber = clean;
  if (clean.length === 10) {
    internationalNumber = `91${clean}`;
  }

  // Must have at least 11 digits for an international number
  if (internationalNumber.length < 11 || internationalNumber.length > 15) {
    return null;
  }

  return `https://wa.me/${internationalNumber}?text=${encodeURIComponent(prefilledText)}`;
}

/**
 * Generate a tel: URL for click-to-call
 * Returns null if the phone number is missing or incomplete
 */
export function getTelUrl(): string | null {
  if (!siteConfig.hasPhone) return null;
  const digits = siteConfig.phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

/**
 * Generate a mailto: URL
 * Returns null if the contact email is missing or invalid
 */
export function getMailtoUrl(subject: string = "Enquiry - Ixoria Technologies"): string | null {
  if (!siteConfig.hasContactEmail) return null;
  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}`;
}

// Backwards-compatible alias for existing imports
export const site = {
  ...siteConfig,
  short: siteConfig.shortName,
  email: siteConfig.contactEmail,
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: siteConfig.instagramUrl || "https://www.instagram.com/ixorya.codes/",
  },
};

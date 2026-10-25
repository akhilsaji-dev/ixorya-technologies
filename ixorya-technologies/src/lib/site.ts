export const site = {
  name: "Ixorya Technologies",
  short: "Ixorya",
  tagline: "From Zero. Beyond Infinity.",
  description:
    "Ixorya Technologies builds software, modern websites and AI automation, and teaches programming through Ixorya Academy.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@ixorya.com",
  phone: "+91 98765 43210",
  location: "Kerala, India",
  logo: "/images/ixorya-logo.jpeg",
  symbol: "/images/ixorya-symbol.jpeg",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
};

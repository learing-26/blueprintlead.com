/**
 * Site configuration and constants
 */

export const SITE_CONFIG = {
  name: "Blueprint Lead",
  description: "Exclusive, pre-scheduled appointments with permit-verified homeowners for licensed contractors in Los Angeles County.",
  url: "https://blueprintlead.com",
  domain: "blueprintlead.com",
  locale: "en-US",
  serviceArea: "Los Angeles County",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing & Tiers" },
  { href: "/project-types", label: "Project Types" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing & Tiers" },
    { href: "/project-types", label: "Project Types" },
  ],
  support: [
    { href: "/faq", label: "FAQ" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
} as const;

export const SOCIAL_LINKS = {
  // Social media links can be added here when available
} as const;

export const CONTACT_INFO = {
  email: "info@blueprintlead.com",
  phone: "(555) 123-4567", // Placeholder - update with actual
  serviceArea: "Los Angeles County, California",
} as const;

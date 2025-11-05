/**
 * Site configuration and constants
 */

import {
  Hammer,
  Wrench,
  Home,
  Droplet,
  Zap,
  TreeDeciduous,
  Warehouse,
  PaintBucket,
} from "lucide-react";

export const SITE_CONFIG = {
  name: "Blueprint Lead",
  description: "Exclusive, pre-scheduled appointments with permit-verified homeowners for licensed contractors in Los Angeles County.",
  url: "https://blueprintlead.com",
  domain: "blueprintlead.com",
  locale: "en-US",
  serviceArea: "Los Angeles County",
} as const;

export const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/project-types", label: "Projects" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing & Tiers" },
    { href: "/project-types", label: "Project Types" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
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

/**
 * Pricing Tiers - Based on website-content.md Section 3
 */
export const TIERS = [
  {
    name: "Tier 1",
    tagline: "Established Mid-Size Projects",
    projectRange: "$85,000 - $150,000",
    idealFor: [
      "Established contractors seeking steady project flow",
      "Growing businesses expanding their portfolio",
      "Specialists in ADUs, remodels, and retrofits",
    ],
    projectTypes: [
      "ADUs (accessory dwelling units)",
      "Major kitchen remodels",
      "Multiple bathroom remodels",
      "Partial home remodels",
      "Large-scale re-roofing projects",
      "Seismic retrofit projects",
    ],
    features: [
      "Exclusive, pre-scheduled appointment",
      "Permit-verified project with full documentation",
      "Complete homeowner contact and property information",
      "Detailed project scope and specifications",
      "Zero competition—you're the only contractor",
    ],
    ctaText: "Schedule Consultation",
    featured: false,
  },
  {
    name: "Tier 2",
    tagline: "Large-Scale Residential Projects",
    projectRange: "$150,000 - $300,000",
    idealFor: [
      "Experienced general contractors",
      "Firms handling complex residential construction",
      "Contractors ready for larger-scale, higher-margin work",
    ],
    projectTypes: [
      "Whole-home remodels",
      "Large ADU construction",
      "Major structural additions",
      "Seismic retrofits with extensive upgrades",
      "Full property renovations",
      "Custom pool installations",
      "Multi-room additions",
    ],
    features: [
      "Exclusive, pre-scheduled appointment",
      "Permit-verified project with full documentation",
      "Complete homeowner contact and property information",
      "Detailed project scope and specifications",
      "Zero competition—you're the only contractor",
    ],
    ctaText: "Schedule Consultation",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Tier 3",
    tagline: "Major Construction & Rebuilds",
    projectRange: "$300,000 - $600,000",
    idealFor: [
      "Established general contractors with proven portfolios",
      "Firms specializing in high-end residential construction",
      "Teams capable of managing large-scale, complex projects",
    ],
    projectTypes: [
      "Full home rebuilds (tear-down and reconstruct)",
      "Large-scale new construction",
      "Luxury whole-home remodels",
      "Multi-unit ADU developments",
      "Complex seismic retrofits with major structural upgrades",
      "High-end pool and outdoor construction",
      "Large additions and expansions",
    ],
    features: [
      "Exclusive, pre-scheduled appointment",
      "Permit-verified project with full documentation",
      "Complete homeowner contact and property information",
      "Detailed project scope and specifications",
      "Zero competition—you're the only contractor",
    ],
    ctaText: "Schedule Consultation",
    featured: false,
  },
  {
    name: "Premium Tier",
    tagline: "Luxury & Estate Construction",
    projectRange: "$600,000+",
    idealFor: [
      "Elite general contractors with extensive portfolios",
      "Firms specializing in luxury custom construction",
      "Established companies seeking high-profile, signature projects",
    ],
    projectTypes: [
      "Luxury custom new construction",
      "Full estate rebuilds and renovations",
      "High-end multi-story additions",
      "Complex luxury remodels",
      "Large-scale demolition and reconstruction",
      "Premium pool, landscape, and outdoor living construction",
      "Custom architectural projects",
    ],
    features: [
      "Exclusive, pre-scheduled appointment",
      "Permit-verified project with full documentation",
      "Complete homeowner contact and property information",
      "Detailed project scope and specifications",
      "Priority support from our team",
      "Zero competition—you're the only contractor",
    ],
    ctaText: "Schedule Consultation",
    featured: false,
  },
] as const;

/**
 * Project Types - High-Value Construction Projects
 */
export const PROJECT_TYPES = [
  {
    name: "ADUs & Accessory Dwelling Units",
    description:
      "Detached and attached accessory dwelling units, granny flats, garage conversions, and junior ADUs. One of the most in-demand project types in LA County.",
    icon: Home,
    examples: [
      "New detached ADU construction (ground-up)",
      "Attached ADU additions",
      "Garage conversions to living space",
      "Multi-unit ADU developments on larger properties",
    ],
    badge: "High Demand",
    badgeVariant: "success" as const,
  },
  {
    name: "New Construction",
    description:
      "Ground-up residential construction projects. Custom single-family homes, multi-unit builds, and luxury estate construction.",
    icon: Warehouse,
    examples: [
      "Custom single-family home construction",
      "Multi-unit residential builds",
      "Luxury estate construction",
      "Custom architectural projects",
    ],
    badge: "Premium",
    badgeVariant: "success" as const,
  },
  {
    name: "Full Property Rebuilds",
    description:
      "Complete demolition and reconstruction of existing properties. Tear-down and rebuild projects for homeowners seeking modern construction on established lots.",
    icon: Hammer,
    examples: [
      "Complete tear-down and rebuild",
      "Foundation-up reconstruction",
      "Property modernization projects",
      "Lot optimization rebuilds",
    ],
    badge: "High Value",
    badgeVariant: "success" as const,
  },
  {
    name: "Major Remodels",
    description:
      "Extensive interior and exterior remodeling projects. Whole-home renovations, luxury kitchen remodels, multi-room additions, and open-concept conversions.",
    icon: PaintBucket,
    examples: [
      "Whole-home remodels (multiple rooms, systems, finishes)",
      "Full kitchen renovations with luxury finishes",
      "Open-concept conversions (structural changes)",
      "Second-story additions",
    ],
  },
  {
    name: "Seismic Retrofitting",
    description:
      "Structural earthquake safety improvements and upgrades. Foundation bolting, cripple wall bracing, soft-story retrofitting, and comprehensive structural reinforcement.",
    icon: Wrench,
    examples: [
      "Foundation bolting and reinforcement",
      "Cripple wall bracing",
      "Soft-story retrofitting (multi-unit buildings)",
      "Hillside home stabilization",
    ],
  },
  {
    name: "Pools & Outdoor Construction",
    description:
      "Custom pool installation, spa construction, and major outdoor living space development. High-end backyard transformations.",
    icon: Droplet,
    examples: [
      "Custom in-ground pool installation",
      "Pool and spa combinations",
      "Outdoor kitchens and entertainment areas",
      "Complete backyard transformations",
    ],
  },
  {
    name: "Demolition Projects",
    description:
      "Permitted demolition work preparing properties for future construction. Often the first phase of larger rebuild or new construction projects.",
    icon: Hammer,
    examples: [
      "Full structure demolition",
      "Partial demolition for additions or remodels",
      "Site preparation for new construction",
      "Foundation demolition and excavation",
    ],
  },
  {
    name: "Re-Roofing (Large Scale)",
    description:
      "Major roof replacement on large homes, estates, and complex roof systems. Premium materials and comprehensive roof installations.",
    icon: TreeDeciduous,
    examples: [
      "Large estate re-roofing (high square footage)",
      "Complex multi-level roof systems",
      "Premium material installations (tile, slate, metal)",
      "Roof replacement with solar integration",
    ],
  },
] as const;

/**
 * Testimonials
 */
export const TESTIMONIALS = [
  {
    quote:
      "Blueprint Lead transformed my business. I went from chasing lukewarm referrals to closing 3 out of every 4 leads. These homeowners are serious, budgeted, and ready to move forward.",
    name: "Marcus Rodriguez",
    company: "Rodriguez Kitchen & Bath",
    specialty: "Kitchen & Bath Remodeling",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "The permit verification is a game changer. I used to waste hours quoting projects that would never get approved. Now every lead I receive is already vetted and permitted.",
    name: "Jennifer Kim",
    company: "Kim General Contracting",
    specialty: "General Contracting & ADUs",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "I was skeptical about the price point, but the ROI speaks for itself. One Gold tier lead typically converts to a $40K-$80K project. Best marketing investment I've made.",
    name: "David Thompson",
    company: "Thompson Electrical Services",
    specialty: "Licensed Electrical Contractor",
    rating: 5,
    verified: true,
  },
] as const;

/**
 * FAQ Categories
 */
export const FAQ_CATEGORIES = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What licenses do I need to receive leads?",
        answer:
          "You must hold an active California contractor's license (Class A, B, or relevant C-class specialty license) and maintain current liability insurance. We verify all licenses through CSLB before activating your account.",
      },
      {
        question: "How quickly can I start receiving leads?",
        answer:
          "After license verification and tier selection, most contractors receive their first lead within 3-5 business days. Diamond tier members often receive leads within 24-48 hours due to priority matching.",
      },
      {
        question: "Can I pause my account if I get too busy?",
        answer:
          "Yes, you can pause lead delivery at any time with no penalties. Simply notify your account manager or update your settings in the dashboard. Your tier benefits remain active when you're ready to resume.",
      },
    ],
  },
  {
    category: "Lead Quality",
    questions: [
      {
        question: "How are homeowners vetted?",
        answer:
          "Every homeowner goes through permit verification, budget qualification, and timeline confirmation before being matched with contractors. We verify permits through LA County records and confirm homeowner commitment through direct interviews.",
      },
      {
        question: "What's your lead replacement guarantee?",
        answer:
          "Gold tier and above includes our lead replacement guarantee. If a homeowner is unresponsive after 3 contact attempts (documented), or if permit information was inaccurate, we'll replace the lead at no cost.",
      },
      {
        question: "Do you sell leads to multiple contractors?",
        answer:
          "No. Each lead is exclusive to one contractor per specialty. For multi-discipline projects, we may match different specialists (e.g., one electrician, one plumber), but never competing contractors in the same trade.",
      },
    ],
  },
  {
    category: "Pricing & Tiers",
    questions: [
      {
        question: "How does pricing work?",
        answer:
          "You only pay per qualified lead delivered. Silver tier starts at $120/lead, Gold at $150/lead, Platinum at $180/lead, and Diamond at $220/lead. No monthly fees, contracts, or minimum commitments.",
      },
      {
        question: "Can I switch tiers?",
        answer:
          "Yes, you can upgrade at any time to access better benefits. Downgrades are allowed with 30 days notice to honor our exclusivity commitments to Diamond and Platinum members.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, ACH transfers, and wire payments. Invoices are sent after each lead delivery, with net-15 payment terms for established accounts.",
      },
    ],
  },
  {
    category: "Service Area",
    questions: [
      {
        question: "Do you cover all of LA County?",
        answer:
          "Yes, we cover all cities and unincorporated areas within Los Angeles County. You can specify your preferred service areas during onboarding, and we'll only send leads within your coverage zone.",
      },
      {
        question: "Can I specify which neighborhoods I want to work in?",
        answer:
          "Platinum and Diamond tier members can set preferred ZIP codes and neighborhoods. Silver and Gold members receive leads county-wide but can decline leads outside their preferred areas without penalty (up to 3 declines per month).",
      },
    ],
  },
  {
    category: "Process & Timeline",
    questions: [
      {
        question: "What happens after I receive a lead?",
        answer:
          "You'll receive homeowner contact information, project details, and permit documentation via email and dashboard notification. Contact the homeowner within your tier's response window to schedule a consultation.",
      },
      {
        question: "What if I can't reach the homeowner?",
        answer:
          "Document your contact attempts (call logs, emails, voicemails) and submit through your dashboard. After 3 documented attempts with no response, Gold tier and above qualify for lead replacement.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        question: "How do I contact support?",
        answer:
          "Silver/Gold: Email support at info@blueprintlead.com (24-48 hour response). Platinum: Email + phone support (12-hour response). Diamond: Dedicated account manager with direct phone line.",
      },
      {
        question: "Do you provide sales training or best practices?",
        answer:
          "Platinum and Diamond members receive quarterly business reviews with conversion analysis and best practices. Diamond members also get monthly strategy sessions with our team.",
      },
    ],
  },
] as const;

/**
 * Value Propositions
 */
export const VALUE_PROPS = [
  {
    title: "Permit-Verified Projects",
    description:
      "Every lead includes verified permit status from LA County records. No more chasing projects that will never get approved.",
    icon: "Shield",
  },
  {
    title: "Exclusive Territory Rights",
    description:
      "Diamond tier members get exclusive rights to their chosen territories. One contractor per trade, per lead. No competing bids.",
    icon: "MapPin",
  },
  {
    title: "Pre-Qualified Homeowners",
    description:
      "We confirm budget, timeline, and commitment before matching. These aren't tire-kickers—they're ready to hire.",
    icon: "CheckCircle",
  },
  {
    title: "No Contracts or Commitments",
    description:
      "Pay per lead, pause anytime, cancel anytime. No monthly fees, no minimums, no long-term contracts.",
    icon: "FileText",
  },
  {
    title: "Licensed Contractor Network",
    description:
      "Join LA County's most exclusive network of licensed, insured contractors. We verify credentials so homeowners trust our referrals.",
    icon: "Award",
  },
] as const;

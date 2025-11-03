/**
 * Global type definitions for Blueprint Lead
 */

// Navigation link type
export interface NavLink {
  href: string;
  label: string;
}

// Project tier types (from website-content.md)
export type ProjectTier = "tier1" | "tier2" | "tier3" | "premium";

export interface PricingTier {
  id: ProjectTier;
  name: string;
  range: string;
  price: string;
  description: string;
  features: string[];
}

// Project type categories
export type ProjectCategory =
  | "adu"
  | "new-construction"
  | "rebuild"
  | "major-remodel"
  | "seismic-retrofit"
  | "pool"
  | "demolition"
  | "re-roofing";

export interface ProjectType {
  id: ProjectCategory;
  name: string;
  description: string;
  icon?: string;
}

// FAQ types
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// Testimonial types
export interface Testimonial {
  quote: string;
  author: string;
  company?: string;
  role?: string;
  rating?: number;
}

// Contact form types (also defined in lib/resend.ts)
export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  licenseNumber: string;
  projectPreferences?: string;
  serviceAreas?: string;
  message?: string;
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

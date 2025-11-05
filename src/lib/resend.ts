import { Resend } from "resend";

/**
 * Resend client configuration
 * Integration Agent will implement email sending functionality
 */

// Initialize Resend client with API key from environment variables
export const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration constants
export const EMAIL_CONFIG = {
  from: "Blueprint Lead <onboarding@resend.dev>", // Using Resend's domain
  to: "info@blueprintlead.com",
  subject: "New Contact Form Submission - Blueprint Lead",
} as const;

// Type definitions for contact form data
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  license: string;
  contactMethod: string;
  bestTime: string;
  serviceAreas?: string;
  message?: string;
}

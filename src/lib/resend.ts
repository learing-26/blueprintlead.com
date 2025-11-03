import { Resend } from "resend";

/**
 * Resend client configuration
 * Integration Agent will implement email sending functionality
 */

// Initialize Resend client with API key from environment variables
export const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration constants
export const EMAIL_CONFIG = {
  from: "Blueprint Lead <noreply@blueprintlead.com>",
  to: "info@blueprintlead.com", // Update with actual recipient
  subject: "New Contact Form Submission - Blueprint Lead",
} as const;

// Type definitions for contact form data
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  licenseNumber: string;
  projectPreferences?: string;
  serviceAreas?: string;
  message?: string;
}

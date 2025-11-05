import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(100, "First name must be less than 100 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(100, "Last name must be less than 100 characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),

  phone: z
    .string()
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Phone format: (XXX) XXX-XXXX")
    .optional()
    .or(z.literal("")), // Allow empty string

  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),

  license: z
    .string()
    .min(3, "License number is required")
    .max(50, "License number must be less than 50 characters"),

  contactMethod: z.enum(["Email", "Phone", "Video"], {
    errorMap: () => ({ message: "Please select a contact method" }),
  }),

  bestTime: z.enum(["Morning", "Afternoon", "Evening"], {
    errorMap: () => ({ message: "Please select a preferred time" }),
  }),

  serviceAreas: z
    .string()
    .max(500, "Service areas must be less than 500 characters")
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .optional()
    .or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

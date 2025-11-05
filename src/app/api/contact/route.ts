import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contactForm";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate with Zod
    const validatedData = contactFormSchema.parse(body);

    // Format email content
    const emailContent = `
NEW CONSULTATION REQUEST

CONTRACTOR INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${validatedData.firstName} ${validatedData.lastName}
Company: ${validatedData.company}
License #: ${validatedData.license}
Email: ${validatedData.email}
Phone: ${validatedData.phone || "Not provided"}

CONSULTATION PREFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━
Preferred Contact Method: ${validatedData.contactMethod}
Best Time to Call: ${validatedData.bestTime}
Service Areas: ${validatedData.serviceAreas || "Not specified"}

MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━
${validatedData.message || "No message provided"}

━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}
━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from the Blueprint Lead contact form.
    `.trim();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Blueprint Lead <onboarding@resend.dev>", // Using Resend's domain
      to: "benjamin@blueprintlead.com", // Resend test mode requires sending to API key owner email
      subject: "New Contact Form Submission - Blueprint Lead",
      text: emailContent,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Form submitted successfully! We will contact you soon.",
        emailId: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    // Zod validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Other errors
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

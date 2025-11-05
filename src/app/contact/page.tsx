"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { IconFeatureCard } from "@/components/molecules/IconFeatureCard";
import { CalloutBox } from "@/components/molecules/CalloutBox";
import { ImagePlaceholder } from "@/components/atoms/ImagePlaceholder";
import {
  Calendar,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  Shield,
  FileCheck,
  ArrowRight,
  MapPin,
} from "lucide-react";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contactForm";
import { ZodError } from "zod";

export default function ContactPage(): React.ReactElement {
  const router = useRouter();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    license: "",
    contactMethod: "Email",
    bestTime: "Morning",
    serviceAreas: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus("idle");
    setIsSubmitting(true);

    try {
      // Client-side validation
      const validatedData = contactFormSchema.parse(formData);

      // Submit to API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.details) {
          // Validation errors from server
          const newErrors: Record<string, string> = {};
          data.details.forEach((err: { field: string; message: string }) => {
            newErrors[err.field] = err.message;
          });
          setErrors(newErrors);
        }
        throw new Error(data.error || "Submission failed");
      }

      // Success - redirect to thank you page
      router.push("/thank-you");
    } catch (error) {
      if (error instanceof ZodError) {
        // Client-side validation errors
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          newErrors[err.path.join(".")] = err.message;
        });
        setErrors(newErrors);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          error instanceof Error ? error.message : "An error occurred"
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-deep-slate-900 to-deep-slate-800 py-28 md:py-36 lg:py-44">
        <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Schedule Your Free Consultation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Let&apos;s discuss how exclusive, pre-scheduled appointments can
            grow your contracting business.
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            What Happens During Your Consultation
          </h2>
          <p className="text-lg md:text-xl text-slate-700 text-center mb-12 max-w-3xl mx-auto">
            Your consultation is a no-pressure conversation about your business
            and whether Blueprint Lead is the right fit.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <IconFeatureCard
              icon={Clock}
              title="Your Business (15 min)"
              description="Discuss your project preferences, capacity, and business goals."
              variant="emerald"
            />
            <IconFeatureCard
              icon={FileCheck}
              title="Tier Options (10 min)"
              description="Review our tiers and how they align with your goals."
              variant="emerald"
            />
            <IconFeatureCard
              icon={Shield}
              title="Transparent Pricing (10 min)"
              description="Clear discussion of our pricing structure and fees."
              variant="emerald"
            />
            <IconFeatureCard
              icon={CheckCircle2}
              title="Sample Documentation (5 min)"
              description="Review sample lead information and permit records."
              variant="emerald"
            />
            <IconFeatureCard
              icon={Phone}
              title="Your Questions (10 min)"
              description="Ask anything. We'll answer honestly and completely."
              variant="emerald"
            />
            <IconFeatureCard
              icon={CheckCircle2}
              title="Determine Fit"
              description="No pressure, no obligation. We'll assess if we're a mutual fit."
              variant="emerald"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg md:text-xl text-slate-700">
              <span className="font-semibold">Format:</span> 30-45 minute phone
              or video consultation at your convenience
            </p>
            <p className="text-lg md:text-xl text-slate-700">
              <span className="font-semibold">Outcome:</span> By the end,
              you&apos;ll know exactly how Blueprint Lead works, what you&apos;ll
              pay, what you&apos;ll receive, and whether it makes sense for your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Two Column */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            Choose Your Preferred Contact Method
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Contact Form
              </h3>
              <p className="text-base md:text-lg text-slate-700 mb-8">
                Fill out the form below and we&apos;ll reach out within 24 hours
                to schedule your consultation.
              </p>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-lg">
                  <p className="text-emerald-800 font-medium">{submitMessage}</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-600 rounded-lg">
                  <p className="text-red-800 font-medium">{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-deep-slate-900 mb-2"
                    >
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                      required
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-deep-slate-900 mb-2"
                    >
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                      required
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-deep-slate-900 mb-2"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-deep-slate-900 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="(XXX) XXX-XXXX"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-deep-slate-900 mb-2"
                  >
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                    required
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="license"
                    className="block text-sm font-medium text-deep-slate-900 mb-2"
                  >
                    Contractor License Number{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="license"
                    name="license"
                    value={formData.license}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                    required
                  />
                  {errors.license && (
                    <p className="mt-1 text-sm text-red-600">{errors.license}</p>
                  )}
                </div>

                {/* Consultation Preferences */}
                <div>
                  <label
                    htmlFor="contactMethod"
                    className="block text-sm font-medium text-deep-slate-900 mb-2"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                  >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="Video">Video Call</option>
                  </select>
                  {errors.contactMethod && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.contactMethod}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="bestTime"
                    className="block text-sm font-medium text-deep-slate-900 mb-2"
                  >
                    Best Time to Call
                  </label>
                  <select
                    id="bestTime"
                    name="bestTime"
                    value={formData.bestTime}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                  >
                    <option value="Morning">Morning (8am-12pm)</option>
                    <option value="Afternoon">Afternoon (12pm-5pm)</option>
                    <option value="Evening">Evening (5pm-7pm)</option>
                  </select>
                  {errors.bestTime && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.bestTime}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="serviceAreas"
                    className="block text-sm font-medium text-deep-slate-900 mb-2"
                  >
                    Service Areas in LA County
                  </label>
                  <input
                    type="text"
                    id="serviceAreas"
                    name="serviceAreas"
                    value={formData.serviceAreas}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="e.g., South Bay, West LA"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                  />
                  {errors.serviceAreas && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.serviceAreas}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-deep-slate-900 mb-2"
                  >
                    Questions or Comments (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none disabled:bg-slate-100 disabled:cursor-not-allowed"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <CTAButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Schedule My Consultation"}
                </CTAButton>

                <p className="text-xs text-slate-600 text-center">
                  Your information is confidential and will only be used to
                  schedule your consultation. See our{" "}
                  <a href="/privacy" className="text-emerald-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  for details.
                </p>
              </form>
            </div>

            {/* Right Column - Calendly Section + Info */}
            <div className="space-y-8">
              {/* Calendly Section - Beautiful and Inviting */}
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 p-8 border-2 border-emerald-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-deep-slate-900">
                    Schedule Your Free Consultation
                  </h3>
                </div>

                <p className="text-base md:text-lg text-deep-slate-700 mb-6">
                  Ready to start receiving pre-scheduled appointments with
                  permit-verified homeowners? Book a 15-minute call to discuss
                  your license, service area, and project preferences.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-deep-slate-700">
                      15-minute introduction call
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-deep-slate-700">
                      Discuss your business goals and project types
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-deep-slate-700">
                      Review tier options and transparent pricing
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-deep-slate-700">
                      Get all your questions answered
                    </p>
                  </div>
                </div>

                <CTAButton
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL || "#"}
                  variant="primary"
                  size="lg"
                  icon={Calendar}
                  className="w-full text-center justify-center"
                >
                  Book Your Free Consultation
                </CTAButton>

                <p className="text-xs text-slate-600 mt-4 text-center">
                  No commitment required • Takes less than 15 minutes
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <Mail className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Email Us
                      </h4>
                      <a
                        href="mailto:info@blueprintlead.com"
                        className="text-emerald-600 hover:underline"
                      >
                        info@blueprintlead.com
                      </a>
                      <p className="text-sm text-slate-600 mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Office Hours
                      </h4>
                      <p className="text-slate-700">
                        Monday - Friday: 8am - 6pm PST
                      </p>
                      <p className="text-slate-700">Saturday: 9am - 2pm PST</p>
                      <p className="text-slate-700">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Service Area
                      </h4>
                      <p className="text-slate-700">
                        Los Angeles County, California
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        All cities and unincorporated areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Preview */}
              <CalloutBox type="info" title="What Happens After You Contact Us">
                <div className="space-y-3 mt-4">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Confirmation (Immediate or within 24 hours)
                      </p>
                      <p className="text-sm text-slate-700">
                        Calendly bookings are instant. Form submissions receive
                        response within 24 hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Your Consultation (30-45 minutes)
                      </p>
                      <p className="text-sm text-slate-700">
                        Honest conversation about your business, our process,
                        and whether we&apos;re a good fit.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        If It&apos;s a Good Fit (1-2 business days)
                      </p>
                      <p className="text-sm text-slate-700">
                        License verification, agreement review, and project
                        preference setup.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Start Receiving Leads
                      </p>
                      <p className="text-sm text-slate-700">
                        Get exclusive, pre-scheduled appointments that match your
                        preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </CalloutBox>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            Quick Questions About the Consultation
          </h2>

          <div className="space-y-6 mt-12">
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Is the consultation really free?
              </h3>
              <p className="text-base md:text-lg text-slate-700">
                Yes. Completely free with no obligation. We want to make sure
                we&apos;re a good fit before moving forward.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Will I be pressured to sign up?
              </h3>
              <p className="text-base md:text-lg text-slate-700">
                No. We&apos;re selective about who we work with, and you should
                be selective about who you partner with. This is a conversation,
                not a sales pitch.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                How long does the consultation take?
              </h3>
              <p className="text-base md:text-lg text-slate-700">
                30-45 minutes. We respect your time.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                When will someone contact me?
              </h3>
              <p className="text-base md:text-lg text-slate-700">
                If you book via Calendly, your time is confirmed immediately. If
                you use the contact form or email, we&apos;ll reach out within
                24 business hours.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                What information should I have ready?
              </h3>
              <p className="text-base md:text-lg text-slate-700">
                Your contractor license number, current insurance details, and a
                general idea of your project preferences and service areas.
                That&apos;s it.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Can I reschedule if something comes up?
              </h3>
              <p className="text-base md:text-lg text-slate-700">
                Absolutely. Just let us know and we&apos;ll find another time
                that works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            What You Can Expect From Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IconFeatureCard
              icon={Shield}
              title="No Pressure, No Hard Sell"
              description="This is a conversation to see if we're a mutual fit. No sales tactics."
            />
            <IconFeatureCard
              icon={FileCheck}
              title="Transparent Pricing"
              description="We'll discuss our pricing structure openly and answer all questions."
            />
            <IconFeatureCard
              icon={CheckCircle2}
              title="Honest Assessment"
              description="We'll tell you honestly if we think Blueprint Lead is right for you."
            />
            <IconFeatureCard
              icon={Clock}
              title="Respectful of Your Time"
              description="We keep consultations to 30-45 minutes and start/end on time."
            />
            <IconFeatureCard
              icon={Phone}
              title="Professional Consultation"
              description="You'll speak with someone who understands contractor businesses."
            />
            <IconFeatureCard
              icon={ArrowRight}
              title="Clear Next Steps"
              description="You'll know exactly what happens next, whether you proceed or not."
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-base md:text-lg text-slate-700 font-semibold">
              Licensed & Insured Contractors Only | Serving LA County Since 2021
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Stop Chasing Leads and Start Closing Projects?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            Schedule your consultation today. Let&apos;s talk about exclusive,
            pre-scheduled appointments with homeowners who are ready to build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="primary"
              size="lg"
              icon={Calendar}
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || "#"}
              className="bg-white text-emerald-600 hover:bg-slate-50"
            >
              Schedule via Calendly
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              icon={Mail}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="border-2 border-white text-white hover:bg-white/10"
            >
              Fill Out Contact Form
            </CTAButton>
          </div>
          <p className="text-sm text-white/80 mt-6">
            Or email us at{" "}
            <a
              href="mailto:info@blueprintlead.com"
              className="text-white underline hover:no-underline"
            >
              info@blueprintlead.com
            </a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

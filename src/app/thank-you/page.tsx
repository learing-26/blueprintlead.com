import type { Metadata } from "next";
import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { IconFeatureCard } from "@/components/molecules/IconFeatureCard";
import { CalloutBox } from "@/components/molecules/CalloutBox";
import {
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Blueprint Lead",
  description:
    "Thank you for contacting Blueprint Lead. We'll be in touch soon.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/thank-you",
  },
  openGraph: {
    title: "Thank You | Blueprint Lead",
    description:
      "Thank you for contacting Blueprint Lead. We'll be in touch soon.",
    url: "https://blueprintlead.com/thank-you",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: "Blueprint Lead Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | Blueprint Lead",
    description:
      "Thank you for contacting Blueprint Lead. We'll be in touch soon.",
    images: ["/og-image.png"],
  },
};

/**
 * Thank You page - displayed after successful contact form submission
 * Shows confirmation message and next steps timeline
 */
export default function ThankYouPage(): React.ReactElement {
  return (
    <PageLayout>
      {/* Hero Section - Success Message */}
      <section className="w-full bg-white py-28 md:py-36 lg:py-44">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <CheckCircle className="h-20 w-20 md:h-24 md:w-24 text-emerald-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6">
            Thank You!
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-4">
            We&apos;ve received your message and will respond within 24 hours.
          </p>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            In the meantime, here&apos;s what happens next.
          </p>
        </div>
      </section>

      {/* What Happens Next - Timeline */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            What Happens Next
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <IconFeatureCard
              icon={Clock}
              title="1. Request Received"
              description="Your inquiry is in our system and assigned to our team (now)."
              variant="emerald"
            />
            <IconFeatureCard
              icon={Mail}
              title="2. We'll Respond"
              description="Expect to hear from us within 24 hours to schedule your consultation."
              variant="emerald"
            />
            <IconFeatureCard
              icon={Phone}
              title="3. Consultation Call"
              description="30-45 minute discussion about your business, goals, and whether we're a fit."
              variant="emerald"
            />
            <IconFeatureCard
              icon={CheckCircle}
              title="4. If It's a Good Fit"
              description="License verification, agreement review, and project setup within 1-2 business days."
              variant="emerald"
            />
          </div>
        </div>
      </section>

      {/* Immediate Scheduling Option */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <CalloutBox type="info" title="Want to Skip the Wait?">
            <p className="text-base md:text-lg mb-6">
              If you&apos;d prefer to schedule your consultation right now
              instead of waiting for our response, use our Calendly link below
              to pick a time that works for you.
            </p>
            <CTAButton
              variant="primary"
              size="lg"
              icon={Calendar}
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || "#"}
              className="w-full sm:w-auto justify-center"
            >
              Schedule Now
            </CTAButton>
          </CalloutBox>
        </div>
      </section>

      {/* Explore Services CTA */}
      <section className="w-full bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our Services
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            While you wait, learn more about how Blueprint Lead delivers
            exclusive, pre-scheduled appointments with permit-verified
            homeowners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="outline"
              size="lg"
              icon={ArrowRight}
              href="/how-it-works"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              How It Works
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              icon={ArrowRight}
              href="/pricing"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              View Pricing
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              icon={ArrowRight}
              href="/why-us"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              Why Choose Us
            </CTAButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

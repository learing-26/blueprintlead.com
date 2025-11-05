import type { Metadata } from "next";
import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { IconFeatureCard } from "@/components/molecules/IconFeatureCard";
import {
  AlertTriangle,
  Home,
  Mail,
  FileCheck,
  DollarSign,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Blueprint Lead",
  description: "The page you're looking for doesn't exist.",
  robots: "noindex, nofollow",
};

/**
 * Custom 404 Not Found page
 * Displays friendly error message with navigation options
 */
export default function NotFoundPage(): React.ReactElement {
  return (
    <PageLayout>
      {/* Hero Section - Error Message */}
      <section className="relative w-full bg-gradient-to-br from-deep-slate-900 to-deep-slate-800 py-28 md:py-36 lg:py-44">
        <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <AlertTriangle className="h-20 w-20 md:h-24 md:w-24 text-red-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>
      </section>

      {/* Primary Navigation Section */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let&apos;s Get You Back on Track
          </h2>
          <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto">
            Use the buttons below to navigate to our homepage or contact us
            directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="primary" size="lg" icon={Home} href="/">
              Go to Homepage
            </CTAButton>
            <CTAButton variant="outline" size="lg" icon={Mail} href="/contact">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            Helpful Links
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <IconFeatureCard
              icon={Home}
              title="Homepage"
              description="Learn about exclusive, pre-scheduled appointments with permit-verified homeowners in LA County."
            />
            <IconFeatureCard
              icon={FileCheck}
              title="How It Works"
              description="See our 4-step process for delivering exclusive contractor leads."
            />
            <IconFeatureCard
              icon={DollarSign}
              title="Pricing"
              description="View our transparent pricing tiers and project-based fee structure."
            />
            <IconFeatureCard
              icon={Phone}
              title="Contact"
              description="Schedule a free consultation to discuss your business goals."
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

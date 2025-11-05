"use client";

import { CTAButton } from "@/components/molecules/CTAButton";
import { TrustBadge } from "@/components/molecules/TrustBadge";
import { SectionLayout } from "@/components/templates/SectionLayout";
import { Calendar, ArrowRight } from "lucide-react";
import React from "react";

export interface HeroSectionProps {
  /**
   * Primary headline
   */
  headline: string;
  /**
   * Subheadline text
   */
  subheadline: string;
  /**
   * Supporting copy (optional)
   */
  supportingCopy?: string;
  /**
   * Primary CTA text
   */
  primaryCTAText: string;
  /**
   * Primary CTA link
   */
  primaryCTALink?: string;
  /**
   * Secondary CTA text (optional)
   */
  secondaryCTAText?: string;
  /**
   * Secondary CTA link (optional)
   */
  secondaryCTALink?: string;
  /**
   * Show trust badges
   */
  showTrustBadges?: boolean;
  /**
   * Background color class
   */
  background?: string;
}

/**
 * Hero section organism for page headers
 * Features headline, subheadline, CTAs, and optional trust badges
 */
export function HeroSection({
  headline,
  subheadline,
  supportingCopy,
  primaryCTAText,
  primaryCTALink,
  secondaryCTAText,
  secondaryCTALink,
  showTrustBadges = false,
  background = "bg-white",
}: HeroSectionProps): React.ReactElement {
  return (
    <section className={`${background} py-20 sm:py-24 lg:py-32`}>
      <SectionLayout maxWidth="xl">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-slate-900 mb-6">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-deep-slate-700 mb-8">
            {subheadline}
          </p>

          {/* Supporting Copy */}
          {supportingCopy && (
            <p className="text-lg text-deep-slate-600 mb-10 max-w-3xl mx-auto">
              {supportingCopy}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <CTAButton
              variant="primary"
              size="lg"
              icon={Calendar}
              href={primaryCTALink || process.env.NEXT_PUBLIC_CALENDLY_URL}
            >
              {primaryCTAText}
            </CTAButton>

            {secondaryCTAText && secondaryCTALink && (
              <CTAButton
                variant="outline"
                size="lg"
                icon={ArrowRight}
                href={secondaryCTALink}
              >
                {secondaryCTAText}
              </CTAButton>
            )}
          </div>

          {/* Trust Badges */}
          {showTrustBadges && (
            <div className="flex flex-wrap gap-3 justify-center">
              <TrustBadge message="licensed" variant="primary" size="sm" />
              <TrustBadge message="exclusive" variant="primary" size="sm" />
              <TrustBadge message="established" variant="primary" size="sm" />
            </div>
          )}
        </div>
      </SectionLayout>
    </section>
  );
}

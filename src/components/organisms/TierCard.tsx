"use client";

import { CTAButton } from "@/components/molecules/CTAButton";
import { Badge } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import { Check, Calendar } from "lucide-react";
import React from "react";

export interface TierCardProps {
  /**
   * Tier name (e.g., "Tier 1", "Tier 2")
   */
  name: string;
  /**
   * Tier tagline
   */
  tagline: string;
  /**
   * Project value range (e.g., "$85,000 - $150,000")
   */
  projectRange: string;
  /**
   * Ideal for (target contractor types)
   */
  idealFor?: readonly string[];
  /**
   * Common project types
   */
  projectTypes?: readonly string[];
  /**
   * List of features/what you get
   */
  features: readonly string[];
  /**
   * CTA button text
   */
  ctaText: string;
  /**
   * CTA button link
   */
  ctaLink?: string;
  /**
   * Is this the featured tier?
   */
  featured?: boolean;
  /**
   * Badge text (optional, e.g., "Most Popular")
   */
  badge?: string;
}

/**
 * TierCard organism for displaying pricing tiers
 * Features badge, pricing, feature list, and CTA
 */
export function TierCard({
  name,
  tagline,
  projectRange,
  idealFor,
  projectTypes,
  features,
  ctaText,
  ctaLink,
  featured = false,
  badge,
}: TierCardProps): React.ReactElement {
  return (
    <div
      className={`relative bg-white rounded-2xl border-2 p-8 flex flex-col h-full ${
        featured
          ? "border-emerald-accent-600 shadow-xl"
          : "border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="success" size="md">
            {badge}
          </Badge>
        </div>
      )}

      {/* Tier Name & Tagline */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-sm text-slate-600">{tagline}</p>
      </div>

      {/* Project Range */}
      <div className="text-center mb-6 pb-6 border-b border-gray-200">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
          Project Value
        </p>
        <p className="text-3xl font-bold text-slate-900">{projectRange}</p>
      </div>

      {/* What You Get */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
          What You Get
        </p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Icon
                icon={Check}
                size="sm"
                className="text-emerald-accent-600 flex-shrink-0 mt-0.5"
              />
              <span className="text-slate-700 text-sm leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing Note */}
      <div className="mb-6 p-3 bg-slate-50 rounded-lg">
        <p className="text-xs text-slate-600 text-center">
          Upfront + Success Fee
          <br />
          <span className="text-slate-500">Details discussed in consultation</span>
        </p>
      </div>

      {/* CTA Button */}
      <CTAButton
        variant={featured ? "primary" : "outline"}
        size="lg"
        icon={Calendar}
        href={ctaLink || process.env.NEXT_PUBLIC_CALENDLY_URL}
        className="w-full justify-center"
      >
        {ctaText}
      </CTAButton>
    </div>
  );
}

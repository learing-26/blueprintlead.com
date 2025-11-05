"use client";

import { Icon } from "@/components/atoms/Icon";
import { Badge } from "@/components/atoms/Badge";
import { Star, Quote } from "lucide-react";
import React from "react";

export interface TestimonialCardProps {
  /**
   * Testimonial quote
   */
  quote: string;
  /**
   * Contractor name
   */
  name: string;
  /**
   * Contractor company
   */
  company: string;
  /**
   * Contractor specialty (e.g., "Kitchen & Bath Remodeling")
   */
  specialty: string;
  /**
   * Rating (1-5 stars)
   */
  rating?: number;
  /**
   * Verified badge
   */
  verified?: boolean;
}

/**
 * TestimonialCard organism for displaying contractor testimonials
 * Features quote, author info, rating, and verification badge
 */
export function TestimonialCard({
  quote,
  name,
  company,
  specialty,
  rating = 5,
  verified = true,
}: TestimonialCardProps): React.ReactElement {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-6">
        <div className="bg-emerald-accent-50 rounded-full p-3 w-fit">
          <Icon icon={Quote} size="md" className="text-emerald-accent-600" />
        </div>
      </div>

      {/* Quote Text */}
      <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 flex-grow">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Rating */}
      {rating > 0 && (
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <Icon
              key={index}
              icon={Star}
              size="sm"
              className={
                index < rating
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
      )}

      {/* Author Info */}
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="font-bold text-slate-900">{name}</p>
              {verified && (
                <Badge variant="success" size="sm">
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-sm text-slate-600 font-medium">{company}</p>
            <p className="text-xs text-slate-500 mt-1">{specialty}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

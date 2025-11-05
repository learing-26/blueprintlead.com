"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/atoms/ImagePlaceholder";

export interface StoryBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Block title
   */
  title: string;
  /**
   * Story content
   */
  children: React.ReactNode;
  /**
   * Image placeholder note for TODO (deprecated - use imageSrc instead)
   */
  imagePlaceholder?: string;
  /**
   * Path to actual image (e.g., "/images/pages/about/story-problem-contractor.jpg")
   */
  imageSrc?: string;
  /**
   * Alt text for the image (accessibility)
   */
  imageAlt?: string;
  /**
   * Image position
   */
  imagePosition?: "left" | "right";
  /**
   * Block type for color scheme
   */
  type?: "problem" | "solution" | "neutral";
}

const typeStyles = {
  problem: {
    border: "border-l-4 border-red-500",
    bg: "bg-red-50",
    titleColor: "text-red-900",
    textColor: "text-red-800",
  },
  solution: {
    border: "border-l-4 border-emerald-600",
    bg: "bg-emerald-50",
    titleColor: "text-emerald-900",
    textColor: "text-emerald-800",
  },
  neutral: {
    border: "border-l-4 border-slate-400",
    bg: "bg-slate-50",
    titleColor: "text-slate-900",
    textColor: "text-slate-700",
  },
};

/**
 * StoryBlock component for alternating image-text storytelling layouts
 * Used in "Why We Started" and similar narrative sections
 *
 * @example
 * ```tsx
 * <StoryBlock
 *   title="The Problem"
 *   type="problem"
 *   imagePosition="left"
 *   imageSrc="/images/pages/about/story-problem-contractor.jpg"
 *   imageAlt="Stressed contractor overwhelmed with paperwork and phone calls"
 * >
 *   <p>The contractor lead generation industry has been broken for years.</p>
 * </StoryBlock>
 * ```
 */
export function StoryBlock({
  title,
  children,
  imagePlaceholder,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  type = "neutral",
  className,
  ...props
}: StoryBlockProps): React.ReactElement {
  const styles = typeStyles[type];

  return (
    <div
      className={cn("grid md:grid-cols-2 gap-8 md:gap-12 items-center", className)}
      {...props}
    >
      {/* Image Column */}
      <div
        className={cn(
          "relative h-64 md:h-80 rounded-xl overflow-hidden bg-slate-200",
          imagePosition === "left" ? "md:order-1" : "md:order-2"
        )}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        ) : imagePlaceholder ? (
          <ImagePlaceholder
            description={imagePlaceholder}
            height="h-full min-h-[300px]"
            className="rounded-xl"
          />
        ) : null}
      </div>

      {/* Content Column */}
      <div
        className={cn(
          "rounded-lg p-6 md:p-8",
          styles.bg,
          styles.border,
          imagePosition === "left" ? "md:order-2" : "md:order-1"
        )}
      >
        <h3 className={cn("text-2xl font-bold mb-4", styles.titleColor)}>
          {title}
        </h3>
        <div className={cn("prose prose-lg max-w-none", styles.textColor)}>
          {children}
        </div>
      </div>
    </div>
  );
}

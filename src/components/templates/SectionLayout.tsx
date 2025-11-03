import { cn } from "@/lib/utils";
import React from "react";

export interface SectionLayoutProps {
  /**
   * Section content
   */
  children: React.ReactNode;
  /**
   * Maximum width of the section
   */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /**
   * Additional className for the section
   */
  className?: string;
  /**
   * Semantic HTML tag to use
   */
  as?: "section" | "div" | "article" | "aside";
}

const maxWidthClasses = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
};

/**
 * Section layout template providing consistent container width and padding
 * Used for content sections within pages
 *
 * @example
 * ```tsx
 * <SectionLayout maxWidth="lg" className="py-16">
 *   <h2>Section Title</h2>
 *   <p>Section content</p>
 * </SectionLayout>
 * ```
 */
export function SectionLayout({
  children,
  maxWidth = "xl",
  className,
  as: Component = "section",
}: SectionLayoutProps): React.ReactElement {
  return (
    <Component
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </Component>
  );
}

"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface FeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Grid content (IconFeatureCard components)
   */
  children: React.ReactNode;
  /**
   * Number of columns on desktop
   */
  columns?: 2 | 3 | 4;
  /**
   * Optional section title
   */
  title?: string;
  /**
   * Optional section subtitle
   */
  subtitle?: string;
}

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

/**
 * FeatureGrid component for displaying IconFeatureCards in a responsive grid
 * Provides consistent spacing and animation
 *
 * @example
 * ```tsx
 * <FeatureGrid columns={3} title="Our Promise">
 *   <IconFeatureCard icon={Shield} title="..." description="..." />
 *   <IconFeatureCard icon={Lock} title="..." description="..." />
 * </FeatureGrid>
 * ```
 */
export function FeatureGrid({
  children,
  columns = 3,
  title,
  subtitle,
  className,
  ...props
}: FeatureGridProps): React.ReactElement {
  return (
    <div className={cn("w-full", className)} {...props}>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-600">{subtitle}</p>
          )}
        </div>
      )}

      <div
        className={cn(
          "grid grid-cols-1 gap-6 md:gap-8",
          columnClasses[columns]
        )}
      >
        {children}
      </div>
    </div>
  );
}

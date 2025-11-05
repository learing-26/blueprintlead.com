"use client";

import { cn } from "@/lib/utils";
import React from "react";
import type { LucideIcon } from "lucide-react";

export interface StatItem {
  /**
   * The main statistic number or text
   */
  number: string;
  /**
   * Label describing the statistic
   */
  label: string;
  /**
   * Icon component from lucide-react
   */
  icon: LucideIcon;
  /**
   * Optional additional description
   */
  description?: string;
}

export interface StatsBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of statistics to display
   */
  stats: readonly StatItem[];
}

/**
 * StatsBar component displaying key statistics in gradient cards
 * Used to showcase important numbers and achievements
 *
 * @example
 * ```tsx
 * <StatsBar
 *   stats={[
 *     {
 *       number: "4 Years",
 *       label: "Of Excellence",
 *       icon: Calendar,
 *       description: "Since 2021"
 *     },
 *     {
 *       number: "100%",
 *       label: "Exclusive",
 *       icon: Lock,
 *       description: "Never shared"
 *     }
 *   ]}
 * />
 * ```
 */
export function StatsBar({
  stats,
  className,
  ...props
}: StatsBarProps): React.ReactElement {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
        className
      )}
      {...props}
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-600 to-deep-slate-900 p-8 shadow-2xl"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white/90 mb-1">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-sm text-white/70">
                  {stat.description}
                </div>
              )}
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
          </div>
        );
      })}
    </div>
  );
}

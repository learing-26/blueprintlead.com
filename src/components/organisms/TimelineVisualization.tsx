"use client";

import { cn } from "@/lib/utils";
import React from "react";
import type { LucideIcon } from "lucide-react";

export interface TimelineMilestone {
  /**
   * Year or date of the milestone
   */
  year: string;
  /**
   * Title of the milestone
   */
  title: string;
  /**
   * Description of what happened
   */
  description: string;
  /**
   * Icon component from lucide-react
   */
  icon: LucideIcon;
}

export interface TimelineVisualizationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of timeline milestones to display
   */
  milestones: readonly TimelineMilestone[];
  /**
   * Optional title for the timeline
   */
  title?: string;
}

/**
 * TimelineVisualization component displaying chronological milestones
 * Shows company journey with icons, dates, and descriptions
 *
 * @example
 * ```tsx
 * <TimelineVisualization
 *   title="Our Journey"
 *   milestones={[
 *     {
 *       year: "2021",
 *       title: "Blueprint Lead Founded",
 *       description: "Started revolutionizing contractor leads",
 *       icon: Rocket
 *     }
 *   ]}
 * />
 * ```
 */
export function TimelineVisualization({
  milestones,
  title,
  className,
  ...props
}: TimelineVisualizationProps): React.ReactElement {
  // Determine grid columns based on number of milestones
  const gridColsClass =
    milestones.length === 5
      ? "grid-cols-5"
      : milestones.length === 4
      ? "grid-cols-4"
      : milestones.length === 3
      ? "grid-cols-3"
      : "grid-cols-2";

  // Adjust circle size for 5+ milestones to fit on one line
  const circleSize = milestones.length >= 5 ? "w-24 h-24" : "w-28 h-28";
  const iconSize = milestones.length >= 5 ? "h-10 w-10" : "h-12 w-12";
  const gap = milestones.length >= 5 ? "gap-4" : "gap-6";
  const yearSize = milestones.length >= 5 ? "text-xl" : "text-2xl";
  const titleSize = milestones.length >= 5 ? "text-base" : "text-lg";
  const descSize = milestones.length >= 5 ? "text-xs" : "text-sm";

  return (
    <div className={cn("w-full", className)} {...props}>
      {title && (
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          {title}
        </h2>
      )}

      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:block relative">
        {/* Connecting line */}
        <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-emerald-500 to-deep-slate-900" />

        <div className={cn("grid", gridColsClass, gap)}>
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div key={index} className="relative">
                {/* Circle badge */}
                <div
                  className={cn(
                    "relative z-10 mx-auto rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center shadow-xl mb-6",
                    circleSize
                  )}
                >
                  <Icon className={cn("text-white", iconSize)} />
                </div>

                {/* Content */}
                <div className="text-center">
                  <div
                    className={cn(
                      "font-bold text-emerald-600 mb-2",
                      yearSize
                    )}
                  >
                    {milestone.year}
                  </div>
                  <h3 className={cn("font-bold text-slate-900 mb-2", titleSize)}>
                    {milestone.title}
                  </h3>
                  <p className={cn("text-slate-600", descSize)}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="md:hidden space-y-8">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          return (
            <div key={index} className="relative flex gap-4">
              {/* Circle badge */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center shadow-lg">
                <Icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="text-xl font-bold text-emerald-600 mb-1">
                  {milestone.year}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {milestone.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {milestone.description}
                </p>
              </div>

              {/* Connecting line (except for last item) */}
              {index < milestones.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-300 -translate-x-1/2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

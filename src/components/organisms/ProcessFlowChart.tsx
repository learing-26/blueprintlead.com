"use client";

import { cn } from "@/lib/utils";
import React from "react";
import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  /**
   * Step number (1, 2, 3, 4)
   */
  number: number;
  /**
   * Title of the step
   */
  title: string;
  /**
   * Description of what happens in this step
   */
  description: string;
  /**
   * Icon component from lucide-react
   */
  icon: LucideIcon;
}

export interface ProcessFlowChartProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of process steps to display
   */
  steps: readonly ProcessStep[];
  /**
   * Optional title for the process flow
   */
  title?: string;
  /**
   * Optional subtitle or emphasis text
   */
  subtitle?: string;
}

/**
 * ProcessFlowChart component displaying numbered process steps
 * Shows sequential workflow with icons, numbers, and connecting lines
 *
 * @example
 * ```tsx
 * <ProcessFlowChart
 *   title="How It Works"
 *   subtitle="What you need to do: Nothing"
 *   steps={[
 *     {
 *       number: 1,
 *       title: "Monitor Permits",
 *       description: "We track LA County permits daily",
 *       icon: Search
 *     }
 *   ]}
 * />
 * ```
 */
export function ProcessFlowChart({
  steps,
  title,
  subtitle,
  className,
  ...props
}: ProcessFlowChartProps): React.ReactElement {
  return (
    <div className={cn("w-full", className)} {...props}>
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl font-semibold text-emerald-600">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Desktop: Horizontal Flow */}
      <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={index}>
              <div className="relative h-full">
                {/* Step card */}
                <div className="h-full flex flex-col bg-white rounded-xl border-2 border-slate-200 p-6 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Number badge */}
                  <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-deep-slate-900 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="inline-flex items-center justify-center rounded-lg bg-emerald-50 p-3">
                      <Icon className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 text-center">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting arrow (except for last step) */}
                {!isLast && (
                  <div className="absolute top-1/3 -right-4 transform translate-x-1/2 hidden lg:block">
                    <div className="w-8 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400" />
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile: Vertical Flow */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="relative">
              {/* Step card */}
              <div className="bg-white rounded-xl border-2 border-slate-200 p-6 shadow-lg">
                <div className="flex gap-4">
                  {/* Number badge */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-deep-slate-900 flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-6 w-6 text-emerald-600" />
                      <h3 className="text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting line (except for last step) */}
              {!isLast && (
                <div className="flex justify-center py-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-emerald-600 to-emerald-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

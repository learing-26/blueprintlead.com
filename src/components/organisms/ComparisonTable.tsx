"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { XCircle, CheckCircle } from "lucide-react";

export interface ComparisonItem {
  /**
   * Text describing the comparison point
   */
  text: string;
}

export interface ComparisonTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional title for the comparison table
   */
  title?: string;
  /**
   * Items for the traditional/competitor column
   */
  traditional: readonly ComparisonItem[];
  /**
   * Items for the Blueprint Lead column
   */
  blueprintLead: readonly ComparisonItem[];
}

/**
 * ComparisonTable component showing side-by-side comparison
 * Traditional approach (red, X icons) vs Blueprint Lead (green, check icons)
 *
 * @example
 * ```tsx
 * <ComparisonTable
 *   title="How We Compare"
 *   traditional={[
 *     { text: "Shared with multiple contractors" },
 *     { text: "Cold, unqualified leads" }
 *   ]}
 *   blueprintLead={[
 *     { text: "100% exclusive to you" },
 *     { text: "Pre-qualified and scheduled" }
 *   ]}
 * />
 * ```
 */
export function ComparisonTable({
  title,
  traditional,
  blueprintLead,
  className,
  ...props
}: ComparisonTableProps): React.ReactElement {
  return (
    <div className={cn("w-full", className)} {...props}>
      {title && (
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          {title}
        </h2>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Traditional Lead Gen Column */}
        <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-red-900 mb-2">
              Traditional Lead Gen
            </h3>
            <div className="h-1 w-16 bg-red-500 rounded" />
          </div>

          <ul className="space-y-4">
            {traditional.map((item, index) => (
              <li key={index} className="flex gap-3">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Blueprint Lead Column */}
        <div className="bg-emerald-50 rounded-xl p-8 border-2 border-emerald-200">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">
              Blueprint Lead
            </h3>
            <div className="h-1 w-16 bg-emerald-600 rounded" />
          </div>

          <ul className="space-y-4">
            {blueprintLead.map((item, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

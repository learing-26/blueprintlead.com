"use client";

import { Icon } from "@/components/atoms/Icon";
import { Badge } from "@/components/atoms/Badge";
import { LucideIcon } from "lucide-react";
import React from "react";

export interface ProjectTypeCardProps {
  /**
   * Project type name (e.g., "Kitchen Remodels")
   */
  name: string;
  /**
   * Project description
   */
  description: string;
  /**
   * Lucide icon component
   */
  icon: LucideIcon;
  /**
   * Example projects (optional)
   */
  examples?: readonly string[];
  /**
   * Badge text (optional, e.g., "High Value")
   */
  badge?: string;
  /**
   * Badge variant
   */
  badgeVariant?: "primary" | "secondary" | "success" | "warning" | "error";
}

/**
 * ProjectTypeCard organism for displaying project categories
 * Features icon, description, and optional examples list
 */
export function ProjectTypeCard({
  name,
  description,
  icon,
  examples,
  badge,
  badgeVariant = "primary",
}: ProjectTypeCardProps): React.ReactElement {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* Icon & Badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="bg-emerald-accent-50 rounded-lg p-3">
          <Icon icon={icon} size="lg" className="text-emerald-accent-600" />
        </div>
        {badge && (
          <Badge variant={badgeVariant} size="sm">
            {badge}
          </Badge>
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-slate-900 mb-3">{name}</h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* Examples */}
      {examples && examples.length > 0 && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            Examples:
          </p>
          <ul className="space-y-1">
            {examples.map((example, index) => (
              <li
                key={index}
                className="text-sm text-slate-700 flex items-start gap-2"
              >
                <span className="text-emerald-accent-600 flex-shrink-0">•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

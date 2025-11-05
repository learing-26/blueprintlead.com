import { cn } from "@/lib/utils";
import React from "react";
import type { LucideIcon } from "lucide-react";

export interface IconFeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon component from lucide-react
   */
  icon: LucideIcon;
  /**
   * Feature title/headline
   */
  title: string;
  /**
   * Feature description (1-2 sentences)
   */
  description: string;
  /**
   * Optional icon background color variant
   */
  variant?: "emerald" | "slate" | "blue";
}

const variantStyles = {
  emerald: "bg-emerald-50 text-emerald-600",
  slate: "bg-slate-50 text-slate-600",
  blue: "bg-blue-50 text-blue-600",
};

/**
 * IconFeatureCard component for displaying features/benefits with large icons
 * Used in Promise, LA County, and other feature showcase sections
 *
 * @example
 * ```tsx
 * <IconFeatureCard
 *   icon={Shield}
 *   title="Permit-Verified Projects"
 *   description="Every lead is verified with official county documentation."
 *   variant="emerald"
 * />
 * ```
 */
export function IconFeatureCard({
  icon: Icon,
  title,
  description,
  variant = "emerald",
  className,
  ...props
}: IconFeatureCardProps): React.ReactElement {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-4 p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-lg p-3",
          variantStyles[variant]
        )}
      >
        <Icon className="h-8 w-8" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

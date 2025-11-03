import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

/**
 * Badge component variants using Blueprint Lead design system
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-emerald-accent-100 text-emerald-accent-700 border border-emerald-accent-200",
        secondary: "bg-deep-slate-100 text-deep-slate-700 border border-deep-slate-200",
        success: "bg-emerald-accent-50 text-emerald-accent-600 border border-emerald-accent-200",
        warning: "bg-amber-50 text-amber-700 border border-amber-200",
        error: "bg-red-50 text-red-700 border border-red-200",
      },
      size: {
        sm: "px-2.5 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Badge content
   */
  children: React.ReactNode;
}

/**
 * Badge component with Blueprint Lead styling
 *
 * @example
 * ```tsx
 * <Badge variant="primary">100% Exclusive</Badge>
 * <Badge variant="success" size="sm">Verified</Badge>
 * ```
 */
export function Badge({
  className,
  variant,
  size,
  children,
  ...props
}: BadgeProps): React.ReactElement {
  return (
    <div
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </div>
  );
}

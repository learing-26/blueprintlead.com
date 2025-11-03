import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The Lucide icon component to render
   */
  icon: LucideIcon;
  /**
   * Icon size preset
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Accessible label for the icon (if not decorative)
   */
  "aria-label"?: string;
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-10 w-10",
};

/**
 * Icon component wrapper for Lucide icons
 *
 * @example
 * ```tsx
 * import { Check } from "lucide-react";
 *
 * <Icon icon={Check} size="md" />
 * <Icon icon={Check} size="lg" aria-label="Verified" />
 * ```
 */
export function Icon({
  icon: IconComponent,
  size = "md",
  className,
  "aria-label": ariaLabel,
  ...props
}: IconProps): React.ReactElement {
  return (
    <IconComponent
      className={cn(sizeMap[size], className)}
      aria-hidden={ariaLabel ? undefined : "true"}
      aria-label={ariaLabel}
      {...props}
    />
  );
}

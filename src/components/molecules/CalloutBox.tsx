import { cn } from "@/lib/utils";
import React from "react";
import { AlertCircle, CheckCircle, Info } from "lucide-react";

export interface CalloutBoxProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Type of callout determining color scheme
   */
  type: "problem" | "solution" | "info";
  /**
   * Optional title for the callout
   */
  title?: string;
  /**
   * Callout content
   */
  children: React.ReactNode;
}

const calloutStyles = {
  problem: {
    container: "bg-red-50 border-l-4 border-red-500",
    icon: "text-red-500",
    title: "text-red-900",
    content: "text-red-800",
    IconComponent: AlertCircle,
  },
  solution: {
    container: "bg-emerald-50 border-l-4 border-emerald-600",
    icon: "text-emerald-600",
    title: "text-emerald-900",
    content: "text-emerald-800",
    IconComponent: CheckCircle,
  },
  info: {
    container: "bg-blue-50 border-l-4 border-blue-500",
    icon: "text-blue-500",
    title: "text-blue-900",
    content: "text-blue-800",
    IconComponent: Info,
  },
};

/**
 * CalloutBox component for highlighting important information
 * Used for problems, solutions, and general info with color-coded styling
 *
 * @example
 * ```tsx
 * <CalloutBox type="problem" title="The Problem">
 *   Traditional lead generation wastes contractor time and money.
 * </CalloutBox>
 * ```
 */
export function CalloutBox({
  type,
  title,
  children,
  className,
  ...props
}: CalloutBoxProps): React.ReactElement {
  const styles = calloutStyles[type];
  const IconComponent = styles.IconComponent;

  return (
    <div
      className={cn(
        "rounded-lg p-6 shadow-sm",
        styles.container,
        className
      )}
      {...props}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <IconComponent className={cn("h-6 w-6", styles.icon)} />
        </div>
        <div className="flex-1">
          {title && (
            <h3 className={cn("text-lg font-bold mb-3", styles.title)}>
              {title}
            </h3>
          )}
          <div className={cn("prose prose-sm max-w-none", styles.content)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

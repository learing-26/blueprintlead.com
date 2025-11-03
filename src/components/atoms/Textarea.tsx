import { cn } from "@/lib/utils";
import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Whether the textarea has an error state
   */
  error?: boolean;
}

/**
 * Textarea component with Blueprint Lead styling
 *
 * @example
 * ```tsx
 * <Textarea placeholder="Enter your message" rows={4} />
 * <Textarea error placeholder="Error state" />
 * ```
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border-2 bg-white px-4 py-3 text-base transition-colors",
          "placeholder:text-deep-slate-400",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-accent-500 focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-y",
          error
            ? "border-red-500 text-red-900 focus-visible:ring-red-500"
            : "border-deep-slate-300 text-deep-slate-900 focus-visible:border-emerald-accent-600",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

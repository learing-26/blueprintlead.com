import { cn } from "@/lib/utils";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Whether the input has an error state
   */
  error?: boolean;
}

/**
 * Input component with Blueprint Lead styling
 *
 * @example
 * ```tsx
 * <Input type="text" placeholder="Enter your name" />
 * <Input type="email" error placeholder="Enter email" />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border-2 bg-white px-4 py-3 text-base transition-colors",
          "placeholder:text-deep-slate-400",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-accent-500 focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
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

Input.displayName = "Input";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

/**
 * Button component variants using Blueprint Lead design system
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-accent-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-accent-600 text-white hover:bg-emerald-accent-700 active:bg-emerald-accent-800",
        secondary:
          "bg-deep-slate-700 text-white hover:bg-deep-slate-800 active:bg-deep-slate-900",
        outline:
          "border-2 border-emerald-accent-600 text-emerald-accent-600 hover:bg-emerald-accent-50 active:bg-emerald-accent-100",
        text: "text-emerald-accent-600 hover:text-emerald-accent-700 hover:underline underline-offset-4",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * Button component with Blueprint Lead styling
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline">Outline button</Button>
 * <Button variant="text" size="sm">Text link</Button>
 * ```
 */
export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

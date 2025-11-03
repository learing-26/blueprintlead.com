import { Input, type InputProps } from "@/components/atoms/Input";
import { Textarea, type TextareaProps } from "@/components/atoms/Textarea";
import { cn } from "@/lib/utils";
import React from "react";

export interface FormFieldProps {
  /**
   * Field label
   */
  label: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Helper text to display below the field
   */
  helperText?: string;
  /**
   * Input type - determines whether to render Input or Textarea
   */
  type?: "text" | "email" | "tel" | "number" | "textarea";
  /**
   * Field ID (used for label association)
   */
  id: string;
  /**
   * Additional className for the container
   */
  className?: string;
  /**
   * Additional props to pass to Input or Textarea
   */
  inputProps?: Omit<InputProps, "error" | "id"> | Omit<TextareaProps, "error" | "id">;
}

/**
 * Form Field component combining label, input/textarea, and error message
 * Provides proper accessibility with label association and error announcements
 *
 * @example
 * ```tsx
 * <FormField
 *   label="Email Address"
 *   type="email"
 *   id="email"
 *   inputProps={{ placeholder: "you@example.com" }}
 * />
 *
 * <FormField
 *   label="Name"
 *   type="text"
 *   id="name"
 *   error="Name is required"
 * />
 *
 * <FormField
 *   label="Message"
 *   type="textarea"
 *   id="message"
 *   helperText="Tell us about your project"
 * />
 * ```
 */
export function FormField({
  label,
  error,
  helperText,
  type = "text",
  id,
  className,
  inputProps,
}: FormFieldProps): React.ReactElement {
  const hasError = !!error;
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  const describedBy = [
    hasError ? errorId : undefined,
    helperText ? helperId : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-deep-slate-900"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <Textarea
          id={id}
          error={hasError}
          aria-invalid={hasError}
          aria-describedby={describedBy || undefined}
          {...(inputProps as TextareaProps)}
        />
      ) : (
        <Input
          id={id}
          type={type}
          error={hasError}
          aria-invalid={hasError}
          aria-describedby={describedBy || undefined}
          {...(inputProps as InputProps)}
        />
      )}

      {helperText && !hasError && (
        <p id={helperId} className="text-sm text-deep-slate-600">
          {helperText}
        </p>
      )}

      {hasError && (
        <p id={errorId} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

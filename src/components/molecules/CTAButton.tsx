import { Button, type ButtonProps } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { type LucideIcon } from "lucide-react";
import React from "react";

export interface CTAButtonProps extends ButtonProps {
  /**
   * Optional icon to display with the button
   */
  icon?: LucideIcon;
  /**
   * Position of the icon relative to text
   */
  iconPosition?: "left" | "right";
  /**
   * External link href (for Calendly or other external CTAs)
   */
  href?: string;
  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * CTA Button component combining Button atom with optional icon
 * Supports external links for Calendly integration
 *
 * @example
 * ```tsx
 * import { Calendar } from "lucide-react";
 *
 * <CTAButton variant="primary" icon={Calendar}>
 *   Schedule Consultation
 * </CTAButton>
 *
 * <CTAButton
 *   variant="primary"
 *   href="https://calendly.com/..."
 *   icon={Calendar}
 * >
 *   Book Now
 * </CTAButton>
 * ```
 */
export function CTAButton({
  icon,
  iconPosition = "right",
  href,
  children,
  ...props
}: CTAButtonProps): React.ReactElement {
  const content = (
    <>
      {icon && iconPosition === "left" && <Icon icon={icon} size="md" />}
      {children}
      {icon && iconPosition === "right" && <Icon icon={icon} size="md" />}
    </>
  );

  // External link (e.g., Calendly)
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={props.className}
      >
        <Button {...props}>{content}</Button>
      </a>
    );
  }

  // Regular button
  return <Button {...props}>{content}</Button>;
}

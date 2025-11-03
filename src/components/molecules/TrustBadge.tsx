import { Badge, type BadgeProps } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import { Check, ShieldCheck, Award, Clock } from "lucide-react";
import React from "react";

export type TrustMessage =
  | "exclusive"
  | "verified"
  | "licensed"
  | "established";

interface TrustConfig {
  icon: typeof Check;
  text: string;
}

const trustMessages: Record<TrustMessage, TrustConfig> = {
  exclusive: {
    icon: Check,
    text: "100% Exclusive Leads",
  },
  verified: {
    icon: ShieldCheck,
    text: "Permit-Verified Homeowners",
  },
  licensed: {
    icon: Award,
    text: "Licensed Contractors Only",
  },
  established: {
    icon: Clock,
    text: "Serving LA County",
  },
};

export interface TrustBadgeProps extends Omit<BadgeProps, "children"> {
  /**
   * Predefined trust message to display
   */
  message: TrustMessage;
}

/**
 * Trust Badge component for credibility signals
 * Pre-configured with Blueprint Lead trust messages
 *
 * @example
 * ```tsx
 * <TrustBadge message="exclusive" variant="primary" />
 * <TrustBadge message="verified" variant="success" size="sm" />
 * ```
 */
export function TrustBadge({
  message,
  variant = "primary",
  ...props
}: TrustBadgeProps): React.ReactElement {
  const config = trustMessages[message];

  return (
    <Badge variant={variant} {...props}>
      <Icon icon={config.icon} size="sm" aria-hidden="true" />
      <span>{config.text}</span>
    </Badge>
  );
}

import { cn } from "@/lib/utils";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import React from "react";

export interface LinkProps extends NextLinkProps {
  /**
   * Link content
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether this is an external link
   */
  external?: boolean;
}

/**
 * Link component wrapping Next.js Link with Blueprint Lead styling
 *
 * @example
 * ```tsx
 * <Link href="/about">About Us</Link>
 * <Link href="https://example.com" external>External Link</Link>
 * ```
 */
export function Link({
  href,
  children,
  className,
  external = false,
  ...props
}: LinkProps): React.ReactElement {
  const isExternal = external || (typeof href === "string" && href.startsWith("http"));

  if (isExternal) {
    return (
      <a
        href={typeof href === "string" ? href : href.toString()}
        className={cn(
          "text-emerald-accent-600 hover:text-emerald-accent-700 transition-colors underline-offset-4 hover:underline",
          className
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${children} (opens in new tab)`}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={cn(
        "text-emerald-accent-600 hover:text-emerald-accent-700 transition-colors underline-offset-4 hover:underline",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}

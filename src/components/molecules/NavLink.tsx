"use client";

import { Link, type LinkProps } from "@/components/atoms/Link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavLinkProps extends LinkProps {
  /**
   * Additional className to apply when link is active
   */
  activeClassName?: string;
}

/**
 * Navigation Link component with active state detection
 * Automatically highlights the current page using usePathname
 *
 * @example
 * ```tsx
 * <NavLink href="/">Home</NavLink>
 * <NavLink href="/about">About</NavLink>
 * <NavLink href="/pricing" activeClassName="font-bold">
 *   Pricing
 * </NavLink>
 * ```
 */
export function NavLink({
  href,
  className,
  activeClassName,
  children,
  ...props
}: NavLinkProps): React.ReactElement {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-deep-slate-700 hover:text-emerald-accent-600 transition-colors font-medium no-underline hover:no-underline",
        isActive &&
          "text-emerald-accent-600 font-semibold",
        isActive && activeClassName,
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

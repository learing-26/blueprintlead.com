"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavLink } from "@/components/molecules/NavLink";
import { CTAButton } from "@/components/molecules/CTAButton";
import { Button } from "@/components/atoms/Button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Calendar, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Header component with desktop navigation and mobile menu
 * Features sticky positioning, active link highlighting, and slide-in mobile menu
 */
export function Header(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              href="/"
              className="text-2xl font-bold text-deep-slate-900 hover:text-deep-slate-900 no-underline"
            >
              {SITE_CONFIG.name}
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <CTAButton
              variant="primary"
              size="md"
              icon={Calendar}
              href={process.env.NEXT_PUBLIC_CALENDLY_URL}
            >
              Schedule Consultation
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="text"
              size="sm"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="text-deep-slate-900 hover:text-deep-slate-900"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl lg:hidden overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <span className="text-xl font-bold text-deep-slate-900">
                  Menu
                </span>
                <Button
                  variant="text"
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-deep-slate-900 hover:text-deep-slate-900"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col p-6 space-y-4">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    className="text-lg py-2"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-gray-200">
                <CTAButton
                  variant="primary"
                  size="lg"
                  icon={Calendar}
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL}
                  className="w-full justify-center"
                >
                  Schedule Consultation
                </CTAButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

import { Link } from "@/components/atoms/Link";
import { TrustBadge } from "@/components/molecules/TrustBadge";
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";

/**
 * Footer component with 4-column responsive layout
 * Features company info, service links, support links, and trust badges
 */
export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{SITE_CONFIG.name}</h3>
            <p className="text-slate-300 text-sm">
              Exclusive Pre-Scheduled Contractor Appointments in LA County
            </p>
            <p className="text-slate-400 text-xs">
              Serving Licensed Contractors Since 2021
            </p>
          </div>

          {/* Column 2: Quick Links (Part 1) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors no-underline hover:underline text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (Part 2) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.slice(4, 8).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors no-underline hover:underline text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Trust */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2 mb-4">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors no-underline hover:underline text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <TrustBadge
                message="licensed"
                variant="primary"
                size="sm"
                className="bg-emerald-accent-900/30 border-emerald-accent-700 text-emerald-accent-100"
              />
              <TrustBadge
                message="exclusive"
                variant="primary"
                size="sm"
                className="bg-emerald-accent-900/30 border-emerald-accent-700 text-emerald-accent-100"
              />
              <TrustBadge
                message="established"
                variant="primary"
                size="sm"
                className="bg-emerald-accent-900/30 border-emerald-accent-700 text-emerald-accent-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-deep-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-deep-slate-400">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

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
          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-deep-slate-300 hover:text-white transition-colors no-underline hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-deep-slate-300 hover:text-white transition-colors no-underline hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-deep-slate-300 hover:text-white transition-colors no-underline hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Trust & Quality</h3>
            <div className="space-y-3">
              <TrustBadge
                message="exclusive"
                variant="primary"
                size="sm"
                className="bg-emerald-accent-900/30 border-emerald-accent-700 text-emerald-accent-100"
              />
              <TrustBadge
                message="verified"
                variant="primary"
                size="sm"
                className="bg-emerald-accent-900/30 border-emerald-accent-700 text-emerald-accent-100"
              />
              <TrustBadge
                message="licensed"
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

"use client";

import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { CalloutBox } from "@/components/molecules/CalloutBox";
import { Calendar, ArrowRight } from "lucide-react";

export default function PrivacyPage(): React.ReactElement {
  return (
    <PageLayout>
      {/* Hero Section - Full Width */}
      <section className="w-full bg-gradient-to-br from-deep-slate-900 to-deep-slate-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* Important Note - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <CalloutBox type="info" title="Important Legal Notice">
            <p className="text-base md:text-lg text-slate-700">
              This privacy policy should be reviewed and finalized by a licensed
              attorney. The following is a general outline and structure only,
              designed to comply with California Consumer Privacy Act (CCPA)
              requirements.
            </p>
          </CalloutBox>
        </div>
      </section>

      {/* Section 1 - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
            1. Introduction
          </h2>
          <p className="mb-3 text-base md:text-lg text-slate-700">
            Blueprint Lead is committed to protecting your privacy.
          </p>
          <p className="mb-3 text-base md:text-lg text-slate-700">
            This Privacy Policy explains how we collect, use, share, and protect
            personal information collected through our website and services.
          </p>
          <p className="mb-3 text-base md:text-lg text-slate-700">
            This policy applies to contractors, website visitors, and homeowners
            whose information we process.
          </p>
          <p className="text-base md:text-lg text-slate-700 font-semibold">
            We comply with the California Consumer Privacy Act (CCPA) and other
            applicable privacy laws.
          </p>
        </div>
      </section>

      {/* Section 2 - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
            2. Information We Collect
          </h2>

          {/* From Contractors */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              From Contractors:
            </h3>
            <ul className="space-y-2 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Contact information: Name, email, phone number, business address
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Business information: Company name, contractor license number,
                insurance details
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Professional qualifications: License type, specializations,
                experience
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Project preferences: Preferred project types, tiers, service
                areas
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Communication history: Consultation notes, emails, support
                requests
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Payment information: Processed securely through third-party
                processors (we do not store full credit card numbers)
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Usage data: How you interact with our website and services
              </li>
            </ul>
          </div>

          {/* From Website Visitors */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              From Website Visitors:
            </h3>
            <ul className="space-y-2 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Automatically collected data: IP address, browser type, device
                information, pages visited
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Cookies and tracking technologies: Analytics cookies, functional
                cookies (see Cookie Policy section)
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Form submissions: Contact form information, newsletter signups
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Analytics data: Website usage patterns via Google Analytics or
                similar services
              </li>
            </ul>
          </div>

          {/* From Homeowners */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              From Homeowners:
            </h3>
            <ul className="space-y-2 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Contact information: Name, phone, email, property address
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Property information: Address, APN, ownership details
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Project details: Scope of work, budget estimates, timeline
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Permit information: Permit numbers, status (obtained from public
                records)
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Appointment scheduling: Availability, preferences, scheduling
                confirmations
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
            3. How We Use Information
          </h2>

          {/* For Contractors */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              For Contractors:
            </h3>
            <ul className="space-y-2 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Verify licensing and insurance credentials
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Match contractors with appropriate projects
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Deliver lead information and pre-scheduled appointments
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Process payments for services
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Provide customer support and account management
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Send service updates, new features, and important notifications
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Improve our matching algorithms and service quality
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Comply with legal obligations
              </li>
            </ul>
          </div>

          {/* For Website Operations */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              For Website Operations:
            </h3>
            <ul className="space-y-2 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Improve website functionality and user experience
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Analyze website traffic and usage patterns
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Conduct marketing and advertising campaigns
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Respond to inquiries and support requests
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Comply with legal requirements
              </li>
            </ul>
          </div>

          {/* For Homeowners */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              For Homeowners:
            </h3>
            <ul className="space-y-2 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Verify project legitimacy through permit records
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Qualify project readiness and homeowner needs
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Schedule appointments with licensed contractors
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Facilitate connections between homeowners and contractors
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4 - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
            4. How We Share Information
          </h2>

          {/* Contractors Receive */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Contractors Receive:
            </h3>
            <ul className="space-y-2 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Homeowner contact and project information (only for leads they
                purchase)
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Permit documentation and property details for purchased leads
              </li>
            </ul>
          </div>

          {/* We Share With */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              We Share With:
            </h3>
            <ul className="space-y-2 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Service providers: Payment processors (Stripe, PayPal, etc.),
                email services (Mailchimp, SendGrid, etc.), analytics providers
                (Google Analytics), scheduling tools (Calendly), customer support
                platforms
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Legal authorities: When required by law, court order, or
                government request
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Business transfers: If Blueprint Lead is acquired, merged, or
                sells assets, your information may be transferred
              </li>
            </ul>
          </div>

          {/* We Do NOT */}
          <div>
            <CalloutBox type="solution" title="We Do NOT">
              <ul className="space-y-2 ml-6 list-disc">
                <li className="text-base md:text-lg text-slate-700">
                  Sell personal information to third parties for marketing
                  purposes
                </li>
                <li className="text-base md:text-lg text-slate-700">
                  Share contractor information with competing contractors
                </li>
                <li className="text-base md:text-lg text-slate-700">
                  Share purchased leads with multiple contractors (exclusive
                  model)
                </li>
                <li className="text-base md:text-lg text-slate-700">
                  Rent or sell email lists
                </li>
              </ul>
            </CalloutBox>
          </div>
        </div>
      </section>

      {/* Sections 5-6 - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl space-y-12">
          {/* Section 5 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              5. Data Security
            </h2>
            <p className="mb-4 text-base md:text-lg text-slate-700">
              We implement reasonable security measures to protect your
              information:
            </p>
            <ul className="space-y-2 mb-6 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Encryption for sensitive data transmission (SSL/TLS)
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Secure storage systems with access controls
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Limited employee access to personal information (need-to-know
                basis)
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Regular security assessments and updates
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Secure payment processing through PCI-compliant providers
              </li>
            </ul>
            <p className="text-base md:text-lg text-slate-700">
              However, no system is 100% secure. We cannot guarantee absolute
              security of information transmitted online.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              6. Data Retention
            </h2>
            <ul className="space-y-3 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Contractor information: Retained for the duration of the business
                relationship and [specified period] after termination for legal
                and business purposes
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Homeowner information: Retained for [specified period] after
                project matching or until deletion requested
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Website visitor data: Analytics data retained per Google
                Analytics settings; form data retained per business needs
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Payment records: Retained per legal requirements (typically 7
                years for tax purposes)
              </li>
            </ul>
            <p className="mt-6 text-base md:text-lg text-slate-700">
              We delete or anonymize personal information when no longer needed
              for business or legal purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 - CCPA Rights - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
            7. Your Privacy Rights Under California Law (CCPA)
          </h2>

          {/* Rights Callout */}
          <CalloutBox type="info" title="California Residents Have the Right To">
            <ul className="space-y-3 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                <strong>Right to Know:</strong> Request disclosure of personal
                information we collect, use, and share
              </li>
              <li className="text-base md:text-lg text-slate-700">
                <strong>Right to Delete:</strong> Request deletion of personal
                information (subject to legal exceptions)
              </li>
              <li className="text-base md:text-lg text-slate-700">
                <strong>Right to Opt-Out:</strong> Opt out of sale of personal
                information (note: we do not sell personal information)
              </li>
              <li className="text-base md:text-lg text-slate-700">
                <strong>Right to Non-Discrimination:</strong> Exercise privacy
                rights without discrimination in service or pricing
              </li>
            </ul>
          </CalloutBox>

          {/* How to Exercise */}
          <div className="mt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              How to Exercise Your Rights:
            </h3>
            <p className="mb-4 text-base md:text-lg text-slate-700">
              Submit privacy requests via:
            </p>
            <ul className="space-y-2 ml-6 list-disc mb-6">
              <li className="text-base md:text-lg text-slate-700">
                Email: [privacy@blueprintlead.com]
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Website form: [Privacy request form link]
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Mail: [Your company address]
              </li>
            </ul>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              We will verify your identity before processing requests (may
              require license number or account verification).
            </p>
            <p className="text-base md:text-lg text-slate-700">
              We will respond within 45 days of receiving a verifiable request
              (may extend by additional 45 days if needed).
            </p>
          </div>
        </div>
      </section>

      {/* Sections 8-9 - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl space-y-12">
          {/* Section 8 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="mb-6 text-base md:text-lg text-slate-700">
              Blueprint Lead uses cookies and similar technologies to improve
              your website experience.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Types of Cookies We Use:
            </h3>
            <ul className="space-y-2 mb-6 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Essential cookies: Required for website functionality (login,
                security, forms)
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Analytics cookies: Track website usage and performance (Google
                Analytics)
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Marketing cookies: Track ad performance and retargeting (if
                applicable)
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              How to Control Cookies:
            </h3>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              You can disable cookies through your browser settings.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              Note that disabling cookies may affect website functionality. For
              more information, visit [link to detailed cookie policy if separate
              page exists].
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              9. Third-Party Links
            </h2>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              Our website may contain links to third-party websites (e.g., permit
              databases, industry resources).
            </p>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              We are not responsible for the privacy practices of these websites.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              Review their privacy policies independently.
            </p>
          </div>
        </div>
      </section>

      {/* Sections 10-11 - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl space-y-12">
          {/* Section 10 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              10. Children&apos;s Privacy
            </h2>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              Blueprint Lead services are not intended for individuals under 18
              years of age.
            </p>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              We do not knowingly collect personal information from minors.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              If we learn we have collected information from a minor, we will
              delete it promptly.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              11. Changes to Privacy Policy
            </h2>
            <p className="mb-4 text-base md:text-lg text-slate-700">
              We may update this Privacy Policy from time to time. Material
              changes will be communicated via:
            </p>
            <ul className="space-y-2 mb-6 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Email notification to contractors
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Prominent website notice
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Updated &quot;Last Updated&quot; date at top of policy
              </li>
            </ul>
            <p className="text-base md:text-lg text-slate-700">
              Continued use of our services after changes constitutes acceptance
              of the updated policy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 12 - Contact - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
            12. Contact Us
          </h2>
          <p className="mb-6 text-base md:text-lg text-slate-700">
            If you have questions about this Privacy Policy or want to exercise
            your privacy rights, contact us:
          </p>
          <div className="space-y-2 mb-6">
            <p className="text-base md:text-lg text-slate-700">
              <strong>Email:</strong> [privacy@blueprintlead.com]
            </p>
            <p className="text-base md:text-lg text-slate-700">
              <strong>Mail:</strong> Blueprint Lead, [Your company address]
            </p>
            <p className="text-base md:text-lg text-slate-700">
              <strong>Phone:</strong> [Your phone number]
            </p>
          </div>
          <p className="text-base md:text-lg text-slate-700">
            We will respond to privacy inquiries within a reasonable timeframe,
            typically within 30 days.
          </p>
        </div>
      </section>

      {/* Final CTA - Full Width Emerald Gradient */}
      <section className="w-full bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            We take your privacy seriously and are committed to protecting your
            personal information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="primary"
              size="lg"
              icon={Calendar}
              href={process.env.NEXT_PUBLIC_CALENDLY_URL}
              className="bg-white text-emerald-600 hover:bg-slate-50"
            >
              Schedule Consultation
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              icon={ArrowRight}
              href="/terms"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              View Terms of Service
            </CTAButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

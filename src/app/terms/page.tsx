"use client";

import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { CalloutBox } from "@/components/molecules/CalloutBox";
import { Calendar, ArrowRight } from "lucide-react";

export default function TermsPage(): React.ReactElement {
  return (
    <PageLayout>
      {/* Hero Section - Full Width */}
      <section className="w-full bg-gradient-to-br from-deep-slate-900 to-deep-slate-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Terms of Service
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
              These terms should be reviewed and finalized by a licensed
              attorney. The following is a general outline and structure only.
            </p>
          </CalloutBox>
        </div>
      </section>

      {/* Section 1 & 2 - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl space-y-12">
          {/* Section 1 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              1. Acceptance of Terms
            </h2>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              By using Blueprint Lead&apos;s website and services, you agree to these
              Terms of Service.
            </p>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              If you do not agree with any part of these terms, you may not use
              our services.
            </p>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              We may update these terms at any time and will notify users of
              material changes.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              Continued use of the service after changes constitutes acceptance
              of the updated terms.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              2. Service Description
            </h2>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              Blueprint Lead provides lead generation services connecting
              licensed contractors with pre-scheduled appointments for
              permit-verified construction projects in LA County.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              We match contractors with exclusive leads based on project tier,
              type, and contractor preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
            3. Eligibility and Requirements
          </h2>
          <p className="mb-6 text-base md:text-lg text-slate-700">
            To use Blueprint Lead services, you must:
          </p>
          <ul className="space-y-3 mb-6 ml-6 list-disc">
            <li className="text-base md:text-lg text-slate-700">
              Hold a valid California Contractor&apos;s License in good standing
            </li>
            <li className="text-base md:text-lg text-slate-700">
              Maintain current general liability insurance
            </li>
            <li className="text-base md:text-lg text-slate-700">
              Maintain current workers&apos; compensation insurance
            </li>
            <li className="text-base md:text-lg text-slate-700">
              Operate within LA County or agreed service areas
            </li>
            <li className="text-base md:text-lg text-slate-700">
              Comply with all applicable local, state, and federal laws
            </li>
          </ul>
          <p className="text-base md:text-lg text-slate-700">
            We reserve the right to verify credentials and refuse service to any
            contractor who does not meet requirements.
          </p>
        </div>
      </section>

      {/* Sections 4-5 - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl space-y-12">
          {/* Section 4 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              4. Registration and Account
            </h2>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              Contractors must provide accurate, complete information during
              registration and onboarding.
            </p>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              You are responsible for maintaining the security of your account
              information.
            </p>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              You must notify us immediately of any unauthorized use.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              5. Lead Purchase and Fees
            </h2>
            <p className="mb-4 text-base md:text-lg text-slate-700">
              Blueprint Lead uses a two-part fee structure:
            </p>
            <ul className="space-y-3 mb-6 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Upfront lead fee: Paid upon lead delivery
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Success fee: Paid upon contract signing with homeowner
              </li>
            </ul>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              Specific pricing is discussed during consultation and outlined in
              your partnership agreement.
            </p>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              Upfront fees are non-refundable except in documented cases of lead
              quality issues as evaluated on a case-by-case basis.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              Success fees are due when you sign a project contract with the
              homeowner.
            </p>
          </div>
        </div>
      </section>

      {/* Sections 6-7 - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl space-y-12">
          {/* Section 6 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              6. Lead Exclusivity
            </h2>
            <CalloutBox type="solution" title="Exclusive Leads Guarantee">
              <p className="mb-3 text-base md:text-lg text-slate-700">
                Each lead is sold exclusively to one contractor.
              </p>
              <p className="text-base md:text-lg text-slate-700">
                Once you purchase a lead, no other contractor receives that
                homeowner&apos;s information or appointment details.
              </p>
            </CalloutBox>
            <p className="mt-6 text-base md:text-lg text-slate-700">
              You may not resell, transfer, or share leads with other
              contractors.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              7. Lead Quality and Verification
            </h2>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              Blueprint Lead makes reasonable efforts to verify all leads through
              permit documentation and homeowner qualification.
            </p>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              However, we cannot guarantee project outcomes, homeowner
              commitment, or that appointments will result in signed contracts.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              Contractors are responsible for their own sales performance and
              project closing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
            8. Refunds and Disputes
          </h2>
          <p className="mb-3 text-base md:text-lg text-slate-700">
            Lead quality concerns are evaluated on a case-by-case basis.
          </p>
          <p className="mb-3 text-base md:text-lg text-slate-700">
            To dispute lead quality, you must notify Blueprint Lead within
            [specified timeframe] with documentation supporting your claim.
          </p>
          <p className="mb-3 text-base md:text-lg text-slate-700">
            We will investigate and determine appropriate resolution.
          </p>
          <p className="mb-3 text-base md:text-lg text-slate-700">
            Upfront fees are generally non-refundable.
          </p>
          <p className="text-base md:text-lg text-slate-700">
            Success fees are only charged upon contract signing.
          </p>
        </div>
      </section>

      {/* Sections 9-10 - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl space-y-12">
          {/* Section 9 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              9. Contractor Obligations
            </h2>
            <p className="mb-6 text-base md:text-lg text-slate-700">
              As a contractor using Blueprint Lead services, you agree to:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Maintain valid license and insurance at all times
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Contact homeowners professionally and promptly
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Honor scheduled appointments
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Provide accurate, professional estimates
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Comply with all applicable laws and regulations
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Report contract signings for success fee billing
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Treat homeowner information confidentially
              </li>
            </ul>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              10. Prohibited Conduct
            </h2>
            <CalloutBox type="problem" title="You May Not">
              <ul className="space-y-3 ml-6 list-disc">
                <li className="text-base md:text-lg text-slate-700">
                  Misrepresent your qualifications, licensing, or experience
                </li>
                <li className="text-base md:text-lg text-slate-700">
                  Perform unlicensed contracting work
                </li>
                <li className="text-base md:text-lg text-slate-700">
                  Harass, abuse, or mistreat homeowners
                </li>
                <li className="text-base md:text-lg text-slate-700">
                  Share or resell leads purchased from Blueprint Lead
                </li>
                <li className="text-base md:text-lg text-slate-700">
                  Circumvent payment obligations
                </li>
                <li className="text-base md:text-lg text-slate-700">
                  Use our service for any unlawful purpose
                </li>
              </ul>
            </CalloutBox>
          </div>
        </div>
      </section>

      {/* Sections 11-12 - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl space-y-12">
          {/* Section 11 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              11. Intellectual Property
            </h2>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              All content on Blueprint Lead&apos;s website, including text, graphics,
              logos, and processes, is proprietary and protected by copyright and
              trademark law.
            </p>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              You are granted a limited license to use our platform for its
              intended purpose.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              You may not copy, reproduce, distribute, or create derivative works
              from our content without permission.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              12. Privacy and Data
            </h2>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              Your use of Blueprint Lead services is subject to our Privacy
              Policy, which is incorporated into these Terms by reference.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              By using our services, you consent to our collection and use of
              information as described in the Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Sections 13-14 - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl space-y-12">
          {/* Section 13 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              13. Disclaimer of Warranties
            </h2>
            <p className="mb-6 text-base md:text-lg text-slate-700">
              Blueprint Lead services are provided &quot;as is&quot; and &quot;as available.&quot; We
              make no warranties, express or implied, regarding:
            </p>
            <ul className="space-y-3 mb-6 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Uninterrupted or error-free service
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Specific lead volume or availability
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Project closing rates or contractor success
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Accuracy of all information provided
              </li>
            </ul>
            <p className="text-base md:text-lg text-slate-700">
              Contractors are responsible for verifying all information and
              conducting their own due diligence.
            </p>
          </div>

          {/* Section 14 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              14. Limitation of Liability
            </h2>
            <p className="mb-6 text-base md:text-lg text-slate-700">
              To the maximum extent permitted by law, Blueprint Lead&apos;s liability
              is limited to the amount of fees paid by contractor for the
              specific lead in question. We are not liable for:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Lost profits, revenue, or business opportunities
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Indirect, incidental, or consequential damages
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Homeowner cancellations or project delays
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Contractor-homeowner disputes
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Any damages exceeding fees paid
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sections 15-16 - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl space-y-12">
          {/* Section 15 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              15. Indemnification
            </h2>
            <p className="mb-6 text-base md:text-lg text-slate-700">
              Contractor agrees to indemnify and hold Blueprint Lead harmless
              from any claims, damages, or expenses arising from:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                Contractor&apos;s work or services provided to homeowners
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Contractor&apos;s violation of these terms
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Contractor&apos;s violation of any laws or regulations
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Disputes between contractor and homeowner
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Contractor&apos;s licensing, insurance, or business practices
              </li>
            </ul>
          </div>

          {/* Section 16 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              16. Termination
            </h2>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              Either party may terminate this agreement at any time.
            </p>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              Blueprint Lead reserves the right to immediately suspend or
              terminate service for violation of these terms.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              Outstanding payment obligations survive termination.
            </p>
          </div>
        </div>
      </section>

      {/* Sections 17-18 - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl space-y-12">
          {/* Section 17 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              17. Dispute Resolution
            </h2>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              These terms are governed by California law.
            </p>
            <p className="mb-3 text-base md:text-lg text-slate-700">
              Any disputes will be resolved through binding arbitration in Los
              Angeles County, California, in accordance with the rules of the
              American Arbitration Association.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              Both parties waive the right to jury trial.
            </p>
          </div>

          {/* Section 18 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
              18. Miscellaneous
            </h2>
            <ul className="space-y-3 ml-6 list-disc">
              <li className="text-base md:text-lg text-slate-700">
                These terms constitute the entire agreement between contractor
                and Blueprint Lead
              </li>
              <li className="text-base md:text-lg text-slate-700">
                If any provision is found unenforceable, remaining provisions
                remain in effect
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Failure to enforce any provision does not constitute waiver
              </li>
              <li className="text-base md:text-lg text-slate-700">
                These terms may not be assigned by contractor without consent
              </li>
              <li className="text-base md:text-lg text-slate-700">
                Neither party is liable for delays due to circumstances beyond
                reasonable control
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Information - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6">
            Contact for Legal Questions
          </h2>
          <div className="space-y-2">
            <p className="text-base md:text-lg text-slate-700">
              [Your company legal contact email]
            </p>
            <p className="text-base md:text-lg text-slate-700">Blueprint Lead</p>
            <p className="text-base md:text-lg text-slate-700">
              [Your company address]
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width Emerald Gradient */}
      <section className="w-full bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            We&apos;re here to help clarify any questions you have about our Terms of
            Service.
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
              href="/privacy"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              View Privacy Policy
            </CTAButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

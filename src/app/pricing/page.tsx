"use client";

import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { TierCard } from "@/components/organisms/TierCard";
import { CalloutBox } from "@/components/molecules/CalloutBox";
import { IconFeatureCard } from "@/components/molecules/IconFeatureCard";
import { ComparisonTable } from "@/components/organisms/ComparisonTable";
import { FAQAccordion } from "@/components/organisms/FAQAccordion";
import {
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  Target,
  Scale,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Zap,
  Award,
  TrendingDown,
  BarChart3,
} from "lucide-react";

export default function PricingPage(): React.ReactElement {
  const commonFeatures = [
    "Exclusive, pre-scheduled appointment",
    "Permit-verified project with full documentation",
    "Complete homeowner contact and property information",
    "Detailed project scope and specifications",
    "Zero competition—you're the only contractor",
  ];

  return (
    <PageLayout>
      {/* Hero Section - Full Width */}
      <section className="relative w-full bg-gradient-to-br from-deep-slate-900 to-deep-slate-800 py-20 md:py-28 lg:py-32">
        <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Pricing & Tiers
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4">
            Transparent Structure for High-Value Projects. No Hidden Fees.
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            We structure our pricing based on project value.
          </p>
        </div>
      </section>

      {/* Pricing Model Overview - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            Our Two-Part Fee Structure
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Blueprint Lead uses a transparent, two-part pricing model that aligns
            our success with yours.
          </p>

          <CalloutBox type="info" title="Important Note">
            <p className="font-semibold mb-2">
              Specific fee amounts are discussed during your consultation.
            </p>
            <p>
              Pricing varies by tier and project type to ensure fairness and
              value. Every contractor&apos;s situation is unique, and we want to have
              an honest conversation about ROI and value.
            </p>
          </CalloutBox>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Part 1 */}
            <div className="bg-slate-50 rounded-xl p-8 border-l-4 border-emerald-accent-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-accent-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Upfront Lead Fee
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                Paid when you receive the exclusive lead and pre-scheduled
                appointment details.
              </p>
              <p className="text-slate-700">
                This covers our cost for permit monitoring, verification,
                homeowner qualification, appointment scheduling, and lead
                delivery.
              </p>
            </div>

            {/* Part 2 */}
            <div className="bg-slate-50 rounded-xl p-8 border-l-4 border-emerald-accent-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-accent-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Success Fee
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                Paid when you sign the contract with the homeowner.
              </p>
              <p className="text-slate-700 font-semibold">
                This fee is only due when you successfully close the project.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why This Model
            </h3>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Benefit 1 */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Target className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-deep-slate-900 mb-2">
                      Aligns our incentives with yours
                    </h4>
                    <p className="text-base text-deep-slate-700">
                      We only profit fully when you close the deal. Your success is our success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-deep-slate-900 mb-2">
                      Lower upfront risk than purchasing blind leads
                    </h4>
                    <p className="text-base text-deep-slate-700">
                      Pre-scheduled appointments and verified projects mean less wasted spend.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-deep-slate-900 mb-2">
                      You only pay the full fee when you win the project
                    </h4>
                    <p className="text-base text-deep-slate-700">
                      Success fee is only charged when you sign the contract with the homeowner.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Award className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-deep-slate-900 mb-2">
                      Transparent and fair pricing based on project value
                    </h4>
                    <p className="text-base text-deep-slate-700">
                      Clear, upfront pricing structure tailored to the size and scope of the project.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all md:col-span-2">
                <div className="flex items-start gap-4 max-w-2xl mx-auto">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-deep-slate-900 mb-2">
                      Predictable costs for ROI calculations
                    </h4>
                    <p className="text-base text-deep-slate-700">
                      Know your investment upfront so you can confidently calculate margins and profitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Cards - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            Four Tiers Based on Project Value
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Choose the tier that matches your business capacity and expertise.
          </p>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Many contractors work across multiple tiers for consistent lead flow.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tier 1 */}
            <TierCard
              name="Tier 1"
              tagline="Established Mid-Size Projects"
              projectRange="$85,000 - $150,000"
              features={commonFeatures}
              ctaText="Schedule Consultation"
              featured={false}
            />

            {/* Tier 2 */}
            <TierCard
              name="Tier 2"
              tagline="Large-Scale Residential Projects"
              projectRange="$150,000 - $300,000"
              features={commonFeatures}
              ctaText="Schedule Consultation"
              featured={true}
              badge="Most Popular"
            />

            {/* Tier 3 */}
            <TierCard
              name="Tier 3"
              tagline="Major Construction & Rebuilds"
              projectRange="$300,000 - $600,000"
              features={commonFeatures}
              ctaText="Schedule Consultation"
              featured={false}
            />

            {/* Premium Tier */}
            <TierCard
              name="Premium"
              tagline="Luxury & Estate Construction"
              projectRange="$600,000+"
              features={[
                ...commonFeatures,
                "Priority support from our team",
              ]}
              ctaText="Schedule Consultation"
              featured={false}
            />
          </div>
        </div>
      </section>

      {/* Value Proposition - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            Why Our Pricing Works for Contractors
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IconFeatureCard
              icon={DollarSign}
              title="Predictable ROI"
              description="Know your costs upfront. Calculate margins before committing. Make informed decisions about which projects to pursue."
            />
            <IconFeatureCard
              icon={Shield}
              title="Lower Risk"
              description="Success fee only paid when you win the project. If you don't close, you only invested the upfront fee—not the full cost."
            />
            <IconFeatureCard
              icon={TrendingUp}
              title="No Competition Means Better Margins"
              description="Exclusive leads eliminate bidding wars. You're not racing to the bottom on price. Better close rates mean better overall ROI."
            />
            <IconFeatureCard
              icon={Clock}
              title="Time Savings"
              description="Pre-scheduled appointments save hours of cold calling, follow-ups, and lead chasing. Your time is valuable—spend it building."
            />
            <IconFeatureCard
              icon={Target}
              title="Quality Guarantee"
              description="Every lead is permit-verified and pre-qualified. No wasted time on tire-kickers or fake projects. Quality over quantity."
            />
            <IconFeatureCard
              icon={Scale}
              title="Scalable"
              description="Choose the tier and volume that fits your business capacity. Scale up as you grow."
            />
          </div>
        </div>
      </section>

      {/* Comparison Section - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <ComparisonTable
            title="How Blueprint Lead Stacks Up"
            traditional={[
              { text: "Monthly fees + per-lead costs" },
              { text: "Lead shared with 3-8 contractors" },
              { text: "High competition = low margins" },
              { text: "No appointment scheduling" },
              { text: "No permit verification" },
              { text: "Small projects mixed with large" },
              { text: "You do all the qualification work" },
              { text: "Typical close rate: 5-15%" },
            ]}
            blueprintLead={[
              { text: "Upfront fee + success fee (only on close)" },
              { text: "100% exclusive leads" },
              { text: "Zero competition" },
              { text: "Pre-scheduled appointments" },
              { text: "Permit-verified projects" },
              { text: "High-value projects only ($85K+)" },
              { text: "We handle qualification and scheduling" },
              { text: "Higher close rates (exclusive + pre-scheduled)" },
            ]}
          />
        </div>
      </section>

      {/* Pricing FAQ - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            Common Pricing Questions
          </h2>

          <FAQAccordion
            items={[
              {
                question: "Why don't you list exact prices on the website?",
                answer:
                  "Pricing varies based on project type, tier level, and your specific needs. We discuss exact fees during consultation to ensure full transparency and alignment with your business goals. Every contractor's situation is unique, and we want to have an honest conversation about ROI and value.",
              },
              {
                question: "What's included in the upfront lead fee?",
                answer:
                  "The upfront fee covers our extensive work: daily permit monitoring, project identification, permit verification, homeowner outreach and qualification, appointment scheduling, and delivery of complete lead information. This ensures you receive only high-quality, exclusive, pre-scheduled appointments.",
              },
              {
                question: "When is the success fee due?",
                answer:
                  "The success fee is paid when you sign a contract with the homeowner. You only pay this fee when you successfully close the project.",
              },
              {
                question: "Are there any hidden fees?",
                answer:
                  "No. Our pricing is upfront lead fee + success fee. That's it. No monthly subscriptions, no platform fees, no membership costs, no surprise charges.",
              },
              {
                question: "Can I choose which tier I want to work in?",
                answer:
                  "Yes. During your consultation, we'll discuss which tier(s) align with your capabilities, capacity, and business goals. Many contractors work across multiple tiers.",
              },
              {
                question: "What if I don't close the deal?",
                answer:
                  "You only pay the upfront lead fee. The success fee is only charged when you successfully sign a contract with the homeowner. We take on some of the risk with you.",
              },
              {
                question: "Can I work across multiple tiers simultaneously?",
                answer:
                  "Absolutely. Many contractors work across multiple tiers depending on their capacity and project preferences. We'll discuss the best approach during consultation.",
              },
              {
                question: "How do you calculate ROI?",
                answer:
                  "We'll walk through ROI calculations during your consultation. With exclusive leads, pre-scheduled appointments, and typical contractor margins on high-value projects, most contractors see strong returns even after both fees.",
              },
            ]}
            allowMultiple={false}
          />
        </div>
      </section>

      {/* Final CTA - Full Width Emerald Gradient */}
      <section className="w-full bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Discuss Your Pricing
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-4">
            Every consultation includes a transparent discussion of fees, ROI, and
            how our tiers fit your business.
          </p>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            We&apos;re not here to pressure you. We&apos;re here to see if we&apos;re a good
            fit. If Blueprint Lead makes sense for your business, we&apos;ll show you
            exactly how the numbers work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <CTAButton
              variant="primary"
              size="lg"
              icon={Calendar}
              href={process.env.NEXT_PUBLIC_CALENDLY_URL}
              className="bg-white text-emerald-600 hover:bg-slate-50"
            >
              Schedule Your Consultation
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              icon={ArrowRight}
              href="/faq"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              More Questions? See FAQ
            </CTAButton>
          </div>
          <p className="text-white/90 text-lg">
            No obligation. No pressure. Just honest conversation about growing
            your business.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

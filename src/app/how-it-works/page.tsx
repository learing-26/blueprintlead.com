"use client";

import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { StatsBar } from "@/components/organisms/StatsBar";
import { ProcessFlowChart } from "@/components/organisms/ProcessFlowChart";
import { ComparisonTable } from "@/components/organisms/ComparisonTable";
import { FeatureGrid } from "@/components/organisms/FeatureGrid";
import { IconFeatureCard } from "@/components/molecules/IconFeatureCard";
import { StoryBlock } from "@/components/organisms/StoryBlock";
import { CalloutBox } from "@/components/molecules/CalloutBox";
import Image from "next/image";
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  Search,
  CheckCircle,
  Phone,
  FileCheck,
  Clock,
  DollarSign,
  Users,
  Shield,
  Target,
  TrendingUp,
  Lock,
  MapPin,
  CalendarCheck,
  FileText,
  Home,
  Truck,
} from "lucide-react";

export default function HowItWorksPage(): React.ReactElement {
  return (
    <PageLayout>
      {/* Hero Section - Full Width Dark Gradient */}
      <section className="relative w-full bg-gradient-to-br from-deep-slate-900 to-deep-slate-800 py-28 md:py-36 lg:py-44">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/how-it-works-hero.jpg"
            alt="Blueprint Lead process visualization showing permit verification to scheduled appointment flow"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4">
            From Consultation to Closed Project—A Transparent, Five-Step Process
          </p>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
            We believe in complete transparency. Here&apos;s exactly how we find
            high-value projects, verify their legitimacy, schedule appointments,
            and connect you with ready homeowners.
          </p>
        </div>
      </section>

      {/* Stats Bar - Overlapping Hero */}
      <section className="w-full -mt-20 relative z-20 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <StatsBar
            stats={[
              {
                number: "Daily",
                label: "Permit Monitoring",
                icon: Search,
                description: "Thousands of permits checked",
              },
              {
                number: "$85K+",
                label: "Minimum Project Value",
                icon: DollarSign,
                description: "High-value construction only",
              },
              {
                number: "Zero",
                label: "Your Competition",
                icon: Lock,
                description: "100% exclusive leads",
              },
              {
                number: "Pre-Set",
                label: "Appointments",
                icon: CalendarCheck,
                description: "Homeowners expecting you",
              },
            ]}
          />
        </div>
      </section>

      {/* Main Process Flow - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6 text-center">
            Your Journey With Blueprint Lead
          </h2>
          <p className="text-lg md:text-xl text-slate-700 text-center mb-16 max-w-3xl mx-auto">
            Five simple steps from consultation to closing high-value projects
          </p>

          <div className="space-y-12">
            {/* Step 1 - Left */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 bg-white rounded-xl p-8 shadow-lg border-2 border-emerald-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-deep-slate-900">
                    Schedule Your Free Consultation
                  </h3>
                </div>
                <p className="text-base text-deep-slate-700">
                  Start with a no-obligation conversation about your business, project preferences, and tier options. We discuss pricing structure and determine if we&apos;re the right fit for your goals.
                </p>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <ArrowRight className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>

            {/* Step 2 - Right */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 hidden md:block"></div>
              <div className="flex-shrink-0 hidden md:block">
                <ArrowLeft className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="flex-1 bg-white rounded-xl p-8 shadow-lg border-2 border-emerald-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-deep-slate-900">
                    Complete Verification & Onboarding
                  </h3>
                </div>
                <p className="text-base text-deep-slate-700">
                  We verify your license and insurance credentials. You select preferred tier levels and project types. Onboarding typically takes 1-2 business days.
                </p>
              </div>
            </div>

            {/* Step 3 - Left */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 bg-white rounded-xl p-8 shadow-lg border-2 border-emerald-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-deep-slate-900">
                    Receive Your Exclusive Lead
                  </h3>
                </div>
                <p className="text-base text-deep-slate-700">
                  Get complete project information with verified permit documentation, homeowner contact details, and a pre-scheduled appointment. This lead is yours alone.
                </p>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <ArrowRight className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>

            {/* Step 4 - Right */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 hidden md:block"></div>
              <div className="flex-shrink-0 hidden md:block">
                <ArrowLeft className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="flex-1 bg-white rounded-xl p-8 shadow-lg border-2 border-emerald-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-deep-slate-900">
                    Confirm & Show Up Prepared
                  </h3>
                </div>
                <p className="text-base text-deep-slate-700">
                  Review documentation, call homeowner to confirm (they&apos;re expecting you), prepare your estimate, and show up to meet a ready homeowner.
                </p>
              </div>
            </div>

            {/* Step 5 - Left */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 bg-white rounded-xl p-8 shadow-lg border-2 border-emerald-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-2xl font-bold text-deep-slate-900">
                    Win the Project & Report Success
                  </h3>
                </div>
                <p className="text-base text-deep-slate-700">
                  Present your estimate, close the deal, sign the contract. Notify us when contract is signed for success fee processing. You only pay success fee when you win.
                </p>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <ArrowRight className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Behind the Scenes - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6 text-center">
            How We Find and Verify These Projects
          </h2>
          <p className="text-lg md:text-xl text-slate-700 text-center mb-12 max-w-3xl mx-auto">
            What separates Blueprint Lead from every other lead generation
            service is our process.
          </p>
          <p className="text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto">
            We don&apos;t wait for homeowners to fill out online forms. We
            proactively identify projects and verify them before ever reaching
            out.
          </p>

          <div className="space-y-12">
            {/* Problem Block */}
            <StoryBlock
              title="Traditional Lead Services Wait for Forms"
              type="problem"
              imagePosition="left"
              imageSrc="/images/pages/how-it-works/story-problem-frustrated.jpg"
              imageAlt="Frustrated contractor looking at laptop with generic online lead form and low-quality inquiries"
            >
              <p className="mb-3">Most lead services are reactive.</p>
              <p className="mb-3">
                They wait for homeowners to fill out online forms. Anyone can
                submit a form with no real commitment.
              </p>
              <p>You get cold contacts with no verification or qualification.</p>
            </StoryBlock>

            {/* Solution Block */}
            <StoryBlock
              title="We Proactively Monitor Real Permits"
              type="solution"
              imagePosition="right"
              imageSrc="/images/pages/how-it-works/story-solution-verified.jpg"
              imageAlt="Organized LA County permit documents with verified stamps and official checkmarks"
            >
              <p className="mb-3">
                We monitor thousands of LA County permit filings daily.
              </p>
              <p className="mb-3">
                We identify residential projects valued at $85,000 and above.
                Every permit is verified with official county records.
              </p>
              <p>
                Then we contact homeowners, qualify their readiness, and
                schedule appointments with those who are ready to move forward.
              </p>
            </StoryBlock>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <CalloutBox type="solution" title="Why This Matters">
              <p className="mb-3">
                We do the heavy lifting so you can focus on what you do
                best—building.
              </p>
              <p className="mb-3">
                No more cold calling. No more chasing dead-end leads.
              </p>
              <p>No more guessing if a project is real.</p>
            </CalloutBox>
          </div>
        </div>
      </section>

      {/* What You Receive - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6 text-center">
            Every Lead Comes Complete
          </h2>
          <p className="text-lg md:text-xl text-slate-700 text-center mb-12 max-w-3xl mx-auto">
            When you receive a lead from Blueprint Lead, you get everything you
            need to show up prepared and confident.
          </p>

          <FeatureGrid columns={3}>
            <IconFeatureCard
              icon={Home}
              title="Homeowner Information"
              description="Full name, contact details, property address, phone number, email, and best times to reach them."
              variant="emerald"
            />
            <IconFeatureCard
              icon={FileText}
              title="Project Details"
              description="Detailed work description, project type and scope, estimated project value, and timeline expectations."
              variant="emerald"
            />
            <IconFeatureCard
              icon={FileCheck}
              title="Verified Documentation"
              description="Permit number, permit status confirmation, APN, and project type classification you can verify independently."
              variant="emerald"
            />
            <IconFeatureCard
              icon={CalendarCheck}
              title="Pre-Scheduled Appointment"
              description="Confirmed date and time. The homeowner expects your call and your visit. You're not cold calling."
              variant="emerald"
            />
            <IconFeatureCard
              icon={Lock}
              title="100% Exclusive"
              description="This lead is sold only to you. No other contractor receives this information. Zero competition."
              variant="emerald"
            />
            <IconFeatureCard
              icon={CheckCircle}
              title="Ready to Meet You"
              description="The homeowner has agreed to the appointment and is ready to receive your estimate. They're expecting you."
              variant="emerald"
            />
          </FeatureGrid>

          <div className="mt-12 text-center">
            <p className="text-xl md:text-2xl text-deep-slate-900 font-bold">
              You show up to an appointment that&apos;s already set.
            </p>
            <p className="text-lg md:text-xl text-slate-700 mt-4">
              The homeowner is ready to receive your estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-12 text-center">
            Why Blueprint Lead Converts Better
          </h2>

          <ComparisonTable
            title="How Our Process Stacks Up"
            traditional={[
              { text: "Homeowner fills out online form (minimal commitment)" },
              { text: "Lead sold to 3-8 contractors simultaneously" },
              { text: "No verification of project legitimacy" },
              { text: "No appointment scheduling" },
              { text: "You cold call and hope for the best" },
              { text: "High competition, low conversion rates" },
              { text: "Wasted time on tire-kickers" },
              { text: "No way to verify project is real" },
            ]}
            blueprintLead={[
              {
                text: "We proactively identify permit-verified projects",
              },
              { text: "Lead sold exclusively to one contractor" },
              { text: "Full permit verification and documentation" },
              { text: "Pre-scheduled appointment before delivery" },
              { text: "Homeowner expects your call and visit" },
              { text: "Zero competition, high conversion rates" },
              { text: "Pre-qualified homeowners who are ready" },
              { text: "Verifiable permit documentation provided" },
            ]}
          />
        </div>
      </section>

      {/* Timeline & Support - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-12 text-center">
            What to Expect: Timeline & Support
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Timeline Card 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Initial Consultation
              </h3>
              <p className="text-slate-700 mb-2">
                30-45 minute conversation
              </p>
              <p className="text-sm text-slate-600">
                Schedule at your convenience
              </p>
            </div>

            {/* Timeline Card 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Verification
              </h3>
              <p className="text-slate-700 mb-2">1-2 business days</p>
              <p className="text-sm text-slate-600">
                License and insurance confirmation
              </p>
            </div>

            {/* Timeline Card 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Lead Delivery
              </h3>
              <p className="text-slate-700 mb-2">Based on availability</p>
              <p className="text-sm text-slate-600">
                When projects match your preferences
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <CalloutBox type="info" title="Support Throughout the Process">
              <p className="mb-3">
                Our team provides best practices for appointment confirmation
                calls, questions to ask during site visits, and estimation tips.
              </p>
              <p>
                We&apos;re available if you have questions during the sales
                process or need guidance.
              </p>
            </CalloutBox>
          </div>
        </div>
      </section>

      {/* Key Principles - Full Width */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-12 text-center">
            Our Process Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Principle 1 */}
            <div className="flex gap-4 p-6 rounded-xl bg-white border-l-4 border-emerald-600">
              <Users className="h-8 w-8 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  No Pressure, No Obligation
                </h3>
                <p className="text-slate-700">
                  Your consultation is a conversation, not a sales pitch.
                  We&apos;re selective about who we work with, and you should be
                  too.
                </p>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="flex gap-4 p-6 rounded-xl bg-white border-l-4 border-emerald-600">
              <TrendingUp className="h-8 w-8 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Quality Over Quantity
                </h3>
                <p className="text-slate-700">
                  We don&apos;t flood you with dozens of cold leads. We deliver
                  exclusive, pre-scheduled appointments worth your time.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="flex gap-4 p-6 rounded-xl bg-white border-l-4 border-emerald-600">
              <FileCheck className="h-8 w-8 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Complete Transparency
                </h3>
                <p className="text-slate-700">
                  Clear pricing. Clear process. Clear expectations. We tell you
                  exactly how we operate and what you&apos;re paying for.
                </p>
              </div>
            </div>

            {/* Principle 4 */}
            <div className="flex gap-4 p-6 rounded-xl bg-white border-l-4 border-emerald-600">
              <Target className="h-8 w-8 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Your Success Is Our Success
                </h3>
                <p className="text-slate-700">
                  Success fee only paid when you close the deal. We&apos;re
                  invested in your growth and only fully profit when you win.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width Emerald Gradient */}
      <section className="w-full bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Receiving Exclusive Leads?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            Our process is designed to save you time, eliminate competition, and
            deliver high-quality opportunities.
          </p>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            If you&apos;re a licensed contractor ready to grow, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              href="/pricing"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              View Pricing & Tiers
            </CTAButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

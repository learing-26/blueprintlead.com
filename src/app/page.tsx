"use client";

import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { IconFeatureCard } from "@/components/molecules/IconFeatureCard";
import { CalloutBox } from "@/components/molecules/CalloutBox";
import { StatsBar } from "@/components/organisms/StatsBar";
import { ComparisonTable } from "@/components/organisms/ComparisonTable";
import { ProcessFlowChart } from "@/components/organisms/ProcessFlowChart";
import { StoryBlock } from "@/components/organisms/StoryBlock";
import { TestimonialCard } from "@/components/organisms/TestimonialCard";
import { TierCard } from "@/components/organisms/TierCard";
import { ProjectTypeCard } from "@/components/organisms/ProjectTypeCard";
import { FAQAccordion } from "@/components/organisms/FAQAccordion";
import { TIERS, PROJECT_TYPES, TESTIMONIALS } from "@/lib/constants";
import Image from "next/image";
import {
  Calendar,
  ArrowRight,
  Lock,
  Shield,
  MapPin,
  FileCheck,
  CalendarCheck,
  Search,
  Truck,
  XCircle,
  CheckCircle2,
  DollarSign,
  Phone,
  TrendingUp,
  Users,
  Building2,
} from "lucide-react";

export default function HomePage(): React.ReactElement {
  return (
    <PageLayout>
      {/* Hero Section - Large and Compelling */}
      <section className="relative w-full bg-gradient-to-br from-deep-slate-900 to-deep-slate-800 py-28 md:py-36 lg:py-44">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/hero-la-skyline.jpg"
            alt="Los Angeles County skyline with active construction sites and cranes"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Stop Chasing Leads. Start Closing High-Value Projects.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            The only lead generation service offering pre-scheduled appointments
            with permit-verified homeowners in LA County. Projects starting at
            $85,000.
          </p>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-10">
            We don&apos;t sell you cold contacts. We deliver exclusive,
            pre-scheduled appointments with homeowners who have pulled permits
            and are ready for construction. You&apos;re the only contractor
            meeting with them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <CTAButton
              variant="primary"
              size="lg"
              icon={Calendar}
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || "/contact"}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Schedule Your Consultation
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              icon={ArrowRight}
              href="/how-it-works"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              See How It Works
            </CTAButton>
          </div>

          {/* Contractor Application Banner */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
            <span className="text-sm text-white/90">Licensed Contractor?</span>
            <a
              href="https://app.blueprintlead.com/apply"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Apply to Join Our Network
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-white/60">
            100% Exclusive Leads | Pre-Scheduled Appointments | Est. 2021
          </p>
        </div>
      </section>

      {/* Stats Bar - Overlapping Hero */}
      <section className="w-full -mt-20 relative z-20 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <StatsBar
            stats={[
              {
                number: "Since 2021",
                label: "Proven Track Record",
                icon: Calendar,
                description: "Four years of excellence",
              },
              {
                number: "100%",
                label: "Exclusive Leads",
                icon: Lock,
                description: "Never shared with others",
              },
              {
                number: "Licensed Only",
                label: "Professional Network",
                icon: Shield,
                description: "No unlicensed competition",
              },
              {
                number: "$85K+",
                label: "Minimum Projects",
                icon: DollarSign,
                description: "High-value opportunities",
              },
            ]}
          />
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            Three Things That Set Us Apart
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            We&apos;re the only lead generation service that does all three.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <IconFeatureCard
              icon={CalendarCheck}
              title="Pre-Scheduled Appointments"
              description="Every lead comes with a confirmed appointment. The homeowner has agreed to meet you at a specific date and time. No cold calling. No phone tag. They're expecting you."
              variant="emerald"
            />
            <IconFeatureCard
              icon={Lock}
              title="100% Exclusive"
              description="Each appointment is sold to only one contractor. You're not competing with five other companies for the same project. Zero competition. The homeowner is focused on you."
              variant="emerald"
            />
            <IconFeatureCard
              icon={FileCheck}
              title="Permit-Verified Projects"
              description="Every project is backed by official LA County permit documentation. Real construction projects with real budgets. No tire-kickers or price shoppers."
              variant="emerald"
            />
          </div>
        </div>
      </section>

      {/* Problem vs Solution - Side-by-Side Comparison */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6 text-center">
            The Problem with Traditional Lead Gen vs. The Blueprint Lead Solution
          </h2>
          <p className="text-lg md:text-xl text-deep-slate-700 text-center mb-12 max-w-3xl mx-auto">
            Stop wasting money on leads that go nowhere. Here&apos;s the difference.
          </p>

          <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-2xl">
            {/* LEFT SIDE - PROBLEM */}
            <div className="bg-white p-8 md:p-12 lg:p-16 border-r-2 border-slate-300">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-10 h-10 text-red-600 flex-shrink-0" />
                <h3 className="text-2xl md:text-3xl font-bold text-deep-slate-900">
                  The Problem
                </h3>
              </div>
              <p className="text-base md:text-lg text-deep-slate-700 mb-8">
                Why traditional lead generation fails contractors
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-deep-slate-800 font-medium">
                      Competing with 5+ contractors for every lead
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-deep-slate-800 font-medium">
                      Endless cold calling with no results
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-deep-slate-800 font-medium">
                      Paying for unqualified homeowners who never commit
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-deep-slate-800 font-medium">
                      Low-value projects that aren&apos;t worth your time
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-deep-slate-800 font-medium">
                      No way to verify if the project is real
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-deep-slate-800 font-medium">
                      Hours wasted chasing people who never respond
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - SOLUTION */}
            <div className="bg-white p-8 md:p-12 lg:p-16">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 flex-shrink-0" />
                <h3 className="text-2xl md:text-3xl font-bold text-deep-slate-900">
                  The Solution
                </h3>
              </div>
              <p className="text-base md:text-lg text-deep-slate-700 mb-8">
                How Blueprint Lead fixes everything
              </p>

              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-deep-slate-900 mb-1">
                        Pre-Scheduled Appointments
                      </p>
                      <p className="text-sm text-deep-slate-700">
                        We set the appointment before you receive the lead. The homeowner is expecting you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-deep-slate-900 mb-1">
                        Permit-Verified Quality
                      </p>
                      <p className="text-sm text-deep-slate-700">
                        Official LA County permit documentation with every lead. Real projects only.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-deep-slate-900 mb-1">
                        100% Exclusive Leads
                      </p>
                      <p className="text-sm text-deep-slate-700">
                        You&apos;re the only contractor. Zero competition. No bidding wars.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-deep-slate-900 mb-1">
                        High-Value Projects Only
                      </p>
                      <p className="text-sm text-deep-slate-700">
                        Minimum $85,000 project value. Substantial construction projects only.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg text-center">
                <p className="text-xl font-bold text-white">
                  There&apos;s a better way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <ProcessFlowChart
            title="How It Works"
            subtitle="Simple process. Powerful results."
            steps={[
              {
                number: 1,
                title: "Schedule Consultation",
                description:
                  "Discuss your business, project preferences, and review our tier options and pricing.",
                icon: Calendar,
              },
              {
                number: 2,
                title: "Complete Verification",
                description:
                  "We verify your license and insurance. You select your preferred tier and project types.",
                icon: Shield,
              },
              {
                number: 3,
                title: "Receive Exclusive Leads",
                description:
                  "Get complete project information with pre-scheduled appointments. No competition.",
                icon: Truck,
              },
              {
                number: 4,
                title: "Close High-Value Projects",
                description:
                  "Show up to ready homeowners. Present your estimate. Grow your business.",
                icon: TrendingUp,
              },
            ]}
          />
          <div className="text-center mt-8">
            <CTAButton
              variant="outline"
              size="lg"
              icon={ArrowRight}
              href="/how-it-works"
            >
              See Detailed Process
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Project Types Preview */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6 text-center">
            High-Value Projects We Cover
          </h2>
          <p className="text-lg md:text-xl text-deep-slate-700 text-center mb-12 max-w-3xl mx-auto">
            We specialize in substantial residential construction projects across LA County.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {PROJECT_TYPES.slice(0, 6).map((projectType, index) => (
              <ProjectTypeCard
                key={index}
                name={projectType.name}
                description={projectType.description}
                icon={projectType.icon}
                examples={projectType.examples}
                badge={"badge" in projectType ? projectType.badge : undefined}
                badgeVariant={"badgeVariant" in projectType ? projectType.badgeVariant : undefined}
              />
            ))}
          </div>

          <div className="text-center">
            <CTAButton
              variant="outline"
              size="lg"
              icon={ArrowRight}
              href="/project-types"
            >
              View All Project Types
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Preview */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            High-Value Projects Across Four Tiers
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            We structure our leads by project value to match your business
            capacity and expertise. Choose the tier that fits your goals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {TIERS.map((tier, index) => (
              <TierCard
                key={index}
                name={tier.name}
                tagline={tier.tagline}
                projectRange={tier.projectRange}
                features={tier.features}
                ctaText={tier.ctaText}
                featured={tier.featured}
                badge={"badge" in tier ? tier.badge : undefined}
              />
            ))}
          </div>

          <div className="text-center">
            <CTAButton
              variant="outline"
              size="lg"
              icon={ArrowRight}
              href="/pricing"
            >
              View Full Pricing Details
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <ComparisonTable
            title="Traditional Lead Services vs. Blueprint Lead"
            traditional={[
              { text: "Cold leads from online forms" },
              { text: "Shared with multiple contractors" },
              { text: "Unqualified tire-kickers" },
              { text: "Price-shopping homeowners" },
              { text: "Competing with unlicensed workers" },
              { text: "No appointment scheduling" },
              { text: "Low conversion rates" },
              { text: "Wasted time and money" },
            ]}
            blueprintLead={[
              { text: "Permit-verified construction projects" },
              { text: "100% exclusive to one contractor" },
              { text: "Pre-qualified and ready homeowners" },
              { text: "Serious buyers who pulled permits" },
              { text: "Licensed contractors only" },
              { text: "Pre-scheduled appointments" },
              { text: "Higher quality opportunities" },
              { text: "Worth your time and effort" },
            ]}
          />
        </div>
      </section>

      {/* What You Receive Section */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            Every Lead Comes Complete
          </h2>
          <p className="text-lg md:text-xl text-slate-700 text-center mb-12 max-w-3xl mx-auto">
            When you receive a lead from Blueprint Lead, you get everything you
            need to show up prepared and confident.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/sections/sample-lead-documentation.jpg"
                alt="Sample lead documentation showing LA County permit details and verified project information"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                quality={85}
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-emerald-600" />
                  Homeowner Information
                </h3>
                <p className="text-slate-700">
                  Full name, contact details, property address, phone number,
                  email, and best times to reach them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-emerald-600" />
                  Project Details
                </h3>
                <p className="text-slate-700">
                  Detailed work description, project type and scope, estimated
                  project value, and timeline expectations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FileCheck className="w-6 h-6 text-emerald-600" />
                  Verified Documentation
                </h3>
                <p className="text-slate-700">
                  Permit number, permit status confirmation, Assessor&apos;s
                  Parcel Number (APN), and project type classification.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CalendarCheck className="w-6 h-6 text-emerald-600" />
                  Pre-Scheduled Appointment
                </h3>
                <p className="text-slate-700">
                  Confirmed date and time. The homeowner expects your call and
                  your visit. You&apos;re not cold calling—you&apos;re expected.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-bold text-slate-900">
              You show up to an appointment that&apos;s already set.
            </p>
            <p className="text-lg md:text-xl text-slate-700 mt-4">
              The homeowner is ready to receive your estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            Trusted by Licensed Contractors Across LA County
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            For four years, we&apos;ve been connecting professional contractors
            with homeowners who are ready to build.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                company={testimonial.company}
                specialty={testimonial.specialty}
                rating={testimonial.rating}
                verified={testimonial.verified}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals / LA County Focus */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            Focused Exclusively on LA County
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/sections/la-county-map.jpg"
                alt="Los Angeles County map highlighting comprehensive coverage areas and service regions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                quality={85}
              />
            </div>

            <div>
              <p className="text-lg md:text-xl text-slate-700 mb-6">
                Blueprint Lead exclusively serves Los Angeles County.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                We chose to specialize rather than expand nationally because
                focus delivers better results.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <IconFeatureCard
                  icon={Building2}
                  title="Largest Markets"
                  description="One of the largest residential construction markets in the U.S."
                  variant="emerald"
                />
                <IconFeatureCard
                  icon={Calendar}
                  title="Year-Round"
                  description="Consistent permit activity throughout the year."
                  variant="emerald"
                />
                <IconFeatureCard
                  icon={Users}
                  title="High Demand"
                  description="Strong demand for licensed contractors."
                  variant="emerald"
                />
                <IconFeatureCard
                  icon={MapPin}
                  title="Local Expertise"
                  description="Focused knowledge provides better matching."
                  variant="emerald"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center mb-12">
            Quick answers to common questions about Blueprint Lead.
          </p>

          <FAQAccordion
            items={[
              {
                question: "What licenses do I need to receive leads?",
                answer:
                  "You must hold an active California contractor's license (Class A, B, or relevant C-class specialty license) and maintain current liability insurance. We verify all licenses through CSLB before activating your account.",
              },
              {
                question: "How are homeowners vetted?",
                answer:
                  "Every homeowner goes through permit verification, budget qualification, and timeline confirmation before being matched with contractors. We verify permits through LA County records and confirm homeowner commitment through direct interviews.",
              },
              {
                question: "Do you sell leads to multiple contractors?",
                answer:
                  "No. Each lead is exclusive to one contractor per specialty. You're the only contractor receiving this lead. No competition, no bidding wars.",
              },
              {
                question: "How does pricing work?",
                answer:
                  "Transparent upfront and success fee structure. Exact pricing varies by tier and is discussed during your consultation. No hidden fees, no monthly commitments.",
              },
              {
                question: "Do you cover all of LA County?",
                answer:
                  "Yes, we cover all cities and unincorporated areas within Los Angeles County. You can specify your preferred service areas during onboarding.",
              },
            ]}
          />

          <div className="text-center mt-8">
            <CTAButton
              variant="outline"
              size="lg"
              icon={ArrowRight}
              href="/faq"
            >
              View All FAQs
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Stop Chasing Leads?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Join LA County&apos;s network of licensed contractors accessing
            exclusive, pre-scheduled appointments with permit-verified
            homeowners.
          </p>
          <p className="text-lg md:text-xl text-white/85 mb-10">
            We&apos;re selective about who we work with. If you&apos;re a
            licensed, insured contractor ready to grow your business with
            high-value projects, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="primary"
              size="lg"
              icon={Calendar}
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || "/contact"}
              className="bg-white text-emerald-600 hover:bg-slate-50"
            >
              Schedule Your Consultation
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              icon={ArrowRight}
              href="/how-it-works"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              Learn More About Our Process
            </CTAButton>
          </div>
          <p className="text-sm text-white/70 mt-6">
            Licensed & Insured Contractors Only
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

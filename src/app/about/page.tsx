"use client";

import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { StatsBar } from "@/components/organisms/StatsBar";
import { ComparisonTable } from "@/components/organisms/ComparisonTable";
import { TimelineVisualization } from "@/components/organisms/TimelineVisualization";
import { ProcessFlowChart } from "@/components/organisms/ProcessFlowChart";
import { StoryBlock } from "@/components/organisms/StoryBlock";
import { IconFeatureCard } from "@/components/molecules/IconFeatureCard";
import { FeatureGrid } from "@/components/organisms/FeatureGrid";
import Image from "next/image";
import {
  Calendar,
  ArrowRight,
  Lock,
  Shield,
  MapPin,
  Rocket,
  TrendingUp,
  Target,
  Award,
  FileCheck,
  Search,
  CalendarCheck,
  Truck,
  CheckCircle,
  DollarSign,
  Users,
  Building2,
  Activity,
  Layers,
  ShieldCheck,
  Eye,
  Handshake,
} from "lucide-react";

export default function AboutPage(): React.ReactElement {
  return (
    <PageLayout>
      {/* Hero Section - Full Width */}
      <section className="relative w-full bg-gradient-to-br from-deep-slate-900 to-deep-slate-800 py-28 md:py-36 lg:py-44">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/about-hero-construction.jpg"
            alt="Active construction site in Los Angeles County with professional contractors at work"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            About Blueprint Lead
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Connecting Licensed Contractors with High-Value Opportunities Since
            2021
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
                number: "LA County",
                label: "Market Specialists",
                icon: MapPin,
                description: "Focused expertise",
              },
            ]}
          />
        </div>
      </section>

      {/* Why We Started - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            Why We Started Blueprint Lead
          </h2>

          <div className="space-y-12">
            {/* Problem Block */}
            <StoryBlock
              title="The Problem"
              type="problem"
              imagePosition="left"
              imageSrc="/images/pages/about/story-problem-contractor.jpg"
              imageAlt="Stressed contractor surrounded by paperwork and taking multiple phone calls"
            >
              <p className="mb-3">
                The contractor lead generation industry has been broken for
                years.
              </p>
              <p className="mb-3">
                Licensed contractors were wasting thousands on cold leads,
                competing with unlicensed workers, and chasing dead-end
                inquiries.
              </p>
              <p>We knew there had to be a better way.</p>
            </StoryBlock>

            {/* Solution Block */}
            <StoryBlock
              title="Our Solution"
              type="solution"
              imagePosition="right"
              imageSrc="/images/pages/about/story-solution-permits.jpg"
              imageAlt="Organized LA County permits with verified stamps and professional documentation"
            >
              <p className="mb-3">
                In 2021, we launched Blueprint Lead with a simple mission.
              </p>
              <p className="mb-3">
                Deliver leads that are actually worth pursuing.
              </p>
              <p className="mb-3 font-semibold">
                Pre-scheduled appointments with permit-verified homeowners who
                are ready to move forward.
              </p>
              <p>Not cold contacts. Not shared inquiries. Not tire-kickers.</p>
            </StoryBlock>
          </div>

          {/* Additional Context */}
          <div className="mt-12 max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg md:text-xl text-slate-700">
              We&apos;re the only lead generation service that schedules
              appointments before delivering leads.
            </p>
            <p className="text-lg md:text-xl text-slate-700">
              Four years later, we&apos;re still the only ones doing it this
              way.
            </p>
            <p className="text-lg md:text-xl text-slate-700 font-semibold">
              Why? Because it&apos;s harder. It takes more work. But it delivers
              better results.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <TimelineVisualization
            title="Our Journey"
            milestones={[
              {
                year: "2021",
                title: "Blueprint Lead Founded",
                description:
                  "Launched with a mission to revolutionize contractor lead generation in LA County",
                icon: Rocket,
              },
              {
                year: "2022",
                title: "Process Refined",
                description:
                  "Developed permit monitoring systems and appointment-setting methodology",
                icon: TrendingUp,
              },
              {
                year: "2023",
                title: "Network Expanded",
                description:
                  "Built network of licensed contractors and established relationships",
                icon: Target,
              },
              {
                year: "2024",
                title: "Proven Results",
                description:
                  "Four years of connecting contractors with exclusive appointments",
                icon: Award,
              },
              {
                year: "2025",
                title: "Expanding Services",
                description:
                  "Growing network and enhancing systems to serve more licensed contractors",
                icon: TrendingUp,
              },
            ]}
          />
        </div>
      </section>

      {/* Comparison Table - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <ComparisonTable
            title="How We're Different"
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

      {/* Process Flow - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <ProcessFlowChart
            title="Our Process"
            subtitle="What you need to do: Nothing. We do all the work."
            steps={[
              {
                number: 1,
                title: "Monitor & Identify",
                description:
                  "We monitor thousands of LA County permits daily and identify residential projects valued at $85,000+",
                icon: Search,
              },
              {
                number: 2,
                title: "Verify & Qualify",
                description:
                  "We verify every permit with official records and contact homeowners to qualify readiness",
                icon: FileCheck,
              },
              {
                number: 3,
                title: "Schedule Appointment",
                description:
                  "We schedule appointments with homeowners who are ready to move forward with their project",
                icon: CalendarCheck,
              },
              {
                number: 4,
                title: "Deliver to You",
                description:
                  "We match projects with the right contractor and deliver complete info with pre-scheduled appointment",
                icon: Truck,
              },
            ]}
          />
        </div>
      </section>

      {/* What We Stand For - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            What We Stand For
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Our mission is to connect LA County&apos;s licensed contractors with
            exclusive, high-value construction projects.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Belief Card 1 */}
            <div className="flex gap-4 p-6 rounded-xl bg-slate-50 border-l-4 border-emerald-600">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Professional Contractors Deserve Professional Leads
                </h3>
                <p className="text-slate-700">
                  Not cold contacts and bidding wars. Not price-shopping
                  homeowners comparing seven quotes.
                </p>
              </div>
            </div>

            {/* Belief Card 2 */}
            <div className="flex gap-4 p-6 rounded-xl bg-slate-50 border-l-4 border-emerald-600">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Quality Over Quantity, Always
                </h3>
                <p className="text-slate-700">
                  We don&apos;t flood contractors with dozens of cold leads. We
                  deliver exclusive, pre-scheduled appointments worth pursuing.
                </p>
              </div>
            </div>

            {/* Belief Card 3 */}
            <div className="flex gap-4 p-6 rounded-xl bg-slate-50 border-l-4 border-emerald-600">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Transparency in Every Transaction
                </h3>
                <p className="text-slate-700">
                  Clear pricing. Clear process. Clear expectations. We tell you
                  exactly how we operate.
                </p>
              </div>
            </div>

            {/* Belief Card 4 */}
            <div className="flex gap-4 p-6 rounded-xl bg-slate-50 border-l-4 border-emerald-600">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Partnership, Not Just Service
                </h3>
                <p className="text-slate-700">
                  Your success is our success. We only fully profit when you
                  close the deal. We&apos;re invested in your growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IconFeatureCard
              icon={Eye}
              title="Transparency"
              description="Clear pricing. Clear process. Clear expectations. We tell you exactly how we operate and what you're paying for."
            />
            <IconFeatureCard
              icon={Award}
              title="Quality"
              description="Permit-verified projects, not online form submissions. Pre-qualified homeowners, not cold inquiries."
            />
            <IconFeatureCard
              icon={Shield}
              title="Professionalism"
              description="Licensed contractors only. No unlicensed competition. We work exclusively with professionals."
            />
            <IconFeatureCard
              icon={Lock}
              title="Exclusivity"
              description="Your lead is your lead. We don't share. We don't sell to multiple contractors."
            />
            <IconFeatureCard
              icon={Handshake}
              title="Partnership"
              description="Your success is our success. We only fully profit when you close the deal."
            />
            <IconFeatureCard
              icon={MapPin}
              title="Local Focus"
              description="LA County exclusive. We chose to specialize rather than expand nationally."
            />
          </div>
        </div>
      </section>

      {/* Our Promise - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <FeatureGrid columns={3} title="Our Promise" subtitle="When you work with Blueprint Lead, you can count on:">
            <IconFeatureCard
              icon={FileCheck}
              title="Permit-Verified Projects"
              description="Every lead is verified with official county documentation. No guesswork, no uncertainty."
            />
            <IconFeatureCard
              icon={CalendarCheck}
              title="Pre-Scheduled Appointments"
              description="Every appointment is scheduled before delivery. Show up and present your bid."
            />
            <IconFeatureCard
              icon={Lock}
              title="100% Exclusive to You"
              description="Your lead is your lead. We never share or sell to multiple contractors."
            />
            <IconFeatureCard
              icon={DollarSign}
              title="$85K+ Minimum Value"
              description="Every project meets the minimum threshold. No small repairs or low-value work."
            />
            <IconFeatureCard
              icon={CheckCircle}
              title="Pre-Qualified Homeowners"
              description="Every homeowner has been contacted, qualified, and is ready to move forward."
            />
            <IconFeatureCard
              icon={Shield}
              title="Complete Documentation"
              description="Complete project information and documentation provided with every lead."
            />
          </FeatureGrid>

          <p className="text-lg md:text-xl text-slate-900 font-semibold text-center mt-12">
            We&apos;ve been doing this since 2021 because we&apos;re committed
            to changing how contractors access high-value work.
          </p>
        </div>
      </section>

      {/* Focused on LA County - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            Focused on LA County
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Blueprint Lead exclusively serves Los Angeles County.
          </p>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            We chose to specialize rather than expand nationally because focus
            delivers better results.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/pages/about/la-county-detailed-map.jpg"
                alt="Detailed Los Angeles County map with location markers showing comprehensive coverage areas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                quality={85}
              />
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              <IconFeatureCard
                icon={Building2}
                title="Largest Markets"
                description="One of the largest residential construction markets in the U.S."
                variant="emerald"
              />
              <IconFeatureCard
                icon={Calendar}
                title="Year-Round Activity"
                description="Consistent permit activity throughout the year."
                variant="emerald"
              />
              <IconFeatureCard
                icon={Layers}
                title="Diverse Projects"
                description="Wide range of project types and price points."
                variant="emerald"
              />
              <IconFeatureCard
                icon={Activity}
                title="High Demand"
                description="Strong demand for licensed contractors."
                variant="emerald"
              />
              <IconFeatureCard
                icon={ShieldCheck}
                title="Complex Permits"
                description="We've mastered LA County's permit systems."
                variant="emerald"
              />
              <IconFeatureCard
                icon={Target}
                title="Local Expertise"
                description="Focused knowledge provides better matching."
                variant="emerald"
              />
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Complete Coverage
            </h3>
            <p className="text-lg text-slate-700">
              We serve contractors throughout LA County—from the South Bay to
              the San Fernando Valley, from West LA to the San Gabriel Valley,
              and everywhere in between.
            </p>
          </div>
        </div>
      </section>

      {/* Our Network - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            Our Network
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Blueprint Lead works exclusively with licensed and insured
            contractors in LA County.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/pages/about/professional-contractors.jpg"
                alt="Professional licensed contractors collaborating on construction site planning and project development"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                quality={85}
              />
            </div>

            {/* Contractor Types List */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Who We Serve:
              </h3>
              <ul className="space-y-4">
                {[
                  "General contractors (Class B)",
                  "Specialty contractors",
                  "Remodeling and renovation specialists",
                  "Custom home builders",
                  "ADU construction specialists",
                  "Established firms and growing businesses",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                <h4 className="text-lg font-bold text-blue-900 mb-2">
                  Requirements
                </h4>
                <p className="text-blue-800">
                  All contractors must have a valid California Contractor&apos;s
                  License and current insurance. We verify credentials during
                  onboarding.
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
            Ready to Partner With Blueprint Lead?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            Since 2021, we&apos;ve been delivering what contractors actually
            want: exclusive, pre-scheduled appointments with homeowners who are
            ready to build.
          </p>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            If you&apos;re a licensed contractor ready to grow your business
            with high-value projects, let&apos;s talk.
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
              href="/how-it-works"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              See How It Works
            </CTAButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

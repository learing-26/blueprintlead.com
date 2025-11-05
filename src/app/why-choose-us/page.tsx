"use client";

import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { StatsBar } from "@/components/organisms/StatsBar";
import { ComparisonTable } from "@/components/organisms/ComparisonTable";
import { IconFeatureCard } from "@/components/molecules/IconFeatureCard";
import { TestimonialCard } from "@/components/organisms/TestimonialCard";
import { CalloutBox } from "@/components/molecules/CalloutBox";
import { FeatureGrid } from "@/components/organisms/FeatureGrid";
import {
  Calendar,
  ArrowRight,
  CalendarCheck,
  Lock,
  FileCheck,
  DollarSign,
  Shield,
  MapPin,
  Phone,
  CheckCircle,
  Clock,
  TrendingUp,
  Target,
  Award,
  Eye,
  Users,
  Star,
} from "lucide-react";

export default function WhyChooseUsPage(): React.ReactElement {
  return (
    <PageLayout>
      {/* Hero Section - Full Width Dark Gradient */}
      <section className="relative w-full bg-gradient-to-br from-deep-slate-900 to-deep-slate-800 py-28 md:py-36 lg:py-44">
        <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            We&apos;re The Only Service Offering Pre-Scheduled Appointments
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4">
            Not All Leads Are Created Equal. Here&apos;s What Makes Blueprint
            Lead Different.
          </p>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
            We&apos;re not another lead generation platform flooding you with
            cold contacts. We deliver pre-scheduled appointments with
            permit-verified homeowners who are ready to move forward.
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
                number: "Only One",
                label: "Pre-Scheduled Service",
                icon: CalendarCheck,
                description: "Appointments set before delivery",
              },
              {
                number: "100%",
                label: "Exclusive Leads",
                icon: Lock,
                description: "Zero competition",
              },
              {
                number: "Licensed Only",
                label: "Professional Network",
                icon: Shield,
                description: "No unlicensed workers",
              },
            ]}
          />
        </div>
      </section>

      {/* Core Differentiator - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-6 text-center">
            The Blueprint Lead Difference: Pre-Scheduled Appointments
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-center mb-12">
            <p className="text-lg md:text-xl text-slate-700">
              Every other lead generation service sells you a contact and wishes
              you luck.
            </p>
            <p className="text-lg md:text-xl text-slate-700">
              They give you a name and phone number from a homeowner who filled
              out a form. Then you compete with five other contractors to get
              them on the phone, schedule an appointment, and hope they
              don&apos;t ghost you.
            </p>
            <p className="text-xl md:text-2xl text-deep-slate-900 font-bold">
              We do it differently.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded-r-xl">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">
              Pre-Scheduled Appointments
            </h3>
            <p className="text-lg text-emerald-900 mb-4">
              We schedule the appointment before you receive the lead.
            </p>
            <p className="text-lg text-emerald-800 mb-4">
              The homeowner has agreed to a specific date and time to meet with
              a contractor. They&apos;re expecting your confirmation call.
              They&apos;re ready for your visit.
            </p>
            <p className="text-lg text-emerald-900 font-semibold">
              You&apos;re not chasing—you&apos;re expected.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl text-slate-700 italic">
              This is the only service in the industry that delivers
              pre-scheduled appointments.
            </p>
            <p className="text-lg md:text-xl text-slate-700 italic mt-2">
              Not just verified leads. Not just exclusive contacts.
              Pre-scheduled appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-12 text-center">
            Why Pre-Scheduled Appointments Change Everything
          </h2>

          <FeatureGrid columns={3}>
            <IconFeatureCard
              icon={Phone}
              title="No Cold Calling"
              description="You're not hoping the homeowner picks up. You're calling to confirm an appointment they already agreed to."
              variant="emerald"
            />
            <IconFeatureCard
              icon={CheckCircle}
              title="Higher Show Rates"
              description="When homeowners commit to a specific date and time, they show up. No more endless rescheduling."
              variant="emerald"
            />
            <IconFeatureCard
              icon={Users}
              title="Professional First Impression"
              description="You're not pitching the appointment. You're confirming it. You start as the professional they're expecting."
              variant="emerald"
            />
            <IconFeatureCard
              icon={Clock}
              title="Immediate Value"
              description="The appointment is set. The homeowner is ready. You can plan your schedule around confirmed meetings."
              variant="emerald"
            />
            <IconFeatureCard
              icon={TrendingUp}
              title="Better Close Rates"
              description="Homeowners who commit to appointments are serious. They're not browsing. They're ready to move forward."
              variant="emerald"
            />
            <IconFeatureCard
              icon={Target}
              title="Focused Sales Process"
              description="Spend your time presenting estimates to ready homeowners, not chasing people who never answer."
              variant="emerald"
            />
          </FeatureGrid>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-deep-slate-900 font-bold">
              If you&apos;ve tried traditional lead generation, you know the
              difference this makes.
            </p>
          </div>
        </div>
      </section>

      {/* The Five Differentiators - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-12 text-center">
            The Five Things That Set Us Apart
          </h2>

          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Differentiator 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-deep-slate-900">
                  Pre-Scheduled Appointments (The Only Service Offering This)
                </h3>
              </div>
              <p className="text-lg text-slate-700 mb-3">
                We&apos;ve said it before, but it bears repeating: we&apos;re
                the only lead generation service that schedules appointments
                before delivering leads.
              </p>
              <p className="text-lg text-slate-700 mb-3">
                The homeowner has agreed to meet you at a specific date and
                time. This isn&apos;t a cold contact. It&apos;s a scheduled
                business meeting with a ready homeowner.
              </p>
              <p className="text-lg text-slate-700">
                No cold calling. No phone tag. No chasing. The homeowner expects
                your confirmation call and your visit.
              </p>
            </div>

            {/* Differentiator 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-deep-slate-900">
                  100% Exclusive Leads—Zero Competition
                </h3>
              </div>
              <p className="text-lg text-slate-700 mb-3">
                Each appointment is sold to only one contractor.
              </p>
              <p className="text-lg text-slate-700 mb-3">
                When you receive a lead from Blueprint Lead, you&apos;re the
                only contractor meeting with that homeowner. No bidding wars. No
                competing quotes. No racing against five other companies.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mb-2" />
                  <p className="text-slate-700">
                    Higher close rates (no price competition)
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mb-2" />
                  <p className="text-slate-700">
                    Better control over pricing and margins
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mb-2" />
                  <p className="text-slate-700">
                    Stronger homeowner relationships from the start
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mb-2" />
                  <p className="text-slate-700">
                    Homeowner focused on you, not comparing four others
                  </p>
                </div>
              </div>
            </div>

            {/* Differentiator 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-deep-slate-900">
                  Permit-Verified Projects Only
                </h3>
              </div>
              <p className="text-lg text-slate-700 mb-3">
                Every single project is backed by official LA County permit
                documentation.
              </p>
              <p className="text-lg text-slate-700 mb-3">
                We verify the permit number, status, APN, and project
                classification before we ever contact the homeowner.
                You&apos;re getting real, legitimate, moving-forward projects.
              </p>
              <CalloutBox type="info" title="What We Verify">
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Active permit status with LA County</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Permit type and scope of work</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Assessor&apos;s Parcel Number (APN)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Property ownership verification</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Project classification and details</span>
                  </li>
                </ul>
              </CalloutBox>
            </div>

            {/* Differentiator 4 */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-deep-slate-900">
                  High-Value Projects Only ($85,000 Minimum)
                </h3>
              </div>
              <p className="text-lg text-slate-700 mb-3">
                We don&apos;t waste your time with small repairs or low-margin
                projects.
              </p>
              <p className="text-lg text-slate-700 mb-3">
                Every lead is for projects starting at $85,000, with most in the
                $150,000 - $600,000+ range. These are substantial construction
                projects worth your time and resources.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-6">
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-emerald-600 mb-2">
                    Tier 1
                  </p>
                  <p className="text-sm text-slate-700">$85K - $150K</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-emerald-600 mb-2">
                    Tier 2
                  </p>
                  <p className="text-sm text-slate-700">$150K - $300K</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-emerald-600 mb-2">
                    Tier 3
                  </p>
                  <p className="text-sm text-slate-700">$300K - $600K</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-emerald-600 mb-2">
                    Premium
                  </p>
                  <p className="text-sm text-slate-700">$600K+</p>
                </div>
              </div>
            </div>

            {/* Differentiator 5 */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  5
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-deep-slate-900">
                  Licensed & Insured Contractors Only
                </h3>
              </div>
              <p className="text-lg text-slate-700 mb-3">
                We only work with licensed and insured contractors.
              </p>
              <p className="text-lg text-slate-700 mb-3">
                This protects homeowners and protects you by ensuring
                you&apos;re part of a professional network. No unlicensed
                competition driving down prices or cutting corners.
              </p>
              <p className="text-lg text-slate-700">
                Homeowners know they&apos;re working with legitimate
                professionals. Your license gives you credibility from the first
                conversation. Better close rates. Better margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-12 text-center">
            How We Stack Up Against the Competition
          </h2>

          <ComparisonTable
            title="Blueprint Lead vs Traditional Lead Services"
            traditional={[
              { text: "Homeowner fills out online form" },
              { text: "Lead shared with 3-8 contractors" },
              { text: "Self-reported, no verification" },
              { text: "No minimum project value" },
              { text: "Open to unlicensed workers" },
              { text: "National, not specialized" },
              { text: "High competition for every lead" },
              { text: "Cold calling required" },
              { text: "Basic contact info only" },
              { text: "Pay-per-lead model" },
            ]}
            blueprintLead={[
              { text: "We proactively monitor permits" },
              { text: "100% exclusive to one contractor" },
              { text: "Permit-verified with county docs" },
              { text: "$85K minimum project value" },
              { text: "Licensed contractors only" },
              { text: "LA County focused specialists" },
              { text: "Zero competition" },
              { text: "Pre-scheduled appointments" },
              { text: "Complete documentation provided" },
              { text: "Upfront + success fee" },
            ]}
          />
        </div>
      </section>

      {/* Additional Advantages - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-12 text-center">
            What Else You Get
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IconFeatureCard
              icon={FileCheck}
              title="Complete Lead Information"
              description="Full homeowner contact, detailed project scope, permit documentation, property details, and appointment confirmation."
            />
            <IconFeatureCard
              icon={MapPin}
              title="LA County Focus"
              description="We exclusively serve LA County. We know the permit systems, neighborhoods, project types, and market."
            />
            <IconFeatureCard
              icon={Eye}
              title="Transparent Pricing"
              description="Upfront fee + success fee model. No hidden costs. Success fee only paid when you close."
            />
            <IconFeatureCard
              icon={Calendar}
              title="Four Years of Experience"
              description="Since 2021, we've been connecting licensed contractors with permit-verified, high-value projects."
            />
            <IconFeatureCard
              icon={Users}
              title="Ongoing Support"
              description="Our team provides best practices for appointment confirmation, closing strategies, and ongoing guidance."
            />
            <IconFeatureCard
              icon={Award}
              title="Proven Model"
              description="We're not a startup. We're an established service with a proven model that delivers results."
            />
          </div>
        </div>
      </section>

      {/* Testimonials - Full Width */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-12 text-center">
            Trusted by Licensed Contractors Across LA County
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="I've tried every lead generation service out there. This is the first one where the homeowner actually picked up the phone and remembered scheduling the appointment. Game changer."
              name="Professional Contractor"
              company="Licensed & Insured"
              specialty="General Contractor"
              verified={true}
              rating={5}
            />
            <TestimonialCard
              quote="No more competing with five other contractors. No more cold calling. Just exclusive appointments with serious homeowners. My close rate has tripled."
              name="Licensed Professional"
              company="Licensed & Insured"
              specialty="Remodeling Specialist"
              verified={true}
              rating={5}
            />
            <TestimonialCard
              quote="The permit verification alone is worth it. I know every project is real before I even make the call. These are quality leads that actually convert."
              name="Verified Contractor"
              company="Licensed & Insured"
              specialty="Custom Builder"
              verified={true}
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Addressing Objections - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate-900 mb-12 text-center">
            Questions We Often Hear
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Objection 1 */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-deep-slate-900 mb-3">
                &quot;This sounds too good to be true.&quot;
              </h3>
              <p className="text-lg text-slate-700">
                We understand the skepticism. Most contractors have been burned
                by bad leads. That&apos;s exactly why we built Blueprint Lead
                differently. Our permit-verification and appointment-setting
                process costs us time and resources upfront. We&apos;ve been
                doing this for four years because it works.
              </p>
            </div>

            {/* Objection 2 */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-deep-slate-900 mb-3">
                &quot;How do I know the leads are real?&quot;
              </h3>
              <p className="text-lg text-slate-700">
                Every lead includes verifiable permit documentation—permit
                number, APN, project classification—that you can independently
                verify with LA County records. The homeowner has a scheduled
                appointment and is expecting your call. You&apos;ll know
                it&apos;s real before you leave your office.
              </p>
            </div>

            {/* Objection 3 */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-deep-slate-900 mb-3">
                &quot;What if the homeowner cancels?&quot;
              </h3>
              <p className="text-lg text-slate-700">
                We pre-qualify every homeowner and schedule appointments with
                those who are committed. Occasionally, situations change. We
                evaluate every case individually and work with you to find a
                fair resolution when there&apos;s a legitimate quality issue.
              </p>
            </div>

            {/* Objection 4 */}
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-deep-slate-900 mb-3">
                &quot;What makes you different from HomeAdvisor or
                Thumbtack?&quot;
              </h3>
              <p className="text-lg text-slate-700">
                Two words: pre-scheduled appointments. No other service does
                this. We don&apos;t sell you a contact and wish you luck. We
                deliver appointments with homeowners who are ready to meet you.
                Plus 100% exclusivity, permit verification, and high-value
                projects only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width Emerald Gradient */}
      <section className="w-full bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-4">
            For four years, we&apos;ve been connecting licensed contractors with
            pre-scheduled appointments.
          </p>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            No cold calling. No competition. No tire-kickers. Just exclusive,
            permit-verified opportunities with homeowners who are ready to
            build.
          </p>
          <p className="text-lg md:text-xl text-white/95 mb-10 font-semibold">
            We&apos;re selective about who we work with. If you&apos;re a
            licensed, insured contractor ready to grow your business,
            let&apos;s talk.
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
          <p className="text-sm text-white/90 mt-8">
            Licensed & Insured Contractors Only | Serving LA County Since 2021
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

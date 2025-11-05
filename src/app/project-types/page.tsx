"use client";

import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { StatsBar } from "@/components/organisms/StatsBar";
import { ProjectTypeCard } from "@/components/organisms/ProjectTypeCard";
import { CalloutBox } from "@/components/molecules/CalloutBox";
import Image from "next/image";
import {
  Home,
  Building2,
  Hammer,
  ChefHat,
  Wrench,
  Waves,
  Trash2,
  Home as HomeRoof,
  Calendar,
  ArrowRight,
  TrendingUp,
  Layers,
  DollarSign,
} from "lucide-react";

export default function ProjectTypesPage(): React.ReactElement {
  return (
    <PageLayout>
      {/* Hero Section - Full Width */}
      <section className="relative w-full bg-gradient-to-br from-deep-slate-900 to-deep-slate-800 py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/project-types-hero.jpg"
            alt="Collage of high-value construction projects including ADU construction, kitchen remodels, and pool installations"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            High-Value Project Types We Cover
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4">
            Permit-Verified Construction Projects Across LA County
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Blueprint Lead specializes in substantial residential construction
            projects starting at $85,000.
          </p>
        </div>
      </section>

      {/* Stats Bar - Overlapping Hero */}
      <section className="w-full -mt-20 relative z-20 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <StatsBar
            stats={[
              {
                number: "$85K+",
                label: "Minimum Project Value",
                icon: DollarSign,
                description: "High-value projects only",
              },
              {
                number: "8",
                label: "Project Categories",
                icon: Layers,
                description: "Diverse construction types",
              },
              {
                number: "100%",
                label: "Permit-Verified",
                icon: Building2,
                description: "Official documentation",
              },
              {
                number: "All LA County",
                label: "Coverage Area",
                icon: TrendingUp,
                description: "Complete geographic reach",
              },
            ]}
          />
        </div>
      </section>

      {/* Project Types Grid - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            What We Can Connect You With
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Every project is backed by official LA County permit documentation
            and pre-qualified homeowner commitment.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* ADUs */}
            <ProjectTypeCard
              name="ADUs (Accessory Dwelling Units)"
              description="Detached and attached accessory dwelling units, granny flats, garage conversions, and junior ADUs. One of the most in-demand project types in LA County."
              icon={Home}
              badge="Popular"
              badgeVariant="success"
              examples={[
                "New detached ADU construction",
                "Garage conversions to living space",
                "Multi-unit ADU developments",
              ]}
            />

            {/* New Construction */}
            <ProjectTypeCard
              name="New Construction"
              description="Ground-up residential construction projects. Custom single-family homes, multi-unit builds, and luxury estate construction."
              icon={Building2}
              badge="High Value"
              badgeVariant="primary"
              examples={[
                "Custom single-family homes",
                "Luxury estate construction",
                "Spec home development",
              ]}
            />

            {/* Full Property Rebuilds */}
            <ProjectTypeCard
              name="Full Property Rebuilds"
              description="Complete demolition and reconstruction of existing properties. Tear-down and rebuild projects for homeowners seeking modern construction."
              icon={Hammer}
              examples={[
                "Complete tear-down and rebuild",
                "Foundation-up reconstruction",
                "Lot optimization rebuilds",
              ]}
            />

            {/* Major Remodels */}
            <ProjectTypeCard
              name="Major Remodels"
              description="Extensive interior and exterior remodeling projects. Whole-home renovations, luxury kitchen remodels, and multi-room additions."
              icon={ChefHat}
              badge="All Tiers"
              badgeVariant="secondary"
              examples={[
                "Whole-home remodels",
                "Full kitchen renovations",
                "Multiple bathroom remodels",
              ]}
            />

            {/* Seismic Retrofits */}
            <ProjectTypeCard
              name="Seismic Retrofits"
              description="Structural earthquake safety improvements and upgrades. Foundation bolting, cripple wall bracing, and comprehensive structural reinforcement."
              icon={Wrench}
              examples={[
                "Foundation bolting and reinforcement",
                "Soft-story retrofitting",
                "Hillside home stabilization",
              ]}
            />

            {/* Pools & Outdoor Construction */}
            <ProjectTypeCard
              name="Pools & Outdoor Construction"
              description="Custom pool installation, spa construction, and major outdoor living space development. High-end backyard transformations."
              icon={Waves}
              examples={[
                "Custom in-ground pool installation",
                "Outdoor kitchens and entertainment",
                "Complete backyard transformations",
              ]}
            />

            {/* Demolition Projects */}
            <ProjectTypeCard
              name="Demolition Projects"
              description="Permitted demolition work preparing properties for future construction. Often the first phase of larger rebuild or new construction projects."
              icon={Trash2}
              examples={[
                "Full structure demolition",
                "Site preparation for new construction",
                "Hazardous material abatement",
              ]}
            />

            {/* Re-Roofing */}
            <ProjectTypeCard
              name="Re-Roofing (Large Scale)"
              description="Major roof replacement on large homes, estates, and complex roof systems. Premium materials and comprehensive installations."
              icon={HomeRoof}
              examples={[
                "Large estate re-roofing",
                "Premium material installations",
                "Roof replacement with solar integration",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Project Value Ranges - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            Project Value Ranges
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Tier 1 Projects
              </h3>
              <p className="text-3xl font-bold text-emerald-accent-600 mb-4">
                $85,000 - $150,000
              </p>
              <p className="text-slate-700 mb-4">
                ADUs, major kitchen remodels, multiple bathroom remodels,
                large-scale re-roofing projects.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Established mid-size projects</li>
                <li>• Steady project flow</li>
                <li>• Ideal for growing businesses</li>
              </ul>
            </div>

            {/* Tier 2 */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Tier 2 Projects
              </h3>
              <p className="text-3xl font-bold text-emerald-accent-600 mb-4">
                $150,000 - $300,000
              </p>
              <p className="text-slate-700 mb-4">
                Whole-home remodels, large ADU construction, major structural
                additions, full property renovations.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Large-scale residential projects</li>
                <li>• Higher margin opportunities</li>
                <li>• Proven track record required</li>
              </ul>
            </div>

            {/* Tier 3 */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Tier 3 Projects
              </h3>
              <p className="text-3xl font-bold text-emerald-accent-600 mb-4">
                $300,000 - $600,000
              </p>
              <p className="text-slate-700 mb-4">
                Full home rebuilds, large-scale new construction, luxury
                whole-home remodels, multi-unit ADUs.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Major construction and rebuilds</li>
                <li>• Signature portfolio projects</li>
                <li>• Established contractors only</li>
              </ul>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-xl border-2 border-emerald-accent-600 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Premium Tier Projects
              </h3>
              <p className="text-3xl font-bold text-emerald-accent-600 mb-4">
                $600,000+
              </p>
              <p className="text-slate-700 mb-4">
                Luxury custom new construction, full estate rebuilds, high-end
                multi-story additions, premium architectural projects.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Luxury and estate construction</li>
                <li>• High-profile signature projects</li>
                <li>• Elite contractor network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Setting Preferences - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center">
            What to Expect
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-slate-700 text-center">
              Project availability varies based on current permit activity across
              LA County.
            </p>

            <p className="text-lg text-slate-700 text-center">
              We monitor thousands of permits daily and match projects to
              contractors based on preferences and tier selection.
            </p>

            <CalloutBox type="info" title="Setting Your Preferences">
              <p className="mb-3">
                During your consultation and onboarding, you&apos;ll specify:
              </p>
              <ul className="space-y-2">
                <li>• Your preferred project types</li>
                <li>• Your tier level(s)</li>
                <li>• Your service areas within LA County</li>
                <li>• Your capacity and volume goals</li>
              </ul>
            </CalloutBox>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Project Mix
                </h3>
                <p className="text-slate-700">
                  Most contractors work across multiple project types to maintain
                  consistent lead flow.
                </p>
                <p className="text-slate-700 mt-2">
                  We recommend selecting 3-5 project types for optimal matching.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Geographic Distribution
                </h3>
                <p className="text-slate-700">
                  Projects are available throughout LA County.
                </p>
                <p className="text-slate-700 mt-2">
                  You can specify preferred cities, neighborhoods, or general
                  areas (South Bay, West LA, San Fernando Valley, etc.).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Examples - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            Example Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="relative h-64 md:h-72 rounded-xl overflow-hidden">
                <Image
                  src="/images/pages/project-types/example-adu.jpg"
                  alt="Modern accessory dwelling unit (ADU) construction in Los Angeles County backyard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">
                ADU Construction
              </h3>
              <p className="text-slate-600">
                Detached accessory dwelling units are among our most common
                high-value projects.
              </p>
            </div>

            <div>
              <div className="relative h-64 md:h-72 rounded-xl overflow-hidden">
                <Image
                  src="/images/pages/project-types/example-kitchen.jpg"
                  alt="Luxury kitchen remodel featuring custom cabinetry, granite countertops, and high-end appliances"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">
                Major Remodels
              </h3>
              <p className="text-slate-600">
                Whole-home renovations and luxury kitchen transformations.
              </p>
            </div>

            <div>
              <div className="relative h-64 md:h-72 rounded-xl overflow-hidden">
                <Image
                  src="/images/pages/project-types/example-pool.jpg"
                  alt="Custom in-ground pool installation with outdoor living space and professional landscaping"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">
                Pool & Outdoor Living
              </h3>
              <p className="text-slate-600">
                High-end backyard transformations with pools and entertainment
                areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width Emerald Gradient */}
      <section className="w-full bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Access These High-Value Projects?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            Blueprint Lead connects licensed contractors with the substantial
            construction projects that grow businesses.
          </p>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            Pre-scheduled appointments. Permit-verified. Exclusive.
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
              Learn How It Works
            </CTAButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

"use client";

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Textarea } from "@/components/atoms/Textarea";
import { Link } from "@/components/atoms/Link";
import { Badge } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import { CTAButton } from "@/components/molecules/CTAButton";
import { TrustBadge } from "@/components/molecules/TrustBadge";
import { NavLink } from "@/components/molecules/NavLink";
import { FormField } from "@/components/molecules/FormField";
import { TierCard } from "@/components/organisms/TierCard";
import { ProjectTypeCard } from "@/components/organisms/ProjectTypeCard";
import { TestimonialCard } from "@/components/organisms/TestimonialCard";
import { FAQAccordion } from "@/components/organisms/FAQAccordion";
import { TIERS, PROJECT_TYPES, TESTIMONIALS } from "@/lib/constants";
import {
  Check,
  Calendar,
  ArrowRight,
  ExternalLink,
  Home,
  Info,
  Mail,
  Hammer,
  Droplet,
} from "lucide-react";

export default function ComponentsTestPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <header className="border-b border-gray-200 pb-8">
          <h1 className="text-6xl font-bold text-deep-slate-900 mb-2">
            Blueprint Lead Components
          </h1>
          <p className="text-xl text-deep-slate-600">
            Complete component library showcase - Phase 5A verification
          </p>
          <p className="text-sm text-deep-slate-500 mt-2">
            Note: This page will be deleted in Phase 8 (Polish Agent)
          </p>
        </header>

        {/* Atomic Components */}
        <section className="space-y-12">
          <div>
            <h2 className="mb-6">Atomic Components</h2>
            <p className="text-deep-slate-600 mb-8">
              Basic building blocks using Blueprint Lead design system
            </p>
          </div>

          {/* Button Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">Button Component</h3>

            <div>
              <h4 className="mb-4 text-lg">Variants</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="text">Text Button</Button>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg">Sizes</h4>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg">States</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Default</Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
                <div className="text-sm text-deep-slate-500">
                  (Hover and focus states work with mouse/keyboard)
                </div>
              </div>
            </div>
          </div>

          {/* Input Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">Input Component</h3>

            <div className="max-w-md space-y-4">
              <div>
                <label className="block text-sm font-medium text-deep-slate-900 mb-2">
                  Text Input
                </label>
                <Input type="text" placeholder="Enter your name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-slate-900 mb-2">
                  Email Input
                </label>
                <Input type="email" placeholder="you@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-slate-900 mb-2">
                  Phone Input
                </label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-slate-900 mb-2">
                  Error State
                </label>
                <Input
                  type="text"
                  placeholder="Invalid input"
                  error
                  defaultValue="Bad value"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-slate-900 mb-2">
                  Disabled State
                </label>
                <Input type="text" placeholder="Disabled" disabled />
              </div>
            </div>
          </div>

          {/* Textarea Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">Textarea Component</h3>

            <div className="max-w-md space-y-4">
              <div>
                <label className="block text-sm font-medium text-deep-slate-900 mb-2">
                  Default Textarea
                </label>
                <Textarea placeholder="Enter your message here..." rows={4} />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-slate-900 mb-2">
                  Error State
                </label>
                <Textarea
                  placeholder="Error state"
                  error
                  rows={3}
                  defaultValue="This field has an error"
                />
              </div>
            </div>
          </div>

          {/* Link Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">Link Component</h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-lg">Internal Links</h4>
                <div className="space-x-4">
                  <Link href="/">Home</Link>
                  <Link href="/about">About Us</Link>
                  <Link href="/pricing">Pricing</Link>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-lg">External Link</h4>
                <Link href="https://example.com" external>
                  External Link (opens in new tab)
                </Link>
              </div>
            </div>
          </div>

          {/* Badge Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">Badge Component</h3>

            <div>
              <h4 className="mb-4 text-lg">Variants</h4>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary">Primary Badge</Badge>
                <Badge variant="secondary">Secondary Badge</Badge>
                <Badge variant="success">Success Badge</Badge>
                <Badge variant="warning">Warning Badge</Badge>
                <Badge variant="error">Error Badge</Badge>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg">Sizes</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="primary" size="sm">
                  Small
                </Badge>
                <Badge variant="primary" size="md">
                  Medium
                </Badge>
                <Badge variant="primary" size="lg">
                  Large
                </Badge>
              </div>
            </div>
          </div>

          {/* Icon Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">Icon Component</h3>

            <div>
              <h4 className="mb-4 text-lg">Sizes</h4>
              <div className="flex items-end gap-6">
                <div className="text-center">
                  <Icon icon={Check} size="sm" className="text-emerald-accent-600 mx-auto mb-2" />
                  <p className="text-xs text-deep-slate-500">Small (16px)</p>
                </div>
                <div className="text-center">
                  <Icon icon={Check} size="md" className="text-emerald-accent-600 mx-auto mb-2" />
                  <p className="text-xs text-deep-slate-500">Medium (24px)</p>
                </div>
                <div className="text-center">
                  <Icon icon={Check} size="lg" className="text-emerald-accent-600 mx-auto mb-2" />
                  <p className="text-xs text-deep-slate-500">Large (32px)</p>
                </div>
                <div className="text-center">
                  <Icon icon={Check} size="xl" className="text-emerald-accent-600 mx-auto mb-2" />
                  <p className="text-xs text-deep-slate-500">XL (40px)</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg">Different Icons</h4>
              <div className="flex gap-4">
                <Icon icon={Calendar} size="md" className="text-deep-slate-600" />
                <Icon icon={Mail} size="md" className="text-deep-slate-600" />
                <Icon icon={Home} size="md" className="text-deep-slate-600" />
                <Icon icon={Info} size="md" className="text-deep-slate-600" />
                <Icon icon={ExternalLink} size="md" className="text-deep-slate-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Molecular Components */}
        <section className="space-y-12 border-t border-gray-200 pt-16">
          <div>
            <h2 className="mb-6">Molecular Components</h2>
            <p className="text-deep-slate-600 mb-8">
              Complex components composed from atomic building blocks
            </p>
          </div>

          {/* CTAButton Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">CTAButton Component</h3>

            <div>
              <h4 className="mb-4 text-lg">With Icon (Right Position)</h4>
              <div className="flex flex-wrap gap-4">
                <CTAButton variant="primary" icon={ArrowRight}>
                  Get Started
                </CTAButton>
                <CTAButton variant="secondary" icon={Calendar}>
                  Schedule Consultation
                </CTAButton>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg">With Icon (Left Position)</h4>
              <div className="flex flex-wrap gap-4">
                <CTAButton variant="primary" icon={Calendar} iconPosition="left">
                  Book Now
                </CTAButton>
                <CTAButton variant="outline" icon={Mail} iconPosition="left">
                  Contact Us
                </CTAButton>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg">External Link (for Calendly)</h4>
              <CTAButton
                variant="primary"
                icon={Calendar}
                href="https://calendly.com/example"
              >
                Schedule on Calendly
              </CTAButton>
              <p className="text-sm text-deep-slate-500 mt-2">
                (Opens in new tab with proper attributes)
              </p>
            </div>
          </div>

          {/* TrustBadge Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">TrustBadge Component</h3>

            <div>
              <h4 className="mb-4 text-lg">Trust Messages</h4>
              <div className="flex flex-wrap gap-3">
                <TrustBadge message="exclusive" variant="primary" />
                <TrustBadge message="verified" variant="success" />
                <TrustBadge message="licensed" variant="secondary" />
                <TrustBadge message="established" variant="primary" />
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg">Different Sizes</h4>
              <div className="flex flex-wrap items-center gap-3">
                <TrustBadge message="exclusive" size="sm" />
                <TrustBadge message="exclusive" size="md" />
                <TrustBadge message="exclusive" size="lg" />
              </div>
            </div>
          </div>

          {/* NavLink Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">NavLink Component</h3>

            <div>
              <h4 className="mb-4 text-lg">Navigation Links</h4>
              <p className="text-sm text-deep-slate-600 mb-4">
                Active link is automatically highlighted based on current route
              </p>
              <nav className="flex gap-6">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/components-test">Components (Active)</NavLink>
                <NavLink href="/pricing">Pricing</NavLink>
              </nav>
            </div>
          </div>

          {/* FormField Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">FormField Component</h3>

            <div className="max-w-md space-y-6">
              <FormField
                label="Full Name"
                type="text"
                id="name"
                inputProps={{ placeholder: "John Doe" }}
              />

              <FormField
                label="Email Address"
                type="email"
                id="email"
                helperText="We'll never share your email"
                inputProps={{ placeholder: "you@example.com" }}
              />

              <FormField
                label="Phone Number"
                type="tel"
                id="phone"
                error="Please enter a valid phone number"
                inputProps={{ placeholder: "(555) 123-4567" }}
              />

              <FormField
                label="Project Description"
                type="textarea"
                id="description"
                helperText="Tell us about your project (optional)"
                inputProps={{ placeholder: "Describe your project...", rows: 4 }}
              />
            </div>
          </div>
        </section>

        {/* Organism Components - Phase 5A */}
        <section className="space-y-12 border-t border-gray-200 pt-16">
          <div>
            <h2 className="mb-6">Organism Components (Phase 5A)</h2>
            <p className="text-deep-slate-600 mb-8">
              Complex organisms composed from atoms and molecules with real data
            </p>
          </div>

          {/* TierCard Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">TierCard Component</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TIERS.map((tier, index) => (
                <TierCard key={index} {...tier} />
              ))}
            </div>
          </div>

          {/* ProjectTypeCard Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">ProjectTypeCard Component</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECT_TYPES.slice(0, 3).map((type, index) => (
                <ProjectTypeCard key={index} {...type} />
              ))}
            </div>
          </div>

          {/* TestimonialCard Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">TestimonialCard Component</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          {/* FAQAccordion Component */}
          <div className="space-y-6">
            <h3 className="text-deep-slate-900">FAQAccordion Component</h3>
            <div className="max-w-3xl">
              <FAQAccordion
                items={[
                  {
                    question: "What licenses do I need to receive leads?",
                    answer:
                      "You must hold an active California contractor's license (Class A, B, or relevant C-class specialty license) and maintain current liability insurance.",
                  },
                  {
                    question: "How are homeowners vetted?",
                    answer:
                      "Every homeowner goes through permit verification, budget qualification, and timeline confirmation before being matched with contractors.",
                  },
                  {
                    question: "Do you sell leads to multiple contractors?",
                    answer:
                      "No. Each lead is exclusive to one contractor per specialty. For multi-discipline projects, we may match different specialists.",
                  },
                ]}
                defaultOpenIndex={0}
              />
            </div>
          </div>
        </section>

        {/* Accessibility Testing */}
        <section className="space-y-8 border-t border-gray-200 pt-16">
          <div>
            <h2 className="mb-6">Accessibility Testing</h2>
            <p className="text-deep-slate-600 mb-8">
              All components support keyboard navigation and screen readers
            </p>
          </div>

          <div className="bg-deep-slate-50 rounded-xl p-6 space-y-4">
            <h3 className="text-lg">Keyboard Navigation Instructions</h3>
            <ul className="space-y-2 text-sm text-deep-slate-700">
              <li>• Press <kbd className="px-2 py-1 bg-white border border-deep-slate-300 rounded text-xs">Tab</kbd> to navigate between interactive elements</li>
              <li>• Press <kbd className="px-2 py-1 bg-white border border-deep-slate-300 rounded text-xs">Enter</kbd> or <kbd className="px-2 py-1 bg-white border border-deep-slate-300 rounded text-xs">Space</kbd> to activate buttons</li>
              <li>• Press <kbd className="px-2 py-1 bg-white border border-deep-slate-300 rounded text-xs">Enter</kbd> to follow links</li>
              <li>• All interactive elements have visible focus indicators</li>
              <li>• Error messages are announced to screen readers</li>
              <li>• External links have appropriate aria-labels</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="mb-3">✅ Accessibility Features</h4>
              <ul className="space-y-1 text-sm text-deep-slate-700">
                <li>• WCAG AA color contrast ratios</li>
                <li>• Keyboard navigation support</li>
                <li>• Focus visible indicators</li>
                <li>• ARIA labels and descriptions</li>
                <li>• Semantic HTML elements</li>
                <li>• Screen reader compatibility</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="mb-3">🎨 Design System</h4>
              <ul className="space-y-1 text-sm text-deep-slate-700">
                <li>• Deep Slate (primary color)</li>
                <li>• Emerald Green (accent color)</li>
                <li>• Inter font family</li>
                <li>• Consistent spacing scale</li>
                <li>• Responsive breakpoints</li>
                <li>• Smooth transitions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="border-t border-gray-200 pt-8 mt-16">
          <p className="text-sm text-deep-slate-500">
            <strong>Phase 5A Complete - Organisms Built</strong><br />
            All atomic, molecular, and organism components have been implemented and verified.
            TierCard, ProjectTypeCard, TestimonialCard, and FAQAccordion are now available.
            This page will be deleted by Polish Agent in Phase 8.
          </p>
        </footer>
      </div>
    </main>
  );
}

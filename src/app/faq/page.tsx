"use client";

import { PageLayout } from "@/components/templates/PageLayout";
import { CTAButton } from "@/components/molecules/CTAButton";
import { FAQAccordion } from "@/components/organisms/FAQAccordion";
import { CalloutBox } from "@/components/molecules/CalloutBox";
import { Calendar, Mail } from "lucide-react";

export default function FAQPage(): React.ReactElement {
  return (
    <PageLayout>
      {/* Hero Section - Full Width */}
      <section className="relative w-full bg-gradient-to-br from-deep-slate-900 to-deep-slate-800 py-20 md:py-28 lg:py-32">
        <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Everything You Need to Know About Blueprint Lead
          </p>
        </div>
      </section>

      {/* Introduction - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <p className="text-lg md:text-xl text-slate-700 text-center mb-12">
            We believe in transparency. Here are answers to the questions we hear
            most often from contractors considering Blueprint Lead.
          </p>

          <CalloutBox type="info" title="Quick Navigation">
            <p className="mb-3">Jump to a category:</p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              <li>• Getting Started</li>
              <li>• About the Leads</li>
              <li>• Pricing & Fees</li>
              <li>• The Process</li>
              <li>• Project Details</li>
              <li>• Trust & Credibility</li>
              <li>• Legal & Compliance</li>
              <li>• Comparison Questions</li>
            </ul>
          </CalloutBox>
        </div>
      </section>

      {/* Getting Started - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12">
            Getting Started
          </h2>

          <FAQAccordion
            items={[
              {
                question: "Who can use Blueprint Lead?",
                answer:
                  "We exclusively work with licensed and insured contractors in LA County. You must have a valid California Contractor's License, current general liability insurance, and workers' compensation coverage to partner with us.",
              },
              {
                question: "How do I get started?",
                answer:
                  "Schedule a free consultation through our Calendly link or contact form. We'll discuss your business, project preferences, tier options, and pricing. If it's a good fit, we'll move forward with verification and onboarding. No obligation.",
              },
              {
                question: "Is there a consultation fee?",
                answer:
                  "No. The initial consultation is completely free with no obligation. We want to make sure we're a good fit for your business before moving forward.",
              },
              {
                question: "How long does onboarding take?",
                answer:
                  "After your consultation, the verification process typically takes 1-2 business days. This includes confirming your license and insurance, and completing the partnership agreement.",
              },
              {
                question: "Do I need to commit to a certain number of leads?",
                answer:
                  "No. There are no volume commitments or long-term contracts. You receive leads based on availability, your preferences, and your capacity.",
              },
              {
                question: "What are the requirements to work with Blueprint Lead?",
                answer:
                  "Valid California Contractor's License, current general liability insurance, workers' compensation coverage, and service area within LA County.",
              },
            ]}
            allowMultiple={false}
          />
        </div>
      </section>

      {/* About the Leads - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12">
            About the Leads
          </h2>

          <FAQAccordion
            items={[
              {
                question:
                  "What makes Blueprint Lead different from HomeAdvisor, Thumbtack, or Angi?",
                answer:
                  "Several critical differences: (1) We're the only service offering pre-scheduled appointments (homeowner has agreed to meet at a specific date/time), (2) 100% exclusive (you're the only contractor, not competing with 5+ others), (3) Permit-verified (backed by official LA County documentation), (4) High-value projects only ($85K minimum, no small repairs), (5) Homeowner is ready (not just browsing or price-shopping).",
              },
              {
                question: "Are the appointments really pre-scheduled?",
                answer:
                  "Yes. Before you receive the lead, we contact the homeowner, qualify their project, and schedule an appointment at a specific date and time. The homeowner has agreed to meet with a contractor. They're expecting your call to confirm and your visit to receive an estimate.",
              },
              {
                question: "How do you find these projects?",
                answer:
                  "We monitor permit activity across LA County daily. When we identify high-value construction projects, we verify the permit documentation, contact the homeowner to qualify their needs and timeline, and schedule appointments with those who are ready to meet with contractors.",
              },
              {
                question: "What information do I receive with each lead?",
                answer:
                  "Every lead includes: Complete homeowner information (name, contact details, address, phone, email, best contact times), Detailed project scope and specifications, Estimated project value and timeline, Verified permit documentation (permit number, status, APN, project classification), Pre-scheduled appointment details (date, time, homeowner confirmation).",
              },
              {
                question: "How do I know the leads are real?",
                answer:
                  "Every lead includes verifiable permit information that you can independently confirm with LA County. You can check the permit number, APN, and project details through official county records before your appointment.",
              },
              {
                question: "Is the lead exclusive to me?",
                answer:
                  "Yes, 100%. Each lead is sold to only one contractor. You're not competing with anyone else. The homeowner meets with you and only you.",
              },
              {
                question: "What if the homeowner isn't ready or cancels?",
                answer:
                  "We pre-qualify every homeowner to ensure they're ready to move forward. Occasionally, situations change. When there's a legitimate quality issue with a lead, we evaluate it on a case-by-case basis and work with you to find a fair resolution.",
              },
              {
                question: "Can I choose what types of projects I want?",
                answer:
                  "Yes. During your consultation and onboarding, we discuss your preferred project types, tier levels, and geographic areas within LA County. We match leads based on your preferences.",
              },
              {
                question: "How quickly will the homeowner expect me to call?",
                answer:
                  "We recommend calling within 24 hours of receiving the lead to confirm the appointment. The homeowner is expecting your call, so prompt communication is important.",
              },
              {
                question:
                  "Do homeowners know they're being connected with a contractor?",
                answer:
                  "Yes. We clearly communicate that we're scheduling an appointment for them to meet with a licensed contractor to discuss their project and receive an estimate.",
              },
            ]}
            allowMultiple={false}
          />
        </div>
      </section>

      {/* Pricing & Fees - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12">
            Pricing & Fees
          </h2>

          <FAQAccordion
            items={[
              {
                question: "How much does it cost?",
                answer:
                  "We use a two-part pricing model: an upfront lead fee (paid when you receive the lead) and a success fee (paid when you sign the contract). Exact amounts vary by tier and project type. We discuss specific pricing during your consultation.",
              },
              {
                question: "Why don't you list prices on the website?",
                answer:
                  "Pricing varies based on tier level, project type, and your specific needs. We believe in having transparent pricing discussions during consultation rather than displaying one-size-fits-all rates that may not apply to your situation.",
              },
              {
                question: "What is the upfront fee for?",
                answer:
                  "The upfront fee covers our costs for daily permit monitoring, project identification, permit verification, homeowner outreach and qualification, appointment scheduling, and delivery of complete lead information.",
              },
              {
                question: "When do I pay the success fee?",
                answer:
                  "The success fee is due when you sign a contract with the homeowner. You only pay this fee when you successfully close the project.",
              },
              {
                question: "What if I don't close the deal?",
                answer:
                  "You only pay the upfront lead fee. The success fee is only charged when you successfully sign the contract. We share some of the risk with you.",
              },
              {
                question: "Are there any other fees or subscriptions?",
                answer:
                  "No. It's upfront fee + success fee. That's it. No monthly subscriptions, platform fees, membership costs, or hidden charges.",
              },
              {
                question: "Can I work across multiple tiers?",
                answer:
                  "Yes. Many contractors work across multiple tiers depending on their capacity and project preferences. We'll discuss the best approach during your consultation.",
              },
              {
                question: "Is there a monthly minimum or commitment?",
                answer:
                  "No. There are no monthly minimums, volume requirements, or long-term commitments.",
              },
            ]}
            allowMultiple={false}
          />
        </div>
      </section>

      {/* The Process - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12">
            The Process
          </h2>

          <FAQAccordion
            items={[
              {
                question: "How quickly do I receive leads after onboarding?",
                answer:
                  "Lead delivery depends on current permit activity and project availability that matches your preferences. We focus on quality matches rather than volume, so timing varies.",
              },
              {
                question: "How are leads delivered to me?",
                answer:
                  "Leads are delivered via email with complete project documentation and appointment details. You receive everything you need to review the project and contact the homeowner.",
              },
              {
                question: "What do I do when I receive a lead?",
                answer:
                  "Review all the project information and documentation. Call the homeowner within 24 hours to confirm the pre-scheduled appointment (they're expecting your call). Prepare your estimate and materials. Show up on time. Present your best work.",
              },
              {
                question: "Do you provide any support or guidance?",
                answer:
                  "Yes. We provide best practices for appointment confirmation calls, questions to ask during site visits, estimation tips, and we're available if you have questions during the process.",
              },
              {
                question: "What happens after I meet with the homeowner?",
                answer:
                  "You present your estimate, answer their questions, and work to close the deal like any project. Once you sign the contract with the homeowner, you notify us and the success fee is processed.",
              },
              {
                question: "Can I choose which geographic areas I work in?",
                answer:
                  "Yes. We can target specific areas within LA County based on your service zones and preferences (e.g., South Bay, West LA, San Fernando Valley, etc.).",
              },
              {
                question: "How many leads can I expect per month?",
                answer:
                  "Lead volume depends on current permit activity, your tier and project preferences, and competition from other contractors in our network. We focus on quality over quantity and can't guarantee specific volume.",
              },
              {
                question: "Can I pause receiving leads if I'm at capacity?",
                answer:
                  "Yes. You can communicate your capacity at any time. We'll pause lead delivery until you're ready for more projects.",
              },
            ]}
            allowMultiple={false}
          />
        </div>
      </section>

      {/* Project Details - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12">
            Project Details
          </h2>

          <FAQAccordion
            items={[
              {
                question: "What types of projects do you have?",
                answer:
                  "We specialize in high-value residential construction including: ADUs (accessory dwelling units), New construction, Full rebuilds, Major remodels, Seismic retrofits, Pools and outdoor construction, Demolition, Re-roofing (large scale). See our Project Types page for full details.",
              },
              {
                question: "What's the minimum project value?",
                answer:
                  "$85,000. We focus exclusively on high-value construction projects. No small repairs or low-value work.",
              },
              {
                question: "Are these residential or commercial projects?",
                answer:
                  "Primarily high-value residential construction projects in LA County. Some large residential projects may have commercial-level complexity (multi-unit, large estates, etc.).",
              },
              {
                question: "Do you have projects in my specialty?",
                answer:
                  "We have diverse project types across four tier levels. During consultation, we'll discuss your specializations and determine if we have consistent project flow in your areas of expertise.",
              },
              {
                question: "What areas of LA County do you cover?",
                answer:
                  "All of LA County—South Bay, West LA, San Fernando Valley, San Gabriel Valley, Pasadena, Long Beach, and beyond. You specify your preferred service areas during onboarding.",
              },
            ]}
            allowMultiple={false}
          />
        </div>
      </section>

      {/* Trust & Credibility - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12">
            Trust & Credibility
          </h2>

          <FAQAccordion
            items={[
              {
                question: "How long has Blueprint Lead been in business?",
                answer:
                  "We've been connecting licensed contractors with permit-verified, pre-scheduled appointments since 2021. Four years of proven results.",
              },
              {
                question: "Do you have references or testimonials?",
                answer:
                  "Yes. We can provide references from licensed contractors currently using our service during your consultation.",
              },
              {
                question: "What if I have a bad experience with a lead?",
                answer:
                  "We take contractor satisfaction seriously. If you have concerns about lead quality, reach out to our team immediately. We evaluate every situation and work to find fair resolutions for legitimate quality issues.",
              },
              {
                question: "Is my information kept confidential?",
                answer:
                  "Yes. We protect your business information and never share your details with other contractors or third parties. See our Privacy Policy for full details.",
              },
              {
                question: "Are you licensed or accredited?",
                answer:
                  "Blueprint Lead is a lead generation service, not a contractor, so we don't hold a contractor's license. We verify that all contractors in our network are properly licensed and insured.",
              },
            ]}
            allowMultiple={false}
          />
        </div>
      </section>

      {/* Legal & Compliance - Full Width Slate */}
      <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12">
            Legal & Compliance
          </h2>

          <FAQAccordion
            items={[
              {
                question: "Do I need to sign a contract?",
                answer:
                  "Yes. There's a partnership agreement that outlines terms of service, pricing structure, exclusivity guarantees, and expectations for both parties.",
              },
              {
                question: "What if I want to stop using Blueprint Lead?",
                answer:
                  "You can stop receiving leads at any time. There are no long-term commitments. Any outstanding payment obligations for leads already received remain in effect per the partnership agreement.",
              },
              {
                question: "Are the homeowner contacts compliant with privacy laws?",
                answer:
                  "Yes. We comply with all California privacy and consumer protection laws in our homeowner outreach and data handling.",
              },
              {
                question: "What licenses do I need?",
                answer:
                  "You must have a valid California Contractor's License appropriate for the project types you work on (typically Class B General Contractor or relevant specialty license), plus current general liability insurance and workers' compensation coverage.",
              },
              {
                question: "Can I subcontract the work?",
                answer:
                  "How you fulfill the contract with the homeowner is between you and them. Our agreement is with you as the licensed contractor.",
              },
            ]}
            allowMultiple={false}
          />
        </div>
      </section>

      {/* Comparison Questions - Full Width White */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12">
            Comparison Questions
          </h2>

          <FAQAccordion
            items={[
              {
                question:
                  "Why should I use Blueprint Lead instead of doing my own marketing?",
                answer:
                  "DIY marketing requires significant investment in advertising, website, SEO, staff time for lead management, and months to see results. Blueprint Lead delivers immediate access to pre-qualified, pre-scheduled appointments without the upfront marketing investment.",
              },
              {
                question: "How is this different from buying leads from Angi or HomeAdvisor?",
                answer:
                  "Three major differences: (1) We're the only service offering pre-scheduled appointments, (2) Our leads are 100% exclusive (not shared with 3-8 contractors), (3) Every project is permit-verified (not just a form submission).",
              },
              {
                question: "What about referral programs or word-of-mouth?",
                answer:
                  "Referrals are excellent. Blueprint Lead complements referral business by providing consistent lead flow. Most contractors use multiple lead sources.",
              },
              {
                question: "Are these better than contractor networking groups?",
                answer:
                  "Networking is valuable for relationships and reputation. Blueprint Lead provides immediate access to ready homeowners without waiting for referrals to materialize.",
              },
            ]}
            allowMultiple={false}
          />
        </div>
      </section>

      {/* Still Have Questions - Full Width Emerald */}
      <section className="w-full bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28 lg:py-32">
        <div className="mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-10">
            If you have questions we haven&apos;t answered here, we&apos;re happy to discuss
            them during your consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="primary"
              size="lg"
              icon={Calendar}
              href={process.env.NEXT_PUBLIC_CALENDLY_URL}
            >
              Schedule Your Consultation
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              icon={Mail}
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              Email Us Your Question
            </CTAButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

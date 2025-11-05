import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Blueprint Lead Contractor Lead Questions Answered",
  description:
    "Frequently asked questions about Blueprint Lead contractor appointments. Learn about our process, pricing, lead quality, and how we're different from other lead services.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Blueprint Lead Contractor Lead Questions Answered",
    description:
      "Frequently asked questions about Blueprint Lead contractor appointments. Learn about our process, pricing, lead quality, and how we're different from other lead services.",
    url: "https://blueprintlead.com/faq",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: "Blueprint Lead Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Blueprint Lead Contractor Lead Questions Answered",
    description:
      "Frequently asked questions about Blueprint Lead contractor appointments. Learn about our process, pricing, lead quality, and how we're different from other lead services.",
    images: ["/og-image.png"],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes Blueprint Lead different from HomeAdvisor, Thumbtack, or Angi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Several critical differences: (1) We're the only service offering pre-scheduled appointments (homeowner has agreed to meet at a specific date/time), (2) 100% exclusive (you're the only contractor, not competing with 5+ others), (3) Permit-verified (backed by official LA County documentation), (4) High-value projects only ($85K minimum, no small repairs), (5) Homeowner is ready (not just browsing or price-shopping).",
        },
      },
      {
        "@type": "Question",
        name: "Are the appointments really pre-scheduled?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Before you receive the lead, we contact the homeowner, qualify their project, and schedule an appointment at a specific date and time. The homeowner has agreed to meet with a contractor. They're expecting your call to confirm and your visit to receive an estimate.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use a two-part pricing model: an upfront lead fee (paid when you receive the lead) and a success fee (paid when you sign the contract). Exact amounts vary by tier and project type. We discuss specific pricing during your consultation.",
        },
      },
      {
        "@type": "Question",
        name: "Is the lead exclusive to me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100%. Each lead is sold to only one contractor. You're not competing with anyone else. The homeowner meets with you and only you.",
        },
      },
      {
        "@type": "Question",
        name: "How do you find these projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We monitor permit activity across LA County daily. When we identify high-value construction projects, we verify the permit documentation, contact the homeowner to qualify their needs and timeline, and schedule appointments with those who are ready to meet with contractors.",
        },
      },
      {
        "@type": "Question",
        name: "What types of projects do you have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in high-value residential construction including: ADUs (accessory dwelling units), New construction, Full rebuilds, Major remodels, Seismic retrofits, Pools and outdoor construction, Demolition, Re-roofing (large scale).",
        },
      },
      {
        "@type": "Question",
        name: "Who can use Blueprint Lead?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We exclusively work with licensed and insured contractors in LA County. You must have a valid California Contractor's License, current general liability insurance, and workers' compensation coverage to partner with us.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum project value?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "$85,000. We focus exclusively on high-value construction projects. No small repairs or low-value work.",
        },
      },
      {
        "@type": "Question",
        name: "What if I don't close the deal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You only pay the upfront lead fee. The success fee is only charged when you successfully sign the contract. We share some of the risk with you.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Schedule a free consultation through our Calendly link or contact form. We'll discuss your business, project preferences, tier options, and pricing. If it's a good fit, we'll move forward with verification and onboarding. No obligation.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}

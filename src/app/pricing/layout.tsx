import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Tiers | Blueprint Lead Contractor Lead Pricing",
  description:
    "Transparent pricing for exclusive contractor leads in LA County. Four tiers from $85K to $600K+ projects. Upfront fee + success fee structure. Licensed contractors only.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing & Tiers | Blueprint Lead Contractor Lead Pricing",
    description:
      "Transparent pricing for exclusive contractor leads in LA County. Four tiers from $85K to $600K+ projects. Upfront fee + success fee structure. Licensed contractors only.",
    url: "https://blueprintlead.com/pricing",
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
    title: "Pricing & Tiers | Blueprint Lead Contractor Lead Pricing",
    description:
      "Transparent pricing for exclusive contractor leads in LA County. Four tiers from $85K to $600K+ projects. Upfront fee + success fee structure. Licensed contractors only.",
    images: ["/og-image.png"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}

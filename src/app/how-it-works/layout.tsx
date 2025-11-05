import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Blueprint Lead Process for Licensed Contractors",
  description:
    "Learn how Blueprint Lead delivers exclusive, pre-scheduled contractor appointments. From consultation to project close—transparent process for licensed contractors in LA County.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works | Blueprint Lead Process for Licensed Contractors",
    description:
      "Learn how Blueprint Lead delivers exclusive, pre-scheduled contractor appointments. From consultation to project close—transparent process for licensed contractors in LA County.",
    url: "https://blueprintlead.com/how-it-works",
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
    title: "How It Works | Blueprint Lead Process for Licensed Contractors",
    description:
      "Learn how Blueprint Lead delivers exclusive, pre-scheduled contractor appointments. From consultation to project close—transparent process for licensed contractors in LA County.",
    images: ["/og-image.png"],
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}

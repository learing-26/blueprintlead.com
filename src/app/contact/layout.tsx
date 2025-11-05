import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule Consultation | Contact Blueprint Lead",
  description:
    "Schedule your free consultation with Blueprint Lead. Discuss exclusive contractor leads, pre-scheduled appointments, and tier options for LA County contractors.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Schedule Consultation | Contact Blueprint Lead",
    description:
      "Schedule your free consultation with Blueprint Lead. Discuss exclusive contractor leads, pre-scheduled appointments, and tier options for LA County contractors.",
    url: "https://blueprintlead.com/contact",
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
    title: "Schedule Consultation | Contact Blueprint Lead",
    description:
      "Schedule your free consultation with Blueprint Lead. Discuss exclusive contractor leads, pre-scheduled appointments, and tier options for LA County contractors.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Blueprint Lead | The Only Pre-Scheduled Contractor Appointments",
  description:
    "Blueprint Lead is the only service offering pre-scheduled contractor appointments. 100% exclusive, permit-verified leads for licensed contractors in LA County. See how we're different.",
  alternates: {
    canonical: "/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Blueprint Lead | The Only Pre-Scheduled Contractor Appointments",
    description:
      "Blueprint Lead is the only service offering pre-scheduled contractor appointments. 100% exclusive, permit-verified leads for licensed contractors in LA County. See how we're different.",
    url: "https://blueprintlead.com/why-choose-us",
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
    title: "Why Choose Blueprint Lead | The Only Pre-Scheduled Contractor Appointments",
    description:
      "Blueprint Lead is the only service offering pre-scheduled contractor appointments. 100% exclusive, permit-verified leads for licensed contractors in LA County. See how we're different.",
    images: ["/og-image.png"],
  },
};

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}

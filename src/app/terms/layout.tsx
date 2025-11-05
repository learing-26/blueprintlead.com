import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Blueprint Lead",
  description:
    "Blueprint Lead Terms of Service for contractor lead generation services. Review our terms, service agreement, and contractor obligations.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Blueprint Lead",
    description:
      "Blueprint Lead Terms of Service for contractor lead generation services. Review our terms, service agreement, and contractor obligations.",
    url: "https://blueprintlead.com/terms",
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
    title: "Terms of Service | Blueprint Lead",
    description:
      "Blueprint Lead Terms of Service for contractor lead generation services. Review our terms, service agreement, and contractor obligations.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}

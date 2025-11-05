import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Blueprint Lead",
  description:
    "Blueprint Lead Privacy Policy. Learn how we collect, use, and protect contractor and homeowner information in compliance with California privacy laws.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Blueprint Lead",
    description:
      "Blueprint Lead Privacy Policy. Learn how we collect, use, and protect contractor and homeowner information in compliance with California privacy laws.",
    url: "https://blueprintlead.com/privacy",
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
    title: "Privacy Policy | Blueprint Lead",
    description:
      "Blueprint Lead Privacy Policy. Learn how we collect, use, and protect contractor and homeowner information in compliance with California privacy laws.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}

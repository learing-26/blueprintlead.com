import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Blueprint Lead | Serving Licensed Contractors Since 2021",
  description:
    "Blueprint Lead has connected licensed contractors with pre-scheduled, permit-verified appointments since 2021. Serving LA County with exclusive high-value construction leads.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Blueprint Lead | Serving Licensed Contractors Since 2021",
    description:
      "Blueprint Lead has connected licensed contractors with pre-scheduled, permit-verified appointments since 2021. Serving LA County with exclusive high-value construction leads.",
    url: "https://blueprintlead.com/about",
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
    title: "About Blueprint Lead | Serving Licensed Contractors Since 2021",
    description:
      "Blueprint Lead has connected licensed contractors with pre-scheduled, permit-verified appointments since 2021. Serving LA County with exclusive high-value construction leads.",
    images: ["/og-image.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}

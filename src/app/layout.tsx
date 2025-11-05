import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Blueprint Lead | Exclusive Pre-Scheduled Contractor Appointments in LA County",
    template: "%s | Blueprint Lead",
  },
  description: "Get exclusive, pre-scheduled contractor appointments with permit-verified homeowners in LA County. High-value construction projects starting at $85K. Licensed contractors only. Zero competition.",
  keywords: [
    "contractor leads",
    "LA County contractor leads",
    "pre-scheduled appointments",
    "permit-verified homeowners",
    "construction leads",
    "contractor lead generation",
    "exclusive contractor leads",
    "Los Angeles contractor leads",
  ],
  authors: [{ name: "Blueprint Lead" }],
  creator: "Blueprint Lead",
  publisher: "Blueprint Lead",
  metadataBase: new URL("https://blueprintlead.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blueprintlead.com",
    siteName: "Blueprint Lead",
    title: "Blueprint Lead | Exclusive Pre-Scheduled Contractor Appointments in LA County",
    description: "Get exclusive, pre-scheduled contractor appointments with permit-verified homeowners in LA County. High-value construction projects starting at $85K. Licensed contractors only. Zero competition.",
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
    title: "Blueprint Lead | Exclusive Pre-Scheduled Contractor Appointments in LA County",
    description: "Get exclusive, pre-scheduled contractor appointments with permit-verified homeowners in LA County. High-value construction projects starting at $85K. Licensed contractors only. Zero competition.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Blueprint Lead",
    url: "https://blueprintlead.com",
    logo: "https://blueprintlead.com/logo.png",
    description: "Exclusive lead generation service for licensed contractors in Los Angeles County, offering pre-scheduled appointments with permit-verified homeowners.",
    email: "info@blueprintlead.com",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "34.0522",
        longitude: "-118.2437",
      },
      geoRadius: "50000",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "info@blueprintlead.com",
      areaServed: "US-CA",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Blueprint Lead",
    description: "Exclusive, pre-scheduled appointments with permit-verified homeowners for licensed contractors in LA County. High-value construction projects starting at $85K.",
    url: "https://blueprintlead.com",
    logo: "https://blueprintlead.com/logo.png",
    email: "info@blueprintlead.com",
    areaServed: {
      "@type": "State",
      name: "California",
      address: {
        "@type": "PostalAddress",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    serviceType: "Contractor Lead Generation",
    priceRange: "$$",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

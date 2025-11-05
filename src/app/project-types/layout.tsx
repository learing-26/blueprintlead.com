import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Types | Construction Leads by Blueprint Lead",
  description:
    "Blueprint Lead covers high-value construction projects in LA County: ADUs, new construction, remodels, seismic retrofits, pools, and more. All permit-verified and pre-scheduled.",
  alternates: {
    canonical: "/project-types",
  },
  openGraph: {
    title: "Project Types | Construction Leads by Blueprint Lead",
    description:
      "Blueprint Lead covers high-value construction projects in LA County: ADUs, new construction, remodels, seismic retrofits, pools, and more. All permit-verified and pre-scheduled.",
    url: "https://blueprintlead.com/project-types",
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
    title: "Project Types | Construction Leads by Blueprint Lead",
    description:
      "Blueprint Lead covers high-value construction projects in LA County: ADUs, new construction, remodels, seismic retrofits, pools, and more. All permit-verified and pre-scheduled.",
    images: ["/og-image.png"],
  },
};

export default function ProjectTypesLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}

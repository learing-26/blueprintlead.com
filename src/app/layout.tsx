import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Blueprint Lead - Premium Contractor Leads in LA County",
  description: "Exclusive, pre-scheduled appointments with permit-verified homeowners for licensed contractors in Los Angeles County.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import React from "react";

export interface PageLayoutProps {
  /**
   * Page content
   */
  children: React.ReactNode;
  /**
   * Additional className for the main element
   */
  className?: string;
}

/**
 * Page layout template wrapping Header, main content, and Footer
 * Provides consistent layout structure across all pages
 *
 * @example
 * ```tsx
 * export default function MyPage() {
 *   return (
 *     <PageLayout>
 *       <div>Page content</div>
 *     </PageLayout>
 *   );
 * }
 * ```
 */
export function PageLayout({
  children,
  className = "",
}: PageLayoutProps): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${className}`}>{children}</main>
      <Footer />
    </div>
  );
}

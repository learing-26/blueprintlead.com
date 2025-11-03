import { PageLayout } from "@/components/templates/PageLayout";
import { SectionLayout } from "@/components/templates/SectionLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <SectionLayout maxWidth="lg" className="py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blueprint Lead</h1>
          <p className="text-xl text-gray-600">
            Premium Contractor Leads in LA County
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Project initialization complete. Page Builder Agent will add content from website-content.md.
          </p>
        </div>
      </SectionLayout>
    </PageLayout>
  );
}

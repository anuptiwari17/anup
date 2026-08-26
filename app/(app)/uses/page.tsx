import { Title } from "@/components/ui/title";
import { SoftwareSection } from "@/components/uses/software-section";
import { ROUTES } from "@/constants/routes";
import { BreadcrumbJsonLd, usesBreadcrumbs } from "@/seo/json-ld";
import { createMetadata } from "@/seo/metadata";

const DESCRIPTION =
  "Technologies, frameworks, and tools I use daily.";

export const metadata = createMetadata({
  canonical: ROUTES.USES,
  description: DESCRIPTION,
  title: "Uses",
});

const UsesPage = () => {
  return (
    <>
      <BreadcrumbJsonLd items={usesBreadcrumbs()} />
      <header className="animate-slide-in space-y-2 px-4 pt-6 pb-4">
        <Title className="text-xl font-medium italic">{"uses."}</Title>
        <p className="text-muted-foreground text-sm">{DESCRIPTION}</p>
      </header>

      <SoftwareSection />
    </>
  );
};

export default UsesPage;

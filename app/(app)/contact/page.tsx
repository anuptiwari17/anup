import { ContactForm } from "@/components/contact/form";
import { ContactSection } from "@/components/contact/section";
import { Section } from "@/components/ui/section";
import { Title } from "@/components/ui/title";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { BreadcrumbJsonLd, contactBreadcrumbs } from "@/seo/json-ld";
import { createMetadata } from "@/seo/metadata";

export const metadata = createMetadata({
  canonical: ROUTES.CONTACT,
  description: `Get in touch with ${SITE.NAME}. Send a message directly to my inbox.`,
  title: "Contact",
});

const ContactPage = () => (
  <>
    <BreadcrumbJsonLd items={contactBreadcrumbs()} />
    <header className="animate-slide-in space-y-2 px-4 pt-6 pb-2">
      <Title className="text-2xl font-semibold tracking-tight">
        {"Contact"}
      </Title>
      <p className="text-muted-foreground text-sm">
        Have a question, opportunity, or idea? Send me a message below or reach out via socials.
      </p>
    </header>

    <Section className="delay-100 flex flex-col gap-6 py-2">
      <div className="rounded-2xl border border-border/50 bg-card/40 p-5 sm:p-6 shadow-xs">
        <ContactForm />
      </div>
    </Section>

    <ContactSection className="delay-200" />
  </>
);

export default ContactPage;

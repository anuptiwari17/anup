import fs from "node:fs";
import path from "node:path";
import { ArrowDownToLine, ExternalLink, FileText, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Title } from "@/components/ui/title";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { BreadcrumbJsonLd } from "@/seo/json-ld";
import { createMetadata } from "@/seo/metadata";

const getResumeFile = () => {
  const publicDir = path.join(process.cwd(), "public");
  const candidates = [
    {
      diskPath: path.join(publicDir, "resumes", "resume 1", "Anup_Tiwari_resume.pdf"),
      url: "/resumes/resume%201/Anup_Tiwari_resume.pdf",
    },
    {
      diskPath: path.join(publicDir, "resumes", "resume 1", "Anup_Tiwari_resume"),
      url: "/resumes/resume%201/Anup_Tiwari_resume",
    },
    {
      diskPath: path.join(publicDir, "resume.pdf"),
      url: "/resume.pdf",
    },
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate.diskPath)) {
      return candidate.url;
    }
  }

  return null;
};

export const metadata = createMetadata({
  canonical: ROUTES.RESUME,
  description: `View and download ${SITE.NAME}'s professional software engineering resume.`,
  title: "Resume",
});

const ResumePage = () => {
  const activeResumeUrl = getResumeFile();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: ROUTES.HOME },
          { name: "Resume", path: ROUTES.RESUME },
        ]}
      />

      <header className="animate-slide-in space-y-4 px-4 pt-6 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <Title className="text-2xl font-semibold tracking-tight">
              {"Resume"}
            </Title>
            <p className="text-muted-foreground text-sm">
              Software developer focused on backend architectures, scale, and clean APIs.
            </p>
          </div>

          {activeResumeUrl ? (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                nativeButton={false}
                render={
                  <a
                    href={activeResumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  />
                }
              >
                <ExternalLink className="size-3.5" />
                <span>Open in tab</span>
              </Button>

              <Button
                size="sm"
                nativeButton={false}
                render={
                  <a
                    href={activeResumeUrl}
                    download="Anup_Tiwari_resume.pdf"
                    className="inline-flex items-center gap-1.5"
                  />
                }
              >
                <ArrowDownToLine className="size-3.5" />
                <span>Download PDF</span>
              </Button>
            </div>
          ) : null}
        </div>
      </header>

      <Section className="delay-100 flex flex-col gap-4 py-2">
        <div className="relative w-full rounded-2xl border border-border/60 bg-card/40 p-2 sm:p-3 shadow-xs">
          <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-border/40 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <FileText className="size-3.5 text-foreground/70" />
              Resume
            </span>
            <span>{activeResumeUrl ? "PDF Document" : "Coming Soon"}</span>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden bg-neutral-900/10 dark:bg-neutral-950/40 border border-border/40">
            {activeResumeUrl ? (
              <object
                data={`${activeResumeUrl}#view=FitH`}
                type="application/pdf"
                className="w-full h-[82vh] min-h-[680px]"
              >
                <iframe
                  src={`${activeResumeUrl}#view=FitH`}
                  className="w-full h-[82vh] min-h-[680px] border-0"
                  title="Anup Tiwari Resume"
                />
              </object>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[460px] p-8 text-center space-y-4">
                <div className="size-14 rounded-2xl bg-muted/60 border border-border/60 flex items-center justify-center text-muted-foreground">
                  <FileText className="size-7 text-muted-foreground" />
                </div>
                <div className="space-y-1.5 max-w-sm">
                  <h3 className="text-base font-medium text-foreground tracking-tight">
                    Resume will be available soon
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                  In the meantime, feel free to get in touch or explore my projects.
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-2">
                  <Button
                    size="sm"
                    nativeButton={false}
                    render={
                      <Link
                        href={ROUTES.CONTACT}
                        className="inline-flex items-center gap-1.5"
                      />
                    }
                  >
                    <Mail className="size-3.5" />
                    <span>Get in touch</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    nativeButton={false}
                    render={
                      <Link
                        href={ROUTES.PROJECTS}
                        className="inline-flex items-center gap-1.5"
                      />
                    }
                  >
                    <span>View Projects</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default ResumePage;

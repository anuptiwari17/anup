import { MailIcon } from "lucide-react";

import { IntroSection } from "@/components/about/intro-section";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { LINK } from "@/constants/links";

const PROBLEMS_SOLVED = [
  {
    category: "Full-Stack Development",
    skills: "Next.js, FastAPI, Node.js, React, Responsive Interfaces...",
  },
  {
    category: "Backend Engineering",
    skills: "REST APIs, Microservices, Authentication, Rate Limiting...",
  },
  {
    category: "RAG & Vector Search",
    skills: "Semantic Search, Document Embeddings, Multi-Source Ingestion...",
  },
  {
    category: "Databases & Storage",
    skills: "PostgreSQL, MongoDB, Schema Design, Query Optimization...",
  },
  
];

const AboutSection = () => {
  return (
    <IntroSection>
      <div className="prose text-muted-foreground prose-p:my-2 dark:prose-invert max-w-full text-sm leading-6 font-normal">
        <p>
          Software Developer based in Jalandhar, India, pursuing B.Tech in Information Technology at National Institute of Technology Jalandhar (Aug 2024 – Jun 2028).
        </p>
        <p>
          Focused on Backend Engineering, Distributed Systems, Full-Stack Development, Systems & APIs, RAG / Vector Search, Database Engineering, and Algorithmic Problem Solving.
        </p>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <p className="text-muted-foreground text-sm">
          Interested in working together? Get in touch via email or social links below.
        </p>
        <div className="flex flex-row items-center gap-2">
          <Button
            nativeButton={false}
            render={
              <AppLink
                href={`mailto:${LINK.EMAIL}`}
                target="_blank"
                eventName="send_email_click"
              />
            }
          >
            <MailIcon />
            Send an email
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <AppLink
                href={LINK.GITHUB}
                target="_blank"
                eventName="external_link_click"
              />
            }
          >
            GitHub
          </Button>
        </div>
      </div>

      {/* Problems I can solve */}
      <div className="mt-8 pt-4 border-t border-border/50">
        <h3 className="font-mono text-sm font-semibold tracking-tight text-foreground uppercase mb-3">
          Problems I can solve
        </h3>
        <div className="space-y-2.5 font-mono text-sm leading-relaxed">
          {PROBLEMS_SOLVED.map((item) => (
            <p key={item.category}>
              <span className="font-medium text-foreground">{item.category}: </span>
              <span className="text-muted-foreground">{item.skills}</span>
            </p>
          ))}
        </div>
      </div>
    </IntroSection>
  );
};

export { AboutSection };

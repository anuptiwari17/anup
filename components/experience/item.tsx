"use client";

import Link from "next/link";

import { AppLink } from "@/components/ui/app-link";
import type { GlimpseData } from "@/components/ui/glimpse/types";
import { Title } from "@/components/ui/title";
import { TechStack } from "@/components/uses/tech-stack";
import { ROUTES } from "@/constants/routes";
import { trackExperienceDetailClick } from "@/lib/events";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types/experiences";

interface ExperienceItemProps
  extends Experience, Omit<React.ComponentProps<"div">, "title"> {
  showHeader?: boolean;
  preview?: GlimpseData | null;
}

const ExperienceItem = ({
  slug,
  experienceTitle,
  experienceDescription,
  experienceOrg,
  experienceStatus,
  experienceTech,
  category: _category,
  orgDescription: _orgDescription,
  experienceLinks: _experienceLinks,
  showHeader = true,
  preview,
  className,
  ...attr
}: ExperienceItemProps) => {
  const titleLink = (
    <Link
      href={`${ROUTES.EXPERIENCES}/${slug}`}
      className="hover:underline underline-offset-4"
      onClick={() =>
        trackExperienceDetailClick(
          slug,
          `${experienceTitle}, ${experienceOrg.name}`,
          showHeader ? "home" : "listing"
        )
      }
    >
      {`${experienceTitle}, ${experienceOrg?.name}`}
    </Link>
  );

  return (
    <div
      className={cn(
        "relative pl-4 py-5 space-y-3 border-l-2 border-border/60 transition-all duration-200 hover:border-foreground/80 group/exp",
        className
      )}
      {...attr}
    >
      {/* Timeline Node Dot */}
      <div className="absolute -left-[5px] top-7 h-2 w-2 rounded-full bg-border transition-colors duration-200 group-hover/exp:bg-foreground" />

      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="space-y-0.5">
          <Title
            className="font-sans text-base font-semibold tracking-tight"
            render={showHeader ? <h3>{titleLink}</h3> : <h2>{titleLink}</h2>}
          />
          {experienceOrg?.link && experienceOrg?.websiteDisplayName ? (
            <div className="flex items-center justify-start gap-1.5 text-xs text-muted-foreground">
              {"at "}
              <AppLink
                className="text-xs font-medium text-foreground hover:underline"
                href={experienceOrg.link}
                target="_blank"
                external
                preview={preview}
                eventName="external_link_click"
                eventProperties={{
                  context: "experience_item",
                  link_type: "website",
                  slug,
                  title: experienceOrg.name,
                  url: experienceOrg.link,
                }}
              >
                {experienceOrg.websiteDisplayName}
              </AppLink>
            </div>
          ) : null}
        </div>
        <span className="inline-flex items-center rounded-full bg-muted/70 px-2.5 py-0.5 text-xs font-mono font-medium text-muted-foreground border border-border/50">
          {`${experienceStatus?.startAt} - ${experienceStatus?.endAt}`}
        </span>
      </div>

      {experienceDescription?.length ? (
        <ul className="flex flex-col gap-1.5 pl-4 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed list-disc">
          {experienceDescription.map((descriptionItem, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: descriptionItem }}
            />
          ))}
        </ul>
      ) : null}

      {experienceTech?.length ? (
        <div className="pt-1">
          <TechStack items={experienceTech} />
        </div>
      ) : null}
    </div>
  );
};

export { ExperienceItem, type ExperienceItemProps };

"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const titleText = `${experienceTitle}, ${experienceOrg?.name}`;

  return (
    <div
      className={cn(
        "relative pl-4 py-4 space-y-3 border-l-2 border-border/60 transition-all duration-200 hover:border-foreground/80 group/exp",
        className
      )}
      {...attr}
    >
      {/* Timeline Node Dot */}
      <div className="absolute -left-[5px] top-6 h-2 w-2 rounded-full bg-border transition-colors duration-200 group-hover/exp:bg-foreground" />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsExpanded((prev) => !prev)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsExpanded((prev) => !prev);
            }
          }}
          className="space-y-0.5 cursor-pointer select-none"
        >
          <Title
            className="font-sans text-base font-semibold tracking-tight hover:text-foreground/90 transition-colors"
            render={showHeader ? <h3>{titleText}</h3> : <h2>{titleText}</h2>}
          />
          {experienceOrg?.link && experienceOrg?.websiteDisplayName ? (
            <div
              className="flex items-center justify-start gap-1.5 text-xs text-muted-foreground"
              onClick={(e) => e.stopPropagation()}
            >
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

        <div className="flex items-center gap-2 ml-auto">
          <span className="inline-flex items-center rounded-full bg-muted/70 px-2.5 py-0.5 text-xs font-mono font-medium text-muted-foreground border border-border/50">
            {`${experienceStatus?.startAt} - ${experienceStatus?.endAt}`}
          </span>
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? "Collapse" : "Expand"} details for ${experienceOrg?.name}`}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
          >
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-200",
                isExpanded && "rotate-180"
              )}
            />
          </button>
        </div>
      </div>

      {isExpanded && experienceDescription?.length ? (
        <ul className="flex flex-col gap-1.5 pl-4 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed list-disc animate-in fade-in-50 slide-in-from-top-1 duration-200">
          {experienceDescription.map((descriptionItem, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: descriptionItem }}
            />
          ))}
        </ul>
      ) : null}

      {isExpanded && experienceTech?.length ? (
        <div className="pt-1 animate-in fade-in-50 duration-200">
          <TechStack items={experienceTech} />
        </div>
      ) : null}
    </div>
  );
};

export { ExperienceItem, type ExperienceItemProps };

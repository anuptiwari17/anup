"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import type { GlimpseData } from "@/components/ui/glimpse/types";
import { TechStack } from "@/components/uses/tech-stack";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types/experiences";

interface ExperienceItemProps
  extends Experience,
    Omit<React.ComponentProps<"div">, "title"> {
  showHeader?: boolean;
  preview?: GlimpseData | null;
}

const formatPeriod = (start?: string, end?: string) => {
  const s = start?.replace(/,/g, "").toLowerCase() ?? "";
  const e = end?.replace(/,/g, "").toLowerCase() ?? "";
  if (!s && !e) return "";
  if (!e) return `${s} — now`;
  return `${s} — ${e}`;
};

const ExperienceItem = ({
  slug: _slug,
  experienceTitle,
  experienceDescription,
  experienceOrg,
  experienceStatus,
  experienceTech,
  category: _category,
  orgDescription: _orgDescription,
  experienceLinks: _experienceLinks,
  showHeader: _showHeader = true,
  preview: _preview,
  className,
  ...attr
}: ExperienceItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Take the first bullet point as the primary clean 1-sentence summary
  const primarySummary = experienceDescription?.[0] ?? "";
  const remainingBullets = experienceDescription?.slice(1) ?? [];

  return (
    <div
      className={cn(
        "py-3 space-y-1 group/work transition-opacity duration-200",
        className
      )}
      {...attr}
    >
      {/* Row 1: Company Name & Date */}
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-medium text-foreground text-[15px] tracking-tight truncate">
          {experienceOrg.name}
        </h3>
        <span className="text-xs font-mono text-muted-foreground lowercase shrink-0">
          {formatPeriod(experienceStatus?.startAt, experienceStatus?.endAt)}
        </span>
      </div>

      {/* Row 2: Role */}
      <div className="text-sm text-muted-foreground font-normal">
        {experienceTitle}
      </div>

      {/* Row 3: Direct 1-sentence summary */}
      {primarySummary && (
        <p className="text-sm text-muted-foreground/80 leading-relaxed pt-0.5 font-normal">
          {primarySummary}
        </p>
      )}

      {/* Expandable details if there are more bullets or tech stack */}
      {(remainingBullets.length > 0 || experienceTech?.length) && (
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer select-none"
          >
            <span>{isExpanded ? "Show less" : "More details"}</span>
            <ChevronDown
              className={cn(
                "size-3.5 transition-transform duration-200",
                isExpanded && "rotate-180"
              )}
            />
          </button>

          {isExpanded && (
            <div className="pt-2.5 space-y-3 animate-in fade-in-50 slide-in-from-top-1 duration-200">
              {remainingBullets.length > 0 && (
                <ul className="flex flex-col gap-1.5 pl-4 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed list-disc">
                  {remainingBullets.map((bullet, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }} />
                  ))}
                </ul>
              )}
              {experienceTech?.length ? (
                <div className="pt-1">
                  <TechStack items={experienceTech} />
                </div>
              ) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { ExperienceItem, type ExperienceItemProps };

import { AppLink } from "@/components/ui/app-link";
import type { GlimpseData } from "@/components/ui/glimpse/types";
import type { ResolvedContact } from "@/lib/contacts";
import { cn } from "@/lib/utils";

interface ContactItemProps
  extends ResolvedContact, Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  preview?: GlimpseData | null;
}

const getSocialBrandStyle = (title?: string) => {
  const t = title?.toLowerCase() ?? "";
  if (t.includes("github")) {
    return {
      badge: "bg-[#8957e5]/10 border-[#8957e5]/25 dark:bg-[#8957e5]/15 dark:border-[#8957e5]/30",
      icon: "text-[#8957e5] dark:text-[#a87ffb]",
    };
  }
  if (t.includes("linkedin")) {
    return {
      badge: "bg-[#0a66c2]/10 border-[#0a66c2]/25 dark:bg-[#0a66c2]/15 dark:border-[#0a66c2]/30",
      icon: "text-[#0a66c2] dark:text-[#38bdf8]",
    };
  }
  if (t.includes("x") || t.includes("twitter")) {
    return {
      badge: "bg-[#1da1f2]/10 border-[#1da1f2]/25 dark:bg-[#1da1f2]/15 dark:border-[#1da1f2]/30",
      icon: "text-[#1da1f2] dark:text-[#38bdf8]",
    };
  }
  return {
    badge: "bg-muted border-border/50",
    icon: "text-foreground",
  };
};

const ContactItem = ({
  title,
  icon,
  link,
  preview,
  className,
  ...attr
}: ContactItemProps) => {
  const brand = getSocialBrandStyle(title);

  return (
    <div
      className={cn(
        "py-2 flex items-center justify-start gap-3 transition-[border-color,opacity] duration-150 hover:opacity-100 group-hover:opacity-40 group/contact",
        className
      )}
      {...attr}
    >
      <div
        className={cn(
          "size-7 rounded-lg border flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/contact:scale-105",
          brand.badge
        )}
      >
        {icon && title && icon({ className: cn("size-4", brand.icon) })}
      </div>
      <span>
        {link?.url && (
          <AppLink
            className="text-muted-foreground text-sm font-normal hover:text-foreground transition-colors"
            href={link?.url}
            target="_blank"
            external
            preview={preview}
            eventName="contact_link_click"
            eventProperties={{ platform: title, url: link.url }}
          >
            {link?.display}
          </AppLink>
        )}
        {!link?.url && (
          <span className="text-muted-foreground text-sm font-normal">
            {"link not found"}
          </span>
        )}
      </span>
    </div>
  );
};

export { ContactItem };

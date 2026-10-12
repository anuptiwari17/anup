"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "@/constants/routes";
import { getActiveSection } from "@/lib/nav";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types/nav";

interface NavItemConfig {
  href: string;
  id: SectionId;
  label: string;
}

const NAV_ITEMS: NavItemConfig[] = [
  { href: ROUTES.HOME, id: "home", label: "Home" },
  { href: ROUTES.PROJECTS, id: "projects", label: "Projects" },
  { href: ROUTES.EXPERIENCES, id: "experiences", label: "Work" },
  { href: ROUTES.USES, id: "uses", label: "Skills" },
  { href: ROUTES.RESUME, id: "resume", label: "Resume" },
  { href: ROUTES.CONTACT, id: "contact", label: "Contact" },
];

const MainNav = () => {
  const pathname = usePathname();
  const activeSection = getActiveSection(pathname);

  return (
    <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth min-w-0 flex-1 py-0.5">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "font-sans text-xs sm:text-[13px] font-medium tracking-tight transition-all duration-200 px-3 py-1.5 rounded-full shrink-0 select-none",
              isActive
                ? "bg-foreground text-background font-semibold dark:bg-white dark:text-black shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export { MainNav };

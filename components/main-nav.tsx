"use client";

import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ROUTES } from "@/constants/routes";
import { NAV_GROUPS } from "@/constants/site";
import { getActiveSection, getHomeNavItem, isNavGroupActive } from "@/lib/nav";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: ROUTES.HOME, id: "home", label: "Home" },
  { href: ROUTES.PROJECTS, id: "projects", label: "Projects" },
  { href: ROUTES.EXPERIENCES, id: "experiences", label: "Experience" },
  { href: ROUTES.USES, id: "uses", label: "Skills" },
  { href: ROUTES.CONTACT, id: "contact", label: "Contact" },
];

const MainNav = () => {
  const pathname = usePathname();
  const activeSection = getActiveSection(pathname);

  const navLinkClass = (id: string) =>
    cn(
      "font-sans text-[0.9375rem] font-medium tracking-tight transition-colors px-2.5 py-1.5 rounded-lg",
      activeSection === id
        ? "text-foreground font-semibold bg-muted/60"
        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
    );

  return (
    <div className="flex items-center">
      <nav className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="gap-1 sm:gap-1.5">
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
                  href={item.href}
                  className={navLinkClass(item.id)}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
};

export { MainNav };

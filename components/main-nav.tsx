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
  { href: ROUTES.HOME, id: "home", label: "home" },
  { href: ROUTES.PROJECTS, id: "projects", label: "projects" },
  { href: ROUTES.EXPERIENCES, id: "experiences", label: "experience" },
  { href: ROUTES.USES, id: "uses", label: "skills" },
  { href: ROUTES.CONTACT, id: "contact", label: "contact" },
];

const MainNav = () => {
  const pathname = usePathname();
  const activeSection = getActiveSection(pathname);

  const navLinkClass = (id: string) =>
    cn(
      "text-sm font-medium transition-colors px-2 py-1 rounded-md",
      activeSection === id
        ? "text-foreground font-semibold"
        : "text-muted-foreground hover:text-foreground"
    );

  return (
    <div className="flex items-center">
      <nav className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="gap-1 sm:gap-2">
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

import type { NavGroup, NavItem } from "@/types/nav";

import { ROUTES } from "./routes";
import { getBaseUrl } from "./url";
import { NAME, USER } from "./user";

const baseUrl = getBaseUrl();

export const SITE = {
  AUTHOR: {
    AVATAR: USER.avatar,
    NAME,
    TWITTER: "@offsidetwt",
  },
  DESCRIPTION: {
    LONG: "Software Developer based in Jalandhar, India. Focused on Backend Engineering, Distributed Systems, Full-Stack Development, Systems & APIs, RAG / Vector Search, Database Engineering, and Algorithmic Problem Solving.",
    SHORT:
      "Software Developer focused on Backend Engineering, Distributed Systems, RAG / Vector Search, and Full-Stack Systems.",
  },
  KEYWORDS: [
    "Anup Tiwari",
    "Software Developer",
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "Full-Stack Developer",
    "RAG",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "Next.js",
    "Python",
    "Portfolio",
  ],
  NAME,
  URL: baseUrl,
} as const;

export const META_THEME_COLORS = {
  dark: "#0a0a0a",
  light: "#ffffff",
};

export const UTM_PARAMS = {
  utm_source: new URL(baseUrl).hostname,
};

export const NAV_STANDALONE: NavItem[] = [
  {
    href: ROUTES.HOME,
    id: "home",
    label: "home",
  },
  {
    href: ROUTES.CONTACT,
    id: "contact",
    label: "contact",
  },
];

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "work",
    items: [
      {
        href: ROUTES.USES,
        id: "uses",
        label: "uses",
      },
      {
        href: ROUTES.PROJECTS,
        id: "projects",
        label: "projects",
      },
      {
        href: ROUTES.CRAFTS,
        id: "crafts",
        label: "crafts",
      },
      {
        href: ROUTES.EXPERIENCES,
        id: "experiences",
        label: "experience",
      },
    ],
    label: "work",
  },
  {
    id: "extras",
    items: [
      {
        href: ROUTES.STATS,
        id: "stats",
        label: "stats",
      },
      {
        href: ROUTES.FAVORITES,
        id: "favorites",
        label: "favorites",
      },
    ],
    label: "extras",
  },
];

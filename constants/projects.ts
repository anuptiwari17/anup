import { Icons } from "@/components/icons";
import { SITE } from "@/constants/site";
import type {
  Project,
  ProjectSource,
  ProjectSourceOption,
} from "@/types/projects";

export const HOME_FEATURED_PROJECT_COUNT = 4 as const;

export const PROJECT_SOURCES = [
  {
    image: SITE.AUTHOR.AVATAR,
    label: "Personal",
    value: "personal",
  },
] as const satisfies readonly ProjectSourceOption[];

export const DEFAULT_PROJECT_SOURCE: ProjectSource = "personal";

export const PROJECTS = [
  {
    category: "Distributed Systems & RAG",
    date: {
      month: "July",
      year: 2026,
    },
    description:
      "Engineered an end-to-end Retrieval-Augmented Generation platform supporting parallel ingestion of multi-format documents (PDFs, web URLs, YouTube transcripts) with source-verifiable citations.",
    featured: true,
    links: {
      github: "https://github.com/anuptiwari17/cirix",
      website: "https://cirix.vercel.app",
    },
    slug: "cirix",
    source: "personal",
    title: "Cirix",
  },
  {
    category: "Enterprise Systems",
    date: {
      month: "June",
      year: 2026,
    },
    description:
      "Designed and deployed a secure enterprise management backend managing hierarchical task assignment, status transition lifecycles, Row-Level Security, and sub-50ms response times.",
    featured: true,
    links: {
      github: "https://github.com/anuptiwari17/nucleo",
      website: "https://nucleoorg.vercel.app",
    },
    slug: "nucleo",
    source: "personal",
    title: "Nucleo",
  },
  {
    category: "Civic Automation Platform",
    date: {
      month: "May",
      year: 2026,
    },
    description:
      "Automated grievance tracking platform with algorithmic authority routing based on natural language categorization, jurisdiction mapping, and real-time petition validation.",
    featured: true,
    links: {
      github: "https://github.com/anuptiwari17/nyaysetu",
      website: "https://nyaysetu-c8c4.vercel.app/",
    },
    slug: "nyaysetu",
    source: "personal",
    title: "NyaySetu",
  },
] satisfies readonly Project[];


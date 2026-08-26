import { LINK } from "@/constants/links";
import type { Contact } from "@/types/contacts";

export const CONTACTS = [
  {
    icon: "github",
    link: {
      display: "@anuptiwari17",
      url: LINK.GITHUB,
    },
    title: "GitHub",
  },
  {
    icon: "linkedin",
    link: {
      display: "@-anuptiwari",
      url: LINK.LINKEDIN,
    },
    title: "LinkedIn",
  },
  {
    icon: "x",
    link: {
      display: "@offsidetwt",
      url: LINK.X,
    },
    title: "X (Twitter)",
  },
] as const satisfies readonly Contact[];


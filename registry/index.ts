import type { Registry } from "shadcn/schema";

import { components } from "./components/_registry";

export const registry = {
  homepage: "https://github.com/anuptiwari17/anup-portfolio",
  items: [...components],
  name: "anup-ui",
} satisfies Registry;

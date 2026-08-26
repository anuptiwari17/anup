import { Icons } from "@/components/icons";

export interface SoftwareItem {
  categories: string[];
  href: string;
  icon: React.ReactNode;
  key: string;
  title: string;
}

export const SOFTWARE_ITEMS: SoftwareItem[] = [
  {
    categories: ["Languages"],
    href: "https://www.typescriptlang.org",
    icon: <Icons.ts />,
    key: "typescript",
    title: "TypeScript",
  },
  {
    categories: ["Languages"],
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <Icons.js />,
    key: "javascript",
    title: "JavaScript",
  },
  {
    categories: ["Languages"],
    href: "https://www.python.org",
    icon: <Icons.python />,
    key: "python",
    title: "Python",
  },
  {
    categories: ["Frontend"],
    href: "https://react.dev",
    icon: <Icons.react />,
    key: "react",
    title: "React",
  },
  {
    categories: ["Frontend"],
    href: "https://nextjs.org",
    icon: <Icons.nextjs />,
    key: "nextjs",
    title: "Next.js",
  },
  {
    categories: ["Frontend"],
    href: "https://tailwindcss.com",
    icon: <Icons.tailwindcss />,
    key: "tailwindcss",
    title: "Tailwind CSS",
  },
  {
    categories: ["Frontend"],
    href: "https://ui.shadcn.com",
    icon: <Icons.shadcn />,
    key: "shadcn-ui",
    title: "shadcn/ui",
  },
  {
    categories: ["Backend & DB"],
    href: "https://nodejs.org",
    icon: <Icons.nodejs />,
    key: "nodejs",
    title: "Node.js",
  },
  {
    categories: ["Backend & DB"],
    href: "https://firebase.google.com",
    icon: <Icons.firebase />,
    key: "firebase",
    title: "Firebase",
  },
  {
    categories: ["Backend & DB"],
    href: "https://supabase.com",
    icon: <Icons.supabase />,
    key: "supabase",
    title: "Supabase",
  },
  {
    categories: ["Backend & DB"],
    href: "https://www.postgresql.org",
    icon: <Icons.postgresql />,
    key: "postgresql",
    title: "PostgreSQL",
  },
  {
    categories: ["Backend & DB"],
    href: "https://www.mongodb.com",
    icon: <Icons.mongodb />,
    key: "mongodb",
    title: "MongoDB",
  },
  {
    categories: ["Backend & DB"],
    href: "https://redis.io",
    icon: <Icons.redis />,
    key: "redis",
    title: "Redis",
  },
  {
    categories: ["Dev Tools"],
    href: "https://git-scm.com",
    icon: <Icons.git />,
    key: "git",
    title: "Git",
  },
  {
    categories: ["Dev Tools"],
    href: "https://www.docker.com",
    icon: <Icons.docker />,
    key: "docker",
    title: "Docker",
  },
  {
    categories: ["Dev Tools"],
    href: "https://www.postman.com",
    icon: <Icons.postman />,
    key: "postman",
    title: "Postman",
  },
];

import { ArrowUpRight, FileText, Send } from "lucide-react";
import Link from "next/link";

import { CopyLink } from "@/components/copy-link";
import { Icons } from "@/components/icons";
import { Section } from "@/components/ui/section";
import { Title } from "@/components/ui/title";
import { LINK } from "@/constants/links";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

interface ConnectItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

const CONNECT_ITEMS: ConnectItem[] = [
  {
    title: "Resume",
    href: ROUTES.RESUME,
    icon: <FileText className="size-4 text-foreground/80" />,
    external: false,
  },
  {
    title: "Contact",
    href: ROUTES.CONTACT,
    icon: <Send className="size-4 text-foreground/80" />,
    external: false,
  },
  {
    title: "GitHub",
    href: LINK.GITHUB,
    icon: <Icons.github className="size-4 text-foreground" />,
    external: true,
  },
  {
    title: "LinkedIn",
    href: LINK.LINKEDIN,
    icon: (
      <div className="size-5 rounded-[4px] bg-[#0a66c2] flex items-center justify-center text-white font-bold text-[11px] leading-none select-none">
        in
      </div>
    ),
    external: true,
  },
  {
    title: "X (Twitter)",
    href: LINK.X,
    icon: <Icons.x className="size-3.5 text-foreground" />,
    external: true,
  },
  {
    title: "Email",
    href: `mailto:${LINK.EMAIL}`,
    icon: (
      <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Z"
          fill="currentColor"
          className="text-muted/60"
        />
        <path
          d="M4 6l8 5.5L20 6"
          stroke="#EA4335"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 18V7l8 5.5L20 7v11"
          stroke="#4285F4"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    external: true,
  },
];

const ContactSection = ({ className }: { className?: string }) => {
  return (
    <Section
      className={cn("delay-600 flex flex-col gap-4", className)}
      id="connect"
    >
      <div className="group/connect flex items-center gap-1">
        <Title
          className="text-xl font-medium tracking-tight"
          render={<h2>{"Connect"}</h2>}
        />
        <CopyLink
          title={"Connect"}
          className="hidden group-hover/connect:inline-flex"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {CONNECT_ITEMS.map((item) => {
          const content = (
            <div className="group relative flex items-center justify-between p-3 rounded-xl border border-border/50 bg-card/40 hover:bg-card/80 hover:border-border transition-all duration-200">
              <div className="flex items-center gap-3 min-w-0">
                <div className="size-8 rounded-lg border border-border/60 bg-muted/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-foreground truncate">
                  {item.title}
                </span>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-2" />
            </div>
          );

          if (item.external) {
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-xl"
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={item.title}
              href={item.href}
              className="block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-xl"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export { ContactSection };

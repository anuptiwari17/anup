import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";

const SiteHeader = () => (
  <header className="sticky top-3 sm:top-4 z-40 w-full px-3 sm:px-4 pointer-events-none">
    <div className="view-container pointer-events-auto">
      <div className="flex items-center justify-between gap-2 p-1.5 rounded-full border border-border/60 bg-background/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-xs transition-all">
        <MainNav />
        <div className="flex items-center gap-1 shrink-0 pl-1.5 pr-0.5 border-l border-border/40">
          <ModeToggle />
        </div>
      </div>
    </div>
  </header>
);

export { SiteHeader };

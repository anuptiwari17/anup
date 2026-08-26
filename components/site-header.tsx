import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";

const SiteHeader = () => (
  <header className="view-container animate-slide-in slide-in-from-top-10 relative flex items-center justify-between gap-4 px-4 pt-10">
    <MainNav />

    <div className="flex items-center gap-1">
      <ModeToggle />
    </div>
  </header>
);

export { SiteHeader };

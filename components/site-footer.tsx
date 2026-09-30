import { SITE } from "@/constants/site";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full overflow-hidden pt-12">
      {/* Top author & year line */}
      <div className="view-container flex items-baseline justify-between px-4 pb-6 font-sans text-[0.875rem] text-muted-foreground">
        <span className="font-medium tracking-wide text-foreground/80">{SITE.NAME}</span>
        <span className="tabular-nums font-mono text-xs">{currentYear}</span>
      </div>

      {/* Full-bleed Illustrated Artwork Banner showing complete ghats & holy Ganga river */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Soft top gradient to blend the artwork sky seamlessly into the background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 sm:h-16 bg-gradient-to-b from-background to-transparent" />

        <div className="relative w-full">
          <picture>
            <source srcSet="/art/kashi.webp" type="image/webp" />
            <img
              src="/art/kashi.png"
              alt="Watercolor artwork of Kashi Ghats and the sacred Ganga river"
              loading="lazy"
              decoding="async"
              className="w-full h-auto block select-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_100%)] transition-all duration-500 ease-out dark:opacity-90 dark:brightness-[0.92] dark:contrast-[1.04]"
            />
          </picture>
        </div>
      </div>
    </footer>
  );
};

export { SiteFooter };


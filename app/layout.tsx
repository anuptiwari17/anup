import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "@/styles/globals.css";

import { Analytics } from "@/components/analytics";
import { TooltipProvider } from "@/components/ui/tooltip";
import { META_THEME_COLORS } from "@/constants/site";
import { env } from "@/env";
import { HapticsProvider } from "@/providers/haptics-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { JsonLdScripts } from "@/seo/json-ld";
import { baseMetadata } from "@/seo/metadata";

const satoshi = localFont({
  src: "../public/fonts/satoshi-variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

const erode = localFont({
  src: [
    {
      path: "../public/fonts/erode-variable.woff2",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "../public/fonts/erode-variable-italic.woff2",
      weight: "300 700",
      style: "italic",
    },
  ],
  variable: "--font-erode",
  display: "swap",
});

const geist_mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: META_THEME_COLORS.light,
  viewportFit: "cover",
  width: "device-width",
};

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLdScripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={`overscroll-none font-serif flex flex-col min-h-screen ${satoshi.variable} ${erode.variable} ${geist_mono.variable}`}
      >
        <ThemeProvider>
          <Analytics projectId={env.NEXT_PUBLIC_CLARITY_PROJECT_ID} />
          <TooltipProvider>
            <HapticsProvider>{children}</HapticsProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import { env } from "@/env";

export const FALLBACK_SITE_ORIGIN = "https://github.com/anuptiwari17/anup-portfolio" as const;

export const formatUrl = (urlStr: string): string => {
  if (!urlStr) return FALLBACK_SITE_ORIGIN;
  if (/^https?:\/\//i.test(urlStr)) return urlStr;
  return `https://${urlStr}`;
};

export const getBaseUrl = () => {
  if (env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }
  if (env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) {
    return formatUrl(env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL);
  }
  if (env.NEXT_PUBLIC_SITE_URL) {
    return formatUrl(env.NEXT_PUBLIC_SITE_URL);
  }
  return FALLBACK_SITE_ORIGIN;
};

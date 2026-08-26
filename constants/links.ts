export const GITHUB = {
  branch: "main",
  org: "anuptiwari17",
  repo: "anup-portfolio",
  user: "anuptiwari17",
} as const;

const GITHUB_URL = `https://github.com/${GITHUB.user}`;

export const LINK = {
  BLUESKY: "https://bsky.app",
  CALENDLY: "https://cal.com",
  CLARITY: "https://clarity.microsoft.com",
  DAILYDEV: "https://daily.dev",
  DISCORD: "https://discord.com",
  EMAIL: "anuptiwari050@gmail.com",
  GITHUB: GITHUB_URL,
  GITHUB_REPO: `https://github.com/${GITHUB.user}/${GITHUB.repo}`,
  LICENSE: `${GITHUB_URL}/${GITHUB.repo}/blob/${GITHUB.branch}/LICENSE`,
  LINKEDIN: "https://linkedin.com/in/-anuptiwari",
  PEERLIST: "https://peerlist.io",
  RESUME: "/resume.pdf",
  SHADCN_LABS: "https://github.com/anuptiwari17",
  SHADCN_UI: "https://ui.shadcn.com",
  SPONSOR: `https://github.com/sponsors/${GITHUB.user}`,
  TELEGRAM: "https://t.me",
  TOKSCALE: "https://tokscale.ai",
  TOPMATE: "https://topmate.io",
  TWITTER: "https://x.com/offsidetwt",
  X: "https://x.com/offsidetwt",
  X_SHADCN_LABS: "https://x.com",
  YOUTUBE: "https://youtube.com",
} as const;

const STORAGE_URL =
  "https://yffrvzi8zwbljfuj.public.blob.vercel-storage.com/portfolio-website";

export const ASSETS = {
  CRUD_DIALOG_ANIMATION: `${STORAGE_URL}/crud_dialog_animation.mp4`,
  FIRE: `${STORAGE_URL}/fogonovo.gif`,
  FOUNDER_LETTER_ANIMATION: `${STORAGE_URL}/founder_letter_animation.mp4`,
  MACBOOK_AIR: `${STORAGE_URL}/macbook_air.webp`,
  SAMSUNG_MONITOR: `${STORAGE_URL}/samsung_monitor.avif`,
};


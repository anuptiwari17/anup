"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { useMetaColor } from "@/hooks/use-meta-color";

export const useThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { setMetaColor, metaColor } = useMetaColor();

  useEffect(() => {
    setMetaColor(metaColor);
  }, [metaColor, setMetaColor]);

  const toggleTheme = () => {
    const nextResolved = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextResolved);
  };

  useHotkeys("d", () => toggleTheme(), { preventDefault: true });

  return { theme, toggleTheme };
};

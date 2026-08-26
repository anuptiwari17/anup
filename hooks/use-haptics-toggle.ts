import { useHotkeys } from "react-hotkeys-hook";

import { useHaptics } from "@/providers/haptics-provider";

export const useHapticsToggle = () => {
  const { enabled, setEnabled } = useHaptics();

  const toggleHaptics = () => {
    setEnabled((prev) => !prev);
  };

  useHotkeys("h", () => toggleHaptics(), { preventDefault: true });

  return { enabled, toggleHaptics };
};

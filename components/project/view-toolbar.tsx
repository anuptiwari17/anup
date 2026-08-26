"use client";

import { ViewToggle } from "@/components/view-tabs";
import { cn } from "@/lib/utils";

import { ProjectSourceCombobox } from "./source-combobox";
import { ProjectSourceTabs } from "./source-tabs";
import { useProjectsView } from "./view-context";

type ProjectSourceControl = "combobox" | "tabs";

interface ProjectsViewToolbarProps {
  sourceControl?: ProjectSourceControl;
  className?: string;
}

const ProjectsViewToolbar = ({
  className,
}: ProjectsViewToolbarProps) => {
  const { variant, setVariant } = useProjectsView();

  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <ViewToggle value={variant} onChange={setVariant} section="projects" />
    </div>
  );
};

export { ProjectsViewToolbar };
export type { ProjectSourceControl, ProjectsViewToolbarProps };

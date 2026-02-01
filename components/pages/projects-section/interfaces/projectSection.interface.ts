import { Project } from "@/interfaces/projectCrad.interface";
import { Dispatch, SetStateAction } from "react";

export interface DialogCardInterface {
  selectedProject: Project | null;
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
}

export const TypeStyles: Record<string, string> = {
  frontend: "text-green-500 bg-green-400/10",
  fullstack: "text-purple-500 bg-purple-400/10",
  others: "text-yellow-500 bg-yellow-400/10",
  professional: "text-primary bg-primary/10",
  personal: "text-primary bg-primary/10",
};

export interface DesktopGridInterface {
  page: number;
  loading: boolean;
  projectData: Project[];
  openProjectCard: (project: Project) => void;
}

export interface DialogSectionInterface
  extends Pick<DialogCardInterface, "selectedProject"> {
  loaded?: boolean;
  setLoaded?: Dispatch<SetStateAction<boolean>>;
}

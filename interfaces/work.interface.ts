import { Project } from "./projectCrad.interface";

export interface WorkHeroSectionInterface {
  projectData: Project;
}

export interface WorkHeroHeaderInterface {
  techStack: string[];
}

export interface ProjectCoreDetailsInterface {
  year: number;
  role: string;
  platform: string;
  type: string;
}

export interface ProjectCoreDetailsGridBoxInterface {
  name: string;
  data: string | number;
}

export interface ExternalLinkButtonsInterface {
  name: string;
  icon: React.ReactNode;
  link?: string;
  type?: "1" | "2";
}

export interface WorkInterface {
  params: Promise<{ id: string }>;
}

export interface WorkViewInterface {
  id: string;
}

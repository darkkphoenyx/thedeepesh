"use client";
import { ProjectButtons } from "@/components/data/ProjectButtons";
import { Project } from "@/interfaces/projectCrad.interface";
import project from "@/lib/appwrite/APIs";
import { updateIsOpen } from "@/redux/projectSlice";
import { useImagePreloader } from "@/utils/useImagePreloader";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useProjectSection = () => {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [cardType, setCardType] = useState<string>(ProjectButtons[0].name);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();
  const ITEMS_PER_PAGE = 6;

  //caching all the images for projects
  useImagePreloader(projectData);

  useEffect(() => {
    setPage(1);
    const fetceProjects = async () => {
      try {
        setLoading(true);
        const response = await project.getProjectDetails(cardType);
        const data: any = response?.documents || [];
        setProjectData(data);
      } catch (error) {
        if (error) console.log(error);
        else console.log("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetceProjects();
  }, [cardType]);

  useEffect(() => {
    const totalPages = Math.ceil(projectData.length / ITEMS_PER_PAGE);
    if (page > totalPages && totalPages > 0) {
      setPage(1);
    }
  }, [projectData]);

  const selectProjectType = (type: string) => {
    setCardType(type);
  };

  const openProjectCard = (project: Project) => {
    dispatch(updateIsOpen(project));
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return {
    selectProjectType,
    cardType,
    openProjectCard,
    page,
    loading,
    projectData,
    setPage,
    selectedProject,
    isDialogOpen,
    setIsDialogOpen,
  };
};

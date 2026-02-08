"use client";

import { ProjectButtons } from "@/components/data/ProjectButtons";
import { Project } from "@/interfaces/projectCrad.interface";
import { fetchProjects, setSelectedProject } from "@/redux/projectSlice";
import type { AppDispatch, RootState } from "@/redux/store";
import { useImagePreloader } from "@/utils/useImagePreloader";
import { useRouter } from "next/navigation";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useProjectSection = (id?: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, loading } = useSelector(
    (state: RootState) => state.project,
  );

  const [cardType, setCardType] = useState<string>(ProjectButtons[0].name);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  useImagePreloader(projects);

  // Fetch projects
  useEffect(() => {
    dispatch(fetchProjects(cardType));
  }, [cardType, dispatch]);

  const selectProjectType = (type: string) => setCardType(type);

  const openProjectCard = (project: Project) => {
    dispatch(setSelectedProject(project));
    setIsDialogOpen(true);
  };

  // helper
  const getProjectByName = useCallback(
    (name: string) => {
      return (
        projects.find((p) => p?.name?.toLowerCase() === name?.toLowerCase()) ||
        null
      );
    },
    [projects],
  );

  const selectedProject = useMemo(() => {
    if (!id || projects.length === 0) return null;
    return getProjectByName(id);
  }, [id, projects, getProjectByName]);

  // navigation
  useEffect(() => {
    if (id && projects.length > 0 && !selectedProject) {
      router.push("/");
    }
  }, [id, projects, selectedProject, router]);

  return {
    selectProjectType,
    cardType,
    openProjectCard,
    loading,
    projectData: projects,
    selectedProject,
    isDialogOpen,
    setIsDialogOpen,
    getProjectByName,
  };
};

"use client";

import { useEffect } from "react";
import type { Project } from "../interfaces/projectCrad.interface";

export const useImagePreloader = (projects: Project[]) => {
  useEffect(() => {
    const loadedImages = new Set();
    projects.forEach((project) => {
      if (project.image && !loadedImages.has(project.image)) {
        const img = new Image();
        img.src = project.image;
        loadedImages.add(project.image); // prevent reloading same image
      }
    });
  }, [projects]);
};

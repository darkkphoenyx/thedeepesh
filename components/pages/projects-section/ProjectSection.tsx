"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import "swiper.css";
import type { Project } from "../../../interfaces/projectCrad.interface";
import { updateIsOpen } from "../../../redux/projectSlice";

import project from "@/appwrite/APIs";
import Heading from "../../../shared/Heading";
import { useImagePreloader } from "../../../utils/useImagePreloader";
import DesktopGrid from "./components/DesktopGrid";
import DialogProjectCard from "./components/DialogProjectCard";
import MobileProjectSlider from "./components/MobileProjectSlider";
import PaginationSection from "./components/PaginationSection";

const ProjectButtons = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "FullStack",
  },
  {
    id: 3,
    name: "Frontend",
  },
  {
    id: 4,
    name: "Others",
  },
];

const ProjectSection = () => {
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

  return (
    <section className="bg-background relative">
      <div className="max-w-7xl mx-auto px-4 py-24 h-auto overflow-hidden">
        <Heading title="Project Section" />

        {/* Project Buttons */}
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-center mb-10">
          {ProjectButtons.map((btn) => (
            <button
              onClick={() => selectProjectType(btn.name)}
              key={btn.id}
              className={`px-3 py-2 rounded-3xl bg-gray-800 text-sm hover:scale-105 transition-all cursor-none ${
                cardType === btn.name
                  ? "bg-primary text-black border font-medium"
                  : "border-none hover:bg-gray-700"
              }`}
            >
              {btn.name}
            </button>
          ))}
        </div>

        {/* Projects Grid (desktop) */}
        <DesktopGrid
          openProjectCard={openProjectCard}
          page={page}
          loading={loading}
          projectData={projectData}
        />

        {/* pagination */}
        <PaginationSection
          setPage={setPage}
          page={page}
          projectLength={projectData.length}
        />

        {/* Modal Dialog (single dialog) */}
        <DialogProjectCard
          selectedProject={selectedProject}
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />

        {/* mobile swiper */}
        <MobileProjectSlider
          loading={loading}
          openProjectCard={openProjectCard}
          projectData={projectData}
        />
      </div>
    </section>
  );
};

export default ProjectSection;

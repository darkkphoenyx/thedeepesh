"use client";

import { ProjectButtons } from "@/components/data/ProjectButtons";
import { useProjectSection } from "@/hooks/useProjectSection";

import Heading from "@/shared/Heading";
import { ProjectGrid } from "./components/ProjectGrid";

const ProjectSection = () => {
  const projectSection = useProjectSection();
  return (
    <section className="bg-background relative">
      <div className="max-w-7xl mx-auto px-4 py-24 h-auto overflow-hidden">
        <Heading title="Project Section" />

        {/* Project Buttons */}
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-center mb-10">
          {ProjectButtons.map((btn) => (
            <button
              onClick={() => projectSection.selectProjectType(btn.name)}
              key={btn.id}
              className={`px-3 py-2 rounded-3xl bg-gray-800 text-sm hover:scale-105 transition-all cursor-none ${
                projectSection.cardType === btn.name
                  ? "bg-primary text-black border font-medium"
                  : "border-none hover:bg-gray-700"
              }`}
            >
              {btn.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <ProjectGrid
          openProjectCard={projectSection.openProjectCard}
          loading={projectSection.loading}
          projectData={projectSection.projectData}
        />
      </div>
    </section>
  );
};

export default ProjectSection;

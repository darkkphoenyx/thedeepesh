"use client";
import {
  ProjectCoreDetailsGridBoxInterface,
  ProjectCoreDetailsInterface,
  WorkHeroSectionInterface,
} from "@/interfaces/work.interface";
import { BreadCrumbs } from "./Breadcrumb";
import { WorkHeroHeader } from "./WorkHeroHeader";

export const WorkHeroSection = ({ projectData }: WorkHeroSectionInterface) => {
  return (
    <div className="pt-10">
      <BreadCrumbs name={projectData?.name} />
      <WorkHeroHeader techStack={projectData?.techStack} />

      {/* hero title */}
      <div className="relative mt-5 flex w-full items-center justify-center bg-background">
        <div className="flex z-10  flex-col space-y-4 items-start w-full justify-between">
          <h2 className="text-primary font-bold lg:text-[128px] md:text-[100px] text-6xl lg:leading-30 w-full">
            {projectData?.name}
          </h2>
          <p className="lg:text-7xl md:text-4xl text-2xl transition-all">
            {projectData?.header}
          </p>
        </div>
      </div>

      <ProjectCoreDetails
        type={projectData?.domain}
        year={projectData?.year}
        platform={projectData?.platform}
        role={projectData?.role}
      />
    </div>
  );
};

const ProjectCoreDetails = ({
  platform,
  role,
  type,
  year,
}: ProjectCoreDetailsInterface) => {
  return (
    <div className="grid lg:grid-cols-4 space-x-10 space-y-10 grid-cols-2 mt-10 border-t border-gray-700 border-b pt-10">
      <ProjectCoreDetailsGridBox name="Role" data={role} />
      <ProjectCoreDetailsGridBox name="Type" data={type} />
      <ProjectCoreDetailsGridBox name="Year" data={year} />
      <ProjectCoreDetailsGridBox name="Platform" data={platform} />
    </div>
  );
};

const ProjectCoreDetailsGridBox = ({
  data,
  name,
}: ProjectCoreDetailsGridBoxInterface) => {
  return (
    <div className="flex flex-col space-y-1">
      <p className="uppercase text-xs text-gray-400 font-medium tracking-widest">
        {name}
      </p>
      <p className="font-medium text-secondary md:text-xl">{data}</p>
    </div>
  );
};

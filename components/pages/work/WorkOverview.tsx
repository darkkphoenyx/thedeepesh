import { useProjectSection } from "@/hooks/useProjectSection";
import Image from "next/image";
import { ProjectDetails } from "./project-details/ProjectDetails";
import { WorkHeroSection } from "./work-herosection/WorkHeroSection";

export const WorkOverview = ({ id }: { id: string }) => {
  const projects = useProjectSection(id);
  const projectData = projects.getProjectByName(id);

  if (!projectData) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 pb-10">
      <WorkHeroSection projectData={projectData} />
      <div className=" flex flex-col space-y-4 items-center text-center w-full justify-between">
        <Image
          src={projectData?.image}
          alt={projectData?.name}
          height={1000}
          width={1000}
          className="md:mt-20 mt-14 rounded-3xl w-full"
        />

        <ProjectDetails projectData={projectData} />
      </div>
    </div>
  );
};

export default WorkOverview;

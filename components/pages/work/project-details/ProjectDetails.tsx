import {
  ExternalLinkButtonsInterface,
  WorkHeroSectionInterface,
} from "@/interfaces/work.interface";
import { cn } from "@/lib/utils";
import { Code, Globe } from "lucide-react";

export const ProjectDetails = ({ projectData }: WorkHeroSectionInterface) => {
  return (
    <div className="grid lg:grid-cols-3 w-full mt-10 space-y-10 md:gap-20">
      <div className="w-full lg:col-span-2 text-start">
        <h3 className="lg:text-4xl text-3xl text-primary font-medium">
          Project Overview
        </h3>
        <p className="text-start text-lg mt-6">{projectData?.details}</p>

        <div className="mt-10 grid md:grid-cols-2 w-full gap-4">
          {projectData?.deployLink && (
            <ExternalLinkButtons
              name="View Demo"
              link={projectData?.deployLink}
              icon={<Globe />}
            />
          )}
          {projectData?.github && (
            <ExternalLinkButtons
              icon={<Code />}
              type="2"
              name="Source Code"
              link={projectData?.github}
            />
          )}
        </div>
      </div>
      <div className="flex gap-3 flex-col lg:col-span-1 w-full">
        <h3 className="text-start text-primary uppercase font-semibold tracking-widest">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-3 mt-4">
          {projectData?.techStack.map((tech: string) => (
            <div
              key={tech}
              className="border border-gray-600 hover:text-white hover:bg-gray-500 text-gray-300 rounded-full bg-gray-700 px-4 py-1 flex items-center justify-center"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExternalLinkButtons = ({
  icon,
  name,
  link,
  type,
}: ExternalLinkButtonsInterface) => {
  return (
    <>
      <a target="_blank" href={link} className="w-full">
        <div
          className={cn(
            "flex justify-center items-center gap-2 w-full bg-primary hover:bg-primary/80 border border-primary px-5 py-3 text-background rounded-md cursor-none",
            type == "2" &&
              "bg-primary/10 hover:bg-gray-800 border border-primary text-primary",
          )}
        >
          {icon}
          <p className="md:text-xl">{name}</p>
        </div>
      </a>
    </>
  );
};

export default ProjectDetails;

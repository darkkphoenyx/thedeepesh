import { Card, CardTitle } from "@/components/ui/card";
import { Project } from "@/interfaces/projectCrad.interface";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DesktopGridInterface } from "../../../../../interfaces/projectSection.interface";
import ProjectCardLoader from "./ProjectCardLoader";

interface IDesktopGridCard
  extends Pick<DesktopGridInterface, "openProjectCard"> {
  project: Project;
}

export const ProjectGrid = ({
  loading,
  projectData,
  openProjectCard,
}: DesktopGridInterface) => {
  return (
    <>
      {loading ? (
        <ProjectCardLoader cards={2} />
      ) : (
        <div className="lg:grid-cols-2 gap-8 grid">
          {projectData
            .filter((data) => data.show)
            .map((project) => (
              <ProjectGridCard
                key={project.$id}
                openProjectCard={openProjectCard}
                project={project}
              />
            ))}
        </div>
      )}
    </>
  );
};

const ProjectGridCard = ({ project }: IDesktopGridCard) => {
  const navigate = useRouter();

  const handleNavigate = (name: string) => {
    navigate.push(`/work/${encodeURIComponent(name)}`);
  };
  return (
    <Card className="bg-gray-800 border border-gray-600 md:p-8 p-4 text-primary">
      <div className="relative h-fit w-fit overflow-hidden rounded-lg group">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <Image
          src={project.image}
          alt={project.name}
          height={1000}
          width={1000}
          className="rounded-lg transition-transform duration-300 group-hover:scale-105 md:h-[426px] lg:w-[568px] h-[280px] object-cover"
        />
      </div>

      <div>
        <CardTitle className="text-2xl font-semibold text-secondary">
          {project.name}
        </CardTitle>
        <div className="mt-4 grid max-md:space-y-6 md:grid-cols-3 lg:grid-cols-5 justify-between md:items-end items-start">
          <div className="flex gap-3 flex-wrap lg:col-span-4 col-span-2">
            {project.techStack.map((tech) => (
              <div
                key={tech}
                className="border border-gray-600 hover:text-white hover:bg-gray-500 text-gray-300 rounded bg-gray-700 px-3 py-1 flex items-center justify-center"
              >
                {tech}
              </div>
            ))}
          </div>
          <div
            onClick={() => handleNavigate(project.name)}
            className="bg-primary hover:bg-primary/80 flex items-center justify-center justify-self-end lg:h-16 lg:w-16 h-14 w-14 rounded-md"
          >
            <ExternalLink className="text-background" />
          </div>
        </div>
      </div>
    </Card>
  );
};

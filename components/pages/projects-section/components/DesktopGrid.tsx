import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Project } from "@/interfaces/projectCrad.interface";
import { useIsMid } from "@/utils/useIsMid";
import { GithubIcon } from "lucide-react";
import { DesktopGridInterface } from "../../../../interfaces/projectSection.interface";
import ProjectCardLoader from "./ProjectCardLoader";

interface IDesktopGridCard
  extends Pick<DesktopGridInterface, "openProjectCard"> {
  project: Project;
}

const DesktopGrid = ({
  page,
  loading,
  projectData,
  openProjectCard,
}: DesktopGridInterface) => {
  const isMid = useIsMid();
  const ITEMS_PER_PAGE = isMid ? 6 : 4;
  return (
    <>
      {loading ? (
        <ProjectCardLoader cards={6} />
      ) : (
        <div className="lg:grid-cols-3 md:grid-cols-2 gap-8 hidden md:grid">
          {projectData
            .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
            .map((project) => (
              <DesktopGridCard
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

export default DesktopGrid;

const DesktopGridCard = ({ openProjectCard, project }: IDesktopGridCard) => {
  return (
    <Card
      onClick={() => openProjectCard(project)}
      className="lg:p-8 p-6 hover:bg-gradient-to-b from-primary/30 to-transparent rounded-3xl shadow-none hover:border-primary border-gray-600 bg-gray-800 transition-all hover:text-primary text-white"
      key={project.$id}
    >
      <CardTitle className="text-2xl font-semibold p-0 md:text-start text-center text-secondary">
        {project.name}
      </CardTitle>

      <CardDescription className="text-gray-300 p-0 md:text-start text-center line-clamp-3 overflow-ellipsis">
        {project.details}
      </CardDescription>

      <ul className="flex gap-2 md:justify-start items-center justify-center flex-wrap">
        {project.techStack.slice(0, 4).map((stack: string) => (
          <li
            className="px-3 py-2 text-sm text-secondary bg-secondary/10 rounded-full hover:text-primary hover:bg-secondary/20 hover:scale-105 transition-all  focus-visible:ring-0"
            key={stack}
          >
            {stack}
          </li>
        ))}
        {project.techStack.length > 4 && (
          <button className="px-3 cursor-none py-2 text-sm text-secondary bg-secondary/10 rounded-full hover:text-primary hover:bg-secondary/20 hover:scale-105 transition-all focus-visible:ring-0">
            + {project.techStack.length - 4} more
          </button>
        )}
      </ul>

      <button className="mt-auto flex cursor-none items-center justify-center gap-2 border-none w-full rounded-full px-3 py-2 bg-primary/20 hover:bg-primary/40 hover:scale-105 transition-all font-medium text-primary">
        View Project
        <GithubIcon />
      </button>
    </Card>
  );
};

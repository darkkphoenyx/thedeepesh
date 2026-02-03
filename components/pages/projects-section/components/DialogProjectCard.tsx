import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Cpu, Eye, Github, Link } from "lucide-react";
import { useState } from "react";
import {
  DialogCardInterface,
  DialogSectionInterface,
  TypeStyles,
} from "../../../../interfaces/projectSection.interface";

const DialogProjectCard = ({
  isDialogOpen,
  selectedProject,
  setIsDialogOpen,
}: DialogCardInterface) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="cursor-default rounded-3xl w-[900px]">
        {selectedProject ? (
          <div className="flex flex-col gap-3">
            <DialogHeader selectedProject={selectedProject} />

            <DialogTitle className="md:text-3xl text-2xl font-semibold text-secondary">
              {selectedProject.name}
            </DialogTitle>

            <p className="text-gray-300">{selectedProject.details}</p>

            <DialogProjectCardBody
              selectedProject={selectedProject}
              loaded={loaded}
              setLoaded={setLoaded}
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DialogProjectCard;

const DialogHeader = ({ selectedProject }: DialogSectionInterface) => {
  if (!selectedProject) return null;

  return (
    <div className="flex gap-2 items-center">
      {/* project type */}
      <p
        className={`border w-fit px-5 py-1 rounded-full md:text-xs text-[10px] ${
          TypeStyles[selectedProject.type.toLowerCase()] || ""
        }`}
      >
        {selectedProject.type}
      </p>
      {/* project domain -> professional | personal */}
      <p
        className={`border w-fit px-5 py-1 rounded-full md:text-xs text-[10px] ${
          TypeStyles[selectedProject.domain.toLowerCase()] || ""
        }`}
      >
        {selectedProject.domain}
      </p>
    </div>
  );
};

const DialogProjectCardBody = ({
  selectedProject,
  loaded,
  setLoaded,
}: DialogSectionInterface) => {
  if (!selectedProject || !setLoaded) return null;

  return (
    <div className="grid md:grid-cols-2 md:gap-6 gap-2 md:mt-4">
      <img
        className={`w-full md:h-[250px] h-[150px] object-cover rounded-md transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        src={selectedProject.image}
        alt={selectedProject.name}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
      <div className="flex flex-col gap-4 justify-center max-md:mt-2">
        <div className="md:flex hidden flex-col gap-4 bg-white/10 rounded-xl md:p-2 p-4">
          <h2 className="flex gap-2 text-white text-lg font-medium">
            <Cpu className="text-primary bg-primary/20 p-1.5 h-8 w-8 rounded-md" />
            Technology used
          </h2>
          <ul className="flex gap-2 flex-wrap">
            {selectedProject.techStack.map((stack) => (
              <li
                key={stack}
                className="px-3 py-2 text-sm text-secondary bg-secondary/10 rounded-lg h-fit hover:scale-[105%] transition-all hover:bg-secondary/50"
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
        {/* project links */}
        <div className="bg-white/10 rounded-xl md:p-2 p-4 ">
          <h2 className="flex gap-2 text-white text-lg font-medium">
            <Link className="text-primary bg-primary/20 p-1.5 h-8 w-8 rounded-md" />
            Project Links
          </h2>
          <div
            className={`${
              selectedProject.deployLink && selectedProject.github
                ? "grid-cols-2"
                : "grid-cols-1"
            } grid gap-4 mt-4`}
          >
            {selectedProject.deployLink && (
              <a
                target="_blank"
                rel="noopener"
                href={selectedProject.deployLink}
              >
                <button className="py-2 md:text-lg text-secondary bg-secondary/10 rounded-lg h-fit w-full hover:scale-[102%] transition-all hover:bg-secondary/50 flex gap-2 items-center justify-center cursor-pointer">
                  <Eye className="max-md:p-0.5" />
                  Live
                </button>
              </a>
            )}
            {selectedProject.github && (
              <a target="_blank" rel="noopener" href={selectedProject.github}>
                <button className="py-2 md:text-lg text-sm text-secondary bg-secondary/10 rounded-lg h-fit w-full hover:scale-[102%] transition-all hover:bg-secondary/50 flex gap-2 items-center justify-center cursor-pointer">
                  <Github className="max-md:p-0.5" />
                  GitHub
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import { WorkHeroHeaderInterface } from "@/interfaces/work.interface";

export const WorkHeroHeader = ({ techStack }: WorkHeroHeaderInterface) => {
  const visibleCount = 3;
  const remaining = techStack.length - visibleCount;

  return (
    <div className="flex gap-2 mt-15 items-center">
      {techStack.slice(0, visibleCount).map((tech: string) => (
        <TechStackButton key={tech} text={tech} />
      ))}

      {remaining > 0 && <TechStackButton text={`+ ${remaining}`} />}
    </div>
  );
};

const TechStackButton = ({ text }: { text: string }) => {
  return (
    <button className="cursor-none border border-secondary/40 text-secondary bg-secondary/10 px-3 py-1 md:text-sm text-xs font-medium rounded-full hover:bg-secondary/20 transition">
      {text}
    </button>
  );
};

export default WorkHeroHeader;

import { Skeleton } from "@/components/ui/skeleton";

const ProjectCardLoader = ({ cards }: { cards: number }) => {
  return (
    <div className="bg-background hidden md:block">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 h-[700px] gap-8 px-4">
        {Array(cards)
          .fill(null)
          .map((_, idx) => (
            <div
              key={idx}
              className="h-full w-full transition-all rounded-3xl bg-secondary/20 animate-pulse p-8 flex flex-col gap-8"
            >
              <Skeleton className="h-8 bg-secondary/30" />
              <Skeleton className="h-14 bg-secondary/30" />

              <div className="flex gap-2 w-full">
                {Array(3)
                  .fill(null)
                  .map((_, idx) => (
                    <Skeleton
                      key={idx}
                      className="h-9 w-full rounded-full bg-secondary/30"
                    />
                  ))}
              </div>

              <Skeleton className="h-10 rounded-full bg-secondary/30" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectCardLoader;

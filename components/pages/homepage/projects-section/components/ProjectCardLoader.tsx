import { Skeleton } from "@/components/ui/skeleton";

const ProjectCardLoader = ({ cards }: { cards: number }) => {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 grid-cols-1  gap-8">
        {Array(cards)
          .fill(null)
          .map((_, idx) => (
            <div
              key={idx}
              className="h-full w-full transition-all rounded-2xl bg-secondary/20 animate-pulse max-md:p-4 p-8 flex flex-col gap-8"
            >
              <Skeleton className="md:h-100 h-60 bg-secondary/30" />
              <Skeleton className="h-10 bg-secondary/30" />

              <div className="grid md:grid-cols-4 gap-10">
                <div className="flex gap-2 w-full col-span-3">
                  {Array(3)
                    .fill(null)
                    .map((_, idx) => (
                      <Skeleton
                        key={idx}
                        className="h-9 w-full rounded-md bg-secondary/30"
                      />
                    ))}
                </div>

                <Skeleton className="h-16 md:justify-self-end w-16 col-span-1 rounded-md bg-secondary/30" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectCardLoader;

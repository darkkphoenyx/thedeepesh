import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Project } from "@/interfaces/projectCrad.interface";
import { ArrowRight, GithubIcon } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface MobileProjectSliderProps {
  loading: boolean;
  projectData: Project[];
  openProjectCard: (project: Project) => void;
}

interface MobileProjectSliderCardProps
  extends Pick<MobileProjectSliderProps, "openProjectCard"> {
  project: Project;
}

const MobileProjectSlider = ({
  loading,
  projectData,
  openProjectCard,
}: MobileProjectSliderProps) => {
  return (
    <>
      {loading ? (
        <div className="hidden rounded-3xl bg-secondary/20 animate-pulse p-8 max-md:flex flex-col gap-8">
          <Skeleton className="h-8 bg-secondary/30" />
          <Skeleton className="h-14 bg-secondary/30" />

          <div className="flex gap-2 w-full px-10">
            {Array(2)
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
      ) : (
        <div className="block md:hidden">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            className="mySwiper"
          >
            {projectData.map((project) => (
              <SwiperSlide key={project.$id}>
                <MobileProjectSliderCard
                  key={project.$id}
                  openProjectCard={openProjectCard}
                  project={project}
                />
              </SwiperSlide>
            ))}
            <p className="mt-6 text-center flex gap-2 justify-center items-center">
              Swipe <ArrowRight />
            </p>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default MobileProjectSlider;

const MobileProjectSliderCard = ({
  openProjectCard,
  project,
}: MobileProjectSliderCardProps) => {
  return (
    <Card
      onClick={() => openProjectCard(project)}
      className="lg:p-8 p-6 hover:bg-gradient-to-b from-primary/30 to-transparent rounded-3xl shadow-none hover:border-primary border-gray-600 bg-gray-800 transition-all hover:text-primary text-white h-[330px] flex flex-col"
    >
      <CardTitle className="md:text-2xl text-xl font-semibold p-0 md:text-start text-center text-secondary">
        {project.name}
      </CardTitle>
      <CardDescription className="text-gray-300 p-0 md:text-start text-center line-clamp-3 overflow-ellipsis">
        {project.details}
      </CardDescription>

      <ul className="flex gap-2 md:justify-start items-center justify-center flex-wrap">
        {project.techStack.slice(0, 4).map((stack) => (
          <li
            className="px-3 py-2 text-sm text-secondary bg-secondary/10 rounded-full hover:text-primary hover:bg-secondary/20 hover:scale-105 transition-all"
            key={stack}
          >
            {stack}
          </li>
        ))}
        {project.techStack.length > 4 && (
          <button className="px-3 cursor-none py-2 text-sm text-secondary bg-secondary/10 rounded-full hover:text-primary hover:bg-secondary/20 hover:scale-105 transition-all">
            + {project.techStack.length - 4} more
          </button>
        )}
      </ul>

      <button className="flex mt-auto cursor-none items-center justify-center gap-2 border-none w-full rounded-full px-3 py-2 bg-primary/20 hover:bg-primary/40 hover:scale-105 transition-all font-medium text-primary">
        View Project
        <GithubIcon />
      </button>
    </Card>
  );
};

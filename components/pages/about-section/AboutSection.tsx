import { BookOpen, GraduationCap } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardDescription, CardTitle } from "../../../components/ui/card";
import Heading from "../../../shared/Heading";
import HoverPreview from "./HoverPreview";

const AboutSection = () => {
  return (
    <div className=" bg-gray-800 md:rounded-t-[50px] rounded-t-[30px] overflow-hidden">
      <section className="overflow-x-hidden z-10 w-full h-auto max-w-7xl mx-auto lg:py-20 md:py-20 py-20 text-primary flex flex-col md:flex-row items-center gap-12 md:gap-8 md:pl-4 md:p-0 px-4">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Heading title="Know Me" />
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            className="text-lg leading-relaxed text-secondary max-w-xl mx-auto md:mx-0"
          >
            Hi👋! I&apos;m Deepesh. I&apos;m a passionate Frontend Developer
            with strong expertise in{" "}
            <HoverPreview
              skill="nextjs"
              label="Next.js"
              url="https://nextjs.org/"
            />
            ,{" "}
            <HoverPreview
              skill="react"
              label="React"
              url="https://reactjs.org"
            />
            ,{" "}
            <HoverPreview
              skill="typescript"
              label="Typescript"
              url="https://www.typescriptlang.org/"
            />
            ,{" "}
            <HoverPreview
              skill="tailwind"
              label="Tailwind CSS"
              url="https://tailwindcss.com/"
            />
            , and{" "}
            <HoverPreview
              skill="shadcn"
              label="ShadCN"
              url="https://ui.shadcn.com/"
            />
            . I have a strong grasp of state management (Redux, Zustand, &
            Context APIs), form handling (React Hook Form), integrating REST
            APIs (Axios/Fetch) and performance optimization. I have a keen eye
            for detail, while ensuring responsiveness, and scalable user
            interfaces with reusable components and maintainable code.
            <br />
            <br />
            While frontend is my core strength, I’m actively expanding my
            backend skills in{" "}
            <HoverPreview
              skill="expressjs"
              label="Express.js"
              url="https://expressjs.com/"
            />
            ,{" "}
            <HoverPreview
              skill="postgresql"
              label="PostgreSQL"
              url="https://www.postgresql.org"
            />
            , and{" "}
            <HoverPreview
              skill="mongodb"
              label="MongoDB"
              url="https://www.mongodb.com/"
            />{" "}
            to become a well-rounded full-stack developer. Driven by curiosity
            and problem-solving, I enjoy owning projects end-to-end and
            continuously learning new technologies to deliver impactful and
            maintainable solutions.
          </div>
          <div className="md:mt-8 mt-16 space-y-4">
            <h2
              data-aos="fade-right"
              className="flex items-center gap-2 font-medium text-2xl justify-center md:justify-start text-secondary"
            >
              <GraduationCap size={34} />
              Education
            </h2>
            <Card
              data-aos="fade-right"
              data-aos-delay="30"
              className="bg-gray-800 px-10 py-4 rounded-3xl gap-2 border-secondary"
            >
              <CardTitle className="flex items-center gap-2 font-medium text-xl text-secondary">
                BSc.CSIT
              </CardTitle>
              <div className="flex space-y-2 md:space-y-0 justify-between lg:items-center md:flex-row flex-col items-start">
                <CardDescription className="text-gray-300 flex gap-2 text-start lg:text-center">
                  <BookOpen size={20} />
                  Tribhuvan University, Kathmandu - Nepal
                </CardDescription>
                <Badge className="rounded-4xl text-secondary border border-secondary/50 bg-secondary/10 px-3 py-2">
                  2023 - Present
                </Badge>
              </div>
            </Card>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="w-full md:w-1/2 flex justify-center h-max"
        >
          <img
            src="./theDeepesh.webp"
            alt="owner profile"
            className="w-full max-w-md h-auto object-contain md:scale-92 rounded-3xl shadow-[0px_0px_100px_10px_rgba(255,223,176,0.2)]"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;

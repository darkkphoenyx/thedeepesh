import { Icons } from "@/assets/icons/Icons";
import FlowingMenu from "@/components/animations/flowing-menu/FlowingMenu";
import { SoftSkills } from "@/components/data/Skills";
import Marquee from "react-fast-marquee";
import Heading from "../../../shared/Heading";

const Skills = () => {
  return (
    <>
      <div className="bg-gray-800 md:py-20 py-16 md:rounded-t-[50px] rounded-t-[30px]">
        <section className="h-auto flex flex-col w-full">
          <Heading title="My Skills" />
          <Marquee direction="right" className="md:py-6">
            {Icons.map((icon) => (
              <div key={icon.text} className="my-10 md:mx-20 mx-10">
                <icon.logo size={64} className="hidden md:block" />
                <icon.logo size={40} className="block md:hidden" />
              </div>
            ))}
          </Marquee>
          <div className="w-full md:h-[600px] h-[400px]">
            <FlowingMenu items={SoftSkills} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;

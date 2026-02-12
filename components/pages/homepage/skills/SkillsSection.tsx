import { SkillsIcons } from "@/assets/icons/Icons";
import Heading from "@/shared/Heading";

const Skills = () => {
  return (
    <>
      <div className="bg-gray-800 md:py-20 py-16">
        <section className="h-auto flex flex-col w-full">
          <Heading title="Current Technologies" />

          <div className="max-w-7xl mx-auto md:mt-10 w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 max-md:gap-3 px-4">
            {SkillsIcons.map((skill) => (
              <div
                key={skill.text}
                className="flex items-center gap-4 bg-background hover:bg-gray-800 p-2.5 rounded-lg border hover:border-gray-400 border-background group"
              >
                <skill.logo
                  size={50}
                  className="bg-gray-700 group-hover:bg-gray-600 p-2 rounded-md"
                />
                <div className="text-gray-300">
                  <p>{skill.text}</p>
                  <p className="text-xs text-gray-400">{skill.type}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <Marquee direction="right" className="md:py-6">
            {Icons.map((icon) => (
              <div key={icon.text} className="my-10 md:mx-20 mx-10">
                <icon.logo size={64} className="hidden md:block" />
                <icon.logo size={40} className="block md:hidden" />
              </div>
            ))}
          </Marquee> */}
          {/* <div className="w-full md:h-[600px] h-[400px]">
            <FlowingMenu items={SoftSkills} />
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Skills;

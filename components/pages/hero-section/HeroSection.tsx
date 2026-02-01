import CircularText from "@/components/animations/text-animations/circular-text/CircularText";
import TextPressure from "@/components/animations/text-animations/text-pressure/TextPressure";
import { useHeroSection } from "@/hooks/useHeroSection";
import { SharedImage } from "@/shared/Image";
import { motion } from "framer-motion";
import Heading from "../../../shared/Heading";
import ConnectWithMe from "../contact-section/ConnectWithMe";

const HeroSection = () => {
  const heroSection = useHeroSection();
  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <motion.section
          style={{ zIndex: heroSection.zIndex }}
          className={`fixed w-full text-center min-h-screen flex flex-col items-center md:pt-20 space-y-12 md:space-y-16 px-4 ${
            heroSection.isMobileMenuOpen ? "-z-10" : "z-10"
          }`}
        >
          <SharedImage
            src="/profile.gif"
            alt="owner gif"
            lazyLoading="lazy"
            unoptimized
            aos="zoom-in"
            className="h-[360px] w-[360px]"
          />
          {/* Desktop */}
          <div className="hidden md:block relative max-w-4xl w-full mx-auto px-10 md:px-4">
            <Heading
              className="absolute left-1/2 md:-top-3 -top-7 -translate-x-1/2 text-center text-secondary text-4xl z-10"
              title="Hey There,"
              once
            />
            <TextPressure
              text="I'm Deepesh!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={false}
              textColor="#f56e5b" //primary color --> directly cannot use text-primary so passing hex instead😅
              strokeColor="#ff0000"
            />
          </div>

          {/* Mobile */}
          <div className="block md:hidden relative w-full">
            <Heading
              className="absolute left-1/2 md:-top-3 -top-7 -translate-x-1/2 text-center text-secondary text-4xl z-10"
              title="Hey There,"
              once
            />
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1200"
              className="text-5xl font-bold w-full"
            >
              I&apos;M DEEPESH
            </p>
          </div>

          <motion.div>
            <ConnectWithMe />
          </motion.div>
        </motion.section>
        <CircularText
          className="hidden md:block absolute transform -translate-x-1/2 left-1/2 -bottom-180 z-0"
          text="Just • Keep • Scrolling • "
        />
      </div>
      <p
        className="absolute hidden md:block -right-95 mt-105 transform rotate-90 text-7xl font-bold m-0 p-0 mix-blend-luminosity"
        style={{ letterSpacing: "30px" }}
      >
        darkkphoenyx
      </p>

      <div className="h-[50vh] hidden md:block"></div>
    </>
  );
};

export default HeroSection;

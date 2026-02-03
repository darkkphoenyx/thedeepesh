import { useHeroSection } from "@/hooks/useHeroSection";
import { HeroSectionInterface } from "@/interfaces/herosection.interface";
import { SharedImage } from "@/shared/Image";
import { motion } from "framer-motion";
import { HeroConnectMe } from "./HeroContact";
import { HeroSectionDesktop } from "./HeroSectionDesktop";
import { HeroSectionMobile } from "./HeroSectionMobile";

const HeroSection = ({ sectionRefs }: HeroSectionInterface) => {
  const heroSection = useHeroSection();
  return (
    <>
      <div className="h-screen relative overflow-hidden pt-20">
        <motion.section
          style={{ zIndex: heroSection.zIndex }}
          className={`fixed w-full text-center min-h-screen flex flex-col items-center md:pt-20 space-y-6 md:space-y-16 px-4 ${
            heroSection.isMobileMenuOpen ? "-z-10" : "z-10"
          }`}
        >
          {/* Hero Image */}
          <SharedImage
            src="/profile.gif"
            alt="owner gif"
            lazyLoading="lazy"
            unoptimized
            aos="zoom-in"
            className="mid:h-[360px] md:w-[360px]"
          />
          {/* Desktop */}
          <HeroSectionDesktop />

          {/* Mobile */}
          <HeroSectionMobile />

          {/* <ConnectWithMe /> */}
          <HeroConnectMe
            sectionRefs={sectionRefs}
            pdfDownloadLink={heroSection.pdfDownloadLink}
          />
        </motion.section>
        {/* <CircularText
          className="hidden md:block absolute transform -translate-x-1/2 left-1/2 -bottom-180 z-0"
          text="Just • Keep • Scrolling • "
        /> */}
      </div>
      <p
        className="absolute hidden md:block -right-90 mt-105 transform rotate-90 text-7xl font-bold m-0 p-0 mix-blend-luminosity"
        style={{ letterSpacing: "30px" }}
      >
        darkkphoenyx
      </p>

      <div className="h-[50vh] hidden md:block"></div>
    </>
  );
};

export default HeroSection;

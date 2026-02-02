"use client";

import Particles from "@/components/animations/background-particles/Particles";
import { useHomepage } from "@/hooks/useHomepage";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";
import AboutSection from "../about-section/AboutSection";
import Timeline from "../experience-section/Timeline";
import HeroSection from "../hero-section/HeroSection";
import ProjectSection from "../projects-section/ProjectSection";
import Skills from "../skills/SkillsSection";

const Navbar = dynamic(() => import("@/components/navigation/Navbar"), {
  ssr: false,
});

export const Homepage = () => {
  const homepage = useHomepage();
  return (
    <div>
      <Toaster position="top-right" />
      <div className="bg-background text-primary ">
        {/* NAVBAR */}
        <div className="min-h-[72px] sticky top-0 z-20">
          <Navbar data-aos="none" sectionRefs={homepage.sectionRefs} />
        </div>

        {/* PARTICLES BACKGROUND + SECTIONS */}
        <div className="relative z-10 bg-background -mt-20">
          <Particles
            className="absolute inset-0"
            particleCount={1500}
            particleColors={["#FFA500", "#FFFF00"]}
            particleSpread={12}
            particleBaseSize={80}
            speed={0.2}
            alphaParticles
          />

          <div className="relative">
            <div
              id="knowMe"
              ref={homepage.registerSection("knowMe")}
              style={{
                backgroundImage: `
                  radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
                  radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
                  radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
                `,
              }}
            >
              <HeroSection sectionRefs={homepage.sectionRefs} />
              <AboutSection />
            </div>

            <div id="experiences" ref={homepage.registerSection("experiences")}>
              <Timeline />
            </div>

            <div id="projects" ref={homepage.registerSection("projects")}>
              <ProjectSection />
            </div>

            <div id="skills" ref={homepage.registerSection("skills")}>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

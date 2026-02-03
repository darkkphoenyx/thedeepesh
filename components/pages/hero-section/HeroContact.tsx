import { Button } from "@/components/ui/button";
import { HeroConnectMeInterface } from "@/interfaces/herosection.interface";
import { Download } from "lucide-react";
import { HeroCTA } from "./heroCTA";

export const HeroConnectMe = ({
  pdfDownloadLink,
  sectionRefs,
}: HeroConnectMeInterface) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-once="true"
      className="flex md:gap-4 gap-2 md:flex-row flex-col items-center"
    >
      <HeroCTA sectionRefs={sectionRefs} />

      {/* download cv */}
      <a href={pdfDownloadLink} className="flex items-center gap-2 cursor-none">
        <Button className=" px-4 py-2 rounded-4xl border border-primary transition-all hover:scale-105 cursor-none justify-center w-fit text-primary hover:bg-transparent hover:text-secondary hover:border-secondary bg-transparent">
          <Download size={16} />
          Download CV
        </Button>
      </a>
    </div>
  );
};

"use client";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/useNavigation";
import { HeroSectionInterface } from "@/interfaces/herosection.interface";
import { ChevronRight } from "lucide-react";

export const HeroCTA = ({ sectionRefs }: HeroSectionInterface) => {
  const { handleRefNavigation } = useNavigation({ sectionRefs });

  return (
    <Button
      onClick={() => handleRefNavigation("projects")}
      className="flex items-center justify-center px-[100px] py-4 gap-2 rounded-full hover:scale-105 transition-all hover:bg-secondary bg-primary text-background cursor-none"
    >
      See My Work
      <ChevronRight size={20} />
    </Button>
  );
};

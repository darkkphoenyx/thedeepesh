import TextPressure from "@/components/animations/text-animations/text-pressure/TextPressure";
import Heading from "@/shared/Heading";

export const HeroSectionDesktop = () => {
  return (
    <div className="hidden md:block relative max-w-4xl w-full mx-auto px-10 md:px-4">
      <Heading
        className="absolute left-1/2 md:-top-3 -top-7 -translate-x-1/2 text-center text-secondary text-4xl z-10"
        title="Hey There!"
        once
      />
      <TextPressure
        text="I'm Deepesh"
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
  );
};

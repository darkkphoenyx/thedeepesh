import Heading from "@/shared/Heading";

export const HeroSectionMobile = () => {
  return (
    <div className="block md:hidden relative w-full">
      <Heading
        className="absolute left-1/2 md:-top-3 -top-7 -translate-x-1/2 text-center text-secondary text-4xl z-10"
        title="Hey There!"
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
  );
};

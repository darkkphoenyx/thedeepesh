import Heading from "@/shared/Heading";

export const Logo = ({ navigation }: { navigation: any }) => {
  const handleRefNavigation = navigation;
  return (
    <div>
      <a
        href="#knowMe"
        onClick={(e) => {
          e.preventDefault();
          handleRefNavigation("knowMe");
        }}
      >
        <Heading
          animation="fade-right"
          title="theDeepesh"
          className="text-2xl md:text-3xl font-bold cursor-none text-primary mb-0"
          once
        />
      </a>
    </div>
  );
};

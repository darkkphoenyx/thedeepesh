import { cn } from "@/lib/utils";

const Heading = ({
  title,
  className,
  animation,
  once,
}: {
  title: string;
  className?: string;
  animation?: string;
  once?: boolean;
}) => {
  return (
    <h2
      data-aos={animation || "fade-up"}
      data-aos-once={once ? "true" : "false"}
      className={cn(
        `md:text-5xl text-4xl text-center font-bold mb-12 text-secondary ${className}`,
      )}
      style={{ fontFamily: "Priestacy" }}
    >
      {title}
    </h2>
  );
};

export default Heading;

import { ImageInterface } from "@/interfaces/images.interface";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const SharedImage = ({
  alt,
  src,
  aos,
  className,
  lazyLoading,
}: ImageInterface) => {
  return (
    <Image
      data-aos={aos}
      src={src}
      alt={alt}
      height={1000}
      width={1000}
      loading={lazyLoading}
      className={cn("h-auto w-auto", className)}
    />
  );
};

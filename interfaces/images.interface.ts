export interface ImageInterface {
  aos?: string;
  src: string;
  alt: string;
  unoptimized?: boolean;
  lazyLoading?: "eager" | "lazy" | undefined;
  className?: string;
}

export interface ImageInterface {
  aos?: string;
  src: string;
  alt: string;
  lazyLoading?: "eager" | "lazy" | undefined;
  className?: string;
}

import { RefObject } from "react";

export interface HeroSectionInterface {
  sectionRefs: RefObject<Record<string, HTMLDivElement | null>>;
}

export interface HeroConnectMeInterface extends HeroSectionInterface {
  pdfDownloadLink?: string;
}

import { Dispatch, SetStateAction } from "react";

export interface NavigationInterface {
  sectionRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
}

export interface DesktopNavLinksInterface {
  activeSection: string;
  handleRefNavigation: (link: string) => void;
}

export interface MobileMenuInterface {
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  lines: string[];
}

export interface MobileNavLinksInterface {
  activeSection: string;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  handleRefNavigation: (link: string) => void;
}

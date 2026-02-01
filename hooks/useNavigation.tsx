"use client";

import { NavigationInterface } from "@/interfaces/navigation.interface";
import { useIsMid } from "@/utils/useIsMid";
import { useCallback, useEffect, useRef, useState } from "react";

export const useNavigation = ({ sectionRefs }: NavigationInterface) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navRef = useRef<HTMLElement | null>(null);
  const isMid = useIsMid();

  const isMobileMenuOpen = !isMid && mobileMenuOpen;

  // Hamburger lines
  const lines = [
    isMobileMenuOpen ? "-rotate-45 translate-y-3" : "",
    isMobileMenuOpen ? "opacity-0" : "opacity-100",
    isMobileMenuOpen ? "rotate-45 -translate-y-2" : "",
  ];

  const toggleMobileMenu = () => {
    if (!isMid) {
      setMobileMenuOpen((prev) => !prev);
    }
  };

  /**
   * Scroll to section with navbar height offset
   */
  const handleRefNavigation = useCallback(
    (section: string) => {
      const navbarHeight = navRef.current?.clientHeight || 0;
      const element = sectionRefs.current[section];

      if (!element) return;

      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: window.pageYOffset + rect.top - navbarHeight,
        behavior: "smooth",
      });
    },
    [sectionRefs],
  );

  /**
   * Scroll listener
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);

      for (const section of Object.keys(sectionRefs.current)) {
        const el = sectionRefs.current[section];
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 4
        ) {
          setActiveSection((prev) => (prev === section ? prev : section));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  const width = isMid ? (scrolled ? "80rem" : "90%") : "100%";

  return {
    lines,
    toggleMobileMenu,
    handleRefNavigation,
    width,
    navRef,
    scrolled,
    activeSection,
    isMobileMenuOpen,
    setIsMobileMenuOpen: setMobileMenuOpen,
  };
};

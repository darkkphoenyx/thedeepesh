"use client";
import { useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export const useHeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const zIndex = useTransform(
    scrollYProgress,
    [0, isMobileMenuOpen ? 0.35 : 1],
    [10, isMobileMenuOpen ? -100 : -10],
  );

  return {
    isMobileMenuOpen,
    zIndex,
  };
};

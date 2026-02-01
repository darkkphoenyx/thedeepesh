"use client";
import project from "@/lib/appwrite/APIs";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";

export const useHeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [pdfDownloadLink, setPdfDownloadLink] = useState<string | undefined>();
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

  useEffect(() => {
    const getPdfLink = async () => {
      try {
        const response = await project.getFileDownload();
        setPdfDownloadLink(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPdfLink();
  }, []);

  return {
    isMobileMenuOpen,
    zIndex,
    pdfDownloadLink,
  };
};

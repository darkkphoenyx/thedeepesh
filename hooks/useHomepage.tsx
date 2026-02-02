"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export const useHomepage = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // this is a helper function for Removing null return issue of Ref. el
  const registerSection = useCallback(
    (key: string) => (el: HTMLDivElement | null) => {
      sectionRefs.current[key] = el;
    },
    [],
  );

  return {
    sectionRefs,
    registerSection,
    mounted,
  };
};

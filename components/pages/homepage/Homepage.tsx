"use client";
import Navbar from "@/components/navigation/Navbar";
import { useRef } from "react";
import { Toaster } from "sonner";

export const Homepage = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // this is a helper function for Removing null return issue of Ref. el
  // const registerSection = useCallback(
  //   (key: string) => (el: HTMLDivElement | null) => {
  //     sectionRefs.current[key] = el;
  //   },
  //   [],
  // );
  return (
    <div>
      <Toaster position="top-right" />
      <div className="bg-background text-primary">
        <Navbar sectionRefs={sectionRefs} />
      </div>
    </div>
  );
};

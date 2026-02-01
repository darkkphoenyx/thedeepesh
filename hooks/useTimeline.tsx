"use client";
import { useEffect, useRef, useState } from "react";

export const useTimeline = () => {
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // The scroll position within the timeline section (0 to 1)
      const scrollY =
        Math.min(Math.max(0, windowHeight / 2 - rect.top), rect.height) /
        rect.height;

      // Calculate line height (in pixels)
      const newHeight = scrollY * rect.height;
      setProgressHeight(newHeight);

      // Determine which circle is currently active
      let currentIndex = 0;
      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          const circleRect = circle.getBoundingClientRect();
          const circleCenter = circleRect.top + circleRect.height / 2;
          if (circleCenter < window.innerHeight / 2) {
            currentIndex = index;
          }
        }
      });
      setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return {
    timelineRef,
    progressHeight,
    circleRefs,
    activeIndex,
  };
};

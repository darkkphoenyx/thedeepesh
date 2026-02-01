"use client";
import Heading from "@/shared/Heading";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
interface TimelineItem {
  year: string;
  title: string;
  where: string;
  icon: any;
  description: string;
  side: "left" | "right";
}

const Timeline: React.FC = () => {
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData: TimelineItem[] = [
    {
      year: "DEC 2025 - PRESENT",
      title: "Frontend Developer Trainee",
      where: "Brahmabyte Lab",
      icon: BriefcaseBusiness,
      description: "Continuing on ChatBoq (SaaS product).",
      side: "right",
    },
    {
      year: "AUG 2025 - DEC 2025",
      title: "Frontend Developer Internship",
      where: "Brahmabyte Lab",
      icon: BriefcaseBusiness,
      description:
        "Worked on ChatBoq (SaaS product) using Next.js, handled state management with Zustand and Redux Toolkit, integrated REST APIs with Axios, and gained experience with SSR, sockets.io, email templates, and TipTap editor for web.",
      side: "left",
    },
    {
      year: "MAR 2025 - JUN 2025",
      title: "Full Stack Developer Internship",
      where: "Mindxcape",
      icon: BriefcaseBusiness,
      description:
        "Worked as a Full Stack Developer Intern at Mindxcape, where I developed and maintained Aktiverian Nepal’s website, collaborated on client web applications, and gained hands-on experience with Next.js and monorepo workflows.",
      side: "right",
    },
    {
      year: "2023 - Present",
      title: "BSc.CSIT Attended",
      where: "Tribhuvan University",
      icon: GraduationCap,
      description:
        "Working toward a Bachelor’s degree in CSIT, where I’m developing skills in software development, exploring algorithmic techniques, and strengthening my understanding of core computing concepts.",
      side: "left",
    },
    {
      year: "2020 - 2022",
      title: "+2 Science",
      where: "Nepal APF School",
      icon: GraduationCap,
      description:
        "Completed my Higher Secondary Education with a focus on Science and Mathematics.",
      side: "right",
    },
  ];

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

  return (
    <div className="bg-background md:rounded-t-[50px] rounded-t-[30px]">
      <div className="md:py-20 max-md:pt-20 max-w-7xl mx-auto px-4">
        <Heading title="Professional Timeline" />

        <div ref={timelineRef} className="relative">
          {/* Static Center Line */}
          <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200/20 rounded-full overflow-hidden">
            {/* Animated Scroll Progress Line */}
            <div
              className="absolute top-0 left-0 w-full bg-primary transition-[height] duration-75 ease-linear rounded-full"
              style={{ height: `${progressHeight}px` }}
            />
          </div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-20 last:mb-0">
              {/* Center Dot */}
              <div
                ref={(el) => {
                  circleRefs.current[index] = el;
                }}
                className="absolute left-4 lg:left-1/2 transform -translate-x-2 lg:-translate-x-1/2 lg:-translate-y-1/2 top-0 z-10"
              >
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index <= activeIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-600"
                  }`}
                />
              </div>

              {/* Content Card */}
              <div className="w-[90%] mx-auto lg:w-full lg:max-w-full">
                <div
                  className={`w-full lg:w-5/12  lg:translate-x-0 md:translate-x-4 translate-x-3 ${
                    item.side === "left" ? "lg:mr-auto " : "lg:ml-auto "
                  } mt-8 `}
                >
                  <div
                    className={`bg-gradient-to-br from-gray-300/5 to-gray-900/10 px-4 py-4 lg:p-6 transition-all duration-500 transform rounded-[22px] shadow-[10px_4px_25px_0_rgba(0,0,0,0.15)] border border-gray-600 ${
                      index <= activeIndex
                        ? "opacity-100  lg:-translate-y-3"
                        : "opacity-50 translate-y-8  lg:translate-y-8"
                    }`}
                  >
                    <div className="flex gap-2 items-center mb-2">
                      {/* Icon */}
                      <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-secondary" />
                      </div>
                      {/* Time */}
                      <p className="border border-secondary/50 px-6 text-secondary bg-secondary/20 py-1 text-xs rounded-full">
                        {item.year}
                      </p>
                    </div>
                    <p className="text-xl mt-4 font-semibold text-secondary">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-400">{item.where}</p>

                    {/* Description */}
                    <p className="font-inter mt-4 text-gray-300 text-sm tracking-[0.4px] leading-6 lg:leading-7.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

"use client";
import { timelineData } from "@/components/data/TimelineData";
import { useTimeline } from "@/hooks/useTimeline";
import Heading from "@/shared/Heading";
import React from "react";

const Timeline: React.FC = () => {
  const { timelineRef, progressHeight, circleRefs, activeIndex } =
    useTimeline();

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

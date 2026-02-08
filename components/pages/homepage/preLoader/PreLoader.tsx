"use client";

import { gsap } from "gsap";
import { useEffect } from "react";
import "./PreLoader.css";

const PreLoader = () => {
  useEffect(() => {
    gsap.fromTo(
      ".logo-name",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 0.5 },
    );

    // Hide loading screen
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
      },
    );
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen">
      {/* Loading Page */}
      <div className="loading-page absolute inset-0 flex flex-col items-center justify-center gap-6 bg-background z-50 text-[#191654]">
        <svg
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-[150px] w-[150px] stroke-[#F56E5B] fill-none stroke-[10px] animate-draw"
        >
          <path d="M16 32l0 119.2 64 0 0-55.2 107.2 0C300.6 96 368 176.2 368 255.9 368 332 309.4 416 187.2 416l-171.2 0 0 64 171.2 0C347.9 480 432 367.3 432 255.9 432 197.2 409.9 142.5 369.7 101.6 324.9 56 261.7 32 187.2 32L16 32z" />
        </svg>
      </div>
    </div>
  );
};

export default PreLoader;

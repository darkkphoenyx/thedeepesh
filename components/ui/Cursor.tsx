"use client";
import gsap from "gsap";
import { useLayoutEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {};
  }, []);

  useLayoutEffect(() => {
    gsap.to("#cursor", {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 0.01,
      // ease: "back.out",
    });
  }, [mousePosition]);

  return (
    <div
      id="cursor"
      className="hidden md:block w-5 h-5 bg-primary rounded-full fixed pointer-events-none mix-blend-difference z-50 shadow-[0px_0px_20px_10px_rgba(255,107,0,0.5)]"
    />
  );
};

export default Cursor;

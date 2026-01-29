"use client";
import { useEffect, useState } from "react";

export const useIsMid = () => {
  const [isMid, setIsMid] = useState(false);

  useEffect(() => {
    const check = () => setIsMid(window.innerWidth >= 1024);

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return isMid;
};

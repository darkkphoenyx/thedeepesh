"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export const usePreloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return { loading };
};

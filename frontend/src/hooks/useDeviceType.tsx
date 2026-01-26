import { useState, useEffect } from "react";

export const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device supports touch and has small viewport
    const checkMobile = () => {
      const isTouchDevice =
        window.matchMedia("(pointer:coarse)").matches ||
        navigator.maxTouchPoints > 0;
        // navigator.msMaxTouchPoints > 0;

      const isSmallViewport = window.innerWidth < 768; // md breakpoint in Tailwind
      
      setIsMobile(isTouchDevice || isSmallViewport);
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return { isMobile };
};

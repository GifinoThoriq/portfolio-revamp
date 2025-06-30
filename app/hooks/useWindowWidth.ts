import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // This code only runs on the client
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize(); // Initial set

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
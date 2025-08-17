import { useEffect, useState } from "react";
import { breakpoints } from "@/core/helpers/_index";

interface WindowSizeReturn {
  responsive: {
    [key: string]: boolean;
  };
  height: number | null;
  width: number | null;
  isLoading: boolean
}

export function useWindowSize(): WindowSizeReturn {

  const appWindow = (typeof window !== 'undefined') ? window : { innerHeight: 0, innerWidth: 0, };
  const [size, setSize] = useState([0, 0]);
  const [isLoading, setIsLoading] = useState(true)


  // useEffect(() => {
  //   setSize([window?.innerHeight, window?.innerWidth]);
  // }, []);


  useEffect(() => {
    setSize([window?.innerHeight, window?.innerWidth]);
    const handleResize = () => setSize([window?.innerHeight, window?.innerWidth]); setIsLoading(false);
    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return {
    responsive: {
      xxs: size[1] > breakpoints.xxs,
      xs: size[1] >= breakpoints.xs,
      sm: size[1] >= breakpoints.sm,
      md: size[1] >= breakpoints.md,
      lg: size[1] >= breakpoints.lg,
      xl: size[1] >= breakpoints.xl,
      xxl: size[1] >= breakpoints.xxl,
    },
    height: size[0],
    width: size[1],
    isLoading
  };
}

import { useEffect, useState } from "react";

export const useProgress = (timeProgress: number, lote?: number) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
        }
        if (lote) {
          const nextProgress = prev + lote;
          return nextProgress <= 100 ? nextProgress : 100;
        } else {
          return prev + 1;
        }
      });
    }, timeProgress * 10);
    return () => {
      clearInterval(interval);
    };
  }, [timeProgress, lote]);
  return {
    progress: progress,
  };
};

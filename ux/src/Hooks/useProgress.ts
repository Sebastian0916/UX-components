import { useEffect, useState } from "react";

export const useProgress = (timeProgress: number, lote: number) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
        }
        const nextProgress = prev + lote;
        return nextProgress > 100 ? 100 : nextProgress;
      });
    }, timeProgress * 10);

    return () => {
      clearInterval(interval);
    };
  }, [timeProgress, lote]);

  return {
    progressToast: progress,
  };
};

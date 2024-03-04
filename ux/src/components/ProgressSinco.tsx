import React, { FC, useEffect, useState } from "react";
import { SincoTheme } from "@sinco/react";
import { LinearProgress, Stack, Typography } from "@mui/material";
import spinnerSinco from "../assets/SpinnerSincoERP.gif";
import { useProgress } from "../Hooks/useProgress";

type Variant = "buffer" | "determinate" | "indeterminate" | "query" | "lote";

interface ProgressProps {
  time?: number;
  variant?: Variant;
  valueBuffer?: number;
  lote?: number;
}

export const ProgressSinco: FC<ProgressProps> = ({
  time,
  variant = "indeterminate",
  valueBuffer,
  lote = 0,
}) => {
  const timeProgress = time || 10;
  const [showToast, setShowToast] = useState<boolean>(true);
  const { progressToast } = useProgress(timeProgress, lote);

  useEffect(() => {
    if (progressToast >= 100) {
      setShowToast(false);
    }
  }, [progressToast]);

  return (
    <Stack
      position={"fixed"}
      zIndex={1000}
      height={"100%"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {showToast && (
        <Stack
          width={226}
          gap={0.8}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack width={300} height={60} justifyContent={"center"}>
            <img src={spinnerSinco} alt="logo" />
          </Stack>
          <Typography variant="body2" color={"text.secondary"}>
            Progresando...
          </Typography>
          <LinearProgress
            value={progressToast}
            variant={variant === "lote" ? "determinate" : variant}
            valueBuffer={valueBuffer}
            color="primary"
            sx={{
              backgroundColor: SincoTheme.palette.primary[50],
              clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
              height: 10,
              width: 226,
              ".MuiLinearProgress-dashed": {
                top: variant === "buffer" ? 2.5 : 0,
              },
              ".MuiLinearProgress-bar": {
                clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
              },
            }}
          />
          <Typography color={"text.secondary"} variant="subtitle2">
            {`${progressToast}%`}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

import React from "react";
import {
  CircularProgress,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import HeaderComponents from "./headerComponents";
const ProgressComponent = () => {
  const progressValue = 50;
  const bufferValue = 70;
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="progress" />
      <Stack width={873} gap={1}>
        <Typography variant="caption" color="text.secondary">
          Progress Lineal | Type: Determinate | Buffer | Interminate
        </Typography>
        <Stack gap={2}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <LinearProgress
              value={progressValue}
              variant="determinate"
              sx={{ width: 180 }}
              color="secondary"
            />
            <LinearProgress
              variant="buffer"
              sx={{ width: 180 }}
              color="success"
              value={progressValue}
              valueBuffer={bufferValue}
            />
            <LinearProgress
              variant="indeterminate"
              sx={{ width: 180 }}
              color="inherit"
            />
            <LinearProgress variant="query" sx={{ width: 180 }} color="info" />
          </Stack>
        </Stack>
      </Stack>
      <Stack width={873} gap={1}>
        <Typography variant="caption" color="text.secondary">
          Progress Circular | Type: Determinate | Buffer | Interminate
        </Typography>
        <Stack gap={2}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <CircularProgress
              variant="determinate"
              value={60}
              color="secondary"
            />
            <CircularProgress color="inherit" />
            <CircularProgress color="success" variant="indeterminate" />
          </Stack>
        </Stack>
      </Stack>
    </Stack >
  );
};

export { ProgressComponent as Progress };

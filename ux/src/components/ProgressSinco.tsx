import { Stack } from "@mui/material";
import React from "react";
import HeaderComponents from "./headerComponents";
import { ProgressSinco } from "@sinco/react";

export const ProgressSincoPrueba = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="ProgressSinco" />
      <Stack height={180}>
        <ProgressSinco time={1000} />
      </Stack>
    </Stack>
  );
};

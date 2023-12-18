import { Stack, Switch, Typography } from "@mui/material";
import React from "react";
import HeaderComponents from "./headerComponents";

const SwitchComponent = () => {
  return (
    <Stack mt={4}>
      <HeaderComponents title="Switch" />
      <Stack gap={2} mt={4}>
        <Typography variant="caption" color="text.secondary">
          Switch | Size: Medium | Small{" "}
        </Typography>
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Switch size="medium" color="primary" />
          <Switch size="medium" color="secondary" />
          <Switch size="medium" color="error" />
          <Switch size="small" color="warning" />
          <Switch size="small" color="info" />
          <Switch size="small" color="success" />
          <Switch size="small" disabled />
        </Stack>
      </Stack>
    </Stack>
  );
};

export { SwitchComponent as Switch };

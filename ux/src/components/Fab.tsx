import React from "react";
import HeaderComponents from "./headerComponents";
import { Fab, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
type sizeFab = "small" | "large" | "medium";
type variantFab = "extended" | "circular";
type colorFab =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "primary"
  | "secondary"
  | "default"
  | "inherit";
const FabWraps = ({
  size,
  title,
  variant,
  color,
  disabled,
}: {
  size: sizeFab;
  title: string;
  variant?: variantFab;
  color?: colorFab;
  disabled?: boolean;
}) => {
  return (
    <Fab variant={variant} size={size} color={color} disabled={disabled}>
      {title}
      <Add />
    </Fab>
  );
};
const FabC = () => {
  return (
    <Stack width={871} gap={4}>
      <HeaderComponents title="Fab" />
      <Stack gap={1}>
        <Stack alignItems={"flex-start"}>
          <Typography color={"text.secondary"} variant="caption">
            Floating Action Button | Extended | Size: Large | Medium | Small
          </Typography>
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <FabWraps
            size="large"
            title="success"
            color="success"
            variant="extended"
          />
          <FabWraps
            size="large"
            title="error"
            color="error"
            variant="extended"
          />
          <FabWraps
            size="medium"
            title="warning"
            color="warning"
            variant="extended"
          />
          <FabWraps
            size="medium"
            title="info"
            color="inherit"
            variant="extended"
          />
          <FabWraps
            size="small"
            title="info"
            variant="extended"
            disabled={true}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FabC;

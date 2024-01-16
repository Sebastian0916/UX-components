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
  title?: string;
  variant: variantFab;
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
const FabComponent = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="Fab" link="floating-action-button" />
      <Stack gap={1} width={"873px"}>
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
      <Stack gap={1} width={"873px"}>
        <Stack alignItems={"flex-start"}>
          <Typography color={"text.secondary"} variant="caption">
            Floating Action Button | circular | Size: Large | Medium | Small
          </Typography>
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <FabWraps size="large" color="success" variant="circular" />
          <FabWraps size="large" variant="circular" color="error" />
          <FabWraps size="medium" variant="circular" color="warning" />
          <FabWraps size="medium" color="inherit" variant="circular" />
          <FabWraps size="small" variant="circular" disabled={true} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export { FabComponent as Fab };

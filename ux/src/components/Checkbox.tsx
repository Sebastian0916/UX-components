import React from "react";
import HeaderComponents from "./headerComponents";
import { Checkbox, Stack, Typography } from "@mui/material";

const CheckboxComponent = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="Chekcbox" />
      <Stack gap={1} width={"873px"}>
        <Typography variant="caption" color="text.secondary">
          Checkbox | Checked | Size: Large | Medium | Small
        </Typography>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Checkbox size="large" />
          <Checkbox size="large" />
          <Checkbox size="large" />
          <Checkbox size="medium" />
          <Checkbox size="medium" />
          <Checkbox size="small" />
          <Checkbox size="small" />
          <Checkbox size="small" disabled />
        </Stack>
      </Stack>
    </Stack>
  );
};

export { CheckboxComponent as Checkbox };

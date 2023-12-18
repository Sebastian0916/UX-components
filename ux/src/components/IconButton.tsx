import React from "react";
import { IconButton, Stack, Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import HeaderComponents from "./headerComponents";

const IconButtonComponentomponent = () => {
  const IconLarge = ["disabled", "primary", "secondary"];
  const IconMedium = ["error", "warning", "info"];
  const IconSmall = ["success", "active", "disabled"];
  return (
    <>
      <HeaderComponents title="Icon Button" />
      <Box
        width={"873px"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={4}
      >
        <Typography variant="caption" color="text.secondary">
          Icon button | Size: Medium | Small | large
        </Typography>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          {IconSmall.map((color) => (
            <IconButton color={color as any} key={color}>
              <StarIcon fontSize="large" />
            </IconButton>
          ))}
          {IconMedium.map((color) => (
            <IconButton color={color as any} key={color}>
              <StarIcon fontSize="medium" />
            </IconButton>
          ))}
          {IconLarge.map((color) => (
            <IconButton color={color as any} key={color}>
              <StarIcon fontSize="small" />
            </IconButton>
          ))}
        </Stack>
      </Box>
    </>
  );
};
export { IconButtonComponentomponent as IconButton };

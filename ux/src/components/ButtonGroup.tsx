import React from "react";
import { ButtonGroup, Button, Stack, Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HeaderComponents from "./headerComponents";
const ButtonGroupComponent = () => {
  const ColorButtonGroup = ["primary", "secondary", "success"];

  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="ButtonGroup" link="Button-Group"/>
      <Box
        width={"873px"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={3}
      >
        <Typography variant="caption" color="text.secondary">
          Button Group | Size: Medium | Small | large
        </Typography>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          {ColorButtonGroup.map((color) => (
            <ButtonGroup
              sx={{ boxShadow: "none" }}
              size={
                color === "primary"
                  ? "large"
                  : color === "secondary"
                  ? "medium"
                  : "small"
              }
              variant="contained"
              aria-label="Contained primary button group"
              color={color as any}
              key={color}
            >
              {[1, 2, 3].map((item) => (
                <Button key={item}>{color}</Button>
              ))}
            </ButtonGroup>
          ))}
        </Stack>
        <Stack flexDirection={"row"} justifyContent={"space-between"} mt={4}>
          {ColorButtonGroup.map((color) => (
            <ButtonGroup
              sx={{ boxShadow: "none" }}
              size={
                color === "primary"
                  ? "large"
                  : color === "secondary"
                  ? "medium"
                  : "small"
              }
              variant="contained"
              aria-label="Contained primary button group"
              color={color as any}
              key={color}
            >
              <Button>{color}</Button>
              <Button>
                <ArrowDropDownIcon fontSize="medium" />
              </Button>
            </ButtonGroup>
          ))}
        </Stack>
        <Stack flexDirection={"row"} justifyContent={"space-between"} mt={4}>
          {ColorButtonGroup.map((color) => (
            <ButtonGroup
              sx={{ boxShadow: "none" }}
              orientation="vertical"
              size={
                color === "primary"
                  ? "large"
                  : color === "secondary"
                  ? "medium"
                  : "small"
              }
              variant="contained"
              aria-label="Contained primary button group"
              color={color as any}
              key={color}
            >
              <Button>{color}</Button>
              <Button>{color}</Button>
              <Button>{color}</Button>
            </ButtonGroup>
          ))}
        </Stack>
        <Stack flexDirection={"row"} justifyContent={"space-between"} mt={4}>
          {ColorButtonGroup.map((color) => (
            <ButtonGroup
              sx={{ boxShadow: "none" }}
              orientation="vertical"
              size={
                color === "primary"
                  ? "large"
                  : color === "secondary"
                  ? "medium"
                  : "small"
              }
              variant="contained"
              aria-label="Contained primary button group"
              color={color as any}
              key={color}
            >
              <Button>{color}</Button>
              <Button>
                <ArrowDropDownIcon fontSize="medium" />{" "}
              </Button>
            </ButtonGroup>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};
export { ButtonGroupComponent as ButtonGroup };

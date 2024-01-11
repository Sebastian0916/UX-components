import { Button, Stack, Typography } from "@mui/material";
import { StarRate } from "@mui/icons-material";
import React from "react";
import HeaderComponents from "./headerComponents";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";

type MaterialUIColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

interface ButtonSetProps {
  variantType: "contained" | "outlined" | "text";
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  colorSet: MaterialUIColor[];
  sizeSet: ("small" | "medium" | "large")[];
  disabledSet: boolean[];
}
const ButtonSet: React.FC<ButtonSetProps> = ({
  variantType,
  startIcon,
  endIcon,
  colorSet,
  sizeSet,
  disabledSet,
}) => {
  const renderButtons = () => {
    return colorSet.map((color, i) => (
      <Button
        key={i}
        startIcon={startIcon}
        endIcon={endIcon}
        color={color}
        variant={variantType}
        size={sizeSet[i]}
        disabled={disabledSet[i]}
      >
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </Button>
    ));
  };

  return (
    <Stack>
      <Typography variant="caption" color="textSecondary">
        Button | {variantType} | Icon Star | Icon End | Size: Large | Medium |
        Small
      </Typography>
      <Stack
        gap={1.5}
        flexDirection="row"
        width={873}
        justifyContent="space-between"
        alignItems="center"
      >
        {renderButtons()}
      </Stack>
    </Stack>
  );
};
const ButtonComponent = () => {
  const colorSet: MaterialUIColor[] = [
    "primary",
    "secondary",
    "error",
    "warning",
    "info",
    "success",
    "inherit",
  ];
  const sizeSet: ("small" | "medium" | "large")[] = [
    "large",
    "large",
    "large",
    "medium",
    "medium",
    "small",
    "small",
  ];

  const disabledSet = [false, false, false, false, false, false, true];
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="Button" />
      <Stack gap={4} alignItems={"center"}>
        <ButtonSet
          variantType="contained"
          colorSet={colorSet}
          sizeSet={sizeSet}
          disabledSet={disabledSet}
        />
        <ButtonSet
          variantType="contained"
          startIcon={<StarRate />}
          endIcon={<StarRate />}
          colorSet={colorSet}
          sizeSet={sizeSet}
          disabledSet={disabledSet}
        />
        <ButtonSet
          variantType="outlined"
          colorSet={colorSet}
          sizeSet={sizeSet}
          disabledSet={disabledSet}
        />
        <ButtonSet
          variantType="outlined"
          startIcon={<StarRate />}
          endIcon={<StarRate />}
          colorSet={colorSet}
          sizeSet={sizeSet}
          disabledSet={disabledSet}
        />
        <ButtonSet
          variantType="text"
          colorSet={colorSet}
          sizeSet={sizeSet}
          disabledSet={disabledSet}
        />
        <ButtonSet
          variantType="text"
          startIcon={<StarRate />}
          endIcon={<StarRate />}
          colorSet={colorSet}
          sizeSet={sizeSet}
          disabledSet={disabledSet}
        />
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"} spacing={1}>
        <Typography variant="caption" color="text.secondary">Button | loading</Typography>
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<Save />}
          variant="text"
        >
          Save
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export { ButtonComponent as Button };

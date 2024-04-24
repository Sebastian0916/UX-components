import { Radio, Stack, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import HeaderComponents from "./headerComponents";
import { SincoTheme } from "@sinco/react";
import { RadioPropsColorOverrides } from "@mui/material";

type RadioPosition = "left" | "right";
type RadioStates = "active" | "disabled";
type RadioHeightPosition = "top" | "center";
type RadioColors = "primary" | "secondary";

export interface CardRadioProps {
  RadioPosition?: RadioPosition;
  heightPosition?: RadioHeightPosition;
  states?: RadioStates;
  slotMedia?: React.ReactNode;
  slotHeader?: React.ReactNode | string;
  slotContent?: React.ReactNode | string;
  color?: RadioColors;
  onChange: (value: string | number) => void;
  value: string | number;
  checked?: boolean;
}

export const CardRadio: FC<CardRadioProps> = ({
  RadioPosition = "right",
  states,
  slotMedia,
  slotHeader,
  slotContent,
  heightPosition = "top",
  color = "primary",
  value,
  onChange,
  checked,
}) => {
  const [isChecked, setIsChecked] = useState(checked ?? false);
  const [isActive] = useState(states === "active");

  const handleClick = () => {
    if (states === "disabled") return;
    setIsChecked(!isChecked);
    onChange(value);
  };

  const getBackgroundColor = () => {
    if (states === "disabled") return "";
    return isChecked
      ? color === "primary"
        ? "#E4ECF4"
        : color === "secondary"
        ? "#00BCD414"
        : "#FBFBFB"
      : "transparent";
  };

  const getBorderColor = () => {
    return isChecked
      ? color === "primary"
        ? "#2063A080"
        : color === "secondary"
        ? "#00BCD480"
        : "#00BCD4"
      : "#0000001F";
  };
  const getHoverColor = () => {
    return color === "primary"
      ? "#2063A00A"
      : color === "secondary"
      ? "#00BCD40A"
      : "FBFBFB";
  };
  useEffect(() => {
    if (checked !== undefined) setIsChecked(checked);
  }, [checked]);

  return (
    <>
      <Stack
        alignItems={"center"}
        ml={"240px"}
        justifyContent={"center"}
        mt={4}
        spacing={4}
        height={160}
      >
        <HeaderComponents title="CardRadio" link="floating-action-button" />
        <Stack gap={1} width={"873px"}>
          <Stack alignItems={"flex-start"}>
            <Typography color={"text.secondary"} variant="caption">
              CardRadio
            </Typography>
            <Stack alignItems={"center"} justifyContent={"center"}>
              <Stack
                padding={"8px 16px"}
                borderRadius={1}
                border={`solid 1px ${getBorderColor()}`}
                sx={{
                  "&:hover": {
                    backgroundColor: checked ? "none" : states === "disabled" ? "inherit" : getHoverColor(),
                  },                  
                  cursor: "pointer",
                }}
                bgcolor={getBackgroundColor()}
                onClick={handleClick}
              >
                <Stack
                  justifyContent={"space-between"}
                  flexDirection={
                    RadioPosition === "right" ? "row" : "row-reverse"
                  }
                  gap={RadioPosition === "left" ? 1 : 0}
                >
                  <Stack flexDirection={"row"} padding={"0px 16px 0 0"} gap={1}>
                    {slotMedia && <Stack>{slotMedia}</Stack>}
                    <Stack>
                      {slotHeader && (
                        <Typography
                          variant="subtitle2"
                          color={
                            states === "disabled"
                              ? "text.disabled"
                              : isActive
                              ? "text.primary"
                              : "text.primary"
                          }
                        >
                          {slotContent}
                        </Typography>
                      )}
                      {slotContent && (
                        <Typography
                          variant="caption"
                          color={
                            states === "disabled"
                              ? "text.disabled"
                              : isActive
                              ? "text.secondary"
                              : "text.secondary"
                          }
                        >
                          {slotContent}
                        </Typography>
                      )}
                    </Stack>
                  </Stack>
                  <Stack
                    justifyContent={
                      heightPosition === "top" ? "flex-start" : "center"
                    }
                  >
                    <Radio
                      checked={isChecked}
                      color={color}
                      disabled={states === "disabled"}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

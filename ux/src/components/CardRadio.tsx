import { Radio, Stack, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import HeaderComponents from "./headerComponents";
import { SincoTheme } from "@sinco/react";

type RadioPosition = "left" | "right";
type RadioStates = "active" | "disabled";
type RadioHeightPosition = "top" | "center";

export interface CardRadioProps {
  RadioPosition?: RadioPosition;
  heightPosition?: RadioHeightPosition;
  states?: RadioStates;
  slotMedia?: React.ReactNode;
  slotHeader?: React.ReactNode | string;
  slotContent?: React.ReactNode | string;
}

export const CardRadio: FC<CardRadioProps> = ({
  RadioPosition = "right",
  states,
  slotMedia,
  slotHeader,
  slotContent,
  heightPosition = "top",
}) => {
  const [isChecked, setIsChecked] = useState(states === "active");
  const [isActive, setIsActive] = useState(states === "active");

  const handleClick = () => {
    if (states === "disabled") return;
    setIsChecked(!isChecked);
    setIsActive(!isActive);
  };

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
                sx={{
                  border: isActive
                    ? "solid 1px #2063A0"
                    : "solid 1px #0000001F",
                  "&:hover": {
                    backgroundColor:
                      isActive || states === "disabled" ? "none" : "#2063A00A",
                  },
                  cursor: "pointer",
                }}
                bgcolor={isActive ? SincoTheme.palette.primary[50] : ""}
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
                      color={"primary"}
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

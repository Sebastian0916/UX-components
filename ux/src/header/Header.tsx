import { Stack, Typography } from "@mui/material";
import react from "../react.svg";
import figma from "../figma.svg";
import sinco from "../SINCO logos.svg";
import React from "react";
import { Radio } from "../components/RadioGroup";

const Header = () => {
  return (
    <>
      <Stack
        paddingTop={"54px"}
        ml={"240px"}
        gap={2}
        bgcolor={"background.default"}
      >
        <Stack flexDirection={"row"} gap={4} justifyContent={"center"}>
          <img src={react} alt="react" />
          <img src={figma} alt="react" />
          <img src={sinco} alt="react" />
        </Stack>
        <Stack gap={0.5} alignItems={"center"}>
          <Stack flexDirection={"row"}>
            <Typography color="primary.main" fontSize={60}>
              Sinco ERP
            </Typography>
            <Typography color={"text.primary"} fontSize={60}>
              Nuevo MUI
            </Typography>
          </Stack>
          <Typography fontSize="26px" color={"text.primary"}>
            Material Design
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;

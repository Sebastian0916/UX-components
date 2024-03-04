import React from "react";
import { Stack, Typography } from "@mui/material";
import react from "../assets/react.svg";
import figma from "../assets/figma.svg";
import sinco from "../assets/SINCO logos.svg";

const Header = () => {
  return (
    <>
      <Stack
        paddingBlock={"54px"}
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

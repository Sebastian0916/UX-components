import React from "react";
import { SpeedDial, SpeedDialAction, Stack, Typography } from "@mui/material";
import HeaderComponents from "./headerComponents";
import { FileCopy, Print, Save, Share } from "@mui/icons-material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

const SpeedDialComponent = () => {
  const actions = [
    { icon: <FileCopy />, name: "Copy" },
    { icon: <Save />, name: "Save" },
    { icon: <Print />, name: "Print" },
    { icon: <Share />, name: "Share" },
  ];
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="Speed Dial" link="Speed-Dial" />
      <Stack width={873} gap={1}>
        <Typography variant="caption" color={"text.secondary"}>
          Speed Dial | Standard | Expanded
        </Typography>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {[1, 2].map((index) => (
            <SpeedDial
              key={index}
              direction={index === 1 ? "left" : "up"}
              icon={<SpeedDialIcon />}
              ariaLabel={""}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SpeedDialComponent;

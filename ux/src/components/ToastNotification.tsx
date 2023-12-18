import { Stack, Button } from "@mui/material";
import React from "react";
import HeaderComponents from "./headerComponents";
import { ToastNotification } from "@sinco/react";

const ToastNotificationComponent = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="ToastNotification" />
      <ToastNotification
        title="¡Aviso importante!"
        subtitle="Subtitle"
        time={1000}
        dataOpt={["option", "option", "option"]}
        seeMore={true}
        actions={
          <Button size="small" color="info">
            Button
          </Button>
        }
      />
    </Stack>
  );
};

export { ToastNotificationComponent as ToastNotification };

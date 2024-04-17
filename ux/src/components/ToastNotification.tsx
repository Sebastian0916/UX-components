import { Stack, Button } from "@mui/material";
import React, { useState } from "react";
import HeaderComponents from "./headerComponents";
import { ToastNotification } from "@sinco/react";

const ToastNotificationComponent = () => {
  const [openToast, setOpenToast] = useState(false)

  const handdleOpen = () => {
    setOpenToast(true);
    setTimeout(() => {
      setOpenToast(false);
    }, 50000); 
  }

  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
    >
      <HeaderComponents title="ToastNotification" />
      <Stack justifyContent={"center"} alignItems={"center"} pt={5}>
        <Button color="primary" variant="contained" onClick={handdleOpen}>ToastNotification</Button>
      </Stack>
      {openToast && (
        <ToastNotification
          title="¡Aviso importante!"
          subtitle="Subtitle"
          time={100}
          dataOpt={["option", "option", "option"]}
          seeMore={true}
          actions={
            <Button size="small" color="info">
              Button
            </Button>
          }
        />
      )}
    </Stack>
  );
};

export { ToastNotificationComponent as ToastNotification };

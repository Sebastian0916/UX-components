import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import HeaderComponents from "./headerComponents";
import { FooterAction } from "@sinco/react";

const FooterActionComponent = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="FooterAction" />
      <Stack width={873}>
        <FooterAction
          labelChangeCounter={
            <Typography color="text.secondary" variant="body2" display="flex">
              Cambiaste
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ fontWeight: "bold", px: "2px" }}
              >
                X
              </Typography>
              Campos de información
            </Typography>
          }
          leftContent={
            <>
              <Button size="small">Open drawer</Button>
            </>
          }
          rightContent={
            <>
              <Button size="small">Open drawer</Button>
              <Button size="small">Open drawer</Button>
            </>
          }
        ></FooterAction>
      </Stack>
    </Stack>
  );
};

export { FooterActionComponent as FooterAction };

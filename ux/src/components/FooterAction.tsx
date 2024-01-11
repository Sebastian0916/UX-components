import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeaderComponents from "./headerComponents";
import { FooterAction } from "@sinco/react";

export const FooterActionExample = () => {
  const [isFooterActionVisible, setIsFooterActionVisible] = useState(false);

  const toggleFooterAction = () => {
    setIsFooterActionVisible(!isFooterActionVisible);
  };

  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="FooterAction" />
      <Box
        width="873px"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        mb={1}
        gap={3}
      >
        <Typography variant="caption" color="text.secondary">
          FooterActions
        </Typography>
      </Box>
      <Box display="flex">
        <Button variant="outlined" onClick={toggleFooterAction} size="medium">
          {isFooterActionVisible ? "Ocultar Footer" : "Mostrar Footer"}
        </Button>

        {isFooterActionVisible && (
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
        )}
      </Box>
    </Stack>
  );
};

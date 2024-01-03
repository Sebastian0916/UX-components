import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import HeaderComponents from "./headerComponents";
import { FooterAction } from "@sinco/react";

export const FooterActionExample = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="FooterAction" />
        <Box width="300px !important">
      {/* <Box width={873}> */}
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
        {/* </Box> */}
      </Box>
    </Stack>
  );
};


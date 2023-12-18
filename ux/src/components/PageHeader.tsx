import { Stack, IconButton, Button } from "@mui/material";
import React from "react";
import HeaderComponents from "./headerComponents";
import { PageHeader } from "@sinco/react";
import { Close } from "@mui/icons-material";

const PageHeaderComponent = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="PageHeader" />
      <Stack width={873}>
        <PageHeader
          title="Title"
          subtitle="Subtitle"
          buttonBack={
            <IconButton size="small" color="primary">
              <Close fontSize="small" />
            </IconButton>
          }
          actions={<Button size="small"> Button</Button>}
        />
      </Stack>
    </Stack>
  );
};

export { PageHeaderComponent as PageHeader };

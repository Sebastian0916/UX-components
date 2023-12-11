import React from "react";
import { Button, Stack, Typography } from "@mui/material";

const HeaderComponents = ({ title }: { title: string }) => {
  return (
    <div>
      <Stack
        width={"873px"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        bgcolor={"grey.100"}
        alignItems={"center"}
        p={1}
      >
        <Typography variant="h6">{title}</Typography>
        <Button variant="outlined" color="primary">
          Docs
        </Button>
      </Stack>
    </div>
  );
};

export default HeaderComponents;

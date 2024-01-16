import React from "react";
import { Button, Stack, Typography } from "@mui/material";


const HeaderComponents = ({ title, link }: { title: string, link?: string }) => {
  const docsLink = link ? `https://mui.com/material-ui/react-${link?.toLocaleLowerCase()}/` : `https://mui.com/material-ui/react-${title?.toLocaleLowerCase()}/`
  return (
    <>
      <Stack
        width={"873px"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        bgcolor={"grey.100"}
        alignItems={"center"}
        p={1}
      >
        <Typography variant="h6">{title}</Typography>
        <Button
          variant="outlined"
          color="primary"
          component="a"
          href={docsLink}
          target="_blank"
        >
          Docs
        </Button>
      </Stack>
    </>
  );
};

export default HeaderComponents;

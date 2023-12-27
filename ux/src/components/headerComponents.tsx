import React from "react";
import { Box, Button, Fab, Stack, Typography } from "@mui/material";
import { Drawer } from "@sinco/react";

const HeaderComponents = ({ title }: { title: string }) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


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
        <Button variant="outlined" color="primary" onClick={toggleDrawer}>
          Docs
        </Button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          title='Nombre empresa'
          color="#fff"
          width="35%"
          anchorActions='flex-start'
          anchor='right'
          actions={
            <>
            <Box display="flex">
              <Button color="primary" variant='outlined'>
                Action
              </Button>
              <Button color="primary" variant='contained'>Action</Button>
              <Button color="primary" variant='contained'>Action</Button>
            </Box>
            </>
          }
        >
<></>
        </Drawer>
      </Stack>
    </>
  );
};

export default HeaderComponents;

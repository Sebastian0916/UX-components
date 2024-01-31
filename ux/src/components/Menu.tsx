import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";
import HeaderComponents from "./headerComponents";
import { MenuOutlined } from "@mui/icons-material";
import { Drawer } from "@sinco/react";

const MenuComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="Menu" />
      <Stack width={873} gap={1}>
        <Typography variant="caption" color="text.secondary">
          Menu | Standard | Expanded
        </Typography>
        <Stack width={873}>
          <AppBar position="static">
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                onClick={toggleDrawer}
                size="small"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <MenuOutlined />
              </IconButton>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                title="Payment"
                color="#fff"
                width="25%"
                anchorActions="flex-end"
                anchor="left"
                actions={
                  <>
                    <Box display="flex" gap={1}>
                      <Button color="primary" variant="outlined">
                        Aceptar
                      </Button>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={toggleDrawer}
                      >
                        Cerrar
                      </Button>
                    </Box>
                  </>
                }
              >
                <Stack spacing={3}>
                  <TextField label="Textfield" />
                  <TextField label="Textfield" />
                  <TextField label="Textfield" />
                </Stack>
              </Drawer>
              <Button color="inherit" onClick={handleClick}>
                Menu
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { MenuComponent as MenuC };

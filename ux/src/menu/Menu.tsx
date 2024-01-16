import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  MenuItem, MenuList, Paper, Stack } from "@mui/material";
import menuData from "../data/menuData.json";
import { SincoTheme } from "@sinco/react";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleMenuItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <>
      <Paper
        sx={{
          width: 240,
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "auto",
          height: "100%",
        }}
      >
        <MenuList dense={false} variant="selectedMenu">
          {menuData.map((item, index) => (
            <Stack key={index}>
              {item.label && (
                <>
                  <MenuItem
                    selected={selectedItem === index}
                    sx={{
                      borderRight: selectedItem === index ? `2px solid ${SincoTheme.palette.primary.main} ` : 'none',
                    }}
                    component={Link}
                    to={`/${item.label.replace(/\s+/g, "").toLocaleLowerCase()}`}
                    onClick={() => handleMenuItemClick(index)}
                  >
                    {item.label}
                  </MenuItem>
                </>
              )}
            </Stack>
          ))}
        </MenuList>
      </Paper>
    </>
  );
};

export default Menu;

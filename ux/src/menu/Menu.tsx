import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider, MenuItem, MenuList, Paper, Stack } from "@mui/material";
import menuData from "../data/menuData.json";
import { palette } from "../Theme/palette";
import { SincoTheme } from "../Theme";

interface MenuProps {
  setrouterPage: React.Dispatch<React.SetStateAction<string>>;
}

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
                    to={`/${item.label.replace(/\s+/g, "")}`}
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

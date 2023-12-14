import {
  Divider,
  ListItemButton,
  MenuItem,
  MenuList,
  Paper,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom"; // Importa Link de React Router
import menuData from "../data/menuData.json";
import React from "react";

interface MenuProps {
  setrouterPage: React.Dispatch<React.SetStateAction<string>>;
}

const Menu = () => {
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
        <MenuList dense={false}>
          {menuData.map((item, index) => (
            <Stack key={index}>
              {item.label && (
                <>
                  <MenuItem
                    component={Link}
                    to={`/${item.label.replace(/\s+/g, "")}`}
                  >
                    {item.label}
                  </MenuItem>
                  <Divider />
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

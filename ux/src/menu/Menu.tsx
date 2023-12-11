import {
  Divider,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { SincoTheme } from "@sinco/react";
import Route from "../route/route";
import React, { useState } from "react";
interface MenuProps {
  setrouterPage: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({ setrouterPage }) => {
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
          <MenuItem
            sx={{
              backgroundColor: SincoTheme.palette.primary[50],
              position: "sticky",
              height: 46,
              zIndex: 2,
              top: 0,
            }}
          >
            <ListItemText>
              <Typography variant="subtitle2">COMPONENTES</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setrouterPage("autocomplete")}>
            <ListItemText>
              <Typography variant="body2">Autocomplete</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setrouterPage("button")}>
            <ListItemText>
              <Typography variant="body2">Button</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setrouterPage("icon")}>
            <ListItemText>
              <Typography variant="body2">Icon Button</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setrouterPage("fab")}>
            <ListItemText>
              <Typography variant="body2">Floating Action Button</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Button group</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Checkbox</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Radio - Radio Group</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Raing</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Select</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Slider</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Switch</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Text Field</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Toggle Button</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Avatar</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Icon</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">List</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Tooltip</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Alert</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Table</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Accordion</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>
              <Typography variant="body2">Card</Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
        </MenuList>
      </Paper>
    </>
  );
};

export default Menu;

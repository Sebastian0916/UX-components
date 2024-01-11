import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import HeaderComponents from "./headerComponents";
import { Star } from "@mui/icons-material";

const ListComponent = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="List" />
      <Stack width={873} gap={2}>
        <Typography variant="caption" color="text.secondary">
          List | Dense: True | False | Left Slot | Right Slot
        </Typography>
        <Stack flexDirection={"row"} justifyContent={"space-around"}>
          <List sx={{ width: 260 }} dense={false}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
                <ListItemText primary="List Item" secondary="secondary" />
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <List sx={{ width: 260 }}>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
                <ListItemText primary="List Item" secondary="secondary" />
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
                <ListItemText primary="List Item" secondary="secondary" />
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
                <ListItemText primary="List Item" secondary="secondary" />
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { ListComponent as List };

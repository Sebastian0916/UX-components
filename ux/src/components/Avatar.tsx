import { Avatar, AvatarGroup, Stack, Typography } from "@mui/material";
import HeaderComponents from "./headerComponents";
import { Person } from "@mui/icons-material";
import React from "../assets/react.svg";
const AvatarComponent = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="Avatar" />
      <Stack width={"873px"} gap={2}>
        <Typography variant="caption" color="text.secondary">
          Avatar | Content: Text | Icon | Image | Variant: Circular | Rounded |
          Square | Size: 32px | 24px | 18px
        </Typography>
        <Stack
          alignItems={"center"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Avatar variant="circular">OP</Avatar>
          <Avatar variant="circular" sx={{ width: 24, height: 24 }}>
            <Person />
          </Avatar>
          <Avatar
            variant="circular"
            sx={{ width: 24, height: 24 }}
            src={React}
          />
          <Avatar variant="rounded">OP</Avatar>
          <Avatar variant="rounded" sx={{ width: 24, height: 24 }}>
            <Person />
          </Avatar>
          <Avatar
            variant="rounded"
            sx={{ width: 18, height: 18 }}
            src={React}
          />
          <Avatar variant="square">OP</Avatar>
          <Avatar variant="square" sx={{ width: 24, height: 24 }}>
            <Person />
          </Avatar>
          <Avatar variant="square" sx={{ width: 18, height: 18 }} src={React} />
        </Stack>
        <Typography variant="caption" color="text.secondary">
          Avatar Group | Size: 32px | 24px | 18px{" "}
        </Typography>
        <Stack
          alignItems={"center"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <AvatarGroup max={4}>
            <Avatar variant="circular" sx={{ width: 32, height: 32 }}>
              <Person />
            </Avatar>
            <Avatar variant="circular" sx={{ width: 32, height: 32 }}>
              <Person />
            </Avatar>
            <Avatar variant="circular" sx={{ width: 32, height: 32 }}>
              +3
            </Avatar>
          </AvatarGroup>
          <AvatarGroup max={4}>
            <Avatar variant="circular" sx={{ width: 24, height: 24 }}>
              <Person />
            </Avatar>
            <Avatar variant="circular" sx={{ width: 24, height: 24 }}>
              <Person />
            </Avatar>
            <Avatar variant="circular" sx={{ width: 24, height: 24 }}>
              +3
            </Avatar>
          </AvatarGroup>
          <AvatarGroup max={4}>
            <Avatar variant="circular" sx={{ width: 18, height: 18 }}>
              <Person />
            </Avatar>
            <Avatar variant="circular" sx={{ width: 18, height: 18 }}>
              <Person />
            </Avatar>
            <Avatar variant="circular" sx={{ width: 18, height: 18 }}>
              +3
            </Avatar>
          </AvatarGroup>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { AvatarComponent as Avatar };

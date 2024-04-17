import React from "react";
import { Chip, Stack, Typography } from "@mui/material";
import HeaderComponents from "./headerComponents";
import { SincoTheme } from "@sinco/react";
import { Star } from "@mui/icons-material";

const ChipComponent = () => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const chipColors = [
    SincoTheme.palette.primary[100],
    SincoTheme.palette.secondary[100],
    SincoTheme.palette.error[100],
    SincoTheme.palette.warning[100],
    SincoTheme.palette.info[100],
    SincoTheme.palette.success[100],
  ];
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <Stack
      alignItems="center"
      ml={"240px"}
      justifyContent="center"
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="Chip" />
      <Stack gap={2}>
        <Typography variant="caption" color="text.secondary">
          Chip | Variant: Filled | Outline | Size: Medium | Small
        </Typography>
        <Stack
          direction="row"
          gap={2}
          width={873}
          justifyContent={"space-between"}
        >
          <Chip
            onClick={handleClick}
            color="primary"
            label="Chip"
            onDelete={handleDelete}
            size="small"
          />
          <Chip
            color="secondary"
            label="Chip"
            onDelete={handleDelete}
            size="small"
          />
          <Chip
            color="error"
            label="Chip"
            onDelete={handleDelete}
            size="small"
          />
          <Chip
            color="success"
            label="Chip"
            onDelete={handleDelete}
            size="small"
          />
          <Chip
            color="warning"
            label="Chip"
            onDelete={handleDelete}
            size="small"
          />
          <Chip
            color="info"
            label="Chip"
            onDelete={handleDelete}
            size="small"
          />
          {/* {chipColors.map((color, index) => (
          ))} */}
          <Chip label="Chip disabled" onDelete={handleDelete} disabled />
        </Stack>
      </Stack>
      <Stack gap={2}>
        <Typography variant="caption" color="text.secondary">
          Chip | Variant: Filled | Outline | Size: Medium | Small
        </Typography>
        <Stack
          direction="row"
          gap={2}
          width={873}
          justifyContent={"space-between"}
        >
          {chipColors.map((color, index) => (
            <Chip
              icon={<Star />}
              key={index}
              label="Chip"
              onDelete={handleDelete}
              sx={{ backgroundColor: color }}
            />
          ))}
          <Chip
            label="Chip disabled"
            icon={<Star />}
            onDelete={handleDelete}
            disabled
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export { ChipComponent as Chip };

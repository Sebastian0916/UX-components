import { Slider, Stack, Typography } from "@mui/material";
import React from "react";
import HeaderComponents from "./headerComponents";
function valuetext(value: number) {
  return `${value}°C`;
}
const SliderComponent = () => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <Stack gap={4}>
      <HeaderComponents title="Slider" />
      <Stack>
        <Typography variant="caption" color="text.secondary">
          Slider | Variant: Standard | Filled | Outline | Size: Large | Medium |
          Smalls
        </Typography>
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"row"}
          gap={6}
        >
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export { SliderComponent as Slider };

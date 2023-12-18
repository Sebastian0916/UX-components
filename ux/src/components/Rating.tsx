import React from "react";
import HeaderComponents from "./headerComponents";
import { Rating, Stack, Typography } from "@mui/material";

const RatingComponent = () => {
  return (
    <Stack gap={4}>
      <HeaderComponents title="Rating" />
      <Stack gap={1}>
        <Typography variant="caption" color="text.secondary">
          Rating | Size: Large | Medium | Small
        </Typography>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Rating
            name="half-rating"
            defaultValue={5}
            size="large"
            precision={0.5}
          />
          <Rating
            name="half-rating"
            defaultValue={5}
            size="medium"
            precision={0.5}
          />
          <Rating
            name="half-rating"
            defaultValue={5}
            size="small"
            precision={0.5}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export { RatingComponent as Rating };

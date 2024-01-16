import { Stack, TextField } from "@mui/material";
import React from "react";
import HeaderComponents from "./headerComponents";

const TextfieldComponent = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="TextField" link="text-field" />
      <Stack width={"873px"} spacing={2}>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <TextField
            size="medium"
            sx={{ width: 240 }}
            variant="outlined"
            label="TextField"
          />
          <TextField
            size="medium"
            sx={{ width: 240 }}
            variant="filled"
            label="TextField"
          />
          <TextField
            size="medium"
            sx={{ width: 240 }}
            variant="standard"
            label="TextField"
          />
        </Stack>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <TextField variant="outlined" sx={{ width: 240 }} label="TextField" />
          <TextField variant="filled" sx={{ width: 240 }} label="TextField" />
          <TextField variant="standard" sx={{ width: 240 }} label="TextField" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export { TextfieldComponent as Textfield };

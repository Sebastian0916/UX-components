import React, { FC } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../icons.css";
import { Stack } from "@mui/material";

type Size = "small" | "medium" | "large";
interface Props {
  containerClass?: string;
  size?: Size;
  fontSize?: Size;
  nameClass?: string;
}

export const Icons: FC<Props> = ({ containerClass, size }) => {
  return (
    <Stack
      alignItems="center"
      ml="240px"
      mb="200px"
      justifyContent="center"
      mt={4}
      spacing={4}
    >
      <span className={`${containerClass} ${size}`}>
        {Array.from({ length: 30 }, (_, index) => (
          <span key={index} className={`path${index + 1}`}></span>
        ))}
      </span>
    </Stack>
  );
};

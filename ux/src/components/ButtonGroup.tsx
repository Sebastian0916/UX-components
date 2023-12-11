import React from "react";
import { ButtonGroup, Button, IconButton, Stack, Box, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const ButtonGroupComponent = () => {

    const ColorButtonGroup = ["primary", "secondary", "success"];

    return (
        <>
            <Stack width={"873px"}
                justifyContent={"space-between"}
                flexDirection={"row"}
                bgcolor={"grey.100"}
                alignItems={"center"}
                p={1}>
                <Typography variant='h6' color="text.primary">Button Group</Typography>
                <Button size="small" color="primary" variant="outlined">Docs</Button>
            </Stack>
            <Box width={"873px"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={3}
                mt={4}>
                <Typography variant='caption' color="text.secondary">Button Group | Size: Medium | Small | large</Typography>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    {ColorButtonGroup.map((color) => (
                        <ButtonGroup sx={{ boxShadow: "none" }} size={color === "primary" ? "large" : color === "secondary" ? "medium" : "small"} variant="contained" aria-label="Contained primary button group" color={color as any} key={color}>
                            {[1, 2, 3].map((item) => (
                                <Button key={item}>{color}</Button>
                            ))}
                        </ButtonGroup>
                    ))}
                </Stack>
                <Stack flexDirection={"row"} justifyContent={"space-between"}
                    mt={4}>
                    {ColorButtonGroup.map((color) => (
                        <ButtonGroup sx={{ boxShadow: "none" }} size={color === "primary" ? "large" : color === "secondary" ? "medium" : "small"} variant="contained" aria-label="Contained primary button group" color={color as any} key={color}>
                            <Button>{color}</Button>
                            <Button><ArrowDropDownIcon fontSize="large" /> </Button>
                        </ButtonGroup>
                    ))}
                </Stack>
                <Stack flexDirection={"row"} justifyContent={"space-between"}
                    mt={4}>
                    {ColorButtonGroup.map((color) => (
                        <ButtonGroup sx={{ boxShadow: "none" }} orientation="vertical" size={color === "primary" ? "large" : color === "secondary" ? "medium" : "small"} variant="contained" aria-label="Contained primary button group" color={color as any} key={color}>
                            <Button>{color}</Button>
                            <Button>{color}</Button>
                            <Button>{color}</Button>
                        </ButtonGroup>
                    ))}
                </Stack>
                <Stack flexDirection={"row"} justifyContent={"space-between"}
                    mt={4}>
                    {ColorButtonGroup.map((color) => (
                        <ButtonGroup sx={{ boxShadow: "none" }} orientation="vertical" size={color === "primary" ? "large" : color === "secondary" ? "medium" : "small"} variant="contained" aria-label="Contained primary button group" color={color as any} key={color}>
                            <Button>{color}</Button>
                            <Button><ArrowDropDownIcon fontSize="large" /> </Button>
                        </ButtonGroup>
                    ))}
                </Stack>
            </Box>
        </>
    );
};
export { ButtonGroupComponent as ButtonGroup };

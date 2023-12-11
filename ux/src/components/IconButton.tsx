import React from "react";
import { Button, IconButton, Stack, Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const IconButtonComponent = () => {

    const IconLarge = ["disabled", "primary", "secondary"];
    const IconMedium = ["error", "warning", "info"];
    const IconSmall = ["success", "active", "disabled"];
    return (
        <>
            <Stack width={"873px"}
                justifyContent={"space-between"}
                flexDirection={"row"}
                bgcolor={"grey.100"}
                alignItems={"center"}
                p={1}>
                <Typography variant='h6' color="text.primary">Icon Button</Typography>
                <Button size="small" color="primary" variant="outlined">Docs</Button>
            </Stack>
            <Box width={"873px"}
                flexDirection={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={3}
                mt={4}>
                <Typography variant='caption' color="text.secondary">Icon button | Size: Medium | Small | large</Typography>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    {IconSmall.map((color) => (
                        <IconButton color={color as any} key={color}>
                            <StarIcon fontSize="large" />
                        </IconButton>
                    ))}
                    {IconMedium.map((color) => (
                        <IconButton color={color as any} key={color}>
                            <StarIcon fontSize="medium" />
                        </IconButton>
                    ))}
                    {IconLarge.map((color) => (
                        <IconButton color={color as any} key={color}>
                            <StarIcon fontSize="small" />
                        </IconButton>
                    ))}
                </Stack>
            </Box>
        </>
    );
};
export { IconButtonComponent as IconButton };

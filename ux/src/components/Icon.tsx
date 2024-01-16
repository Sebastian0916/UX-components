import * as React from 'react';
import { Stack, Typography,  Box } from '@mui/material';
import HeaderComponents from './headerComponents';
import { Star } from "@mui/icons-material";

export default function Icon() {
    const iconSizeOptions = ["large", "medium", "small", "inherit"];

    return (
        <Stack
            alignItems="center"
            ml="240px"
            mb="200px"
            justifyContent="center"
            mt={4}
            spacing={4}
        >
            <HeaderComponents title="Icon" link={`material-icons`} />
            <Box
                width={"873px"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                mb={1.5}
                gap={3}
            >
                <Typography variant="caption" color="text.secondary">
                    Icon | Size: Large | Medium | Small | Inherit
                </Typography>

                <Stack width={"873px"} flexDirection="row" alignItems="center" justifyContent="space-between" >
                    {iconSizeOptions.map((element) => (
                        <Star key={element} fontSize={element as any} />
                    ))}
                </Stack>
            </Box>
        </Stack>
    );
};

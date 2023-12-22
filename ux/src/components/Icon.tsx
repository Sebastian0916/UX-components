import * as React from 'react';
import { Stack, Typography, IconButton } from '@mui/material';
import HeaderComponents from './headerComponents';
import { Star } from "@mui/icons-material";

export default function Icon() {
    const iconSizeOptions = ["large", "medium", "small", "inherit"];

    return (
        <Stack
            alignItems="flex-start"
            ml="240px"
            justifyContent="center"
            mt={4}
            spacing={4}
        >
            <HeaderComponents title="Icon" />

            <Stack width="873px" alignContent="center" >
                <Typography variant="caption" color="text.secondary" textAlign={'start'}>
                    Icon | Size: Large | Medium | Small | Inherit
                </Typography>
            </Stack>

            <Stack width={"873px"} flexDirection="row" alignItems="center" justifyContent="space-between" >
                {iconSizeOptions.map((element) => (
                    <Star key={element} fontSize={element as any} />
                ))}
            </Stack>
        </Stack>
    );
};

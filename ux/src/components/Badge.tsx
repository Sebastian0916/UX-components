import * as React from 'react';
import { Stack, Typography, Badge, IconButton } from '@mui/material';
import HeaderComponents from './headerComponents';
import { Star } from "@mui/icons-material";

const BadgeComponent = () => {
    const badgeColorOptions = ["default", "primary", "secondary", "error", "warning", "info", "success"];

    return (
        <Stack
            alignItems="center"
            ml="240px"
            justifyContent="center"
            mt={4}
            spacing={4}
        >
            <HeaderComponents title="Badge" />
            <Stack width="873px" alignContent="center" >
                <Typography variant="caption" color="text.secondary">
                    Badge | Standard | Variant: Default | Primary | Secondary | Error | Warning | Info | Success
                </Typography>
            </Stack>
            <Stack width={"873px"} flexDirection="row" alignItems="center" justifyContent="space-between" >
                {badgeColorOptions.map((element, index) => (
                    <Badge
                        key={element}
                        badgeContent={"2"}
                        color={element as any}
                        sx={{
                            bgcolor: { element },
                        }}
                    />
                ))}
            </Stack>
            <Stack width="873px" alignContent="center" >
                <Typography variant="caption" color="text.secondary" textAlign={'left'}>
                    Badge | Standard | Variant: dot | Primary | Secondary | Error | Warning | Info | Success
                </Typography>
            </Stack>
            <Stack width={"873px"} flexDirection="row" alignItems="center" justifyContent="space-between" >
                {badgeColorOptions.map((element, index) => (
                    <Badge
                        variant="dot"
                        key={element}
                        color={element as any}
                        sx={{
                            bgcolor: { element },
                        }}
                    />
                ))}
            </Stack>
            <Stack width="873px" alignContent="center">
                <Typography variant="caption" color="text.secondary">
                    Badge whit instance | Standard & Dot | Variant: Default | Primary | Secondary | Error | Warning | Info | Success
                </Typography>
            </Stack>
            <Stack width={"873px"} flexDirection="row" alignItems="center" justifyContent="space-between" >
                {badgeColorOptions.map((element, index) => (
                    <IconButton>
                        <Badge
                            variant="dot"
                            key={element}
                            color={element as any}
                            sx={{
                                bgcolor: { element },
                            }}
                        >
                            <Star />
                        </Badge>
                    </IconButton>
                ))}
            </Stack>
        </Stack>
    );
};

export { BadgeComponent as Badge };

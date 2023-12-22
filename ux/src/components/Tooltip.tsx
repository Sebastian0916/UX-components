import { Badge, Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import HeaderComponents from "./headerComponents";

export const ToolTip = () => {

    const tooltipOptions = ["primary", "warning", "error", "success"]

    return (
        <Stack

            alignItems="center"
            ml="240px"
            justifyContent="center"
            mt={4}
            spacing={4}
        >
            <HeaderComponents title="Tooltip" />

            <Box width="873px"
            >
                <Typography ml="240px" variant="caption" color="text.secondary">
                    Tooltip | Size: Large | Medium | Small | Inherit
                </Typography>
            </Box>

            <Stack flexDirection="row" >
                {tooltipOptions.map((element) => (
                    < Tooltip key={element} placement="top" title={element}>
                        <IconButton>
                            <Badge badgeContent=" " variant="dot" color={element as any}>
                                <WifiPasswordIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip >
                ))
                }
            </Stack>
        </Stack>
    )
}

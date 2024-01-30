import React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { Stack, Typography, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import HeaderComponents from './headerComponents';
type DirectionText = "left" | "center" | "right"
export default function ToggleButtons() {

    const [alignment, setAlignment] = React.useState<DirectionText>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: DirectionText,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <Stack
            alignItems="center"
            ml="240px"
            justifyContent="center"
            mt={4}
            spacing={4}
        >
            <HeaderComponents title='ToggleButton' link='Toggle-Button' />
            <Box width="873px">
                <Typography ml="240px" variant="caption" color="text.secondary">
                    Toggle button | Size: Large | Medium | Small | Inherit
                </Typography>
            </Box>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton value="left" >
                    <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" >
                    <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" >
                    <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" disabled>
                    <FormatAlignJustifyIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            <Box width={"429px"}>
                <Typography sx={{ textAlign: `${alignment}` }} color="text.primary" variant="body1" >
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Quibusdam labore eius voluptatem odio doloribus.
                    Perferendis quidem nemo in nobis dignissimos aperiam deleniti
                    consequuntur veritatis reprehenderit, beatae, minima quibusdam quae quia.
                </Typography>
            </Box>
        </Stack>
    );
}

import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { Stack, Typography, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import HeaderComponents from './headerComponents';

export default function ToggleButtons() {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
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
            <HeaderComponents title='ToggleButton' />
            <Box width="873px"
            >
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
                <ToggleButton value="left" aria-label="left aligned">
                    <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                    <FormatAlignJustifyIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            <Box width={"429px"}>
                <Typography color="text.primary" variant="body1" >
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Quibusdam labore eius voluptatem odio doloribus.
                    Perferendis quidem nemo in nobis dignissimos aperiam deleniti
                    consequuntur veritatis reprehenderit, beatae, minima quibusdam quae quia.
                </Typography>
            </Box>
        </Stack>
    );
}

import * as React from 'react';
import { Box, Button, Popover, Stack, Typography, Popper } from '@mui/material';
import HeaderComponents from './headerComponents';

export default function PopperAndPopover() {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const openPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);


    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack
            alignItems={"center"}
            ml={"240px"}
            justifyContent={"center"}
            mt={4}
            spacing={4}>
            <HeaderComponents title="Popper | Popover" />

            
            <Button variant="outlined" color="primary" onClick={handleClick}>
                Open popper
            </Button>
            <Popper open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                    Contenido del darwer
                </Box>
            </Popper>


            <Stack>
                <Button variant="outlined" color="primary" onClick={openPopover}>
                    Open Popover
                </Button>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                </Popover>
            </Stack>
        </Stack>
    );
}
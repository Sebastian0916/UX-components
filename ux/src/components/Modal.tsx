import * as React from 'react';
import { Box, Button, Typography, Modal, Stack } from '@mui/material';
import HeaderComponents from './headerComponents';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid divider',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
};

export default function ModalExample() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Stack
            alignItems="center"
            ml="240px"
            mb="200px"
            justifyContent="center"
            mt={4}
            spacing={4}
        >
            <HeaderComponents title="Modal" />
            <Box
                width="873px"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                mb={1.5}
                gap={3}
            >

                <Typography variant="caption" color="text.secondary">
                    Modal | Basic
                </Typography>
                <Stack alignContent="center" justifyContent="center">
                    <Button onClick={handleOpen}>Open modal</Button>
                </Stack>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        </Stack>
    );
}

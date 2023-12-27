import * as React from 'react';
import { Tabs, Tab, Typography, Box, Stack } from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HeaderComponents from './headerComponents';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Stack
            alignItems="center"
            ml="240px"
            mb="200px"
            justifyContent="center"
            mt={4}
            spacing={4}
        >
            <HeaderComponents title="Tabs" />
            <Box
                width={"873px"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                mb={1.5}
                gap={3}
            >
                <Typography variant="caption" color="text.secondary">
                    Tab | horizontal | vertical
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs variant='fullWidth' value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Completados" iconPosition='start' icon={<CheckCircleOutlineIcon  fontSize='medium' />} />
                            <Tab label="Advertencias" iconPosition='start' icon={<WarningAmberRoundedIcon  fontSize='medium' />} />
                            <Tab label="Cancelados" iconPosition='start' icon={<CancelOutlinedIcon  fontSize='medium' />} />
                        </Tabs>
                    </Box>
                </Box>
            </Box>
        </Stack>
    );
}

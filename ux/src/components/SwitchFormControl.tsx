import * as React from 'react';
import { FormControlLabel, FormControl, Stack, FormGroup, Switch,Typography } from '@mui/material';
import HeaderComponents from './headerComponents';

export default function SwitchControlled() {

    const colorSwitchControlled = ["primary", "secondary", "error", "warning", "info", "success", "default"];

    return (
        <Stack alignItems={"center"}
            ml={"240px"}
            justifyContent={"center"}
            mt={4}
            spacing={4}>
            <HeaderComponents title='SwitchFormControl' />
            <Stack width="873px" alignContent="center">
                <Typography variant="caption" color="text.seocndary">
                    Switch | Size: Medium | Small
                </Typography>
            </Stack>
            <Stack
                flexDirection="row"
                alignItems="center"
                ml="240px"
                justifyContent="center"
                mt={4}
                gap={4}
            >
                {colorSwitchControlled.map((colorIndex, index) => (
                    <FormControl key={index} component="fieldset" variant="standard">
                        <FormGroup row={true}>
                            <FormControlLabel
                                labelPlacement="end"
                                control={
                                    <Switch defaultChecked={true} color={colorIndex as 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'} sx={{
                                        color: { colorIndex }
                                    }} />
                                }
                                label={colorIndex}
                            />
                        </FormGroup>
                    </FormControl>
                ))}
            </Stack>
        </Stack>
    );
}






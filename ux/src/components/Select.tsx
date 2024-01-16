import React from "react";
import { FormControl, InputLabel, MenuItem, Stack, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import HeaderComponents from "./headerComponents";

const SelectComponent = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Stack
            alignItems={"center"}
            ml={"240px"}
            justifyContent={"center"}
            mt={4}
            spacing={4}
        >
            <Stack gap={1}>
                <HeaderComponents title="Select" />
                <Stack display="flex" gap={4}>
                    <Typography variant='caption' color="text.secondary">Select | Variant: Standard | Filled | Outline | Size: Large | Medium | Small </Typography>
                </Stack>
                <Stack display="flex" flexDirection="row" width="100%" gap={1}>
                    <FormControl fullWidth size="small" variant="standard">
                        <InputLabel id="demo-simple-select-standard-label">Disabled</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Standard"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth size="medium" variant="filled">
                        <InputLabel id="demo-simple-select-filled-label">Disabled</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={age}
                            onChange={handleChange}
                            MenuProps={{
                                disablePortal: true
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth size="medium" >
                        <InputLabel id="demo-simple-select-label">Disabled</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Disabled"
                            autoWidth
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                </Stack>
            </Stack>
        </Stack>
    )
}
export { SelectComponent as Select };
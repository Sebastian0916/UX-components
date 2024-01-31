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
                    <Typography variant='caption' color="text.secondary">Select | Variant: Standard | Filled | Outline | Medium | Small </Typography>
                </Stack>
                <Stack display="flex" flexDirection="row" gap={2}>
                    <FormControl fullWidth size="small" variant="standard">
                        <InputLabel>Standard</InputLabel>
                        <Select
                            value={age}
                            onChange={handleChange}
                            label="Standard"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth size="medium" variant="filled">
                        <InputLabel >Filled</InputLabel>
                        <Select
                            value={age}
                            onChange={handleChange}
                            label="filled"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth size="medium" variant="outlined">
                        <InputLabel >Outlined</InputLabel>
                        <Select
                            value={age}
                            onChange={handleChange}
                            label="outlined"
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
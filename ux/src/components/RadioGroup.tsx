import { Stack, Box, Typography, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel } from '@mui/material';
import HeaderComponents from "./headerComponents";

const RadioGroupC = () => {
    const sizesOptions = ["large", "medium", "small"];
    return (
        <>
            <HeaderComponents title="Radio" />
            <Box width={"873px"}
                flexDirection={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={3}
                mt={4}>
                <Typography variant='caption' color="text.secondary">Radio Group | Size: Small | Medium | large </Typography>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    {sizesOptions.map((item) => (
                        <Box>
                            <Radio size='large' key={item} color="primary" />
                        </Box>
                    ))}
                    {[1, 2].map((item) => (
                        <Box>
                            <Radio size={`${item === 1 ? "medium" : "small"}`} key={item} color="primary" />
                            <Radio size={`${item === 1 ? "medium" : "small"}`} key={item} color="primary" />
                        </Box>
                    ))}
                </Stack>
            </Box>

            <Box width={"873px"}
                flexDirection={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={3}
                mt={4}>
                <Typography variant='caption' color="text.secondary">Radio Group | Size: Small | Medium | large </Typography>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    {sizesOptions.map((item) => (
                        <FormControl key={item} >
                            <FormLabel id="demo-radio-buttons-group-label">Label</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel control={<Radio size={`${item === "small" ? "small" : item === "medium" ? "medium" : "large"}`} />} label="Estado activo" />
                                <FormControlLabel control={<Radio size={`${item === "small" ? "small" : item === "medium" ? "medium" : "large"}`} />} label="Estado incial" />
                                <FormControlLabel control={<Radio size={`${item === "small" ? "small" : item === "medium" ? "medium" : "large"}`} disabled />} label="Disabled" />
                            </RadioGroup>
                        </FormControl>
                    ))}
                </Stack>
            </Box >
        </>
    );
};
export { RadioGroupC as Radio };

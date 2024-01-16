import {  Stack, Box, Typography, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel } from '@mui/material';
import HeaderComponents from "./headerComponents";

const RadioGroupC = () => {
    const sizesOptions = ["large", "medium", "small"];
    return (
        <Stack
            alignItems={"center"}
            ml={"240px"}
            justifyContent={"center"}
            mt={4}
            spacing={4}
        >
            <HeaderComponents title="Radio" link='radio-button'/>

            <Box width={"873px"}
                flexDirection={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={3}
                mt={4}>
                <Typography variant='caption' color="text.secondary">Radio Group | Size: Small | Medium | large </Typography>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    <>
                        {[1, 2, 3].map((item) => (
                            <>
                                <>
                                    <Radio size="large" key={item} color="primary" />
                                </>

                            </>
                        ))}
                        {[1, 2].map((item) => (
                            <>
                                <Radio size="medium" key={item} color="primary" />
                            </>
                        ))}
                        {[1, 2].map((item) => (
                            <>
                                <Radio size="medium" key={item} color="primary" />
                            </>
                        ))}
                    </>
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
        </Stack>
    );
};
export { RadioGroupC as Radio };

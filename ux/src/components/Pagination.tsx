import { Pagination, Stack, Typography } from "@mui/material"
import HeaderComponents from "./headerComponents";

const PaginationExample = () => {
    return (
        <Stack
            alignItems="center"
            ml="240px"
            justifyContent="center"
            mt={4}
            spacing={4}
        >
            <HeaderComponents title="Pagination" />
            <Stack
                width="873px"
                alignContent="center"
            >
                <Typography variant="caption" color="text.secondary">
                    Pagination | Ciruclar | Rounded
                </Typography>
            </Stack>
            <Pagination color="primary" count={10} showFirstButton showLastButton />
        </Stack>
    )
}

export { PaginationExample as Paginator };
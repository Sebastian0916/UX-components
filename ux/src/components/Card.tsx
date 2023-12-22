import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Stack, TextField, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import HeaderComponents from "./headerComponents"

const CardExample = () => {
    return (
        <Stack
            alignItems="center"
            ml="240px"
            mb="200px"
            justifyContent="center"
            mt={4}
            spacing={4}
        >
            <HeaderComponents title="Card" />

            <Stack>
                <Card sx={{ width: 425 }}>
                    <CardHeader  title={
                        <Stack justifyContent="space-between" flexDirection="row">
                            <Stack>
                                <Typography variant="h6" color="text.primary">
                                    Details payment
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    payment
                                </Typography>
                            </Stack>
                            <StarIcon fontSize="small" sx={{ color: "#FFC400" }} />
                        </Stack>
                    } />
                    <CardContent>
                        <TextField />
                    </CardContent>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardActions sx={{
                        justifyContent: "flex-end",
                        gap: 1
                    }}>
                        <Button size="small">Cancelar</Button>
                        <Button size="small" variant="contained">Confirmar</Button>
                    </CardActions>
                </Card>
            </Stack>
        </Stack>

    )
}
export { CardExample as Card }
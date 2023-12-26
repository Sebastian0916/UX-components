import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import HeaderComponents from "./headerComponents"
import Visibility from '@mui/icons-material/Visibility';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import React from "react";


interface ModelTextfield {
    defaultValue: string,

}

const CardExample = () => {
    const [showPassword, setShowPassword] = React.useState(false);
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

            <Stack flexDirection="row" gap={3}> 
                <Card sx={{ width: 425 }}>
                    <CardHeader title={
                        <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
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
                    }
                    >
                        {/* <Divider /> */}
                    </CardHeader>
                    <CardContent sx={{ backgroundColor: "grey.50", borderTop: "1px solid", borderTopColor: "divider" }} >
                        <Stack gap={1.5}>
                            <TextField
                                fullWidth
                                size="medium"
                                label="Label"
                                defaultValue="Card number"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"> <CreditCardIcon fontSize='small' /></InputAdornment>,
                                    endAdornment: <InputAdornment position="start"> <Visibility fontSize='small' /></InputAdornment>
                                }}
                            />
                            <TextField
                                fullWidth
                                size="medium"
                                label="Cardholder name"
                                defaultValue="John Doe"
                                InputProps={{
                                    endAdornment: <InputAdornment position="start"> <Visibility fontSize='small' /></InputAdornment>
                                }}
                            />
                            <Stack gap={1} flexDirection="row">
                            <TextField
                                fullWidth
                                size="medium"
                                label="Expiration date"
                                defaultValue="MM / YY"
                                InputProps={{
                                    endAdornment: <InputAdornment position="start"> <Visibility fontSize='small' /></InputAdornment>
                                }}
                            />
                            <TextField
                                fullWidth
                                size="medium"
                                label="CVC / CVC2"
                                defaultValue=" "
                                InputProps={{
                                    endAdornment: <InputAdornment position="start"> <Visibility fontSize='small' /></InputAdornment>
                                }}
                            />
                            </Stack>
                        </Stack>
                    </CardContent>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/img-card.svg"
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
                <Card sx={{ width: 425, height: "fit-content" }}>
                    <CardHeader title={
                        <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
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
                    }
                    >
                    </CardHeader>
                    <CardContent sx={{ backgroundColor: "grey.50", borderTop: "1px solid", borderTopColor: "divider" }} >
                        <Stack gap={1.5}>
                            <TextField
                                fullWidth
                                size="medium"
                                label="Label"
                                defaultValue="Card number"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"> <CreditCardIcon fontSize='small' /></InputAdornment>,
                                    endAdornment: <InputAdornment position="start"> <Visibility fontSize='small' /></InputAdornment>
                                }}
                            />
                            <TextField
                                fullWidth
                                size="medium"
                                label="Cardholder name"
                                defaultValue="John Doe"
                                InputProps={{
                                    endAdornment: <InputAdornment position="start"> <Visibility fontSize='small' /></InputAdornment>
                                }}
                            />
                            <Stack gap={1} flexDirection="row">
                            <TextField
                                fullWidth
                                size="medium"
                                label="Expiration date"
                                defaultValue="MM / YY"
                                InputProps={{
                                    endAdornment: <InputAdornment position="start"> <Visibility fontSize='small' /></InputAdornment>
                                }}
                            />
                            <TextField
                                fullWidth
                                size="medium"
                                label="CVC / CVC2"
                                defaultValue=" "
                                InputProps={{
                                    endAdornment: <InputAdornment position="start"> <Visibility fontSize='small' /></InputAdornment>
                                }}
                            />
                            </Stack>
                        </Stack>
                    </CardContent>
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
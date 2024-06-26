import {
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import React from "react";
import HeaderComponents from "./headerComponents";
import { Close, CreditCard, RemoveRedEye } from "@mui/icons-material";

const DialogComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="Dialog" />
      <Stack width={873} alignItems={"center"} justifyContent={"center"}>
        <Button variant="contained" size="large" onClick={handleClickOpen}>
          DIALOG
        </Button>
        <Dialog fullWidth open={open} onClose={handleClose}>
          <Paper elevation={2}>
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {"Confirmación de pago"}
              <IconButton>
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Stack gap={1}>
                <TextField
                  fullWidth
                  label="Card number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCard />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField fullWidth label="Cardholder name" />
                <Stack flexDirection={"row"} gap={1}>
                  <TextField
                    fullWidth
                    label="Expiration date"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <RemoveRedEye />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    label="CVC / CVC2"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <RemoveRedEye />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} size="small">
                Cancelar
              </Button>
              <Button onClick={handleClose} variant="contained" size="small">
                Confirmar
              </Button>
            </DialogActions>
          </Paper>
        </Dialog>
      </Stack>
    </Stack>
  );
};

export { DialogComponent as Dialog };

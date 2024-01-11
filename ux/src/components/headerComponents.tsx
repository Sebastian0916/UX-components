import React from "react";
import { Box, Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { Drawer } from "@sinco/react";
import StarIcon from '@mui/icons-material/Star';
import Visibility from '@mui/icons-material/Visibility';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const HeaderComponents = ({ title }: { title: string }) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Stack
        width={"873px"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        bgcolor={"grey.100"}
        alignItems={"center"}
        p={1}
      >
        <Typography variant="h6">{title}</Typography>
        <Button variant="outlined" color="primary" onClick={toggleDrawer}>
          Docs
        </Button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          title='Nombre empresa'
          color="text.primary"
          width="35%"
          anchorActions='flex-end'
          anchor='right'
          actions={
            <>
              <Box display="flex" gap={1.5}>
                <Button color="primary" variant='outlined'>
                  Cancelar
                </Button>
                <Button color="primary" variant='contained'>Confirmar</Button>
              </Box>
            </>
          }
        >
          <Stack gap={1.5}>
            <Typography textAlign="left" variant="h6" color="text.primary">
              Details
            </Typography>
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
        </Drawer>
      </Stack>
    </>
  );
};

export default HeaderComponents;

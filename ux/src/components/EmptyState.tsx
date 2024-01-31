import React from "react";
import { EmptyState } from "@sinco/react";
import HeaderComponents from "./headerComponents";
import { Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

const EmptyStateComponent = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="EmptyState" />
      <Stack width={873}>
        <EmptyState
        state="create"
        title="No se encontraron reultados"
        subtitle="Intenta ajustar la buscqueda [o flitro/s] para obtener el contenido que deseas"
        actions={
          <>
            <Button size="small" variant="text">
              Consultar
            </Button>
            <Button
              size="small"
              startIcon={<Add fontSize="small" />}
              variant="outlined"
            >
              Crear
            </Button>
          </>
        }
        />
      </Stack>
    </Stack>
  );
};

export { EmptyStateComponent as EmptyState };

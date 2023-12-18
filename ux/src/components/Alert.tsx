import React from "react";
import { Alert, AlertTitle, Stack, Typography } from "@mui/material";
import HeaderComponents from "./headerComponents";
import { Info } from "@mui/icons-material";

type AlertType = {
  variant: "filled" | "outlined" | "standard";
  severity: "error" | "warning" | "info" | "success";
};

const AlertComponent = () => {
  const filledAlerts: AlertType[] = [
    { variant: "filled", severity: "error" },
    { variant: "filled", severity: "warning" },
    { variant: "filled", severity: "info" },
    { variant: "filled", severity: "success" },
  ];

  const outlinedAlerts: AlertType[] = [
    { variant: "outlined", severity: "error" },
    { variant: "outlined", severity: "warning" },
    { variant: "outlined", severity: "info" },
    { variant: "outlined", severity: "success" },
  ];

  const standardAlerts: AlertType[] = [
    { variant: "standard", severity: "error" },
    { variant: "standard", severity: "warning" },
    { variant: "standard", severity: "info" },
    { variant: "standard", severity: "success" },
  ];

  const renderAlerts = (alerts: AlertType[]) => {
    return alerts.map((alert, index) => (
      <Alert
        key={index}
        onClose={() => {}}
        variant={alert.variant}
        sx={{ width: 240 }}
        severity={alert.severity}
      >
        <AlertTitle>Title</AlertTitle>
        <Typography>Alert Content</Typography>
      </Alert>
    ));
  };

  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="Alert" />
      <Stack gap={2} width={873} flexDirection={"row"}>
        <Stack>
          <Typography variant="caption" color="text.secondary">
            Alert | Variant: Filled
          </Typography>
          <Stack gap={1}>{renderAlerts(filledAlerts)}</Stack>
        </Stack>
        <Stack>
          <Typography variant="caption" color="text.secondary">
            Alert | Variant: Outlined
          </Typography>
          <Stack gap={1}>{renderAlerts(outlinedAlerts)}</Stack>
        </Stack>
        <Stack>
          <Typography variant="caption" color="text.secondary">
            Alert | Variant: Standard
          </Typography>
          <Stack gap={1}>{renderAlerts(standardAlerts)}</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { AlertComponent as Alert };

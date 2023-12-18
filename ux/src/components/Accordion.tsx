import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import HeaderComponents from "./headerComponents";
import { ExpandMore } from "@mui/icons-material";

const AccordionComponent = () => {
  return (
    <Stack
      alignItems={"center"}
      ml={"240px"}
      justifyContent={"center"}
      mt={4}
      spacing={4}
    >
      <HeaderComponents title="Accordion" />
      <Stack width={873} gap={2}>
        <Typography variant="caption" color="text.secondary">
          Accordion | Expanded | Disabled
        </Typography>
        <Stack gap={1} flexDirection={"row"}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion disabled>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { AccordionComponent as Accordion };

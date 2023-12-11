import React from "react";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import AutocompleteC from "../components/Autocomplete";
import { Stack } from "@mui/material";
import ButtonC from "../components/Button";
import FabC from "../components/Fab";

interface RouteProps {
  routerPage: string;
  setrouterPage: React.Dispatch<React.SetStateAction<string>>;
}

const Route: React.FC<RouteProps> = ({ routerPage, setrouterPage }) => {
  return (
    <div>
      <Header />
      {routerPage === "menu" && <Menu setrouterPage={setrouterPage} />}
      <Stack ml={"240px"} alignItems={"center"} paddingTop={"36px"} gap={4}>
        {routerPage === "autocomplete" && <AutocompleteC />}
        {routerPage === "button" && <ButtonC />}
        {routerPage === "fab" && <FabC />}
      </Stack>
    </div>
  );
};

export default Route;

import { Stack } from "@mui/material";
import AutocompleteC from "./components/Autocomplete";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import ButtonC from "./components/Button";
import Route from "./route/route";
import { useState } from "react";

const App = () => {
  const [routerPage, setrouterPage] = useState<string>("menu");

  return (
    <>
      <Menu setrouterPage={setrouterPage} />
      <Route routerPage={routerPage} setrouterPage={setrouterPage} />
    </>
  );
};

export default App;

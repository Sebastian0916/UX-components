import React from "react";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { Autocomplete } from "../components/Autocomplete";
import { Route, Routes } from "react-router-dom";
// Importa otros componentes aquí...
import { Button } from "../components/Button";
import { Stack } from "@mui/material";
import { IconButton } from "../components/IconButton";
import { Fab } from "../components/Fab";
import { ButtonGroup } from "../components/ButtonGroup";
import { Checkbox } from "../components/Checkbox";
import { Rating } from "../components/Rating";
import { Slider } from "../components/Slider";
import { Textfield } from "../components/Textfield";
import { Radio } from "../components/RadioGroup";
import { Select } from "../components/Select";
import { Switch } from "../components/Switch";

const Routers = () => {
  return (
    <>
      <Header />
      <Menu />
      <Routes>
        <Route path="/autocomplete" element={<Autocomplete />} />
        <Route path="/button" element={<Button />} />
        <Route path="/iconButton" element={<IconButton />} />
        <Route path="/FloatingActionButton" element={<Fab />} />
        <Route path="/buttonGroup" element={<ButtonGroup />} />
        <Route path="/checkbox" element={<Checkbox />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/textfield" element={<Textfield />} />
        <Route path="/Radio" element={<Radio />} />
        <Route path="/Select" element={<Select />} />
      </Routes>
    </>
  );
};

export default Routers;

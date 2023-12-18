import React from "react";
import Menu from "../menu/Menu";
import { MenuC } from "../components/Menu";
import Header from "../header/Header";
import { Autocomplete } from "../components/Autocomplete";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button } from "../components/Button";
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
import { Avatar } from "../components/Avatar";
import { Chip } from "../components/Chip";
import { List } from "../components/List";
import { Alert } from "../components/Alert";
import { Accordion } from "../components/Accordion";
import { Progress } from "../components/Progress";
import SpeedDialComponent from "../components/SpeedDial";
import { Dialog } from "../components/Dialog";
import { EmptyState } from "../components/EmptyState";
import { ToastNotification } from "../components/ToastNotification";
import { FooterAction } from "../components/FooterAction";
import { PageHeader } from "../components/PageHeader";

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
        <Route path="/Radio" element={<Radio />} />
        <Route path="/Select" element={<Select />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/textfield" element={<Textfield />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/Chip" element={<Chip />} />
        <Route path="/List" element={<List />} />
        <Route path="/List" element={<List />} />
        <Route path="/Alert" element={<Alert />} />
        <Route path="/Accordion" element={<Accordion />} />
        <Route path="/Progress" element={<Progress />} />
        <Route path="/Menu" element={<MenuC />} />
        <Route path="/SpeedDial" element={<SpeedDialComponent />} />
        <Route path="/Dialog" element={<Dialog />} />
        <Route path="/EmptyState" element={<EmptyState />} />
        <Route path="/ToastNotification" element={<ToastNotification />} />
        <Route path="/FooterActions" element={<FooterAction />} />
        <Route path="/PageHeader" element={<PageHeader />} />
      </Routes>
    </>
  );
};

export default Routers;

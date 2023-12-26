import React from "react";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import Icon from "../components/Icon";
import SwitchControlled from "../components/SwitchFormControl";
import ToggleButtons from "../components/ToggleButton";
import SpeedDialComponent from "../components/SpeedDial";
import Datagrid from "../components/Datagrid";
import PopperAndPopover from "../components/PopperAndPopover";
import StepperExample from "../components/Stepper";
import { MenuC } from "../components/Menu";
import { Autocomplete } from "../components/Autocomplete";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
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
import { Dialog } from "../components/Dialog";
import { EmptyState } from "../components/EmptyState";
import { ToastNotification } from "../components/ToastNotification";
import { FooterAction } from "../components/FooterAction";
import { PageHeader } from "../components/PageHeader";
import { Badge } from "../components/Badge";
import { ToolTip } from "../components/Tooltip";
import { Table } from "../components/Table";
import { Paginator } from "../components/Pagination";
import { Card } from "../components/Card";
import { Componentes } from "../components/Componentes";




const Routers = () => {
  return (
    <>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Navigate to="/Componentes" />} />
        <Route path="/Componentes" element={<Componentes />} />
        <Route path="/Stepper" element={<StepperExample />} />
        <Route path="/PopperPopover" element={<PopperAndPopover />} />
        <Route path="/autocomplete" element={<Autocomplete />} />
        <Route path="/button" element={<Button />} />
        <Route path="/iconButton" element={<IconButton />} />
        <Route path="/FloatingActionButton" element={<Fab />} />
        <Route path="/Pagination" element={<Paginator />} />
        <Route path="/buttonGroup" element={<ButtonGroup />} />
        <Route path="/checkbox" element={<Checkbox />} />
        <Route path="/Radio" element={<Radio />} />
        <Route path="/Select" element={<Select />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/Badge" element={<Badge />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/ToggleButton" element={<ToggleButtons />} />
        <Route path="/SwitchFormcontrol" element={<SwitchControlled />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/textfield" element={<Textfield />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/Chip" element={<Chip />} />
        <Route path="/Icon" element={<Icon />} />
        <Route path="/List" element={<List />} />
        <Route path="/Tooltip" element={<ToolTip />} />
        <Route path="/Alert" element={<Alert />} />
        <Route path="/Accordion" element={<Accordion />} />
        <Route path="/Progress" element={<Progress />} />
        <Route path="/Menu" element={<MenuC />} />
        <Route path="/SpeedDial" element={<SpeedDialComponent />} />
        <Route path="/Dialog" element={<Dialog />} />
        <Route path="/DataGrid" element={<Datagrid />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/EmptyState" element={<EmptyState />} />
        <Route path="/ToastNotification" element={<ToastNotification />} />
        <Route path="/FooterActions" element={<FooterAction />} />
        <Route path="/PageHeader" element={<PageHeader />} />
      </Routes>
    </>
  );
};

export default Routers;

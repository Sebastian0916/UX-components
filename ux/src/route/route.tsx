import React, { useState } from "react";
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
import { Route, Routes, Navigate } from "react-router-dom";
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
import { FooterActionExample } from "../components/FooterAction";
import { PageHeader } from "../components/PageHeader";
import { Badge } from "../components/Badge";
import { ToolTip } from "../components/Tooltip";
import { Table } from "../components/Table";
import { Paginator } from "../components/Pagination";
import { Card } from "../components/Card";
import { Componentes } from "../components/Componentes";
import BasicTabs from "../components/Tabs";
import ModalExample from "../components/Modal";
import SvgPrueba from "../assets/react.svg";
// import { ProgressSinco } from "../components/ProgressSinco";
import { ProgressSinco } from "@sinco/react";
import { CardRadio } from "../components/CardRadio";

const Routers = () => {
  const [prueba, setPrueba] = useState(1);
  return (
    <>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Navigate to="/Componentes" />} />
        <Route path="/Componentes" element={<Componentes />} />
        <Route path="/Tab" element={<BasicTabs />} />
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
        <Route path="/Modal" element={<ModalExample />} />
        <Route path="/SpeedDial" element={<SpeedDialComponent />} />
        <Route path="/Dialog" element={<Dialog />} />
        <Route path="/DataGrid" element={<Datagrid />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/EmptyState" element={<EmptyState />} />
        <Route path="/ToastNotification" element={<ToastNotification />} />
        <Route path="/PageHeader" element={<PageHeader />} />
        <Route path="/FooterActions" element={<FooterActionExample />} />
        <Route
          path="/ProgresSinco"
          element={<ProgressSinco time={3000} lote={5} />}
        />
        <Route
          path="/CardRadio"
          element={
            <>
              <CardRadio
                onChange={(value) => setPrueba(value as number)}
                value={0}
                slotMedia={<img src={SvgPrueba} alt="a" />}
                RadioPosition="left"
                slotContent="Contenido CardRadio"
                slotHeader="Contenido Titulo"
                heightPosition="top"
                checked={prueba === 0}
                color="secondary"
                // states="disabled"
              />
              <CardRadio
                onChange={(value) => setPrueba(value as number)}
                value={1}
                slotMedia={<img src={SvgPrueba} alt="a" />}
                RadioPosition="right"
                slotContent="Contenido CardRadio"
                slotHeader="Contenido Titulo"
                heightPosition="top"
                checked={prueba === 1}
              />
              <CardRadio
                checked={prueba === 2}
                onChange={(value) => setPrueba(value as number)}
                value={2}
                slotMedia={<img src={SvgPrueba} alt="a" />}
                RadioPosition="right"
                slotContent="Contenido CardRadio"
                slotHeader="Contenido Titulo"
                heightPosition="top"
              />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Routers;

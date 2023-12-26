import { Box, Stack } from "@mui/material"
import HeaderComponents from "./headerComponents"
import { Autocomplete } from "./Autocomplete"
import { Button } from "./Button"
import { IconButton } from "./IconButton"
import { Fab } from "./Fab"
import { Paginator } from "./Pagination"
import { ButtonGroup } from "./ButtonGroup"
import { Checkbox } from "./Checkbox"
import { Radio } from "./RadioGroup"
import { Select } from "./Select"
import { Rating } from "./Rating"
import { Slider } from "./Slider"
import { Badge } from "./Badge"
import { Card } from "./Card"
import ToggleButtons from "./ToggleButton"
import SwitchControlled from "./SwitchFormControl"
import { Switch } from "./Switch"
import { Textfield } from "./Textfield"
import { Avatar } from "./Avatar"
import { Chip } from "./Chip"
import Icon from "./Icon"
import { List } from "./List"
import { ToolTip } from "./Tooltip"
import { Alert } from "./Alert"
import { Accordion } from "./Accordion"
import { Progress } from "./Progress"
import { MenuC } from "./Menu"
import SpeedDialComponent from "./SpeedDial"
import { Dialog } from "./Dialog"
import Datagrid from "./Datagrid"
import { Table } from "./Table"
import { EmptyState } from "./EmptyState"
import { ToastNotification } from "./ToastNotification"
import { FooterAction } from "./FooterAction"
import { PageHeader } from "./PageHeader"

export const Componentes = () => {
    return (
        <Stack
            alignItems="center"
            ml="240px"
            justifyContent="center"
            mt={4}
            spacing={4}
            overflow="auto"
            flex={1}
        >

            <Autocomplete />
            <Button />
            <IconButton />
            <Fab />
            <Paginator />
            <ButtonGroup />
            <Checkbox />
            <Radio />
            <Select />
            <Rating />
            <Slider />
            <Badge />
            <Card />
            <ToggleButtons />
            <SwitchControlled />
            <Switch />
            <Textfield />
            <Avatar />
            <Chip />
            <Icon />
            <List />
            <ToolTip />
            <Alert />
            <Accordion />
            <Progress />
            <MenuC />
            <SpeedDialComponent />
            <Dialog />
            <Datagrid />
            <Table />
            <EmptyState />
            <ToastNotification />
            <FooterAction />
            <PageHeader />
        </Stack >
    )
}
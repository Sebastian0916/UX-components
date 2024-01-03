import * as React from 'react';
import { DataGridPro, GridColDef, GridPagination, GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid-pro';
import { Stack, Typography, Button, Box, Chip, Link } from '@mui/material';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import TableRowsIcon from '@mui/icons-material/TableRows';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
import HeaderComponents from './headerComponents';
import { SincoTheme } from '../Theme';

const estadoActivo = SincoTheme.palette.success[100];
const estadoInactivo = SincoTheme.palette.warning[100];
const estadoPendiente = SincoTheme.palette.secondary[100];

function createData(
    user: string,
    email: string,
    status: React.ReactNode,
    id: number,
    company: string
) {
    const chipColor =
        status === 'Activo'
            ? estadoActivo
            : status === 'Pendiente'
                ? estadoPendiente
                : status === 'Inactivo'
                    ? estadoInactivo
                    : 'default';

    return { user, email, status, id, company, chipColor };
}

const rows = [
    createData('Camilo', 'Camilo@email.co', 'Activo', 234678, 'Sincosoft'),
    createData('Andres', 'Andres@email.co', 'Inactivo', 257925, 'Sincosoft'),
    createData('Sandra', 'Sandra@email.es', 'Activo', 223336, 'Sincosoft'),
    createData('Oscar', 'Oscar@email.co', 'Pendiente', 678217, 'Sincosoft'),
    createData('Valen', 'Valen@email.co', 'Activo', 124568, 'Sincosoft'),
];

const columns: GridColDef[] = [
    { field: 'user', headerName: 'User', width: 120, type: 'string', editable: false },
    { field: 'email', headerName: 'Email', width: 120, type: 'string', editable: false },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
        editable: false,
        renderCell: (params) => {
            return <Chip label={params.value} sx={{ backgroundColor: params.row.chipColor }} />;
        },
    },
    { field: 'id', headerName: 'ID', width: 120, editable: false },
    {
        field: 'company', headerName: 'Company', width: 120, editable: false, renderCell: (params) => {
            return (<Link>{params.row.company}</Link>);
        }
    },
];

function toolbarDataGrid() {
    return (
        <GridToolbarContainer sx={{ justifyContent: 'space-between' }}>
            <Stack alignContent="center" justifyContent="space-between" flexDirection="row" gap={1}>
                <>
                    <Button color="primary" variant="text" startIcon={<ViewColumnIcon />}>
                        Organizar horizontal
                    </Button>
                    <Button color="primary" variant="text" startIcon={<FilterListIcon />}>
                        Filtrar
                    </Button>
                    <Button color="primary" variant="text" startIcon={<TableRowsIcon />}>
                        Organizar vertical
                    </Button>
                    <Button color="primary" variant="text" startIcon={<SaveAltIcon />}>
                        Descargar
                    </Button>
                </>
            </Stack>
            <GridToolbarQuickFilter />
        </GridToolbarContainer>
    );
}

function paginationDataGrid() {
    return (
        <GridPagination
            rowsPerPageOptions={[5, 10]}
            rowsPerPage={5}
        // labelDisplayedRows={(text)=>"Rows per page: "}
        // labelDisplayedRows="rows per page"
        // labelRowsPerPage="Rows per page: "
        />
    );
}

export default function DataGridProExample() {
    return (
        <Stack alignItems="center" ml="240px" mb="200px" justifyContent="center" mt={4} spacing={4}>
            <Box width="873px" flexDirection="column" justifyContent="flex-start" alignItems="center" mb={1.5} gap={3}>
                <HeaderComponents title="Data Grid Pro MUI X" />
                <Stack alignContent="center" mt={1} mb={1}>
                    <Typography variant="caption" color="text.secondary">
                        DataGrid | Standard
                    </Typography>
                </Stack>
                <DataGridPro
                    density='standard'
                    sx={{
                        ".MuiDataGrid-rowSelected": {
                            backgroundColor: "grey.100"
                        }
                    }}
                    rowHeight={38}
                    checkboxSelection
                    showCellVerticalBorder={false}
                    columns={columns}
                    rows={rows}
                    pagination
                    slots={{
                        toolbar: toolbarDataGrid,
                        pagination: paginationDataGrid,
                    }}
                />
                <Stack alignContent="center" mt={1} mb={1}>
                    <Typography variant="caption" color="text.secondary">
                        DataGrid | Compact
                    </Typography>
                </Stack>
                <DataGridPro
                    sx={{
                        ".MuiDataGrid-rowSelected": {
                            backgroundColor: "grey.100"
                        }
                    }}
                    density='compact'
                    rowHeight={38}
                    checkboxSelection
                    showCellVerticalBorder={false}
                    columns={columns}
                    rows={rows}
                    pagination
                    slots={{
                        toolbar: toolbarDataGrid,
                        pagination: paginationDataGrid,
                    }}
                />
                <Stack alignContent="center" mt={1} mb={1}>
                    <Typography variant="caption" color="text.secondary">
                        DataGrid | Comfortable
                    </Typography>
                </Stack>
                <DataGridPro
                    sx={{
                        ".MuiDataGrid-rowSelected": {
                            backgroundColor: "grey.100"
                        }
                    }}
                    density='comfortable'
                    rowHeight={38}
                    checkboxSelection
                    showCellVerticalBorder={false}
                    columns={columns}
                    rows={rows}
                    pagination
                    slots={{
                        toolbar: toolbarDataGrid,
                        pagination: paginationDataGrid,
                    }}
                />
            </Box>
        </Stack>
    );
}

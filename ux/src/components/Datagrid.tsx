
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button, Checkbox, Chip, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import { SincoTheme } from '@sinco/react';
import HeaderComponents from './headerComponents';

const primary100 = SincoTheme.palette.primary[100];
const warning100 = SincoTheme.palette.warning[100];

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 130 },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 120,
    },
    {
        field: 'location',
        headerName: 'Status',
        type: 'string',
        width: 120,
    },
    {
        field: 'status',
        headerName: 'status',
        description: 'This column has a status',
        sortable: false,
        width: 120,
        renderCell: (params) => {
            const statusColor = params.row.status === 'Active' ? primary100 : warning100;
            return (<Chip size='medium' label={params.row.status} sx={{
                backgroundColor: statusColor
            }} />);
        },
    },
    { field: 'id', headerName: 'ID', width: 40, type: "number" },
];

const rows = [
    { name: "Javier Casallas", location: "Bogota", email: "J.Casallas@email.co", status: "Active", id: 1 },
    { name: "Julian Castillo", location: "Medellin", email: "J.Castillo@email.co", status: "Suspended", id: 2 },
    { name: "Daniel Ramirez", location: "Casanare", email: "D.Ramirez@email.co", status: "Active", id: 3 },
    { name: "Carlos Sanchez", location: "Cali", email: "C.Sanchez@email.co", status: "Active", id: 4 },
    { name: "Mario Alvarado", location: "Santander", email: "M.Alavarado@email.co", status: "Active", id: 5 },
];

 const Datagrid = () => {
    return (
        <Stack

            alignItems="center"
            ml="240px"
            justifyContent="center"
            mt={4}
            spacing={4}
        >
             <HeaderComponents title="DataGrid" />
            <Box width="873px"
            >
                <Typography ml="240px" variant="caption" color="text.secondary">
                    Table 
                </Typography>
            </Box>

            <Stack width="873px" alignItems="center" flexDirection="row" justifyContent="space-between">
                <Box>
                    {[1, 2].map((element) => (
                        <TextField
                            defaultValue="Value"
                            label="Label"
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                endAdornment: <InputAdornment position="start"> <VisibilityOff fontSize='small' /> </InputAdornment>,
                            }}
                        />
                    ))}
                </Box>
                <Box display="flex" gap={2}>
                    <Button variant='text' >Cancelar</Button>
                    <Button variant='contained' startIcon={<SearchIcon fontSize="large" />}> Buscar</Button>
                </Box>
            </Stack>

            <DataGrid
                rows={rows}
                columns={columns}
                density='comfortable'
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Stack>
    );
}

export default Datagrid
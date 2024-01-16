import * as React from 'react';
import { SincoTheme } from '@sinco/react';
import { Box, Button, Checkbox, Chip, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import HeaderComponents from './headerComponents';

const primary100 = SincoTheme.palette.primary[100];
const warning100 = SincoTheme.palette.warning[100];

function createData(
    checkbox: React.ReactNode,
    name: string,
    email: string,
    location: string,
    status: string,
    id: number
) {
    const chipColor = status === 'Active' ? primary100 : warning100;

    return { checkbox, name, email, location, status, id, chipColor };
}

const rows = [
    createData(<Checkbox />, 'Javier Casallas', 'JCastillo@email.co', 'Bogotá', 'Active', 100746),
    createData(<Checkbox />, 'Julian Castillo', 'JCastillo@email.co', 'Medellin', 'Suspended', 124679),
    createData(<Checkbox />, 'Daniel Ramirez', 'DRamiez@email.co', 'Casanare', 'Active', 987356),
    createData(<Checkbox />, 'Carlos Sanchez', 'DRamiez@email.co', 'Cali', 'Active', 194624),
    createData(<Checkbox />, 'Gingerbread', 'CSanchez@email.co', 'Santander', 'Active', 467924),
];

const TableBasic = () => {

    return (
        <Stack
            alignItems="center"
            ml="240px"
            mb="200px"
            justifyContent="center"
            mt={4}
            spacing={4}
        >
            <Box
                width="873px"
                flexDirection={"column"}
                justifyContent={"flex-start"}
                mb={1.5}
                gap={2}
                display={"flex"}
            >
                <HeaderComponents title="Table" />
                <Stack
                    alignContent="center"
                >
                    <Typography variant="caption" color="text.secondary">
                        Table | Standard
                    </Typography>
                </Stack>

                <Stack alignItems="center" flexDirection="row" justifyContent="space-between">
                    <Box>
                        {[1, 2].map((element) => (
                            <TextField
                                size="medium"
                                label="Label"
                                defaultValue="Value"
                                sx={{ m: 1, width: '25ch' }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="start"><Visibility fontSize='small' /></InputAdornment>,
                                }}
                            />
                        ))}
                    </Box>
                    <Box display="flex" gap={2}>
                        <Button variant='text' >Cancelar</Button>
                        <Button variant='contained' startIcon={<SearchIcon fontSize="large" />}> Buscar</Button>
                    </Box>
                </Stack>

                <Box >
                    <TableContainer component={Paper}>
                        <Table size="medium">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">location</TableCell>
                                    <TableCell align="left">Status</TableCell>
                                    <TableCell align="left">ID</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                            >
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:hover': { border: 0, backgroundColor: "action.hover" } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.checkbox}
                                        </TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
                                        <TableCell align="left">{row.location}</TableCell>
                                        <TableCell align="left">
                                            <Chip label={row.status} sx={{ backgroundColor: row.chipColor }} />
                                        </TableCell>
                                        <TableCell align="left">{row.id}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Stack
                    alignContent="center"
                >
                    <Typography variant="caption" color="text.secondary">
                        Table | small
                    </Typography>
                </Stack>

                <Stack alignItems="center" flexDirection="row" justifyContent="space-between">
                    <Box>
                        {[1, 2].map((element) => (
                            <TextField
                                size="small"
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
                        <Button variant='text' size="small">Cancelar</Button>
                        <Button variant='contained' size="small" startIcon={<SearchIcon fontSize="small" />}> Buscar</Button>
                    </Box>
                </Stack>

                <Box >
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">location</TableCell>
                                    <TableCell align="left">Status</TableCell>
                                    <TableCell align="left">ID</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                            >
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:hover': { border: 0, backgroundColor: "action.hover" } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.checkbox}
                                        </TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
                                        <TableCell align="left">{row.location}</TableCell>
                                        <TableCell align="left">
                                            <Chip label={row.status} sx={{ backgroundColor: row.chipColor }} />
                                        </TableCell>
                                        <TableCell align="left">{row.id}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Stack>
    );
};

export { TableBasic as Table };

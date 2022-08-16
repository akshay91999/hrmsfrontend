import * as React from 'react';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import Dropdownlist from '../Reusablecomponents/Dropdownlist';
import { getDepartmentname } from '../Dropdowndata/getDepartmentname';
import useForm from '../../Components/Validation/useForm'
const intialFValues = {
  departmentname: ""
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: 'linear-gradient(#8B8B8B,#1565C0)',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const columns = [
  { label: "Id", align: "center" },
  { label: "Name", align: "center" },
  { label: "Mobile", align: "center" },
  { label: "Email", align: "center" },
  { label: "View Task", align: "center" },

]


function createData(id, name, mobile, email, taskicon) {
  return { id, name, mobile, email, taskicon };
}

const rows = [
  createData(1, 'Ram Shankar', 7977369227, 'ramshankar@gmail.com', ''),
  createData(2, 'Ram Shankar', 7977369227, 'ramshankar@gmail.com', ''),
  createData(3, 'Ram Shankar', 7977369227, 'ramshankar@gmail.com', ''),
  createData(4, 'Ram Shankar', 7977369227, 'ramshankar@gmail.com', ''),
  createData(5, 'Ram Shankar', 7977369227, 'ramshankar@gmail.com', ''),
  createData(1, 'Ram Shankar', 7977369227, 'ramshankar@gmail.com', ''),
  createData(2, 'Ram Shankar', 7977369227, 'ramshankar@gmail.com', ''),
  createData(3, 'Ram Shankar', 7977369227, 'ramshankar@gmail.com', ''),
  createData(4, 'Ram Shankar', 7977369227, 'ramshankar@gmail.com', ''),
  createData(5, 'Ram Shankar', 7977369227, 'ramshankar@gmail.com', ''),

];

export default function TaskEmployeeTable({ click }) {


  const { values, errors, setErrors, handleInputChange } = useForm(intialFValues)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  let navigate = useNavigate()
  return (
    <>

      <Box sx={{ display: "flex", justifyContent: "center", p: "2%" }}>
        <Dropdownlist
          name="departmentname"
          label="DepartmentName"
          value={values.departmentname}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
        //   error={errors.departmentname}
        />
      </Box>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell align={column.align}>{column.label}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <StyledTableRow key={row.id}>

                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                    <StyledTableCell align="center">{row.mobile}</StyledTableCell>
                    <StyledTableCell align="center">{row.email}</StyledTableCell>
                    <StyledTableCell align="center">
                      <IconButton onClick={click}><TaskIcon sx={{ color: '#1565C0' }} /></IconButton>
                    </StyledTableCell>

                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 15, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
import React from 'react'
import { getDepartmentname } from '../../Components/getDepartmentname';
import Dropdownlist from '../../Components/Reusablecomponents/Dropdownlist'
import { Box, Button, TablePagination, Typography } from "@mui/material"
import useForm from '../../Components/useForm';
import { Paper } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import ApproveRejectIcon from '../../Components/ApproveRejectIcon';
import Imagewithname from '../../Components/Reusablecomponents/Imagewithname';
import { useNavigate } from 'react-router-dom'
const initialValues = {
  departmentname: ""
};
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

function createData(name, leavetype, fromto,reason) {
  return { name, leavetype, fromto,reason};
}

const rows = [
  createData('john', 'Unpaid', '23/09/2022-29/09/2022', 'sick'),
  createData('Mathew', 'Unpaid', '23/09/2022-29/09/2022', 'sick'),
  createData('Mathew', 'Unpaid', '23/09/2022-29/09/2022', 'sick'),
  createData('Mathew', 'Unpaid', '23/09/2022-29/09/2022', 'sick'),
  createData('Mathew', 'Unpaid', '23/09/2022-29/09/2022', 'sick'),
  createData('Mathew', 'Unpaid', '23/09/2022-29/09/2022', 'sick'),


];

export default function LeaveApprovedList() {
  let navigate = useNavigate()
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialValues);


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Paper sx={{ m: '2%' }}>
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            gridTemplateColumns: { sm: "1fr" },
            gap: 2,
            width: "30%",
            mt: "1%",
            justifyContent: "center"
          }}
        >
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper elevation={4} sx={{ m: "2%", p: "2%", width: "100%" }}>
            <Typography variant="h6" gutterBottom component="div">
              <b>Leave Approved Employees</b>
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ width: "100%" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">Employee Name</StyledTableCell>
                    <StyledTableCell align="center">Leave Type</StyledTableCell>
                    <StyledTableCell align="center">From-To</StyledTableCell>
                    <StyledTableCell align="center">Reason</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <StyledTableRow key={row.id}>


                        <StyledTableCell align="center"><Imagewithname name={row.name} /></StyledTableCell>
                        <StyledTableCell align="center">{row.leavetype}</StyledTableCell>
                        <StyledTableCell align="center">{row.fromto}</StyledTableCell>
                        <StyledTableCell align="center">{row.reason}</StyledTableCell>
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
        </Box>
      </Paper>
    </>
  )
}

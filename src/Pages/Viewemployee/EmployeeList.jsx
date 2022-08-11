import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { TablePagination, Typography } from '@mui/material';
import ViewUpdateDeleteEmp from '../../Components/Reusablecomponents/ViewUpdateDeleteEmp';
import Imagewithname from '../../Components/Reusablecomponents/Imagewithname';

//import LeaveCancelDialogBox from '../Components/LeaveCancelDialogBox';
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

function createData(name, contact, email, designation) {
  return { name, contact, email, designation };
}

const rows = [
  createData("Ram", 9876543218, "ram@gmail.com", "Project Manager"),
  createData("John", 9632587419, "john@gmail.com", "CEO"),
  createData("Keerthi", 9852631478, "keerthi@gmail.com", "CTO"),
  createData("Maggie", 7894561237, "maggie@gmail.com", "Product Manager"),
  createData("Anu", 8976541231, "konu@gmail.com", "Chief Architect"),
  createData("Chy", 9517364821, "chy@gmail.com", "Recruiter"),
  createData("Prasoon", 8465791232, "pechoon@gmail.com", "Carrier Consultant"),
  createData("Theethu", 7418529630, "thee@gmail.com", "Digital Marking Manager"),
  createData("Keerthana", 841052637, "kii@gmail.com", "Growth Hacker"),
  createData("Asru", 8025963147, "asru@gmail.com", "Social Media Manager"),
  createData("Ash", 9063258741, "ash@gmail.com", "Data Analyst"),
  createData("Juan", 9306528741, "juan@gmail.com", "Frontend developer"),
  createData("Pranil", 7085241963, "pranil@gmail.com", "Game developer"),


];

export default function Tableshortlisted() {
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
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper elevation={4} sx={{ m: "2%", p: "2%", width: "100%" }}>

        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Email </StyledTableCell>
                <StyledTableCell align="center">designation </StyledTableCell>
                <StyledTableCell align="center">&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <StyledTableRow key={row.id}>


                    <StyledTableCell align="center"><Imagewithname name={row.name}/></StyledTableCell>
                    <StyledTableCell align="center">{row.contact}</StyledTableCell>
                    <StyledTableCell align="center">{row.email}</StyledTableCell>
                    <StyledTableCell align="center">{row.designation}</StyledTableCell>
                    <StyledTableCell align="center"><ViewUpdateDeleteEmp/></StyledTableCell>
                    {/* <StyledTableCell align="center"><LeaveCancelDialogBox/></StyledTableCell> */}
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
  );
}

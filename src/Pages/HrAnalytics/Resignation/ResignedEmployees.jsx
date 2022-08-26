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
import Imagewithname from '../../../Components/Reusablecomponents/Imagewithname';
import ViewUpdateDeleteEmp from '../../../Components/Reusablecomponents/ViewUpdateDeleteEmp';
import ResignationReasonView from '../../../Components/ResignationReasonView';
import ResignationAcceptReject from '../../../Components/ResignationAcceptReject';



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

function createData(empid,name, contact, email,date) {
  return { empid,name, contact, email,date};
}

const rows = [
  createData(1001,"Ram", 9876543218, "ram@gmail.com","12-09-2022" ),
  createData(1002,"John", 9632587419, "john@gmail.com","13-09-2022"),
  createData(1003,"Keerthi", 9852631478, "keerthi@gmail.com","1-01-2021"),
  createData(1005,"Maggie", 7894561237, "maggie@gmail.com","1-01-2021"),
  createData(1006,"Anu", 8976541231, "konu@gmail.com","1-01-2021"),
  createData(1007,"Chy", 9517364821, "chy@gmail.com","1-01-2021" ),
  createData(1008,"Prasoon", 8465791232, "pechoon@gmail.com", "1-01-2021"),
  createData(1009,"Theethu", 7418529630, "thee@gmail.com","1-01-2021" ),
  createData(1010,"Keerthana", 841052637, "kii@gmail.com", "1-01-2021"),
  createData(1011,"Asru", 8025963147, "asru@gmail.com","1-01-2021" ),
  createData(1012,"Ash", 9063258741, "ash@gmail.com", "1-01-2021"),
  createData(1013,"Juan", 9306528741, "juan@gmail.com","1-01-2021" ),
  createData(1014,"Pranil", 7085241963, "pranil@gmail.com","1-01-2021"),


];

export default function ResignedEmployees() {
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
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Resignation Table
      </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Emp Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Mobile</StyledTableCell>
                <StyledTableCell align="center">Email </StyledTableCell>
                <StyledTableCell align="center">Reason</StyledTableCell>
                <StyledTableCell align="center">Date Of Resignation</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <StyledTableRow key={row.id}>

                    <StyledTableCell align="center">{row.empid}</StyledTableCell>
                    <StyledTableCell align="center"><Imagewithname name={row.name}/></StyledTableCell>
                    <StyledTableCell align="center">{row.contact}</StyledTableCell>
                    <StyledTableCell align="center">{row.email}</StyledTableCell>
                    <StyledTableCell align="center"><ResignationReasonView/></StyledTableCell>
                    <StyledTableCell align="center">{row.date}</StyledTableCell>
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

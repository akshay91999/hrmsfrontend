import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination, Typography } from '@mui/material';
import Eyeiconbutton from '../../../Components/Reusablecomponents/Eyeiconbutton';
import Acceptrejectbutton from '../../../Components/Reusablecomponents/Acceptrejectbutton';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background:'linear-gradient(#8B8B8B,#1565C0)',
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

const columns=[
    {label:"Id", align:"center"},
    {label:"Name", align:"center"},
    {label:"Email", align:"center"},
    {label:"Mobile", align:"center"},
    {label:"Highest Qualification", align:"center"},
    {label:"Year Of Experience", align:"center"},
    {label:"CV", align:"center"},
    {label:"Short List", align:"center"},
]


function createData(id,name,email,mobile,highestqualification,yearofexperience, shortlist) {
  return { id,name, email,mobile,highestqualification,yearofexperience,shortlist};
}

const rows = [
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  createData(1,'akshay','akshaysudha@gamil.com',9947395724,'pg',3,'null'),
  
];

export default function Vaccancyupdatetable() {

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
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
    <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Vaccany Updation Table
      </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          {columns.map((column) =>(
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
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.mobile}</StyledTableCell>
              <StyledTableCell align="center">{row.highestqualification}</StyledTableCell>
              <StyledTableCell align="center">{row.yearofexperience}</StyledTableCell>
              <StyledTableCell align="center"><Eyeiconbutton/></StyledTableCell>
              <StyledTableCell align="center"><Acceptrejectbutton/></StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[5, 10, 50]}
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

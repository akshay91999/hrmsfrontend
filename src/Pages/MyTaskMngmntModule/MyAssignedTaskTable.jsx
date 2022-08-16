import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import { Typography } from "@mui/material"
import PopUp from '../../Components/Reusablecomponents/PopUp';

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
    {label:" Task Name", align:"center"},
    {label:"Assigned Date", align:"center"},
    {label:"Due Date", align:"center"},
    {label:"Commited", align:"center"},
    
]


function createData(id,taskname,assigneddate,duedate,commit) {
  return { id,taskname,assigneddate, duedate,commit};
}

const rows = [
    createData(1,'Documentation', '24-07-2022', '28-07-2022','' ),
    createData(2,'Documentation', '24-07-2022', '28-07-2022','' ),
    createData(3,'Documentation', '24-07-2022', '28-07-2022','' ),
    createData(4,'Documentation', '24-07-2022', '28-07-2022','' ),
    createData(5,'Documentation', '24-07-2022', '28-07-2022','' ),
    createData(6,'Documentation', '24-07-2022', '02-08-2022','' ),
    createData(7,'Documentation', '24-07-2022', '02-08-2022','' ),
    createData(8,'Documentation', '24-07-2022', '02-08-2022','' ),
    createData(9,'Documentation', '24-07-2022', '02-08-2022','' ),
    createData(10,'Documentation', '24-07-2022', '02-08-2022',''),
 
];

export default function MyAssignedTaskTable() {

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
    <Typography varient="h6" align="center" gutterBottom component="div"
     sx={{p:5}}>
        Assigned Task
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
              <StyledTableCell align="center">{row.taskname}</StyledTableCell>
              <StyledTableCell align="center">{row.assigneddate}</StyledTableCell>
              <StyledTableCell align="center">{row.duedate}</StyledTableCell>
              <StyledTableCell align="center">
            <PopUp/>
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
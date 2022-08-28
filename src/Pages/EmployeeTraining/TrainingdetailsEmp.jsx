// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { TablePagination } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// // import Btn from '..../Component/Reusable/Btn'
// // import Eyeiconbutton from '../../Components/Reusablecomponents/Eyeiconbutton';
// // import Acceptrejectbutton from '../../Components/Reusablecomponents/Acceptrejectbutton';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     background: 'linear-gradient(#8B8B8B,#1565C0)',
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// const columns = [
//   { label: "employeeid", align: "center" },
//   { label: "employeename", align: "center" },
//   { label: "trainingname", align: "center" },
//   { label: "trainer", align: "center" },
//   { label: "timeschedule", align: "center" },
// ]


// function createData(employeeid, employeename, trainingname, trainer, timeschedule) {
//   return { employeeid, employeename, trainingname, trainer, timeschedule };
// }

// const rows = [
//   createData('ITA056', 'a', 'aaaaaaaaaaa', 'ghbhb', 4),
//   createData('ITA056', 'b', 'bbbbbbbbbbbbb', 'hbhbh', '4'),
//   createData('ITA056', 'c', 'ccccccccc', 'huhuhu', '4'),
//   createData('ITA056', 'd', 'dddddddddddddd', 'huhuh', '4'),
//   createData('ITA056', 'e', 'eeeeeeeeeee', 'bhhhy', '4'),
//   createData('ITA056', 'f', 'fffffffffff', 'rfrr', 4),
//   createData('ITA056', 'g', 'ggggggggggggg', 'wdwe', 4),
//   createData('ITA056', 'h', 'hhhhhhhhhhhhh', 'eww', 4),
//   createData('ITA056', 'i', 'iiiiiiiiiiii', 'yhrtg', 4),
//   createData('ITA056', 'j', 'jjjjjjjjjjjjjj', 'ngb', 4),
//   createData('ITA056', 'k', 'kkkkkkkkk', 'wedwqe', 4),
//   createData('ITA056', 'l', 'llllllllllll', 'ewefw', 4),
//   createData('ITA056', 'm', 'mmmmmmmmmmmm', 'vdffdvs', 4),
//   createData('ITA056', 'n', 'nnnnnnnnnn', 'gegef', 4),
//   createData('ITA056', 'o', 'oooooooo', 'rfewv', 4),
//   createData('ITA056', 'p', 'pppppppppppppppp', 'efqewf', 4),
//   createData('ITA056', 'q', 'qqqqqqqqqqqqq', 'rgegeg', 4),

// ];

// export default function TrainingdetailsEmp() {

//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <>
//       <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>

//         <Typography
//           variant="h4"
//           align="center"
//           sx={{ color: "#1565C0", pb: "2%" }}
//         >
//           Training Details
//         </Typography>
//         <CheckCircleOutlineIcon sx={{ color: "green" }}
//         />
//         <a href="/auth/google">
//           <CheckCircleOutlineIcon sx={{ align: "end", color: "red" }}
//           />
//         </a>

//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 700 }} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 {columns.map((column) => (
//                   <StyledTableCell align={column.align}>{column.label}</StyledTableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row) => (
//                   <StyledTableRow key={row.id}>

//                     <StyledTableCell align="center">{row.employeeid}</StyledTableCell>
//                     <StyledTableCell align="center">{row.employeename}</StyledTableCell>
//                     <StyledTableCell align="center">{row.trainingname}</StyledTableCell>
//                     <StyledTableCell align="center">{row.trainer}</StyledTableCell>
//                     <StyledTableCell align="center">{row.timeschedule}</StyledTableCell>
//                     {/* <StyledTableCell align="center">{row.yearofexperience}</StyledTableCell>
//               <StyledTableCell align="center"><Eyeiconbutton/></StyledTableCell>
//               <StyledTableCell align="center"><Acceptrejectbutton/></StyledTableCell> */}
//                   </StyledTableRow>
//                 ))}
//             </TableBody>
//             {/* <Btn/> */}
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 15, 50]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </>
//   );
// }





import * as React from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
// import Eyeiconbutton from "../../../Components/Reusablecomponents/Eyeiconbutton";
// import Acceptrejectbutton from "../../../Components/Reusablecomponents/Acceptrejectbutton";
// import Dropdownlist from "../../../Components/Reusablecomponents/Dropdownlist";
// import useForm from "../../../Components/Validation/useForm";
// import { getDepartmentname, getPosition } from "../../../Components/Dropdowndata/getDepartmentname";



const rows = [
  {                 
    id: 1220,
    employeename: "Prasoon P",
    trainingname:'front end devolopment',
    trainer:'abc',
    timeschedule: 9947395724,
   
   
  },

  {
                    
    id: 1221,
    employeename: "Akshay p v",
    trainingname:'back end devolopment',
    trainer:'def',
    timeschedule: 9947395724,
   
  },

  {
                     
    id: 1222,
    employeename: "Bhaviya Vasanthu",
    trainingname:'API integration',
    trainer:'ghi',
    timeschedule: 9947395724,
   
  },

  {
                    
    id: 1223,
    employeename: "Sreelakshmi U",
    trainingname:'UI UX Design',
    trainer:'jkl',
    timeschedule: 9947395724,
  },

  {
                    
    id: 1224,
    employeename: "Keerthana Shivadas",
    trainingname:'back end devolopment',
    trainer:'mno',
    timeschedule: 9947395724,
   
  },
  {
                     
    id: 1225,
    employeename: "Vrunda",
    trainingname:'front end devolopment',
    trainer:'UI UX Design',
    timeschedule: 9947395724,
   
  },
];


const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "employeename", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "trainingname", width: 150, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "trainer", width: 150, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "timeschedule", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  // { field: "Mobile", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  // {
  //   field: "Highest_Qualification",
  //   width: 150,
  //   headerClassName: "super-app-theme--header",
  //   headerAlign: 'center'
  // },
  // {
  //   field: "Year_Of_Experience",
  //   width: 150,
  //   headerClassName: "super-app-theme--header",
  //   headerAlign: 'center'
  // },
  // {
  //   field: "Cv",
  //   width: 100,
  //   headerClassName: "super-app-theme--header",
  //   headerAlign: 'center',
  //   renderCell: (params) => (
  //     <strong>
  //       <Eyeiconbutton/>
  //     </strong>
  //   ),
  // },
  // {
  //   field: "Short_List",
  //   width: 150,
  //   headerClassName: "super-app-theme--header",
  //   headerAlign: 'center',
  //   renderCell: (params) => (
  //       <strong>
  //       <Acceptrejectbutton/>
  //       </strong>
  //     ),
  // },
 
];

export default function TrainingdetailsEmp() {
 

    const [pageSize, setPageSize] = React.useState(5);
  return (
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Training Details
      </Typography>
     
      <Box
        sx={{
          height: "50vh",
          width: "100%",
          "& .super-app-theme--header": {
            background: "linear-gradient(#8B8B8B,#1565C0)",
          },
        }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          components={{ Toolbar: GridToolbar }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </Box>
    </Paper>
  );
}
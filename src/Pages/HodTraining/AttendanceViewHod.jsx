import * as React from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
// import Eyeiconbutton from "../../../Components/Reusablecomponents/Eyeiconbutton";
// import Acceptrejectbutton from "../../../Components/Reusablecomponents/Acceptrejectbutton";
// import Dropdownlist from "../../../Components/Reusablecomponents/Dropdownlist";
// import useForm from "../../../Components/Validation/useForm";
import { getDepartmentname, getPosition } from "../../Components/Dropdowndata/getDepartmentname"



const rows = [
  {
    id: 1220,
    employeename: "Prasoon P",
    trainingname:'front end devolopment',
    trainer:'abc',
    timeschedule: "10AM",
    checkin: "10AM",
    chechout: "12AM",
   
  },

  {
    id: 1221,
    employeename: "Akshay p v",
    trainingname:'front end devolopment',
    trainer:'abc',
    timeschedule: "10AM",
    checkin: "10AM",
    chechout: "12AM",
   
   
  },

  {
    id: 1222,
    employeename: "Aswanth saseendran",
    trainingname:'front end devolopment',
    trainer:'abc',
    timeschedule: "10AM",
    checkin: "10AM",
    chechout: "12AM",
   
   
  },

  {
    id: 1223,
    employeename: "Asraya Mohan",
    trainingname:"front end devolopment",
    trainer:'abc',
    timeschedule: "10AM",
    checkin: "10AM",
    chechout: "12AM",
   
  },

  {
    id: 1224,
    employeename: "Anupama Balan",
    trainingname:'front end devolopment',
    trainer:'abc',
    timeschedule: "10AM",
    checkin: "10AM",
    chechout: "12AM",
   
   
  },
  {
    id: 1225,
    employeename: "Megha T K",
    trainingname:'front end devolopment',
    trainer:'abc',
    timeschedule: "10AM",
    checkin: "10AM",
    chechout:"12AM",
   
   
  },
];

const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "employeename", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "trainingname", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "timeschedule", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "trainer", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "checkin", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "checkout", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
//   {
//     field: "Highest_Qualification",
//     width: 150,
//     headerClassName: "super-app-theme--header",
//     headerAlign: 'center'
//   },
//   {
//     field: "Year_Of_Experience",
//     width: 150,
//     headerClassName: "super-app-theme--header",
//     headerAlign: 'center'
//   },
//   {
//     field: "Cv",
//     width: 100,
//     headerClassName: "super-app-theme--header",
//     headerAlign: 'center',
//     renderCell: (params) => (
//       <strong>
//         {/* <Eyeiconbutton/> */}
//       </strong>
//     ),
//   },
//   {
//     field: "Short_List",
//     width: 150,
//     headerClassName: "super-app-theme--header",
//     headerAlign: 'center',
//     renderCell: (params) => (
//         <strong>
//         {/* <Acceptrejectbutton/> */}
//         </strong>
//       ),
//   },
 
];

export default function AttendanceViewHod() {
 

    const [pageSize, setPageSize] = React.useState(5);
  return (
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Training attendance
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
import * as React from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { getDepartmentname, getPosition } from "../../Components/Dropdowndata/getDepartmentname"
import Btn from "../../Components/Reusablecomponents/Btn"    


const rows = [
  {
    id: 1220,
    employeename: "Prasoon P",
    department:"IT",
    date:"",
    grievance:"",
    solution:"",
    // status:" "
   
  },

  {
    id: 1221,
    employeename: "Akshay p v",
    department:"IT",
    date:"",
    grievance:"",
    solution:"",
    // status:""
   
   
  },

  {
    id: 1222,
    employeename: "Aswanth saseendran",
    department:"IT",
    date:"",
    grievance:"",
    solution:"",
    // status:""
   
   
  },

  {
    id: 1223,
    employeename: "Asraya Mohan",
    department:"IT",
    date:"",
    grievance:"",
    solution:"",
    // status:""
   
  },

  {
    id: 1224,
    employeename: "Anupama Balan",
    department:"IT",
    date:"",
    grievance:"",
    solution:"",
    // status:""
   
   
  },
  {
    id: 1225,
    employeename: "Megha T K",
    department:"IT",
    date:"",
    grievance:"",
    solution:"",
    // status:""
   
   
  },
];

const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "employeename", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "department", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "date", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "grievance", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "solution", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  // { field: "status", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  {
    field: "status",
    width: 100,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    renderCell: (params) => (
      <strong> 
      <Btn text="Solved" size="small"/>
      </strong>
    ),
  },
];

export default function HrGrievanceTable() {


    const [pageSize, setPageSize] = React.useState(5);
  return (
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
       Grievance
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
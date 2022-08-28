import * as React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import TaskIcon from '@mui/icons-material/Task';
// import PopUp from "../../Components/ReusableComponents/PopUp";

const rows = [
  {
    id: 1,
    Date: "24-07-2022",
    Name: "Akshaya",
    Department:"Marketing",
    Check_In_Time: "08:45",
   
   


  },
  {
    id: 2,
    Date: "24-07-2022",
    Name: "Akshayb",
    Department:"Advertising",
    Check_In_Time: "08:50",



  },
 
  {
    id: 3,
    Date: "24-07-2022",
    Name: "Akshayd",
    Department:"Accounting",
    Check_In_Time: "9:00",
   

  },
  {
    id: 4,
    Date: "24-07-2022",
    Name: "Akshaye",
    Department:"Marketing",
    Check_In_Time: "8:30",
 

  },
];

const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header" },
  { field: "Date", width: 315, headerClassName: "super-app-theme--header" },
  { field: "Name", width: 315, headerClassName: "super-app-theme--header" },
  { field: "Department", width: 315, headerClassName: "super-app-theme--header" },
  { field: "Check_In_Time", width: 315, headerClassName: "super-app-theme--header" },
  

];
export default function OnTimeTable({ click }) {


  const [pageSize, setPageSize] = React.useState(5);
  return (
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
     ON TIME EMPLOYEES
      </Typography>

      <Box
        sx={{
          height: "60vh",
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
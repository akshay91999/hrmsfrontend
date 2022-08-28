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
    Date: "22-07-2022",
    Name: "Akshaya",
    Department:"Advertising",
    Check_In_Time:"8:00",
    Check_Out_Time:"18:00",
    Status:"on time"
  },
  {
    id: 2,
    Date: "22-07-2022",
    Name: "Akshayb",
    Department:"Accounting",  
    Check_In_Time:"8:00",
    Check_Out_Time:"18:00",
    Status:"on time"
  },
  {
    id: 3,
    Date: "22-07-2022",
    Name: "Akshayc",
    Department:"Devloping",
    Check_In_Time:"9:30",
    Check_Out_Time:"18:00",
    Status:"late"
   

  },
  {
    id: 4,
    Date: "22-07-2022",
    Name: "Akshayd",
    Department:"Adverting",
    Check_In_Time:"8:00",
    Check_Out_Time:"18:00",
    Status:"on time"
   

  },
  {
    id: 5,
    Date: "22-07-2022",
    Name: "Akshaye",
    Department:"Accounting",
    Check_In_Time:"8:00",
    Check_Out_Time:"18:00",
    Status:"on time"
   

  },
  {
    id: 6,
    Date: "22-07-2022",
    Name: "Akshayf",
    Department:"Devloping",
    Check_In_Time:"",
    Check_Out_Time:"",
    Status:"Absent"
   

  },
  {
    id: 7,
    Date: "20-07-2022",
    Name: "Akshayg",
    Department:"Accounting",
    Check_In_Time:"10:00",
    Check_Out_Time:"18:00",
    Status:"late"
   

  },
  {
    id: 8,
    Date: "20-07-2022",
    Name: "Akshayh",
    Department:"Accounting",
    Check_In_Time:"8:00",
    Check_Out_Time:"18:00",
    Status:"on time"
   

  },
  
];

const columns = [
  { field: "id", width: 200, headerClassName: "super-app-theme--header" },
  { field: "Date", width: 200, headerClassName: "super-app-theme--header" },
  { field: "Name", width: 200, headerClassName: "super-app-theme--header" },
  { field: "Department", width: 200, headerClassName: "super-app-theme--header" },
  { field: "Check_In_Time", width: 200, headerClassName: "super-app-theme--header" },
  { field: "Check_Out_Time", width: 200, headerClassName: "super-app-theme--header" },
  { field: "Status", width: 200, headerClassName: "super-app-theme--header" },
  

];
export default function HrCompleteAttandanceTable({ click }) {


  const [pageSize, setPageSize] = React.useState(5);
  return (
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
   Attandance of The Month
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
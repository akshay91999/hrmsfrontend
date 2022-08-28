import * as React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import HodTaskIcon from "./HodTaskIcon";

const rows = [
  {
    id: 1220,
    Name: "Akshayp",
    Mobile: 9947395724,
    Email: "akshaysudhakaran99@gamil.com",
    Department:"Marketing"
   
  },
  {
    id: 1221,
    Name: "Akshays",
    Mobile: 9947395724,
    Email: "akshaysudhakaran99@gamil.com",
    Department:"Advertising"
  },
  {
    id: 1222,
    Name: "Akshaye",
    Mobile: 9947395724,
    Email: "akshaysudhakaran99@gamil.com",
    Department:"Development"
  },
  {
    id: 1223,
    Name: "Akshayd",
    Mobile: 9947395724,
    Email: "akshaysudhakaran99@gamil.com",
    Department:"Marketing"
  },
  {
    id: 1224,
    Name: "Akshayl",
    Mobile: 9947395724,
    Email: "akshaysudhakaran99@gamil.com",
    Department:"Marketing"
  },
];

const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header" },
  { field: "Name", width: 300, headerClassName: "super-app-theme--header" },
  { field: "Mobile", width: 300, headerClassName: "super-app-theme--header" },
  { field: "Email", width: 300, headerClassName: "super-app-theme--header" },
  { field: "Department", width: 300, headerClassName: "super-app-theme--header" },
  {
    field: "View Task",
    width: 100,
    headerClassName: "super-app-theme--header",
    // headerAlign: 'center',
    renderCell: (params) => (
        <strong>
        <HodTaskIcon/>
        </strong>
      ),
  },
 
];
export default function HodTaskEmployeeTable({click}) {
 

  const [pageSize, setPageSize] = React.useState(5);
return (
  <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
    <Typography
      variant="h4"
      align="center"
      sx={{ color: "#1565C0", pb: "2%" }}
    >
      Employee List
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
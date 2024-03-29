import * as React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import TaskIcon from '@mui/icons-material/Task';
import PopUp from "../../Components/Reusablecomponents/PopUp";

const rows = [
  {
    id: 1220,
    ProjectName:"UBMS",
    TaskName: "Documentation",
    AssignedDate: "24-07-2022",
    DueDate: "28-07-2022",


  },
  {
    id: 1220,
    ProjectName:"UBMS",
    TaskName: "Documentation",
    AssignedDate: "24-07-2022",
    DueDate: "28-07-2022",


  },
  {
    id: 1220,
    ProjectName:"UBMS",
    TaskName: "Documentation",
    AssignedDate: "24-07-2022",
    DueDate: "28-07-2022",


  },
  {
    id: 1220,
    TaskName: "Documentation",
    AssignedDate: "24-07-2022",
    DueDate: "28-07-2022",


  },
  {
    id: 1220,
    ProjectName:"UBMS",
    TaskName: "Documentation",
    AssignedDate: "24-07-2022",
    DueDate: "28-07-2022",


  },
];

const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header" },
  { field: "ProjectName", width: 270, headerClassName: "super-app-theme--header" },
  { field: "TaskName", width: 270, headerClassName: "super-app-theme--header" },
  { field: "AssignedDate", width: 270, headerClassName: "super-app-theme--header" },
  { field: "DueDate", width: 270, headerClassName: "super-app-theme--header" },
  {
    field: "Completed",
    width: 179,
    headerClassName: "super-app-theme--header",
    renderCell: (params) => (
      <strong>
        <PopUp />
      </strong>
    ),
  },


];
export default function MyAssignedTaskTable({ click }) {


  const [pageSize, setPageSize] = React.useState(5);
  return (
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Assigned Task
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
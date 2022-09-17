import * as React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TaskIcon from "@mui/icons-material/Task";
import HrTaskIcon from "./HrTaskIcon";
import axios from "axios";



const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header" },
  { field: "name", width: 300, headerClassName: "super-app-theme--header" },
  { field: "contactnumber", width: 300, headerClassName: "super-app-theme--header" },
  { field: "email", width: 300, headerClassName: "super-app-theme--header" },
  {
    field: "departmentname",
    width: 300,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "View Task",
    width: 100,
    headerClassName: "super-app-theme--header",
    // headerAlign: 'center',
    renderCell: (params) => (
      <strong>
        <HrTaskIcon id={params.id}/>
      </strong>
    ),
  },
];
export default function HrTaskEmployeeTable() {
  const [rows, setRows] = React.useState([]); 
  React.useEffect(() => {
    axios.get("http://localhost:5000/basics")
    .then(function (response) {
      console.log(response)
      var task=response.data
      setRows(task)
    })
    .catch(function(error){
      console.log(error)
    });
  },[]);

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
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      </Box>
    </Paper>
  );
}
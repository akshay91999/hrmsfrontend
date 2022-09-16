
import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

const columns = [
  { field: "id", width: 170, headerClassName: "super-app-theme--header",align: "center",
  headerAlign: "center",align:'center' },
  
  {
    field: "name",
    headerName: "Employee Name",
    width: 250,
    headerClassName: "super-app-theme--header",align: "center",
    headerAlign: "center",
    align:'center'
  },
  // { field: "VisitorName", width: 250, headerClassName: "super-app-theme--header" },
  {
    field: "departmentname",
    headerName: "Department",
    width: 230,
    headerClassName: "super-app-theme--header",align: "center",
    headerAlign: "center",
    align:'center'
  },
  {
    field: "leave_type",
    headerName: "Leave Type",
    width: 170,
    headerClassName: "super-app-theme--header",align: "center",
    headerAlign: "center",
    align:'center'
  },
  {
    field: "from_to",
    headerName: "From-To",
    width: 240,
    headerClassName: "super-app-theme--header",align: "center",
    headerAlign: "center",
    align:'center'
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 280,
    headerClassName: "super-app-theme--header",align: "center",
    headerAlign: "center",
    align:'center'
  },
];
export default function LeaveApprovedList() {
  const [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/showleave/approved ")
    .then(function(response){
      console.log(response.data)
      var leave=response.data
      setRows(leave)
    })
    .catch(function(error){
      console.log(error)
    })
  },[])
  const [pageSize, setPageSize] = React.useState(5);
  return (
    <>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Leave Approved List
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
              borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          />
        </Box>
      </Paper>
    </>
  );
}
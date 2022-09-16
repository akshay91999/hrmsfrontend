import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { PanoramaSharp } from "@mui/icons-material";

const columns = [
  {
    field: "id",
    width: 170,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
 
  {
    field: "name",
    headerName: "Employee Name",
    width: 250,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  // { field: "VisitorName", width: 250, headerClassName: "super-app-theme--header" },
  {
    field: "departmentname",
    headerName: "Department",
    width: 230,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "leave_type",
    headerName: "Leave Type",
    width: 140,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "From-To",
    width: 240,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "rejectreason",
    headerName: "Reason for Rejection",
    width: 240,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
];
export default function LeaveRejectedList() {
  const [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/showleave/reject/"+1)
    .then(function(response){
      console.log(response)
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
          Leave Rejected List
        </Typography>
      <Box sx={{ width:'100%',display:'flex',justifyContent:'center' }}>
        <Box
          sx={{
            height: "50vh",
            width: "95%",
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
        </Box>
      </Paper>
    </>
  );
}


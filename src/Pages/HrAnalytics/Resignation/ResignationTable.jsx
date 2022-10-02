
import ResignationAcceptReject from '../../../Components/ResignationAcceptReject';
import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";

import axios from "axios";
import EyeIconButtonReasonView from '../../../Components/Reusablecomponents/EyeIconButtonReasonView';

const columns = [
  { field: "id", width:100, headerClassName: "super-app-theme--header", headerAlign: 'center',
  align:'center',},
 
  {
    field: "name",
    headerName: "Employee Name",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    align:'center',
  },
  
  {
    field: "contactnumber",
    headerName: "Contact",
    width: 170,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    align:'center',
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    align:'center',
  },
  // { field: "VisitorName", width: 250, headerClassName: "super-app-theme--header" },
  {
    field: "departmentname",
    headerName: "Department",
    width: 200,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    align:'center',
  },
  {
    field: "designation",
    headerName: "Designation",
    width: 170,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    align:'center',
  },
  {
    field: "reason",
    headerName: "reason",
    width: 170,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    align:'center',
    hide:true,
  },
  {
    field: "Reason",
    width: 100,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align:'center',
    renderCell: (params) => (
      <strong>
        <EyeIconButtonReasonView reason={params.row.reason}/>
      </strong>
    ),
  },
  {
    field: "Action",
    width: 200,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align:'center',
    renderCell: (params) => (
      <strong>
        <ResignationAcceptReject id={params.id}/>
      </strong>
    ),
  },
];
export default function LeaveApprovedList() {
  const [rows,setRows]=useState([])
  const [pageSize, setPageSize] = React.useState(5);
  useEffect(()=>{
    axios.get("http://localhost:5000/retirement/req")
    .then(function(response){
      console.log(response)
      setRows(response.data)
    })
    .catch(function(error){
      console.log(error)
    })
  },[])
  return (
    <>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
        Resignation Request
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
    </>
  );
}


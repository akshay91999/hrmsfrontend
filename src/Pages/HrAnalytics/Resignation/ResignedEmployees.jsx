
import ResignationAcceptReject from '../../../Components/ResignationAcceptReject';
import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";

import axios from "axios";

const columns = [
  { field: "id", width:100, headerClassName: "super-app-theme--header" },
  // {
  //   field: "employeename", headerClassName: "super-app-theme--header",
  //   headerName: "Employee Name",
  //   width: 280,
  //   renderCell: (params) => {
  //     console.log(params);
  //     return (
  //       <>
  //         <Avatar src={params.value.avatar} />&nbsp;&nbsp;&nbsp;
  //         {params.value.username}
  //       </>
  //     );
  //   },
  // },
  // {
  //   field: "employee",
  //   headerName: "Employee",
  //   width: 140,
  //   renderCell: (params) => {
  //     // console.log(params);
  //     return (
  //       <>
  //         <Avatar src={params.value.avatar} />
  //       </>
  //     );
  //   },
  //   headerClassName: "super-app-theme--header",
  // },
  {
    field: "firstName",
    headerName: "Employee Name",
    width: 250,
    headerClassName: "super-app-theme--header",
  },
  
  {
    field: "contactnumber",
    headerName: "Contact",
    width: 170,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    headerClassName: "super-app-theme--header",
  },
  // { field: "VisitorName", width: 250, headerClassName: "super-app-theme--header" },
  {
    field: "departmentname",
    headerName: "Department",
    width: 200,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "designation",
    headerName: "Designation",
    width: 170,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "date",
    headerName: "Date",
    width: 170,
    headerClassName: "super-app-theme--header",
  },
  
];
export default function LeaveApprovedList() {
  const [rows,setRows]=useState([])
  const [pageSize, setPageSize] = React.useState(5);
  return (
    <>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Resigned Employee List
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


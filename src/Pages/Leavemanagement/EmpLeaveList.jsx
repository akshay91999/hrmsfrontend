import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import LeaveCancelDialogBox from "../../Components/LeaveCancelDialogBox";
import axios from "axios";

const columns = [
  {
    field: "id",
    width: 100,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "leave_from",
    headerName: "Leave From",
    width: 240,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "leave_to",
    headerName: "Leave Upto",
    width: 240,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "leave_type",
    headerName: "Leave Type",
    width: 170,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },

  {
    field: "reason",
    headerName: "Reason",
    width: 260,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Cancel Leave",
    width: 180,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <strong>
        <LeaveCancelDialogBox id={params.id}/>
      </strong>
    ),
  },
];
export default function EmpLeaveList() {
  const [rows,setRows]=useState([])
  const user=JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    axios
      .get("http://localhost:5000/showleave/leavApplied/"+user.id)
      .then(function (response) {
        console.log(response.data);
        var leave=response.data
        setRows(leave)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [pageSize, setPageSize] = React.useState(5);
  return (
    <>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Leaves Applied
        </Typography>
      <Box sx={{ width:"100%",display:'flex',justifyContent:'center' }}>
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
        </Box>
      </Paper>
    </>
  );
}
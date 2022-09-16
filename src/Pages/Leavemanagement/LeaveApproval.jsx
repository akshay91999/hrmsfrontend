import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
// import ApproveRejectIcon from "../../Components/ApproveRejectIconTravel";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EyeIconButtonLeaveApproval from "../../Components/Reusablecomponents/EyeIconButtonLeaveApproval";
import axios from "axios";
import ApproveRejectIconLeave from "../../Components/ApproveRejectIconLeave";


const columns = [
  { field: "id", width: 50, headerClassName: "super-app-theme--header",align:"center",
  headerAlign: "center" },
 
  {
    field: "name",
    headerName: "Employee Name",
    width: 250,
    headerClassName: "super-app-theme--header", align: "center",
    headerAlign: "center",
  },
  {
    field: "basic_id",
    headerName: "Basic Id",
    hide:"true",
    width: 250,
    headerClassName: "super-app-theme--header", align: "center",
    headerAlign: "center",
  },
  {
    field: "departmentname",
    headerName: "Department",
    width: 160,
    headerClassName: "super-app-theme--header", align: "center",
    headerAlign: "center",
  },
  {
    field: "leave_type",
    headerName: "Leave Type",
    width: 150,
    headerClassName: "super-app-theme--header", align: "center",
    headerAlign: "center",
  },
  {
    field: "leave_from",
    headerName: "Leave From",
    width: 150,
    headerClassName: "super-app-theme--header", align: "center",
    headerAlign: "center",
  },
  {
    field: "leave_to",
    headerName: "Leave Upto",
    width: 150,
    headerClassName: "super-app-theme--header", align: "center",
    headerAlign: "center",
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 150,
    headerClassName: "super-app-theme--header", align: "center",
    headerAlign: "center",
  }, {
    field: "View",
    headerName: "View Leave used",
    width: 100,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <strong>
        {/* calling Eyeiconbutton component which contain iconbutton */}
        <EyeIconButtonLeaveApproval id={params.row.basic_id}/>
        
      </strong>
    ),
  },
  {
    field: "Approve/Reject",
    width: 180,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    renderCell: (params) => (
      <strong>
        <ApproveRejectIconLeave id={params.id}/>
      </strong>
    ),
  },
];
export default function LeaveApproval() {
 const [rows,setRows]=useState([])
 useEffect(()=>{
  axios.get("http://localhost:5000/request")
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
          Leave Approval
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

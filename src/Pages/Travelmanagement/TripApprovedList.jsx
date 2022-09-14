import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ApproveRejectIcon from "../../Components/ApproveRejectIconTravel";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditDeleteTrip from "../../Components/EditDeleteTrip";
import axios from "axios";
// const rows = [
//   {
//     id: 1220,
//     employeeid: 45,
//     employeename: "David",
//     department:"Marketing",
//     date: "12/02/2022",
//     time: "02.30",
//     status: "Pending",
//     location: "home",
//     pickupdrop: "pickup",
//   },

//   {
//     id: 1221,
//     employeeid: 45,
//     employeename: "David",
//     department:"Marketing",
//     date: "12/02/2022",
//     time: "02.30",
//     status: "Approved",
//     location: "town",
//     pickupdrop: "pickup",
//   },

//   {
//     id: 1222,
//     employeeid: 45,
//     employeename: "David",
//     department:"Marketing",
//     date: "12/02/2022",
//     time: "02.30",
//     status: "Approved",
//     location: "home",
//     pickupdrop: "pickup",
//   },

//   {
//     id: 1223,
//     employeeid: 45,
//     employeename: "David",
//     department:"Marketing",
//     date: "12/02/2022",
//     time: "02.30",
//     status: "Approved",
//     location: "town",
//     pickupdrop: "drop",
//   },

//   {
//     id: 1224,
//     employeeid: 45,
//     employeename: "David",
//     department:"Marketing",
//     date: "12/02/2022",
//     time: "02.30",
//     status: "Approved",
//     location: "home",
//     pickupdrop: "pickup",
//   },
//   {
//     id: 1225,
//     employeeid: 45,
//     employeename: "David",
//     department:"Marketing",
//     date: "12/02/2022",
//     time: "02.30",
//     status: "Approved",
//     location: "home",
//     pickupdrop: "pickup",
//   },
// ];
const columns = [
  {
    field: "id",
    headerName: "Sl.No",
    width: 80,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "basic_id",
    headerName: "Employee Id",
    width: 150,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Employee Name",
    width: 180,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "departmentname",
    headerName: "Department",
    width: 180,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "Date",
    width: 160,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "time",
    headerName: "Time",
    width: 130,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "location",
    headerName: "Location",
    width: 260,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "trip_for",
    headerName: "Pick up/ Drop",
    width: 160,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
];
export default function TripApprovedList() {
  const [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/approvedtrip")
    .then(function(response){
      console.log(response.data)
      const trip=response.data
      setRows(trip)
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
          Trip Approved List
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

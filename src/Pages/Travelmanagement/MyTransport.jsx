import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ApproveRejectIcon from "../../Components/ApproveRejectIconTravel";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditDeleteTrip from "../../Components/EditDeleteTrip";
import axios from "axios";
// const rows = [
//   {
//     id: 1220,

//     date: "12/02/2022",
//     time:"02.30",
//     status: "Pending",
//     location: "home",
//     pickupdrop: "pickup",
//   },

//   {
//     id: 1221,

//     date: "12/02/2022",
//     time:"02.30",
//     status: "Approved",
//     location: "town",
//     pickupdrop: "pickup",
//   },

//   {
//     id: 1222,
//     date: "12/02/2022",
//     time:"02.30",
//     status: "Approved",
//     location: "home",
//     pickupdrop: "pickup",
//   },

//   {
//     id: 1223,

//     date: "12/02/2022",
//     time:"02.30",
//     status: "Approved",
//     location: "town",
//     pickupdrop: "drop",
//   },

//   {
//     id: 1224,

//     date: "12/02/2022",
//     time:"02.30",
//     status: "Approved",
//     location: "home",
//     pickupdrop: "pickup",
//   },
//   {
//     id: 1225,

//     date: "12/02/2022",
//     time:"02.30",
//     status: "Approved",
//     location: "home",
//     pickupdrop: "pickup",
//   },
// ];
const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 80,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "Date",
    width: 190,
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
    width: 180,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 180,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Edit/Delete",
    width: 200,
    headerClassName: "super-app-theme--header",
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <strong>
        <EditDeleteTrip id={params.id}/>
      </strong>
    ),
  },
];
export default function MyTransport() {
  const [rows,setRows]=useState([])
  const user=JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
    axios.get("http://localhost:5000/travel/pending/"+user.id)
    .then(function(response){
      console.log(response)
      var trip=response.data.travel
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
          My Transport
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

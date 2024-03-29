import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import axios from 'axios';
import ApproveRejectIconTravel from '../../Components/ApproveRejectIconTravel';
// const rows = [
//     {
//       id: 1220,    
//       employeename: "David",
//       department: "Marketing",
//       date: "12/02/2022",
//       time: "12.00",
//       location: "home",
//       pickupdrop:"pickup"
//     },
  
//     {
//       id: 1221,
//       employeename: "David",
//       department: "Advertising",
//       date: "12/02/2022",
//       time: "02.00",
//       location: "town",
//       pickupdrop:"pickup"
//     },
  
//     {
//       id: 1222,
//       employeename: "David",
//       department: "Development",
//       date: "12/02/2022",
//       time: "01.00",
//       location: "home",
//       pickupdrop:"pickup"
//     },
  
//     {
//       id: 1223,
//       employeename: "David",
//       department: "Development",
//       date: "12/02/2022",
//       time: "03.00",
//       location: "town",
//       pickupdrop:"drop"
//     },
  
//     {
//       id: 1224,
//       employeename: "David",
//       department: "Development",
//       date: "12/02/2022",
//       time: "08.00",
//       location: "home",
//       pickupdrop:"pickup"
//     },
//     {
//       id: 1225,
//       employeename: "David",
//       department: "Marketing",
//       date: "12/02/2022",
//       time: "07.00",
//       location: "home",
//       pickupdrop:"pickup"
//     },
//   ];
  const columns = [
    { field: "id",headerName: "Employee Id", width: 130, headerClassName: "super-app-theme--header", align: "center",
    headerAlign: "center", },
    {
      field: "name",
      headerName: "Employee Name",
      width: 250,
      headerClassName: "super-app-theme--header", align: "center",
      headerAlign: "center",
    },
    {
      field: "departmentname",
      headerName: "Department",
      width: 180,
      headerClassName: "super-app-theme--header", align: "center",
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      headerClassName: "super-app-theme--header", align: "center",
      headerAlign: "center",
    },
    {
      field: "time",
      headerName: "Time",
      width: 200,
      headerClassName: "super-app-theme--header", align: "center",
      headerAlign: "center",
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
      headerClassName: "super-app-theme--header", align: "center",
      headerAlign: "center",
    },
    {
        field: "trip_for",
        headerName: "Pickup/Drop",
        width: 150,
        headerClassName: "super-app-theme--header", align: "center",
        headerAlign: "center",
      },
    {
      field: "Approve/Reject",
      width: 180,
      headerClassName: "super-app-theme--header", align: "center",
      headerAlign: "center",
      
      renderCell: (params) => (
        <strong>
          <ApproveRejectIconTravel id={params.id}/>
        </strong>
      ),
    },
  ];
export default function TripApproval() {
  const [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/travel")
    .then(function(response){
      console.log(response.data)
      var trip=response.data
      setRows(trip)
      // var employee = response.data.person;
      //   setRows(employee);

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
          Trip Approval
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
  )
}

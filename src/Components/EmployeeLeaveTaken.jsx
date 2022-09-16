import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const columns = [
    { field: "id",headerName: "Sl.No", width: 150, headerClassName: "super-app-theme--header", align:"center",
    headerAlign: "center" },

   
    {
      field: "leave_from",
      headerName: "Leave From",
      width: 250,
      headerClassName: "super-app-theme--header",
      align:"center",
      headerAlign: "center"
    },
   
    {
      field: "no_days",
      headerName: "Number Of Days",
      width: 200,
      headerClassName: "super-app-theme--header",
      align:"center",
      headerAlign: "center"
    },
    {
      field: "leave_type",
      headerName: "Leave Type",
      width: 200,
      headerClassName: "super-app-theme--header",
      align:"center",
      headerAlign: "center"
    },
    {
      field: "reason",
      headerName: "Reason",
      width: 350,
      headerClassName: "super-app-theme--header",
      align:"center",
      headerAlign: "center"
    },
  ];
export default function EmployeeLeaveTaken() {
  const params=useParams()
  const [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/request/"+params.id)
    .then(function(response){
      console.log(response.data)
      var leave=response.data.leaveData
      setRows(leave)
    })
    .catch(function(error){
      console.log(error)
    })
  },[])
    const [pageSize, setPageSize] = React.useState(5);
  return (
    <>
       <Paper elevation={4} sx={{ m: "2%", p: "1%" }}>
        <Typography
          variant="h4"
          align="center"
          
          sx={{ color: "#1565C0", pb: "2%",}}
        >
          Leave Taken
        </Typography>
        <Box sx={{ width:"100%",display:'flex',justifyContent:'center' }}>
        <Box
          sx={{
            height: "40vh",
            width: "85%",
            "& .super-app-theme--header": {
              background: "linear-gradient(#8B8B8B,#1565C0)",
            }
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
              }
            }}
          />
        </Box>
        </Box>
        </Paper>  
    </>
  )
}
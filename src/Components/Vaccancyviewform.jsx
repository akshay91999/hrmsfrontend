import * as React from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import AcceptrejectbuttonVaccancyView from "./AcceptrejectbuttonVacancyView";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



const columns = [
  {
    field: "id",
    width: 100,
    headerClassName: "super-app-theme--header",
  
  },
  {
    field: "departmentname",
    headerName: 'Department Name',
    width: 250,
    headerClassName: "super-app-theme--header",
  
  },
  {
    field: "designation",
    headerName: 'Position',
    width: 250,
    headerClassName: "super-app-theme--header",
  
  },
  {
    field: "vacancynumber",
    headerName: 'Number Of Vacancy',
    width: 150,
    headerClassName: "super-app-theme--header",
  
  },
  {
    field: "yoeneeded",
    headerName: 'Year Of Experience',
    width: 200,
    headerClassName: "super-app-theme--header",
  
  },
  {
    field: "neededwithin",
    headerName: 'Needed Within',
    width: 240,
    headerClassName: "super-app-theme--header",
  
  },
  {
    field: "acceptorreject",
    headerName:'Accepet/Reject',
    width: 150,
    headerClassName: "super-app-theme--header",
    renderCell: (params) => (
        <strong>
        <AcceptrejectbuttonVaccancyView id={params.id} />
        </strong>
      ),
  },
  
];

export default function Vaccancyviewform() {
  const [rows,setRows]=useState([])
 
  useEffect(()=>{
   getTableData()
    
  },[])

  const getTableData=()=>{
    
    axios.get("http://localhost:5000/vacancy")
    .then(function(response){
      console.log(response.data)
      var row=[]
      row=response.data
      var newrow=row.map(({v_id:id,...rest})=>({
        id,...rest
      }))
      setRows(newrow)
      // setRows(row)
    })
    .catch(function(error){
      console.log(error)
    })
  
  }
 
  const [pageSize, setPageSize] = React.useState(5);
  return (
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Vacancy List
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
  );
}

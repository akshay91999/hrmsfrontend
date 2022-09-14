import * as React from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import Eyeiconbutton from "../../../Components/Reusablecomponents/Eyeiconbutton";
import DeleteCandidateButton from "../../../Components/DeleteCandidateButton";
import BlackListedReasonView from "../../../Components/BlackListedReasonView";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";




const columns = [
  { field: "id",headerName:"C_Id", width: 100, headerClassName: "super-app-theme--header",headerAlign: 'center',align:'center' },
  { field: "candidatename",headerName:"Name", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center',align:'center' },
  { field: "departmentname",headerName:'Department Name', width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center',align:'center' },
  { field: "designation",headerName:'Position', width: 150, headerClassName: "super-app-theme--header",headerAlign: 'center',align:'center' },
  { field: "email",headerName:'Email', width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center',align:'center' },
  { field: "mobile",headerName:'Mobile', width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center',align:'center' },
  {
    field: "View",
    width: 100,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    renderCell: (params) => (
      <strong> 
        <BlackListedReasonView id={params.id}/>
      </strong>
    ),
  },
 
  
 
];

export default function BlackListedCandidate() {
  const [rows,setRows]=useState([])
 
  useEffect(()=>{
    axios.get("http://localhost:5000/blacklist")
    .then(function(response){
      console.log(response.data)
      setRows(response.data)

      // setRows(row)
    })
    .catch(function(error){
      console.log(error)
    })
  },[])
 

    const [pageSize, setPageSize] = React.useState(5);
  return (
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Blacklisted Candidate
      </Typography>
     
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
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />

      </Box>
    </Paper>
  );
}

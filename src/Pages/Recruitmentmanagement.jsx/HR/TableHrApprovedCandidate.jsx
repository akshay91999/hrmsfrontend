import * as React from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import Eyeiconbutton from "../../../Components/Reusablecomponents/Eyeiconbutton";
import DeleteCandidateButton from "../../../Components/DeleteCandidateButton";
import Btn from "../../../Components/Reusablecomponents/Btn";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import AcceptCandidateByHrButton from "../../../Components/AcceptCandidateByHrButton";


const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header",headerAlign: 'center',align:'center' },
  { field: "candidatename",headerName:'Candidate Name' ,align:'center',width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "departmentname", width: 200,align:'center', headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "designation", width: 200,align:'center', headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "email", width: 250,align:'center', headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "mobile", width: 242,align:'center', headerClassName: "super-app-theme--header",headerAlign: 'center', },
 
  {
    field: "yoe",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    align:'center',
    hide:'true'
  },
  {
    field: "cv",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    align:'center',
    hide:true
  },
  {
    field: "Cv",
    width: 100,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    align:'center',
    renderCell: (params) => (
      <strong> 
        <Eyeiconbutton cv={params.row.cv}/>
      </strong>
    ),
  },
  
 
];

export default function TableHrApprovedCandidate() {
 
  const [rows,setRows]=useState([])
 
  useEffect(()=>{
    axios.get("http://localhost:5000/candidate/candidate_approved")
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
  },[])
 

    const [pageSize, setPageSize] = React.useState(5);
  return (
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Selected List
      </Typography>
     
      <Box
        sx={{
          height: "55vh",
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
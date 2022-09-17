import * as React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useNavigate,useParams } from 'react-router-dom'
import Btn from '../../Components/Reusablecomponents/Btn';
import axios from "axios";


const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header" },
  { field: "projectname", width: 315, headerClassName: "super-app-theme--header" },
  { field: "taskname", width: 315, headerClassName: "super-app-theme--header" },
  { field: "assigndate", width: 315, headerClassName: "super-app-theme--header" },
  { field: "due_date", width: 315, headerClassName: "super-app-theme--header" },
  
 
];
export default function OngoingTaskTable({click}) {
  let navigate=useNavigate()
  const params=useParams()

  const [pageSize, setPageSize] = React.useState(5);
  const [rows,setRows]=React.useState([])
  React.useEffect(()=>{
    axios.get("http://localhost:5000/task/"+params.id)
    .then(function(response){
      console.log(response)
      console.log(response.data)
      var ongoingtask=response.data
      setRows(ongoingtask)
    })
    .catch(function(error){
      console.log(error)
    });
  },[])
return (
  <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
    <Typography
      variant="h4"
      align="center"
      sx={{ color: "#1565C0", pb: "2%" }}
    >
     Ongoing Task
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
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </Box>
    <Box sx={{display:"flex",justifyContent:"flex-end",m:"5%"}}>
        <Btn text="Back" click={()=>navigate(-1)}/>
      </Box>
  </Paper>
);
}
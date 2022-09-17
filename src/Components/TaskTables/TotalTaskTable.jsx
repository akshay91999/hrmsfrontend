import * as React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useNavigate,useParams } from 'react-router-dom'
import TaskIcon from '@mui/icons-material/Task';
import Btn from '../../Components/Reusablecomponents/Btn';
import axios from "axios";

// const rows = [
//   {
//     id: 1220,
//     ProjectName:"UBMS",
//     TaskName: "Documentation",
//     AssignedDate: "24-07-2022",
//     DueDate: "28-07-2022",
//     CompletedDate:"30-07-2022",
//     Status:"completed"
   
//   },
//   {
//     id: 1221,
//     ProjectName:"UBMS",
//     TaskName: "Documentation",
//     AssignedDate: "24-07-2022",
//     DueDate: "28-07-2022",
//     CompletedDate:"30-07-2022",
//     Status:"completed"
   
//   },
//   {
//     id: 1222,
//     ProjectName:"UBMS",
//     TaskName: "Documentation",
//     AssignedDate: "24-07-2022",
//     DueDate: "28-07-2022",
//     CompletedDate:"30-07-2022",
//     Status:"completed"
   
//   },
//   {
//     id: 1223,
//     ProjectName:"UBMS",
//     TaskName: "Documentation",
//     AssignedDate: "24-07-2022",
//     DueDate: "28-07-2022",
//     CompletedDate:"30-07-2022",
//     Status:"completed"
   
//   },
//   {
//     id: 1224,
//     ProjectName:"UBMS",
//     TaskName: "Documentation",
//     AssignedDate: "24-07-2022",
//     DueDate: "28-07-2022",
//     CompletedDate:"30-07-2022",
//     Status:"completed"
   
//   },
//   {
//     id: 1225,
//     ProjectName:"UBMS",
//     TaskName: "Documentation",
//     AssignedDate: "24-07-2022",
//     DueDate: "28-07-2022",
//     CompletedDate:"dd-mm-yyyy",
//     Status:"pending"
   
//   },
//   {
//     id: 1226,
//     ProjectName:"UBMS",
//     TaskName: "Documentation",
//     AssignedDate: "24-07-2022",
//     DueDate: "28-07-2022",
//     CompletedDate:"dd-mm-yyyy",
//     Status:"pending"
   
//   },
//   {
//     id: 1227,
//     ProjectName:"UBMS",
//     TaskName: "Documentation",
//     AssignedDate: "24-07-2022",
//     DueDate: "28-07-2022",
//     CompletedDate:"dd-mm-yyyy",
//     Status:"pending"
   
//   },
// ];

const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header" },
  { field: "projectname", width: 250, headerClassName: "super-app-theme--header" },
  { field: "taskname", width: 250, headerClassName: "super-app-theme--header" },
  { field: "assigndate", width: 250, headerClassName: "super-app-theme--header" },
  { field: "due_date", width: 250, headerClassName: "super-app-theme--header" },
  { field: "completed_date", width: 250, headerClassName: "super-app-theme--header" },
  { field: "status", width: 250, headerClassName: "super-app-theme--header" },
  
 
];
export default function TotalTaskTable({click}) {
  const params=useParams()
  let navigate=useNavigate()
  const [pageSize, setPageSize] = React.useState(5);
  const [rows,setRows]=React.useState([])
  React.useEffect(()=>{
    axios.get("http://localhost:5000/task/"+params.id)
    .then(function(response){
      console.log(response)
      console.log(response.data)
      var totaltask=response.data
      setRows( totaltask) 
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
     Total Task
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
    <Box sx={{display:"flex",justifyContent:"flex-end",m:"5%"}}>
        <Btn text="Back" click={()=>navigate(-1)}/>
      </Box>
  </Paper>
);
}

 
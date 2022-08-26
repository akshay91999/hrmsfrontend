import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";

const rows = [
    {
      id: 1,
    
      leavefrom: "12/09/2022",

      numberofdays: "2",
      leavetype: "Unpaid",

      reason: "Fever",
    },
  
    {
      id: 2,
    
      leavefrom: "10/08/2022",

      numberofdays: "3",
      leavetype: "Unpaid",
      
      reason: "Fever",
    },
  
    {
      id: 3,
     
      leavefrom: "10/08/2022",

      numberofdays: "6",
      leavetype: "Unpaid",
      reason: "Fever",
    },
  
    {
      id: 4,
     
      leavefrom: "10/08/2022",
    
      numberofdays: "3",
      leavetype: "Unpaid",
    
      reason: "Fever",
    },
  
    {
      id: 5,
    
      leavefrom: "10/08/2022",
    
      numberofdays: "2",
      leavetype: "Unpaid",
  
      reason: "Fever",
    },
    {
      id: 6,
     
      leavefrom: "10/08/2022",
   
      numberofdays: "3",
      leavetype: "Unpaid",
      
      reason: "Fever",
    },
  ];
const columns = [
    { field: "id",headerName: "Sl.No", width: 170, headerClassName: "super-app-theme--header" },

   
    {
      field: "leavefrom",
      headerName: "Leave From",
      width: 270,
      headerClassName: "super-app-theme--header",
    },
   
    {
      field: "numberofdays",
      headerName: "Number Of Days",
      width: 230,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "leavetype",
      headerName: "Leave Type",
      width: 200,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "reason",
      headerName: "Reason",
      width: 250,
      headerClassName: "super-app-theme--header",
    },
  ];
export default function EmployeeLeaveTaken() {
    const [pageSize, setPageSize] = React.useState(5);
  return (
    <>
       <Paper elevation={4} sx={{ m: "2%", p: "1%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Leave Taken
        </Typography>
        <Box
          sx={{
            height: "40vh",
            width: "100%",
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
        </Paper>  
    </>
  )
}

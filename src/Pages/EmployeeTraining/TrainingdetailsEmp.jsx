


import * as React from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";


const rows = [
  {                 
    id: 1220,
    employeename: "Prasoon P",
    trainingname:'front end devolopment',
    trainer:'abc',
    timeschedule: 9947395724,
   
   
  },

  {
                    
    id: 1221,
    employeename: "Akshay p v",
    trainingname:'back end devolopment',
    trainer:'def',
    timeschedule: 9947395724,
   
  },

  {
                     
    id: 1222,
    employeename: "Bhaviya Vasanthu",
    trainingname:'API integration',
    trainer:'ghi',
    timeschedule: 9947395724,
   
  },

  {
                    
    id: 1223,
    employeename: "Sreelakshmi U",
    trainingname:'UI UX Design',
    trainer:'jkl',
    timeschedule: 9947395724,
  },

  {
                    
    id: 1224,
    employeename: "Keerthana Shivadas",
    trainingname:'back end devolopment',
    trainer:'mno',
    timeschedule: 9947395724,
   
  },
  {
                     
    id: 1225,
    employeename: "Vrunda",
    trainingname:'front end devolopment',
    trainer:'UI UX Design',
    timeschedule: 9947395724,
   
  },
];


const columns = [
  { field: "id", width: 150, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "employeename", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "trainingname", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "trainer", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "timeschedule", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },

 
];

export default function TrainingdetailsEmp() {
 

    const [pageSize, setPageSize] = React.useState(5);
  return (
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Training Details
      </Typography>
      <Box sx={{ display:'flex',justifyContent:'center' }}>
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
      </Box>
    </Paper>
  );
}
import * as React from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import Eyeiconbutton from "../../../Components/Reusablecomponents/Eyeiconbutton";
import DeleteCandidateButton from "../../../Components/DeleteCandidateButton";



const rows = [
  {
    id: 1220,
    Name: "Akshayp",
    Department:'front end devolopment',
    Position:'python',
    Email: "akshaysudhakaran99@gamil.com",
    Mobile: 9947395724,
    Highest_Qualification: "akshaysudhakaran99@gamil.com",
    Year_Of_Experience: 0,
   
  },

  {
    id: 1221,
    Name: "Akshays",
    Department:'front end devolopment',
    Position:'python',
    Email: "akshaysudhakaran99@gamil.com",
    Mobile: 9947395724,
    Highest_Qualification: "akshaysudhakaran99@gamil.com",
    Year_Of_Experience: 1,
   
  },

  {
    id: 1222,
    Name: "Akshayd",
    Department:'front end devolopment',
    Position:'python',
    Email: "akshaysudhakaran99@gamil.com",
    Mobile: 9947395724,
    Highest_Qualification: "akshaysudhakaran99@gamil.com",
    Year_Of_Experience: 3,
   
  },

  {
    id: 1223,
    Name: "Akshaye",
    Department:'front end devolopment',
    Position:'python',
    Email: "akshaysudhakaran99@gamil.com",
    Mobile: 9947395724,
    Highest_Qualification: "akshaysudhakaran99@gamil.com",
    Year_Of_Experience: 3,
   
  },

  {
    id: 1224,
    Name: "Akshayl",
    Department:'front end devolopment',
    Position:'python',
    Email: "akshaysudhakaran99@gamil.com",
    Mobile: 9947395724,
    Highest_Qualification: "akshaysudhakaran99@gamil.com",
    Year_Of_Experience: 3,
   
  },
  {
    id: 1224,
    Name: "Akshayl",
    Department:'front end devolopment',
    Position:'python',
    Email: "akshaysudhakaran99@gamil.com",
    Mobile: 9947395724,
    Highest_Qualification: "akshaysudhakaran99@gamil.com",
    Year_Of_Experience: 3,
   
  },
 
];

const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "Name", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "Department", width: 150, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "Position", width: 150, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "Email", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  { field: "Mobile", width: 250, headerClassName: "super-app-theme--header",headerAlign: 'center' },
  {
    field: "Highest_Qualification",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center'
  },
  {
    field: "Year_Of_Experience",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center'
  },
  {
    field: "Cv",
    width: 100,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    renderCell: (params) => (
      <strong> 
        <Eyeiconbutton/>
      </strong>
    ),
  },
  {
    field: "delete",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    renderCell: (params) => (
        <strong>
        <DeleteCandidateButton/>
        </strong>
      ),
  },
  
 
];

export default function TableSelectedCandidate() {
 

    const [pageSize, setPageSize] = React.useState(5);
  return (
    <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Shortlisted Candidate
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
    </Paper>
  );
}

import * as React from "react";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import AcceptrejectbuttonVaccancyView from "./AcceptrejectbuttonVacancyView";


const rows = [
  {
    id: 1220,
    departmentname: "front-end devolopment",
    position:'python devoloper',
    numberofvacancy:45,
    yoeneeded: 4,
    neededwithin: '22-05-2022',
  },

  {
    id: 1221,
    departmentname: "front-end devolopment",
    position:'python devoloper',
    numberofvacancy:45,
    yoeneeded: 4,
    neededwithin: '22-05-2022',
  },

  {
    id: 1222,
    departmentname: "front-end devolopment",
    position:'python devoloper',
    numberofvacancy:45,
    yoeneeded: 4,
    neededwithin: '22-05-2022',
  },

  {
    id: 1223,
    departmentname: "front-end devolopment",
    position:'python devoloper',
    numberofvacancy:45,
    yoeneeded: 3,
    neededwithin: '22-05-2022',
  },

  {
    id: 1224,
    departmentname: "front-end devolopment",
    position:'python devoloper',
    numberofvacancy:45,
    yoeneeded: 2,
    neededwithin: '22-05-2022',
  },
  {
    id: 1224,
    departmentname: "front-end devolopment",
    position:'python devoloper',
    numberofvacancy:45,
    yoeneeded: 1,
    neededwithin: '22-05-2022',
  },
];

const columns = [
  {
    field: "id",
    width: 100,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "departmentname",
    headerName: 'Department Name',
    width: 250,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "position",
    headerName: 'Position',
    width: 250,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "numberofvacancy",
    headerName: 'Number Of Vacancy',
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "yoeneeded",
    headerName: 'Year Of Experience',
    width: 250,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "neededwithin",
    headerName: 'Needed Within',
    width: 250,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "acceptorreject",
    headerName:'Accepet/Reject',
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    renderCell: (params) => (
        <strong>
        <AcceptrejectbuttonVaccancyView />
        </strong>
      ),
  },
  
];

export default function Vaccancyviewform() {
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

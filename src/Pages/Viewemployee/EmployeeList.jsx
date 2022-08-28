import React from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import ViewUpdateDeleteEmp from "../../Components/Reusablecomponents/ViewUpdateDeleteEmp";
const rows = [
  {
    id: 1220,
    employee: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    employeename: "David",
    // employeename: {
    //   username: "David",
    //   avatar:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    // },
    // VisitorName: "David",
    contact:"9876543210",
    email:"d@gmail.com",
    department: "Development",
    designation: "Project Manager"
   
  },

  {
    id: 1221,
    employee: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
    },
    employeename: "Ramsan",
    // employeename: {
    //   username: "Ramsan",
    //   avatar:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
    // },
    // VisitorName: "David",
    contact:"9876543210",
    email:"d@gmail.com",
    department: "Marketing",
    designation: "CEO"
  },

  {
    id: 1222,
    employee: {
      avatar:
        "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    },
    employeename: "David",
    // employeename: {
    //   username: "David",
    //   avatar:
    //     "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    // },
    // VisitorName: "David",
    contact:"9876543210",
    email:"d@gmail.com",
    department: "Advertising",
    designation: "CTO"
  },

  {
    id: 1223,
    employee: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    employeename: "David",
    // employeename: {
    //   username: "David",
    //   avatar:
    //     "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    // },
    // VisitorName: "David",
    contact:"9876543210",
    email:"d@gmail.com",
    department: "Marketing",
    designation: "Product Manager"
  },

  {
    id: 1224,
    employee: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    employeename: "aarooo",
    // employeename: {
    //   username: "aarooo",
    //   avatar:
    //     "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    // },
    // VisitorName: "David",
    contact:"9876543210",
    email:"d@gmail.com",
    department: "Marketing",
    designation: "Chief Architect"
  },
  {
    id: 1225,
    employee: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    employeename: "Daviddddd",
    // employeename: {
    //   username: "Daviddddd",
    //   avatar:
    //     "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    // },
    // VisitorName: "David",
    contact:"9876543210",
    email:"d@gmail.com",
    department: "Advertising",
    designation: "Product Manager"
  },
];

const columns = [
  { field: "id", width: 120, headerClassName: "super-app-theme--header" },
  // {
  //   field: "employeename", headerClassName: "super-app-theme--header",
  //   headerName: "Employee Name",
  //   width: 280,
  //   renderCell: (params) => {
  //     console.log(params);
  //     return (
  //       <>
  //         <Avatar src={params.value.avatar} />&nbsp;&nbsp;&nbsp;
  //         {params.value.username}
  //       </>
  //     );
  //   },
  // },
  {
    field: "employee",
    headerName: "Employee",
    width: 140,
    renderCell: (params) => {
      console.log(params);
      return (
        <>
          <Avatar src={params.value.avatar} />
        </>
      );
    },
    headerClassName: "super-app-theme--header",
  },
  {
    field: "employeename",
    headerName: "Employee Name",
    width: 250,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "contact",
    headerName: "Contact",
    width: 170,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    headerClassName: "super-app-theme--header",
  },
  // { field: "VisitorName", width: 250, headerClassName: "super-app-theme--header" },
  {
    field: "department",
    headerName: "Department",
    width: 200,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "designation",
    headerName: "Designation",
    width: 170,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "View/Edit/Delete",
    width: 180,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    renderCell: (params) => (
      <strong>
        <ViewUpdateDeleteEmp />
      </strong>
    ),
  },
];
export default function LeaveApprovedList() {
  const [pageSize, setPageSize] = React.useState(5);
  return (
    <>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Employee List
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
    </>
  );
}

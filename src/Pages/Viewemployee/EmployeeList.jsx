import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import ViewUpdateDeleteEmp from "../../Components/Reusablecomponents/ViewUpdateDeleteEmp";
import axios from "axios";

const columns = [
  { field: "id", width: 100, headerClassName: "super-app-theme--header",align:"center",headerAlign: "center"},
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
  // {
  //   field: "employee",
  //   headerName: "Employee",
  //   width: 140,
  //   renderCell: (params) => {
  //     // console.log(params);
  //     return (
  //       <>
  //         <Avatar src={params.value.avatar} />
  //       </>
  //     );
  //   },
  //   headerClassName: "super-app-theme--header",
  // },
  {
    field: "name",
    headerName: "Employee Name",
    width: 250,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 250,
    headerClassName: "super-app-theme--header",
    hide: true,
    align:"center",
    headerAlign: "center"
  },
  {
    field: "contactnumber",
    headerName: "Contact",
    width: 170,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },
  // { field: "VisitorName", width: 250, headerClassName: "super-app-theme--header" },
  {
    field: "departmentname",
    headerName: "Department",
    width: 200,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },
  {
    field: "designation",
    headerName: "Designation",
    width: 170,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },
  {
    field: "View/Edit/Delete",
    width: 200,
    headerClassName: "super-app-theme--header",
    align:'center',
    headerAlign: "center",
    renderCell: (params) => (
      <strong>
        <ViewUpdateDeleteEmp id={params.id} />
      </strong>
    ),
  },
];
export default function LeaveApprovedList() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/basics")
      .then(function (response) {
        console.log(response);
        var employee = response.data;
        setRows(employee);
  

        // var row=employee.map(({id,firstName,gender,contactnumber,email,departmentname,designation})=>({id,firstName,gender,contactnumber,email,departmentname,designation}))
        // // console.log(rows)
        // setRows(row)
        // console.log(row)
      })
      .catch(function (error) {
        console.log(error);
      });
  },[]);
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
    </>
  );
}

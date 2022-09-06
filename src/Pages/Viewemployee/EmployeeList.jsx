import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import ViewUpdateDeleteEmp from "../../Components/Reusablecomponents/ViewUpdateDeleteEmp";
import axios from "axios";

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
    field: "firstName",
    headerName: "Employee Name",
    width: 250,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 250,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "contactnumber",
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
    field: "departmentname",
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

  // const [tableData1,setTableData1]=useState([])
  // const [tableData2,setTableData2]=useState([])
  const [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/basics")
    .then(function(response){
      console.log(response)
      console.log(response.data.base)
      var tableData1=response.data.base
      var tableData2=response.data.contact
      var tableData3=response.data.job
      // setTableData2(response.data.contact)
      var employee=[]
      for(let i=0;i<tableData1.length;i++){
        var personal=tableData1[i]
        var cont=tableData2[i]
        var job=tableData3[i]
        employee[i]={...personal,...cont,...job}
      }
      console.log(employee)  
      var row=employee.map(({id,firstName,gender,contactnumber,email,departmentname,designation})=>({id,firstName,gender,contactnumber,email,departmentname,designation}))
      // console.log(rows)
      setRows(row)
      console.log(row)
    })
    .catch(function(error){
      console.log(error)
    })
   
  },[])
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

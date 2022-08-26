import React from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
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
    department: "Development",
    leavetype: "Unpaid",
    from_to: "12/05/2022-13/06/2022",
    reason: "Fever",
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
    department: "Marketing",
    leavetype: "Unpaid",
    from_to: "12/05/2022-13/06/2022",
    reason: "Fever",
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
    department: "Advertising",
    leavetype: "Unpaid",
    from_to: "12/05/2022-13/06/2022",
    reason: "Fever",
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
    department: "Marketing",
    leavetype: "Unpaid",
    from_to: "12/05/2022-13/06/2022",
    reason: "Fever",
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
    department: "Marketing",
    leavetype: "Unpaid",
    from_to: "12/05/2022-13/06/2022",
    reason: "Fever",
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
    department: "Advertising",
    leavetype: "Unpaid",
    from_to: "12/05/2022-13/06/2022",
    reason: "Fever",
  },
];

const columns = [
  { field: "id", width: 170, headerClassName: "super-app-theme--header" },
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
    width: 170,
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
  // { field: "VisitorName", width: 250, headerClassName: "super-app-theme--header" },
  {
    field: "department",
    headerName: "Department",
    width: 230,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "leavetype",
    headerName: "Leave Type",
    width: 170,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "from_to",
    headerName: "From-To",
    width: 240,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 150,
    headerClassName: "super-app-theme--header",
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
          Leave Approved List
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

import React from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import ApproveRejectIcon from "../../Components/ApproveRejectIcon";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EyeIconButtonLeaveApproval from "../../Components/Reusablecomponents/EyeIconButtonLeaveApproval";
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
    department: "Marketing",
    leavetype: "Unpaid",
    leavefrom: "12/02/2022",
    numberofdays:"3",
    reason: "Fever",
  },

  {
    id: 1221,
    employee: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    employeename: "David",
    // employeename: {
    //   username: "Ramsan",
    //   avatar:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
    // },
    department: "Advertising",
    leavetype: "Unpaid",
    leavefrom: "12/02/2022",
    numberofdays:"6",
    reason: "Fever",
  },

  {
    id: 1222,
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
    department: "Development",
    leavetype: "Paid",
    leavefrom: "12/02/2022",
    numberofdays:"2",
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
    department: "Development",
    leavetype: "Unpaid",
    leavefrom: "12/02/2022",
    numberofdays:"4",
    reason: "Fever",
  },

  {
    id: 1224,
    employee: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    employeename: "David",
    // employeename: {
    //   username: "aarooo",
    //   avatar:
    //     "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    // },
    department: "Development",
    leavetype: "paid",
    leavefrom: "12/02/2022",
    numberofdays:"1",
    reason: "Fever",
  },
  {
    id: 1225,
    employee: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    employeename: "David",
    // employeename: {
    //   username: "Daviddddd",
    //   avatar:
    //     "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    // },
    department: "Marketing",
    leavetype: "unpaid",
    leavefrom: "12/02/2022",
    numberofdays:"2",
    reason: "Fever",
  },
];

const columns = [
  { field: "id", width: 130, headerClassName: "super-app-theme--header" },
  // {
  //   field: "employeename", headerClassName: "super-app-theme--header",
  //   headerName: "Employee Name",
  //   width: 260,
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
    field: "department",
    headerName: "Department",
    width: 180,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "leavetype",
    headerName: "Leave Type",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "leavefrom",
    headerName: "Leave From",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "numberofdays",
    headerName: "Number Of Days",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 150,
    headerClassName: "super-app-theme--header",
  }, {
    field: "View",
    width: 100,
    headerClassName: "super-app-theme--header",
    headerAlign: 'center',
    renderCell: (params) => (
      <strong>
        {/* calling Eyeiconbutton component which contain iconbutton */}
        <EyeIconButtonLeaveApproval/>
      </strong>
    ),
  },
  {
    field: "Approve/Reject",
    width: 180,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    renderCell: (params) => (
      <strong>
        <ApproveRejectIcon />
      </strong>
    ),
  },
];
export default function LeaveApproval() {
  const [pageSize, setPageSize] = React.useState(5);
  return (
    <>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Leave Approval
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



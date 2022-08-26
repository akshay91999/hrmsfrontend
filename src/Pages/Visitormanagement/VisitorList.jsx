import React from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
const rows = [
  {
    id: 1220,
    visitor: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    visitorname: "David",
    // visitorname: {
    //   username: "David",
    //   avatar:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    // },
    // VisitorName: "David",
    Purpose: "meeting",
    Person_To_Meet: "Samuel",
    Date: "12/05/2022",
    Status: "checkout",
  },
  {
    id: 1221,
    visitor: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    visitorname: "David",
    // visitorname: {
    //   username: "Ramsan",
    //   avatar:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
    // },
    // VisitorName: "David",
    Purpose: "interview",
    Person_To_Meet: "Samuel",
    Date: "12/05/2022",
    Status: "checkout",
  },
  {
    id: 1222,
    visitor: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    visitorname: "David",
    // visitorname: {
    //   username: "David",
    //   avatar:
    //     "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    // },
    // VisitorName: "David",
    Purpose: "interview",
    Person_To_Meet: "Samuel",
    Date: "12/05/2022",
    Status: "checkout",
  },
  {
    id: 1223,
    visitor: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    visitorname: "David",
    // visitorname: {
    //   username: "David",
    //   avatar:
    //     "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    // },
    // VisitorName: "David",
    Purpose: "interview",
    Person_To_Meet: "Samuel",
    Date: "12/05/2022",
    Status: "checkout",
  },
  {
    id: 1224,
    visitor: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    visitorname: "David",
    // visitorname: {
    //   username: "aarooo",
    //   avatar:
    //     "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    // },
    // VisitorName: "David",
    Purpose: "meeting",
    Person_To_Meet: "Samuel",
    Date: "12/05/2022",
    Status: "checkout",
  },
  {
    id: 1225,
    visitor: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    },
    visitorname: "David",
    // visitorname: {
    //   username: "Daviddddd",
    //   avatar:
    //     "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    // },
    // VisitorName: "David",
    Purpose: "meeting",
    Person_To_Meet: "Samuel",
    Date: "12/05/2022",
    Status: "checkout",
  },
];
const columns = [
  { field: "id", width: 170, headerClassName: "super-app-theme--header" },
  // {
  //   field: "visitorname", headerClassName: "super-app-theme--header",
  //   headerName: "Visitor Name",
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
    field: "visitor",
    headerName: "Visitor",
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
    field: "visitorname",
    headerName: "Visitor Name",
    width: 250,
    headerClassName: "super-app-theme--header",
  },
  // { field: "VisitorName", width: 250, headerClassName: "super-app-theme--header" },
  { field: "Purpose", width: 230, headerClassName: "super-app-theme--header" },
  {
    field: "Person_To_Meet",
    headerName: "Person To Meet",
    width: 250,
    headerClassName: "super-app-theme--header",
  },
  { field: "Date", width: 170, headerClassName: "super-app-theme--header" },
  { field: "Status", width: 170, headerClassName: "super-app-theme--header" },
];
export default function VisitorList() {
  const [pageSize, setPageSize] = React.useState(5);
  return (
    <>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Visitor List
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

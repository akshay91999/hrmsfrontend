import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Card,
  CardHeader,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { borderBottom } from "@mui/system";

function createData(projectname, taskname, assigneddate, duedate) {
  return { projectname, taskname, assigneddate, duedate };
}

const rows = [
  createData("UBS HRMS", "Invoice Design", "22-09-2022", "29-09-2022"),
  createData("UBS HRMS", "Invoice Design", "22-09-2022", "29-09-2022"),
  createData("UBS HRMS", "Invoice Design", "22-09-2022", "29-09-2022"),
];

export default function EmployeeTaskTable() {
  return (
    <>
      <Card sx={{ borderRadius: "10px", m: "1%", border: "1px solid #1565C0" }}>
      <Grid container spacing={2}>
            <Grid item xs={6} lg={6} md={6} sm={6}>
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                My Task
              </Typography>
            </Grid>
            <Grid item xs={6} lg={6} md={6} sm={6}>
              <IconButton sx={{ float: "right" }} >
                <Typography sx={{ display: "flex",color:'#1565C0'}}>
                  View
                  <ArrowRightIcon />
                </Typography>
              </IconButton>
            </Grid>
          </Grid>


        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="caption table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell sx={{ fontWeight: "bold" }}>Project Name</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Task Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Assigned Date
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Due Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.projectname}
                  </TableCell>
                  <TableCell align="center">{row.taskname}</TableCell>
                  <TableCell align="center">{row.assigneddate}</TableCell>
                  <TableCell align="center">{row.duedate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}

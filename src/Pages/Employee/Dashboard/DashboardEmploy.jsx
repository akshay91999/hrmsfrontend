import { Grid, Paper } from "@mui/material";
import React from "react";
import EmployeeTaskTable from "../../../Components/DashEmployeeTaskTable";
import DashLeaveUsedRemain from "../../../Components/DashLeaveUsedRemain";
import DashProfile from "../../../Components/DashProfile";
import DashBirthday from "../../../Components/DrawerList/DashBirthday";


function DashboardEmploy() {
  return (
    <>
    <Paper sx={{ m:'1%' }}>
      <Grid container spacing={0.5} sx={{ backgroundColor:'#ededed' }}>
        <Grid item md={6} xs={12}>
          <EmployeeTaskTable/>
        </Grid>
        <Grid item md={3} xs={12}>    
        <DashLeaveUsedRemain/>
        </Grid>
        <Grid item md={3} xs={12}>
          <DashProfile/>
        </Grid>
        <Grid item md={3} xs={12}>
          <DashBirthday/>
        </Grid>
        <Grid item md={3} xs={12}>
          <h1>xs</h1>
        </Grid>
        <Grid item md={3} xs={12}>
          <h1>xs</h1>
        </Grid>
        <Grid item md={6} xs={12}>
          <h1>xs</h1>
        </Grid>
        <Grid item md={3} xs={12}>
          <h1>xs</h1>
        </Grid>
        <Grid item md={3} xs={12}>
          <h1>xs</h1>
        </Grid>
      </Grid>
      </Paper>
    </>
  );
}

export default DashboardEmploy;

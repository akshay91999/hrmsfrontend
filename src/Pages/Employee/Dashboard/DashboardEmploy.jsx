import { Card, Grid, Paper } from "@mui/material";
import React from "react";
import DashAttendance from "../../../Components/DashAttendance";
import DashBarChart from "../../../Components/DashBarChart";
import EmployeeTaskTable from "../../../Components/DashEmployeeTaskTable";
import DashEmployonLeave from "../../../Components/DashEmployonLeave";
import DashLeaveUsedRemain from "../../../Components/DashLeaveUsedRemain";
import DashNewjoins from "../../../Components/DashNewjoins";
import DashProfile from "../../../Components/DashProfile";
import DashBirthday from "../../../Components/DashBirthday";
import EmployMovements from "../../HrAnalytics/EmployMovements";
import DashAnnouncements from "../../../Components/DashAnnouncements";
import DashWorkAnniversary from "../../../Components/DashWorkAnniversary";
import DashQuotes from "../../../Components/DashQuotes";


function DashboardEmploy() {
  return (
    <>
    <Paper sx={{ m:'1%' }}>
      <Grid container spacing={0.5} sx={{ background:'linear-gradient(#ccffff,#CAE6F5,#ffffff)' }}>
        <Grid item md={6} xs={12}>
          <EmployeeTaskTable/>
        </Grid>
        <Grid item md={3} xs={12}>  
          <Grid>  
        <DashAttendance/>
        </Grid>
        <Grid sx={{ mt:'2%' }}>
        <DashLeaveUsedRemain/>
        </Grid>
        </Grid>
        <Grid item md={3} xs={12}>
          <DashProfile/>
        </Grid>
        <Grid item md={6} xs={12}>
          <DashBarChart/>  
        </Grid>
        <Grid item md={3} xs={12}>
        <DashBirthday/>
        </Grid>
        <Grid item md={3} xs={12}>
          <DashNewjoins/>
        </Grid>
        <Grid item md={3} xs={12}>
          <DashEmployonLeave/>
        </Grid>
        <Grid item md={3} xs={12}>
          <DashAnnouncements/>
        </Grid>
        <Grid item md={3} xs={12}>
         <DashWorkAnniversary/>
        </Grid>
        <Grid item md={3} xs={12}>
          <DashQuotes/>
        </Grid>
      </Grid>
      </Paper>
    </>
  );
}

export default DashboardEmploy;

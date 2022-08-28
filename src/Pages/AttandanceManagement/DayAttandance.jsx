import React from 'react'

import { Box } from '@mui/system'
import { Grid, Paper } from '@mui/material';
import TodaysTotalEmployeeCard from '../../Components/TodaysAttandanceCards/TodaysTotalEmployeeCard'
import TodaysOntimeEmployeeCard from '../../Components/TodaysAttandanceCards/TodaysOntimeEmployeeCard'
import TodaysLateEmployeeCard from '../../Components/TodaysAttandanceCards/TodaysLateEmployeeCard';
import TodaysAbsentEmployeeCard from '../../Components/TodaysAttandanceCards/TodaysAbsentEmployeeCard';

export default function HrDayAttandance() {
  return (
    <div>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr" },
        gap: 2,
        justifyContent: "center",
        m: "3%",p:"4%"
      }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TodaysTotalEmployeeCard />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TodaysOntimeEmployeeCard/>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TodaysLateEmployeeCard/>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TodaysAbsentEmployeeCard/>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </Paper>
    </div>

    
   
  )
}

 
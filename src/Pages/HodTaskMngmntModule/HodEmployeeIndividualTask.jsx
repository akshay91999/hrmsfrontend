import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import TotalTaskCard from '../../Components/TaskCards/TotalTaskCard';
import CompletedTaskCard from '../../Components/TaskCards/CompleteTaskCard';
import OngoingTaskCard from '../../Components/TaskCards/OngoingTaskCard';
import AssignTaskCard from '../../Components/TaskCards/AssignTaskCard';
export default function HodEmployeeIndividualTask() {
  return (
    <div>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr" },
        gap: 2,
        justifyContent: "center",
        m: "3%"
      }}>
        <Card sx={{ display: 'flex', width: "100%" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgQXNlVXoCtR7uE7xoOANPOLhZM3Vk22XMw&usqp=CAU"
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="body1"><b>Ram</b></Typography>
              <Typography variant="body1"><b>Frontend Developer</b></Typography>
              <Typography variant="body1"><b>987654321 | Ram@gmail.com</b></Typography>
              <Typography variant="body1"><b>Ram Nivas</b></Typography>
            </CardContent>
          </Box>

        </Card>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TotalTaskCard />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <CompletedTaskCard />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <OngoingTaskCard />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <AssignTaskCard />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}


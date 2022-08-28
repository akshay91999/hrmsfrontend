import React from 'react'
import Box from '@mui/material/Box';
import { Grid ,Paper,Typography} from '@mui/material';
import TotalTaskCard from '../../Components/TaskCards/TotalTaskCard';
import CompletedTaskCard from '../../Components/TaskCards/CompleteTaskCard';
import OngoingTaskCard from '../../Components/TaskCards/OngoingTaskCard';
import MyAssignedTaskCard from './MyAssignedTaskCard';
export default function MyTask() {
    return (
        <div>
            <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
            <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
     My Task
      </Typography>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: { sm: "1fr" },
                gap: 2,
                justifyContent: "center",
                m: "3%"
            }}>
                
               
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <TotalTaskCard />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <CompletedTaskCard />
                        </Grid>
                        {/* <Grid item xs={12} sm={4} md={4} lg={4}>
                            <OngoingTaskCard />
                        </Grid> */}
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <MyAssignedTaskCard />
                        </Grid>
                    </Grid>
                </Box>


            </Box>
            </Paper>
        </div>
    )
}


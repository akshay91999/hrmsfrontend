import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import TotalTaskCard from '../../Components/TaskCards/TotalTaskCard';
import CompletedTaskCard from '../../Components/TaskCards/CompleteTaskCard';
import OngoingTaskCard from '../../Components/TaskCards/OngoingTaskCard';
import MyAssignedTaskCard from './MyAssignedTaskCard';
export default function MyTask() {
    return (
        <div>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: { sm: "1fr" },
                gap: 2,
                justifyContent: "center",
                m: "3%"
            }}>
               
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
                            <MyAssignedTaskCard />
                        </Grid>
                    </Grid>
                </Box>


            </Box>
        </div>
    )
}


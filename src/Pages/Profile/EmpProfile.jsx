import { Avatar, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
// import EmpProfileDetails from "./Pages/EmployeeProfile/EmpProfileDetails";
import EmpProfileDetails from './EmpProfileDetails'
export default function EmpProfile() {
  return (
    <>
        <Paper sx={{ p: "3%", m: "2%" }}>
        <Typography variant="h4" align="center" sx={{ color: "#1565C0", pb: "2%" }}>Profile</Typography>
        <Grid container spacing={3}>
  <Grid item lg={4} xs={12} sm={6} md={12}>
  <Card sx={{ borderRadius: "10px",border: "1px solid #1565C0" }}>
        {/* <CardActionArea> */}
          <CardMedia
            sx={{ display: "flex", justifyContent: "center", m: "2%" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgQXNlVXoCtR7uE7xoOANPOLhZM3Vk22XMw&usqp=CAU"
              sx={{ width: 86, height: 86, border: "3px solid #1565C0" }}
            />
          </CardMedia>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Nevina Acantaza
            </Typography>

            <Typography variant="h6" sx={{ textAlign: "center" }}>
              UI/UX Designer
            </Typography>
            <Box sx={{ display:'flex',justifyContent:'center' }}>
            
                     
            </Box>
          </CardContent>
        {/* </CardActionArea> */}
      </Card>
  </Grid>
  <Grid item lg={8} xs={12} sm={6} md={12}>
  <Card >
    <EmpProfileDetails/>
    </Card>
  </Grid>
  </Grid>
        </Paper> 
    </>
  )
}

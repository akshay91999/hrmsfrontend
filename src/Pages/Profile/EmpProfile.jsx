import { Avatar, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import EmpProfileDetails from "./Pages/EmployeeProfile/EmpProfileDetails";
import EmpProfileDetails from './EmpProfileDetails'
export default function EmpProfile() {
  const user=JSON.parse(localStorage.getItem('user'))
  const [photo,setPhoto]=useState({})
  const [basic,setBasic]=useState({})
  useEffect(()=>{
    axios.get("http://localhost:5000/basics/"+user.id)
    .then(function(response){
      console.log(response)
      setPhoto(response.data.document)
      setBasic(response.data)

    })
    .catch(function(error){
      console.log(error)
    })
  },[])
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
              src={"http://localhost:5000/"+photo}
              sx={{ width: 86, height: 86, border: "3px solid #1565C0" }}
            />
          </CardMedia>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              {basic.firstname +" "+ basic.lastname}
            </Typography>

            <Typography variant="h6" sx={{ textAlign: "center" }}>
              {basic.designation}
            </Typography>
            <Box sx={{ display:'flex',justifyContent:'center' }}>
            
                     
            </Box>
          </CardContent>
        {/* </CardActionArea> */}
      </Card>
  </Grid>
  <Grid item lg={8} xs={12} sm={6} md={12}>
  <Card >
    <EmpProfileDetails basic={basic}/>
    </Card>
  </Grid>
  </Grid>
        </Paper> 
    </>
  )
}

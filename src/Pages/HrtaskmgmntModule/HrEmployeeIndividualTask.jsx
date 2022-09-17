import React,  { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import {useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import TotalTaskCard from '../../Components/TaskCards/TotalTaskCard';
import CompletedTaskCard from '../../Components/TaskCards/CompleteTaskCard';
import OngoingTaskCard from '../../Components/TaskCards/OngoingTaskCard';
import Btn from '../../Components/Reusablecomponents/Btn';
export default function HrEmployeeIndividualTask() {
  const params=useParams()
  let navigate=useNavigate()
  console.log(params)
  const [basics,setBasics]=useState({})
  const [photo,setPhoto]=useState(null)
  useEffect(()=>{
    axios.get("http://localhost:5000/basics/"+params.id)
    .then(function(response){
        console.log(response.data)
        setBasics(response.data)  
      
    })
    .catch(function(error){
        console.log(error)
    })

    axios.get("http://localhost:5000/upload/"+params.id)
    .then(function(response){
        console.log(response.data.uploads) 
        var arr=[]
        arr=response.data.uploads
        var result=arr.find(item=>item.doc_type==="photo")
        console.log(result) 
        setPhoto(result.document)
    })
    .catch(function(error){
        console.log(error)
    })
  },[])
  return (
    <div>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr" },
        gap: 2,
        justifyContent: "center",
        m: "3%"
      }}>
        <Card sx={{ display: 'flex',width:"100%" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={"http://localhost:5000/"+photo}
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="body1"><b>{basics.firstname} {basics.lastname}</b></Typography>
              <Typography variant="body1"><b>Frontend Developer</b></Typography>
              <Typography variant="body1"><b>{basics.contactnumber} | {basics.email}</b></Typography>
              <Typography variant="body1"><b>{basics.e_address}</b></Typography>
            </CardContent>
          </Box>

        </Card>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TotalTaskCard/>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <CompletedTaskCard/>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <OngoingTaskCard/>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
    {/* <TaskGraph/> */}
            </Grid>
          </Grid>
        </Box>


      </Box>
      <Box sx={{display:"flex",justifyContent:"flex-end",m:"5%"}}>
        <Btn text="Back" click={()=>navigate(-1)}/>
      </Box>
    </div>
  )
}

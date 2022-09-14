import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import BasicTab from '../Components/BasicTab';
import BasicTab from "../../Components/BasicTab";
import CardContent from '@mui/material/CardContent';
import Btn from '../../Components/Reusablecomponents/Btn';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
export default function ViewEmployee() {
    const params=useParams()
    const [basics,setBasics]=useState({})
    const [photo,setPhoto]=useState(null)

    // console.log(params)
    let navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:5000/basics/"+params.basicId)
        .then(function(response){
            console.log(response.data)
            setBasics(response.data)    
        })
        .catch(function(error){
            console.log(error)
        })
        axios.get("http://localhost:5000/upload/"+params.basicId,)
        .then(function(response){
            console.log(response.data.uploads.document)  
            setPhoto(response.data.uploads.document)
        })
        .catch(function(error){
            console.log(error)
        })
    },[])
    return (
        <>
            <Card sx={{ display: 'flex' }}>
            <CardMedia
                    component="img"
                    sx={{ width: 151,height:151 }}
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
           

            
           
          
            <BasicTab basics={basics}/>
            <Box sx={{display:"flex",justifyContent:"flex-end",p:'2%'}}>
                <Btn text="Back" click={()=>navigate(-1)}/>
            </Box>

        </>
    )
}

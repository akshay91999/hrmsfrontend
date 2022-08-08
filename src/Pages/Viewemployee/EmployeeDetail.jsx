import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import BasicTab from '../Components/BasicTab';
import BasicTab from "../../Components/BasicTab";
import CardContent from '@mui/material/CardContent';
import Btn from '../../Components/Reusablecomponents/Btn';
import { useNavigate } from 'react-router-dom';
export default function ViewEmployee() {
    let navigate=useNavigate();
    return (
        <>
            <Card sx={{ display: 'flex' }}>
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
          
            <BasicTab/>
            <Box sx={{display:"flex",justifyContent:"flex-end"}}>
                <Btn text="Back" click={()=>navigate(-1)}/>
            </Box>

        </>
    )
}

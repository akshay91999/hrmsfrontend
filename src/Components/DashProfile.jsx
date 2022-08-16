import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function DashProfile() {
    const [state,setState]=useState(true)
    const handleclick=()=>{
        setState(!state)
    }
  return (
    <>
      <Card sx={{ borderRadius: "10px" }}>
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
            {console.log(state)}
            {state?
            <Button variant="outlined" size="large" sx={{ color:'#00ff00',borderRadius:'30px' }} onClick={handleclick}>
              CHECK IN
            </Button>
            :
            <Button variant="outlined" size="large" sx={{ color:'#ff0000',borderRadius:'30px' }} onClick={handleclick}>
              CHECK OUT
            </Button>
            }   
            </Box>
          </CardContent>
        {/* </CardActionArea> */}
      </Card>
      {/* <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 86, height: 86 }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Nevina Acantaza
              </Typography>
             */}
    </>
  );
}

export default DashProfile;

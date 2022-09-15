import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Link from '@mui/material/Link';
import axios from "axios"
import { useState,useEffect } from "react";

export default function ViewLinkEmployeeForm() {
    const [link,setLink]=useState([])
    useEffect(()=>{
      const user=JSON.parse(localStorage.getItem('user'))
  axios.get("http://localhost:5000/learning/"+user.dp_id,)
  .then(function(response){
    console.log(response)
  setLink(response.data)
  })

  .catch(function(error){
    console.log(error)
  })
   },[])
  const theme = useTheme();

  return (

    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Learning and development
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} sm={12}>
          
          {
                  link.map(link=>(
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Card sx={{ height:'100%', display: "flex", justifyContent: "center", mt: '2%', width: '500px' }}>
             
                  <CardContent>
                    <iframe
                      src={link.link}
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                    />{" "}
                    <Typography variant='body2'>{link.description}</Typography>
                  </CardContent>
                          
              </Card>
              </Box>))
                }
            

        </Grid>
      </Grid>

    </>
  );
}

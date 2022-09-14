import {
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PersonalDetails() {
  const params=useParams()
  const [academic,setAcademic]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/accademic/"+params.basicId)
    .then(function(response){
      console.log(response.data.acdemic)
      setAcademic(response.data.acdemic)
    })
    .catch(function(error){
      console.log(error)
    })
  },[])
  
  return (
    <>
    {
      academic.map(academic=>(
<Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: "90%", p: "2%" }}>
        <Typography gutterBottom variant="h5" component="div">
                        ACADEMIC DETAILS
                    </Typography><Divider/>
          <Box
            sx={{ width: "100%", maxWidth: 900, bgcolor: "background.paper" }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <Grid container spacing={0}>
                  <ListItem disablePadding>
                    <Grid item lg={8} sm={6} xs={6} md={6}>
                      <ListItemText primary="Institution/School" />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} md={6}>
                      <ListItemText primary={academic.school} />
                    </Grid>
                  </ListItem>
                  <ListItem disablePadding>
                    <Grid item lg={8} sm={6} xs={6} md={6}>
                      <ListItemText primary="Board/University" />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} md={6}>
                      <ListItemText primary={academic.board} />
                    </Grid>
                  </ListItem>
                  <ListItem disablePadding>
                    <Grid item lg={8} sm={6} xs={6} md={6}>
                      <ListItemText primary="Courses" />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} md={6}>
                      <ListItemText primary={academic.courseid} />
                    </Grid>
                  </ListItem>
                  <ListItem disablePadding>
                    <Grid item lg={8} sm={6} xs={6} md={6}>
                      <ListItemText primary="Branch" />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} md={6}>
                      <ListItemText primary={academic.branchid}/>
                    </Grid>
                  </ListItem>
                  <ListItem disablePadding>
                    <Grid item lg={8} sm={6} xs={6} md={6}>
                      <ListItemText primary="Type" />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} md={6}>
                      <ListItemText primary={academic.coursetype} />
                    </Grid>
                  </ListItem>
                  <ListItem disablePadding>
                    <Grid item lg={8} sm={6} xs={6} md={6}>
                      <ListItemText primary="Duration From" />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} md={6}>
                      <ListItemText primary={academic.durtnfrm} />
                    </Grid>
                  </ListItem>
                  <ListItem disablePadding>
                    <Grid item lg={8} sm={6} xs={6} md={6}>
                      <ListItemText primary="Duration To" />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} md={6}>
                      <ListItemText primary={academic.durtnto} />
                    </Grid>
                  </ListItem>
                

                </Grid>
              </List>
            </nav>
          </Box>
        </Card>
      </Box>
      ))
    }
      
    </>
  );
}

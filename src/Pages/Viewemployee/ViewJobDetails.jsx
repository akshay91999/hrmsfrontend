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
  import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
  
  export default function PersonalDetails() {
    const params=useParams()
    const [job,setJob]=useState({})
    useEffect(()=>{
      axios.get("http://localhost:5000/job/"+params.basicId)
      .then(function(response){
        console.log(response.config.data)
        setJob(response.data)
      })
      .catch(function(error){
        console.log(error)
      })
    })
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ width: "90%", p: "2%" }}>
          <Typography gutterBottom variant="h5" component="div">
                        JOB DETAILS
                    </Typography><Divider/>
            <Box
              sx={{ width: "100%", maxWidth: 900, bgcolor: "background.paper" }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  <Grid container spacing={0}>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Designation" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary={job.designation} />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Department" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary={job.departmentname} />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Package" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary={job.package} />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Type" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary={job.jobtype} />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Date Of Joining" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary={job.doj} />
                      </Grid>
                    </ListItem>
                   
                  
  
                  </Grid>
                </List>
              </nav>
            </Box>
          </Card>
        </Box>
      </>
    );
  }
  
import { PartyModeSharp } from "@mui/icons-material";
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
    console.log(params)
    const [exp,setExp]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:5000/exp/"+params.basicId)
      .then(function(response){
        console.log(response.data)
        setExp(response.data)
      })
      .catch(function(error){
        console.log(error)
      })
    },[])
    return (
      <>
      {
        exp.map(exp=>(
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ width: "90%", p: "2%" }}>
          <Typography gutterBottom variant="h5" component="div">
                        EXPERIENCE DETAILS 
                    </Typography><Divider/>
            <Box
              sx={{ width: "100%", maxWidth: 900, bgcolor: "background.paper" }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  <Grid container spacing={0}>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Employee ID" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary={exp.employeeid} />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Employee Type" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary={exp.employeetype} />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Designation" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary={exp.designation} />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Annual Salary" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary={exp.annualsalary} />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Duration From" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary={exp.durationfrom} />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Duration To" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary={exp.durationto} />
                      </Grid>
                    </ListItem>
                  </Grid>
                </List>
              </nav>
            </Box>
          </Card>
        </Box>
        ))}
      </>
    );
  }
  
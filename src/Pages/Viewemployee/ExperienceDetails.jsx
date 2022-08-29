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
  import React from "react";
  
  export default function PersonalDetails() {
    return (
      <>
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
                        <ListItemText primary="Emp1123" />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Employee Type" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary="FullTime" />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Designation" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary="Junior Project Manager" />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Annual Salary" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary="2 LPA" />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Duration From" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary="06-08-2020" />
                      </Grid>
                    </ListItem>
                    <ListItem disablePadding>
                      <Grid item lg={8} sm={6} xs={6} md={6}>
                        <ListItemText primary="Duration To" />
                      </Grid>
                      <Grid item lg={4} sm={6} xs={6} md={6}>
                        <ListItemText primary="06-08-2020" />
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
  
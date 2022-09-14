import {Card,Divider,Grid,List,ListItem,ListItemButton,ListItemText, Typography,} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function PersonalDetails(props) {
  const {basics}=props
  return (
    <>
    <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Card sx={{ width: "90%",p:"2%"}}>
            <Typography gutterBottom variant="h5" component="div">
                        PERSONAL DETAILS
                    </Typography><Divider/>
      <Box sx={{ width: "100%", maxWidth: 900, bgcolor: "background.paper"}}>
        <nav aria-label="main mailbox folders">
          <List>
            <Grid container spacing={0}>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="First Name" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.firstname} />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Last Name" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.lastname} />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Gender" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.gender} />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="DOB" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.dob} />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Contact Number" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.contactnumber} />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Email id" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.email} />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Fathers Name" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.fathername} />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="MotherS Name" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.mothername} />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Marital Status" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.maritalstatus} />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Address" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.e_address} />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="State" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.state} />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Country" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.country}/>
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Pincode" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary={basics.pincode} />
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

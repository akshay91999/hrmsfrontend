import {Card,Divider,Grid,List,ListItem,ListItemButton,ListItemText, Typography,} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function PersonalDetails() {
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
                  <ListItemText primary="Ram" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Last Name" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="Shankar" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Gender" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="Male" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="DOB" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="12/02/2020" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Contact Number" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="7790369226" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Email  id" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="ramshankar@gmail.com" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Fathers Name" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="Shankar" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="MotherS Name" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="Rani" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Marital Status" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="Single" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Address" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="House No.1" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="City" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="Kannur" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Country" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="India" />
                </Grid>
              </ListItem>
              <ListItem disablePadding>
                <Grid item lg={8} sm={6} xs={6} md={6}>
                  <ListItemText primary="Pincode" />
                </Grid>
                <Grid item lg={4} sm={6} xs={6} md={6}>
                  <ListItemText primary="687456" />
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

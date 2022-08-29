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
                      <ListItemText primary="School of Information Science and Technology" />
                    </Grid>
                  </ListItem>
                  <ListItem disablePadding>
                    <Grid item lg={8} sm={6} xs={6} md={6}>
                      <ListItemText primary="Board/University" />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} md={6}>
                      <ListItemText primary="Kannur University" />
                    </Grid>
                  </ListItem>
                  <ListItem disablePadding>
                    <Grid item lg={8} sm={6} xs={6} md={6}>
                      <ListItemText primary="Courses" />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} md={6}>
                      <ListItemText primary="Master of Computer Application" />
                    </Grid>
                  </ListItem>
                  <ListItem disablePadding>
                    <Grid item lg={8} sm={6} xs={6} md={6}>
                      <ListItemText primary="Branch" />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} md={6}>
                      <ListItemText primary="Computer Science" />
                    </Grid>
                  </ListItem>
                  <ListItem disablePadding>
                    <Grid item lg={8} sm={6} xs={6} md={6}>
                      <ListItemText primary="Type" />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} md={6}>
                      <ListItemText primary="Full Time" />
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
                      <ListItemText primary="30-09-2022" />
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

import {
  Badge,
  Box,
  Card,
  Divider,
  Fade,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

function Notification(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
        disablePortal={true}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            {/* <Paper> */}
            <Grid container spacing={2}>
              <Grid xs={12}>
                <Card sx={{ minWidth: 100 }}>
                  {/* <Box sx={{ width: '100%', maxWidth: 500}}> */}

                  <nav aria-label="secondary mailbox folders">
                    <List>
                      <ListItem disablePadding>
                        <ListItemText
                          sx={{ ml: "15%" }}
                          primary="You have night shift on 12/09/2022"
                        />
                      </ListItem>
                      <Divider />
                      <ListItem disablePadding>
                        <ListItemText
                          sx={{ ml: "15%" }}
                          primary="You have over-time from 12:00 to 05:00 on 13/09/2022"
                        />
                      </ListItem>
                    </List>
                  </nav>
                  {/* </Box> */}
                </Card>
              </Grid>
            </Grid>
            {/* </Paper> */}
          </Fade>
        )}
      </Popper>

      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
        onClick={handleClick("bottom")}
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {props.p ? <p>Notifications</p> : null}
    </>
  );
}

export default Notification;

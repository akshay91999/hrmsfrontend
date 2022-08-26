import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import CampaignIcon from "@mui/icons-material/Campaign";

function DashAnnouncements() {
  return (
    <>
      <Card sx={{ borderRadius: "10px", p: "2%" ,minHeight:'350px'}}>
        <Box sx={{ pt: "3%" }}>
          <Typography variant="Button" sx={{ fontWeight: "600" }}>
            ANNOUNCEMENT
          </Typography>
        </Box>
        <Divider light />

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem sx={{ borderLeft: "5px solid #ee11ee" }}>
            <ListItemAvatar>
              <IconButton
                sx={{ background: "rgba(255,000,0,.2)" }}
                aria-label="Example"
              >
                <CampaignIcon fontSize="large" sx={{ color: "red" }} />
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary="Office Management Meeting"
              secondary="Mar 21 02.00 pm"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <IconButton
                sx={{ background: "rgba(0,255,0,.2)" }}
                aria-label="Example"
              >
                <CampaignIcon fontSize="large" sx={{ color: "green" }} />
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary="Team Leader Meeting"
              secondary="Mar 21 02.00 pm"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <IconButton
                sx={{ background: "rgba(0,000,255,.2)" }}
                aria-label="Example"
              >
                <CampaignIcon fontSize="large" sx={{ color: "blue" }} />
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary="Project Manager Meeting"
              secondary="Mar 21 02.00 pm"
            />
          </ListItem>
          {/* <ListItem>
            <ListItemAvatar>
              <IconButton
                sx={{ background: "rgba(255,0,255,.2)" }}
                aria-label="Example"
              >
                <CampaignIcon fontSize="large" sx={{ color: "" }} />
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary="Office Management Meeting"
              secondary="Mar 21 02.00 pm"
            />
          </ListItem> */}
        </List>
      </Card>
    </>
  );
}

export default DashAnnouncements;

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function DashEmployonLeave() {
  return (
    <>
      <Card sx={{ borderRadius: "10px", p: "2%",height:'100%'}}>
        <Box sx={{ p: "3%" }}>
          <Typography variant="Button" sx={{ fontWeight: "600" }}>
            EMPLOYEE ON LEAVE
          </Typography>
        </Box>
        <Divider light />

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem sx={{ borderLeft: "5px solid #0000ee" }}>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgQXNlVXoCtR7uE7xoOANPOLhZM3Vk22XMw&usqp=CAU"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemAvatar>
            <ListItemText primary="Akshay" secondary="UI/UX Designer" />
            <ListItemText
              sx={{ display: "flex", justifyContent: "right" }}
              primary=""
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgQXNlVXoCtR7uE7xoOANPOLhZM3Vk22XMw&usqp=CAU"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemAvatar>
            <ListItemText primary="Nithi" secondary="iOS Devoloper" />
            <ListItemText
              sx={{ display: "flex", justifyContent: "right" }}
              primary=""
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgQXNlVXoCtR7uE7xoOANPOLhZM3Vk22XMw&usqp=CAU"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemAvatar>
            <ListItemText primary="Prasoon" secondary="Backend Devoloper" />
            <ListItemText
              sx={{ display: "flex", justifyContent: "right" }}
              primary="27 jul 2022"
            />
          </ListItem>
        </List>
      </Card>
    </>
  );
}

export default DashEmployonLeave;

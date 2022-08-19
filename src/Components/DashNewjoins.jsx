import { Avatar, Box, Card, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function DashNewjoins() {
  return (
    <>
    <Card sx={{ borderRadius: "10px",p:'2%'}}>
    <Box sx={{ pt:'3%' }}>
              <Typography variant="Button" sx={{ fontWeight: "600"}}>
                NEW JOINS
              </Typography>
              </Box>
      
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem sx={{ borderLeft:'5px solid #00ee00' }}>
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgQXNlVXoCtR7uE7xoOANPOLhZM3Vk22XMw&usqp=CAU"
              sx={{ width: 50, height: 50 }}
            />
        </ListItemAvatar>
        <ListItemText primary="Akshay" secondary="UI/UX Designer"/>
        <ListItemText sx={{display:'flex',justifyContent:'right'}} primary="1 Years exp"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgQXNlVXoCtR7uE7xoOANPOLhZM3Vk22XMw&usqp=CAU"
              sx={{ width: 50, height: 50}}
            />
        </ListItemAvatar>
        <ListItemText primary="Nithi" secondary="iOS Devoloper" />
        <ListItemText sx={{display:'flex',justifyContent:'right'}} primary="5 Years exp"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgQXNlVXoCtR7uE7xoOANPOLhZM3Vk22XMw&usqp=CAU"
              sx={{ width:50, height:50}}
            />
        </ListItemAvatar>
        <ListItemText primary="Prasoon" secondary="Backend Devoloper" />
        <ListItemText sx={{display:'flex',justifyContent:'right'}} primary="2.5 Years exp"/>
      </ListItem>
    </List>
      </Card>
    </>
  )
}

export default DashNewjoins

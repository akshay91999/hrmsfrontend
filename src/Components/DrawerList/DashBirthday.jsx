import { Avatar, Box, Card, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function DashBirthday() {
  return (
    <>
    <Card sx={{ borderRadius: "10px",border:'1px solid #1565C0' }}>
      <CardContent><Typography variant="h6">Upcoming Birthdays</Typography></CardContent>
      
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgQXNlVXoCtR7uE7xoOANPOLhZM3Vk22XMw&usqp=CAU"
              sx={{ width: 50, height: 50 }}
            />
        </ListItemAvatar>
        <ListItemText primary="Akshay" secondary="UI/UX Designer"/>
        <ListItemText primary="20 jul,2022"/>
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
        <ListItemText primary="20 jul,2022"/>
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
        <ListItemText primary="20 jul,2022"/>
      </ListItem>
    </List>
      </Card>
    </>
  )
}

export default DashBirthday

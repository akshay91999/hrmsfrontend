import { Avatar, Box, Card, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function DashBirthday() {
  return (
    <>
    <Card sx={{ borderRadius: "10px",p:'2%',minHeight:'300px'}}>
    <Box sx={{ p:'3%' }}>
              <Typography variant="Button" sx={{ fontWeight: "600"}}>
                UPCOMING BIRTHDAYS
              </Typography>
              </Box>
              <Divider light />
      
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem sx={{ borderLeft:'5px solid #00ee00' }}>
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="prasoon.jpeg"
              sx={{ width: 50, height: 50 }}
            />
        </ListItemAvatar>
        <ListItemText primary="Prasoon" secondary="HR Manager"/>
        <ListItemText sx={{display:'flex',justifyContent:'right'}} primary="06 Oct"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="bhavi.jpeg"
              sx={{ width: 50, height: 50}}
            />
        </ListItemAvatar>
        <ListItemText primary="Bhavya" secondary="Python" />
        <ListItemText sx={{display:'flex',justifyContent:'right'}} primary="14 aug"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="akshayimage.jpg"
              sx={{ width:50, height:50}}
            />
        </ListItemAvatar>
        <ListItemText primary="Akshay" secondary="Super Admin" />
        <ListItemText sx={{display:'flex',justifyContent:'right'}} primary="20 jul,2022"/>
      </ListItem>
    </List>
      </Card>
    </>
  )
}

export default DashBirthday

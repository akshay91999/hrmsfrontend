import { Avatar, Box, Card, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function DashNewjoins() {
  return (
    <>
    <Card sx={{ borderRadius: "10px",p:'2%',minHeight:'300px'}}>
    <Box sx={{ p:'3%' }}>
              <Typography variant="Button" sx={{ fontWeight: "600"}}>
                NEW JOINS
              </Typography>
              </Box>
              <Divider light />
      
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem sx={{ borderLeft:'5px solid #ee0000' }}>
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="bhavi.jpeg"
              sx={{ width: 50, height: 50 }}
            />
        </ListItemAvatar>
        <ListItemText primary="Bhavya" secondary="Python"/>
        <ListItemText sx={{display:'flex',justifyContent:'right'}} primary="22-09-2022"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="sree.jpeg"
              sx={{ width: 50, height: 50}}
            />
        </ListItemAvatar>
        <ListItemText primary="Sreelakshmi" secondary="react" />
        <ListItemText sx={{display:'flex',justifyContent:'right'}} primary="20-09-2022"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <Avatar
              alt="Remy Sharp"
              src="prasoon.jpeg"
              sx={{ width:50, height:50}}
            />
        </ListItemAvatar>
        <ListItemText primary="Prasoon" secondary="HR Manager" />
        <ListItemText sx={{display:'flex',justifyContent:'right'}} primary="02-09-2022"/>
      </ListItem>
    </List>
      </Card>
    </>
  )
}

export default DashNewjoins

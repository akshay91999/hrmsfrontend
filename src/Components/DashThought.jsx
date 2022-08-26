import { Avatar, Box, Card, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function DashThought() {
  return (
    <>
    <Card sx={{ borderRadius: "10px",p:'2%',minHeight:'350px',background:'linear-gradient(#ffffff,#ccffff,#CAE6F5)'}}>
    <Box sx={{ pt:'20%' }}>
    <Typography  variant="h5" align="center" sx={{ fontFamily:'Lucida Handwriting,Helvetica, sans-serif' }}>
    "When something is important enough, you do it even if the odds are not in your favor."
      </Typography>
      <Typography variant="h5" align='right' sx={{ fontFamily:'Copperplate' }}>
        Elon Musk
      </Typography>
      <Typography variant="h6" align='right' sx={{ fontSize:'12px' }}>
        Ceo Tesla Motors
      </Typography>
      </Box>
    </Card>

    </>
  )
}

export default DashThought
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

function Imagewithname(props) {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'row',gap:2}}>
        
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOxMZcCNv_3YbLNOOqRZzX-LYYdhrgOlZ0A&usqp=CAU"/>
        <Typography>{props.name}</Typography>
    </Box>
    </>
  )
}

export default Imagewithname
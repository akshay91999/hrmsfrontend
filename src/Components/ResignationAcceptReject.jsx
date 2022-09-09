import { Box, Button } from '@mui/material'
import React from 'react'
import Btn from './Reusablecomponents/Btn'

function ResignationAcceptReject() {
  return (
    <>
      <Box sx={{ p: "1%" }}>
        <Box sx={{ display:'flex',justifyContent:'flex-end',gap: 2,}}>
        <Button variant="outlined" color="success">Accept</Button>
        <Button variant="outlined" color="error">Reject</Button>
        </Box>
      </Box>
    </>
  )
}

export default ResignationAcceptReject

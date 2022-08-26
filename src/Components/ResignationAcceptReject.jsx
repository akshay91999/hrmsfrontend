import { Box } from '@mui/material'
import React from 'react'
import Btn from './Reusablecomponents/Btn'

function ResignationAcceptReject() {
  return (
    <>
      <Box sx={{ p: "1%" }}>
        <Box sx={{ display:'flex',justifyContent:'flex-end',gap: 2,}}>
        <Btn text="Accept" />
        <Btn text='Reject'/>
        </Box>
      </Box>
    </>
  )
}

export default ResignationAcceptReject

import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Button, IconButton, Tooltip } from '@mui/material';

function Acceptrejectbutton() {
  return (
    <>
      <Box>
      <Tooltip title="Accept" placement="top">
        <IconButton sx={{ color:'green' }}><CheckCircleIcon/></IconButton>
        </Tooltip>
        <Tooltip title="Reject" placement="top">
        <IconButton sx={{  color:'red' }}><CancelIcon/></IconButton>
        </Tooltip>
      </Box>
    </>
  )
}

export default Acceptrejectbutton

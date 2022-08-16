import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Button, IconButton, Tooltip } from '@mui/material';

function Acceptrejectbutton() {
  return (
    <>
      <Box>
      <Tooltip title="Accept" placement="top">
        <IconButton sx={{ color:'#1565C0' }}><CheckCircleOutlineIcon/></IconButton>
        </Tooltip>
        <Tooltip title="Reject" placement="top">
        <IconButton sx={{  color:'#1565C0' }}><CancelIcon/></IconButton>
        </Tooltip>
      </Box>
    </>
  )
}

export default Acceptrejectbutton

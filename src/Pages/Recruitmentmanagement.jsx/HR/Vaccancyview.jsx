import { Paper } from '@mui/material'
import React from 'react'
import Vaccancyviewform from '../../../Components/Vaccancyviewform'

function Vaccancyview() {
  return (
    <>
     <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <Vaccancyviewform/>
      </Paper> 
    </>
  )
}

export default Vaccancyview

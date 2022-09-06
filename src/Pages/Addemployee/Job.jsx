import React from 'react'
import { Box } from '@mui/material'
import Typography from "@mui/material/Typography"
import JobDetails from '../../Components/JobDetails'
import Btn from '../../Components/Reusablecomponents/Btn'
import { useNavigate } from 'react-router-dom'

function Job() {
  let navigate=useNavigate()
  return (
    <div>
       <Box sx={{m:"3%"}}>
       <Typography variant='h4' align='center' sx={{ color:'#1565C0',mt:'1%'}} >Job Details</Typography>
       <fieldset sx={{ m: "50%" }}>
        <legend>
          <Typography variant="h6" gutterBottom component="div">
           Job Details
          </Typography>
        </legend>
        {/* calling Academic form */}
        <JobDetails/>
       
      </fieldset>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2,p:'1%' }}>
            <Btn text="Back" click={() => navigate(-1)} />
            <Btn text="Next" click={() => {navigate('/dashboard')}} />
      </Box>
       </Box>
    </div>
  )
}

export default Job
import React, { useState } from 'react'
import { Box } from '@mui/material'
import Typography from "@mui/material/Typography"
import JobDetails from '../../Components/JobDetails'
import Btn from '../../Components/Reusablecomponents/Btn'
import { useNavigate } from 'react-router-dom'

function Job() {
  let navigate=useNavigate()
  const [job,setJob]=useState(null)
  const next=()=>{
      navigate('/dashboard')
  }
  return (
    <div>
       <Box sx={{m:"1%"}}>
       <Typography variant='h4' align='center' sx={{ color:'#1565C0',mt:'1%'}} >Job Details</Typography>
       <fieldset sx={{ m: "50%" }}>
        <legend>
          <Typography variant="h6" gutterBottom component="div">
           Job Details
          </Typography>
        </legend>
        {/* calling Academic form */}
        <JobDetails setJob={setJob}/>
       
      </fieldset>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2,p:'1%' }}>
            <Btn text="Back" click={() => navigate(-1)} />
            <Btn text="Next" click={next} />
      </Box>
       </Box>
    </div>
  )
}

export default Job
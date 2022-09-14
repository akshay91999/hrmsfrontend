import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import axios from 'axios';

function AcceptrejectbuttonCandidate(props) {
  const {id}=props
 

  const handleAccept=()=>{
    axios.put("http://localhost:5000/candidate/"+id,{selection:true},{headers:{"Content-Type":"application/json"}})
    .then(function(response){
      window.alert(response.data.message)
        window.location.reload(false);
     
    })
    .catch(function(error){
      console.log(error)
    })
  }
  const handleReject=()=>{
    axios.put("http://localhost:5000/candidate/"+id,{selection:false},{headers:{"Content-Type":"application/json"}})
    .then(function(response){
      window.alert(response.data.message)
      window.location.reload(false);

   
    })
    .catch(function(error){
      console.log(error)
    })
  }
  return (
    <>
      <Box>
      <Tooltip title="Accept" placement="top">
        <IconButton sx={{ color:'green' }} onClick={handleAccept}><CheckCircleIcon/></IconButton>
        </Tooltip>
        <Tooltip title="Reject" placement="top">
        <IconButton sx={{  color:'red' }} onClick={handleReject}><CancelIcon/></IconButton>
        </Tooltip>
      </Box>
    </>
  )
}

export default AcceptrejectbuttonCandidate

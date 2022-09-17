import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
function HrTaskIcon(props) {
  const {id}=props
    let navigate = useNavigate()
  return (
    <div>
        <IconButton onClick={() =>{navigate("/hremployeeindividualtask/"+id)}}>
        <TaskIcon sx={{ color: '#1565C0' }} />
        </IconButton>
    </div>
  )
}

export default HrTaskIcon
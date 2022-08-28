import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
function HodTaskIcon() {
    let navigate = useNavigate()
  return (
    <div>
        <IconButton onClick={() =>navigate("/hodemployeeindividualtask")}>
        <TaskIcon sx={{ color: '#1565C0' }} />
        </IconButton>
    </div>
  )
}

export default HodTaskIcon
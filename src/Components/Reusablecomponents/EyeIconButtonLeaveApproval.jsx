import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from 'react-router-dom';
export default function EyeIconButtonLeaveApproval(props) {
  const {id}=props;
    let navigate=useNavigate()
  return (
    <div>
         <Tooltip title="view" placement="top">
      <IconButton sx={{ color:'#1565C0' }} onClick={() => navigate("/LeaveUsedRemainInDetail/"+id)}>
        <VisibilityIcon />
      </IconButton>
      </Tooltip>
    </div>
  )
}

import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";


function ListGrievance() {
    let navigate = useNavigate();
  return (
    <>
     <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <MarkAsUnreadIcon/>
                </ListItemIcon>
                <ListItemText primary="GRIEVANCE" />
            </ListItemButton> 
    </>
  )
}

export default ListGrievance

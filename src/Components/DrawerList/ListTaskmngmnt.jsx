import React from 'react'
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

function ListTaskmngmnt() {
    let navigate = useNavigate();
  return (
    <>
       <ListItemButton onClick={() => navigate("/hrtaskmange")}>
                <ListItemIcon>
                    <AssignmentIndIcon/>
                </ListItemIcon>
                <ListItemText primary="TASK MANAGEMENT" />
            </ListItemButton> 
    </>
  )
}

export default ListTaskmngmnt

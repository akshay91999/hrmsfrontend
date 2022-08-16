import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import ElderlyIcon from "@mui/icons-material/Elderly";

function ListVisitormngmnt() {
    let navigate = useNavigate();
  return (
    <>
       <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <ElderlyIcon/>
                </ListItemIcon>
                <ListItemText primary="VISITOR MANAGEMENT" />
            </ListItemButton> 
    </>
  )
}

export default ListVisitormngmnt

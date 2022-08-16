import React from 'react'
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";


function ListTravelmngmnt() {
    let navigate = useNavigate();
  return (
    <>
       <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <EmojiTransportationIcon/>
                </ListItemIcon>
                <ListItemText primary="TRAVEL MANAGEMENT" />
            </ListItemButton>  
    </>
  )
}

export default ListTravelmngmnt

import React from 'react'
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FingerprintIcon from "@mui/icons-material/Fingerprint";


function ListAttmngmnt() {
    let navigate = useNavigate();
  return (
    <>
        <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <FingerprintIcon/>
                </ListItemIcon>
                <ListItemText primary="ATTENDANCE" />
            </ListItemButton>
    </>
  )
}

export default ListAttmngmnt

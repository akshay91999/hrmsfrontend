import React from 'react'
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";


function ListLearningmngmnt() {
    let navigate = useNavigate();
  return (
    <>
      <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <LocalLibraryIcon/>
                </ListItemIcon>
                <ListItemText primary="LEARNING" />
            </ListItemButton>  
    </>
  )
}

export default ListLearningmngmnt

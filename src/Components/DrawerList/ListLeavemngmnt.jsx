import React from 'react'
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from "@mui/icons-material/Article";


function ListLeavemngmnt() {
    let navigate = useNavigate();
  return (
    <>
     <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <ArticleIcon/>
                </ListItemIcon>
                <ListItemText primary="LEAVE MANAGEMNET" />
            </ListItemButton> 
    </>
  )
}

export default ListLeavemngmnt

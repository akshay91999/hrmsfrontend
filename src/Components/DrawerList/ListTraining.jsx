import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";


function ListTraining() {
    let navigate = useNavigate();
  return (
    <>
       <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <ModelTrainingIcon/>
                </ListItemIcon>
                <ListItemText primary="TRAINING" />
            </ListItemButton>
    </>
  )
}

export default ListTraining

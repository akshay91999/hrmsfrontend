import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import AnalyticsIcon from "@mui/icons-material/Analytics";



function ListHranalytics() {
    let navigate = useNavigate();
  return (
    <>
      <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <AnalyticsIcon/>
                </ListItemIcon>
                <ListItemText primary="HR ANALYTICS" />
            </ListItemButton>
    </>
  )
}

export default ListHranalytics

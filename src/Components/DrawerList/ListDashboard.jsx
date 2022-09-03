import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


function ListDashboard() {
    let navigate = useNavigate();
  return (
    <>
       <ListItemButton onClick={() => navigate("/dashboard")}>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="DASHBOARD" />
            </ListItemButton>
    </>
  )
}

export default ListDashboard

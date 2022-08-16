import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function ListPayrollmngmnt() {
    let navigate = useNavigate();
  return (
    <>
       <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <CurrencyRupeeIcon/>
                </ListItemIcon>
                <ListItemText primary="PAYROLL MANAGEMENT" />
            </ListItemButton>
    </>
  )
}

export default ListPayrollmngmnt

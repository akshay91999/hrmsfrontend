import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

function ListTimesheet() {
    let navigate = useNavigate();
  return (
    <>
      <ListItemButton onClick={() => navigate("/")}>
        <ListItemIcon>
          <AccessTimeFilledIcon />
        </ListItemIcon>
        <ListItemText primary="TIMESHEET" />
      </ListItemButton>
    </>
  );
}

export default ListTimesheet;

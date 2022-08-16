import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, IconButton, Tooltip } from "@mui/material";

function Eyeiconbutton() {
  return (
    <>
     <Tooltip title="view" placement="top">
      <IconButton sx={{ color:'#1565C0' }}>
        <VisibilityIcon />
      </IconButton>
      </Tooltip>
    </>
  );
}

export default Eyeiconbutton;

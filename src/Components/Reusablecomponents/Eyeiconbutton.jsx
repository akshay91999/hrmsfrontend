import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, Dialog, DialogActions, DialogContent, IconButton, Tooltip } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

function Eyeiconbutton(props) {
  const {cv}=props
  console.log(cv)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
     <Tooltip title="view" placement="top">
      <IconButton sx={{ color:'#1565C0' }} onClick={handleClickOpen}>
        <VisibilityIcon />
      </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
       
      >
        <DialogContent>
          <img src={"http://localhost:5000/"+cv} width='500px' height='600px' alt="image not found"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Eyeiconbutton;

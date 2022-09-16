import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useForm from "./Validation/useForm";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { useState } from "react";

const initialFvalues = {
  deletecandidate: "",
};

function BlackListedReasonView(props) {
  const {id}=props
  const { values, setValues, handleInputChange } = useForm(initialFvalues);
  const [open, setOpen] = React.useState(false);
  const [data,setData]=useState({})

  const handleClickOpen = () => {
    axios.get("http://localhost:5000/blacklist/"+id)
    .then(function(response){
      console.log(response)
      setData(response.data)
      setOpen(true)
    })
   
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton sx={{ color: "#1565C0" }} onClick={handleClickOpen}>
        <VisibilityIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {"Reason For Blacklisting"}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            {data.reason}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        
      </Dialog>
    </>
  );
}

export default BlackListedReasonView;

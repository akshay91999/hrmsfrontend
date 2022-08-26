import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useForm from "./Validation/useForm";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";

const initialFvalues = {
  deletecandidate: "",
};

function ResignationReasonView() {
  const { values, setValues, handleInputChange } = useForm(initialFvalues);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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
          {"Reason For Resignation"}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            I am Working in this compony for 3 years and i have a good experience from here.Now i am looking for a new experience. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        
      </Dialog>
    </>
  );
}

export default ResignationReasonView;

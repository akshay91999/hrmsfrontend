import { Button, Dialog, DialogActions, DialogContent, IconButton, TextField } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useForm from "./Validation/useForm";
import { Box } from "@mui/system";

const initialFvalues = {
  DeleteCandidateButtonL: "",
};

function DeleteCandidateButton() {
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
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "10%" }}>
        <TextField
           name="deletecandidate"
          label="reason"
          multiline
          rows={4}
          value={values.deletecandidate}
          onChange={handleInputChange}
          sx={{ width:500 }}
        />
         </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteCandidateButton;

import React from "react";
import ContrastIcon from "@mui/icons-material/Contrast";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import useForm from "./Validation/useForm";

const initialFvalues = {
  blacklistreason: "",
};

function BlackListbutton() {
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
      <Box>
        <Tooltip title="Add To Black List" placement="top">
          <IconButton sx={{ color: "black" }} onClick={handleClickOpen}>
            <ContrastIcon />
          </IconButton>
        </Tooltip>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="responsive-dialog-title">
          {"Reason For Black Listing"}
        </DialogTitle>
          <DialogContent>
              <TextField
                name="blacklistreason"
                label="reason"
                multiline
                rows={4}
                value={values.blacklistreason}
                onChange={handleInputChange}
                sx={{ width: 500 }}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}

export default BlackListbutton;

import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, Dialog, DialogActions, DialogContent, IconButton, Tooltip } from "@mui/material";

function Eyeiconbutton() {
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
          <img src="https://www.coolfreecv.com/images/cv_templates_with_photo.jpg" width='500px' height='600px'/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Eyeiconbutton;

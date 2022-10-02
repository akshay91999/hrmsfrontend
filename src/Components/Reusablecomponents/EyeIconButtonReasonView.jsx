import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";

function EyeIconButtonReasonView(props) {
    const {reason}=props
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
          <Box sx={{ width:400 }}>
            <Typography variant="h5">{reason}</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog> 
    </>
  )
}

export default EyeIconButtonReasonView

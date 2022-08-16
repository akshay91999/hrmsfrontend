import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import EmpLeaveCancel from '../Pages/Leavemanagement/EmpLeaveCancel';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { IconButton, Typography } from '@mui/material';
export default function LeaveCancelDialogBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton variant="outlined" onClick={handleClickOpen}>
      <CancelOutlinedIcon/><Typography variant='body2'>Cancel</Typography>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        
        <DialogContent>
        <EmpLeaveCancel/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

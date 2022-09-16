import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import EmpLeaveCancel from '../Pages/Leavemanagement/EmpLeaveCancel';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { DialogTitle, IconButton, Typography } from '@mui/material';
import axios from 'axios';
export default function LeaveCancelDialogBox(props) {
  const {id}=props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    console.log(date)
    axios.put("http://localhost:5000/request/"+id, {deletedat:date}, {
      headers: { "Content-Type": "application/json" },
    })
    .then(function(response){
      console.log(response)
    })
    setOpen(false);
  };

  return (
    <div>
      <IconButton variant="outlined" onClick={handleClickOpen}>
      <CancelOutlinedIcon/><Typography variant='body2'>Cancel</Typography>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        
        {/* <DialogContent>
        <EmpLeaveCancel/>
        </DialogContent> */}
        <DialogTitle id="alert-dialog-title">
                {"Are you sure do you want to cancel"}
              </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
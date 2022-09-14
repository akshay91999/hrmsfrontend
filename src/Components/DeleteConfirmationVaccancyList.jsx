
import * as React from 'react';
import {IconButton} from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';

export default function DeleteConfirmationVaccancyList(props) {
  const {id}=props
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    const current=new Date();
    console.log(current)
    axios.put("http://localhost:5000/vacancy/"+id,{deletedat:current})
    .then(function(response){
      console.log(response)
      window.alert(response.data.message)
      window.location.reload(false);
      setOpen(false)
    })
    .catch(function(response){
      console.log(response)
    })
  };

  return (
    <div>
      <IconButton sx={{ color: "#1565C0" }} onClick={handleClickOpen}>
       <DeleteIcon />
       </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are You Sure Do You Want To Delete?"}
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

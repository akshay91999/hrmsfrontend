import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LeaveCancelDialogBox from './LeaveCancelDialogBox';
import { useNavigate } from 'react-router-dom'
import EmpLeaveCancel from '../Pages/Leavemanagement/EmpLeaveCancel';
import axios from 'axios';
export default function ApproveRejectIconTravel(props) {
    const {id}=props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        
        setOpen(false);
        axios
        .put("http://localhost:5000/travel/"+id, {status:"reject"}, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function(response){
            console.log(response.data)
            window.alert("Rejected");
        })
        .catch(function(error){
            console.log(error)
           })
        
    };
    const handledialogClose=()=>{
        setOpen(false);
    }
    const handleClick=()=>{
       
        axios
        .put("http://localhost:5000/travel/"+id, {status:"accept"}, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function(response){
            console.log(response.data)
            window.alert("Approved");
        })
       .catch(function(error){
        console.log(error)
       })
    }
    return (
        <>
            <Box>
                <Button sx={{ color: "green" }} onClick={handleClick}>Approve</Button>
                <Button sx={{ color: "red" }} onClick={handleClickOpen}>Reject</Button>
                <Dialog open={open} onClose={handleClose}>

                   
                <DialogTitle id="alert-dialog-title">
                {"Are you sure do you want to Reject"}
              </DialogTitle>
                    <DialogActions>
                        <Button onClick={handledialogClose}>Cancel</Button>
                        <Button onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}

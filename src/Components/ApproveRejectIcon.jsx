import { Button, Dialog, DialogActions, DialogContent } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LeaveCancelDialogBox from '../Components/LeaveCancelDialogBox';
import { useNavigate } from 'react-router-dom'
import EmpLeaveCancel from '../Pages/Leavemanagement/EmpLeaveCancel';
export default function ApproveRejectIcon() {
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
                <Button sx={{ color: "green" }}>Approve</Button>
                <Button sx={{ color: "red" }} onClick={handleClickOpen}>Reject</Button>
                <Dialog open={open} onClose={handleClose}>

                    <DialogContent>
                        <EmpLeaveCancel/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}

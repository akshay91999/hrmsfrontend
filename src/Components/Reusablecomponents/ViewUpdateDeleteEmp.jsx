import { Button } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from 'react-router-dom'
import DialogBox from "../../Components/DialogBox";
import {DialogActions} from '@mui/material';
import {DialogContent} from '@mui/material';
import {Dialog} from '@mui/material';
import EmployeeRemove from '../../Pages/Viewemployee/EmployeeRemove';

export default function ViewUpdateDeleteEmp() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    let navigate=useNavigate()
    return (
        <>
            <Button onClick={()=>{navigate("/viewemployee")}}><VisibilityIcon /></Button>
            <Button onClick={()=>{navigate("/addemployee")}}><EditIcon /></Button>
            <Button onClick={handleClickOpen}><DeleteIcon /></Button>
            <Dialog open={open} onClose={handleClose}>

                    <DialogContent>
                        <EmployeeRemove/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </Dialog>
        </>
    )
}

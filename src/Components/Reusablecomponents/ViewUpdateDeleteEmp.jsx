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
import Textarea from './Textarea';
import MultiLineTextfield from './MultiLineTextfield';
import MultilineTextFields from './Multiline';

export default function ViewUpdateDeleteEmp(props) {
    const {id}=props
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
            <Button onClick={()=>{navigate("/viewemployee/"+id)}}><VisibilityIcon /></Button>
            <Button onClick={()=>{navigate("/updateemployee/"+id)}}><EditIcon /></Button>
            <Button onClick={handleClickOpen}><DeleteIcon /></Button>
            <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                        <Textarea/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </Dialog>
        </>
    )
}

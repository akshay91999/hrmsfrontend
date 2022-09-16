import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LeaveCancelDialogBox from './LeaveCancelDialogBox';
import { useNavigate } from 'react-router-dom'
import EmpLeaveCancel from '../Pages/Leavemanagement/EmpLeaveCancel';
import axios from 'axios';
import useForm from './Validation/useForm';
const initialFvalues = {
    reason: "",
  
};
export default function ApproveRejectIconLeave(props) {
    const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
    const validate = () => {
        let temp = {};
        temp.reason = values.reason ? "" : "This field is required";
       
        setErrors({ ...temp });
        return Object.values(temp).every((x) => x === "");
      };
    
    const {id}=props
    const [open, setOpen] = React.useState(false);

    const handleReject = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log(values);
    if (validate()) {
    //   window.alert("Booking");
    axios
    .put("http://localhost:5000/showleave/"+id, {rejectreason:values.reason}, {
      headers: { "Content-Type": "application/json" },
    })
    .then(function(response){
        console.log(response)
        if(response.data.message=="success")
        {
        window.alert("Rejected");
        }
        else{
            window.alert(response.data.message)
        }
    })
    .catch(function(error){
        console.log(error)
       })
    }
        // setOpen(false);
       
        
    };
    const handledialogClose=()=>{
        setOpen(false);
    }
    const handleApprove=()=>{
        axios
        .put("http://localhost:5000/request/"+id, {status:"accept"}, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function(response){
            console.log(response)
            window.alert("Approved");
        })
        .catch(function(error){
            console.log(error)
           })
    }
    return (
        <>
            <Box>
                <Button variant="outlined" size="small"color="success" sx={{ color: "green",mr:"2%"}} onClick={handleApprove}>Approve</Button>
                <Button variant="outlined" size="small" color="error" sx={{ color: "red" }} onClick={handleReject}>Reject</Button>
                <Dialog open={open} onClose={handleClose}>

                <DialogContent>
                        <EmpLeaveCancel values={values} errors={errors} handleInputChange={handleInputChange}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handledialogClose}>Cancel</Button>
                        <Button onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}
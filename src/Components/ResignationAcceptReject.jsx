import { Box, Button, Dialog, DialogActions, DialogContent } from '@mui/material'
import axios from 'axios';
import React from 'react'
import Btn from './Reusablecomponents/Btn'
import Calender from './Reusablecomponents/Calender';
import useForm from './Validation/useForm';

const initialFvalues={
  resigndate:""
}
function ResignationAcceptReject(props) {
  const {id}=props
  const { values,setValues,errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
    const validate=()=>{
      let temp={};
      temp.resigndate=values.resigndate?"":"specify the resign date"
      setErrors({...temp})
      return Object.values(temp).every((x)=>x==="")
    }
  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      values.resigndate=""
    };
    const handleupdate=()=>{
      if(validate())
      {
        axios.put("http://localhost:5000/retirement/"+id,{resigndate:values.resigndate})
        .then(function(response){
          console.log(response)
          if(response.data.message==="success")
          {
            window.alert("successfully updated")
            handleClose()
            window.location.reload(false);
          }
          else{
            window.alert(response.data.message)
          }
        })
        .catch(function(error){
          console.log(error)
        })
      }
    }
  return (
    <>
      <Box sx={{ p: "1%" }}>
        <Box sx={{ display:'flex',justifyContent:'flex-end',gap: 2,}}>
        <Button variant="outlined" color="success" onClick={handleClickOpen}>Accept</Button>
        <Button variant="outlined" color="error">Reject</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
       
      >
        <DialogContent>
          <Box sx={{ width:400 }}>
          <Calender
            text="when the employee can resign"
            name="resigndate"
            value={values.resigndate}
            errors={errors}
            onChange={handleInputChange}
            error={errors.resigndate}
          />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleupdate}>Submit</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
        </Box>
      </Box>
    </>
  )
}

export default ResignationAcceptReject

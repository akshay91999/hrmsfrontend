import React from "react";
import ContrastIcon from "@mui/icons-material/Contrast";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import useForm from "./Validation/useForm";
import axios from "axios";

const initialFvalues = {
  blacklistreason: "",
};

function BlackListbutton(props) {
  const {id}=props
  const { values, setValues, handleInputChange } = useForm(initialFvalues);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleBlacklist=()=>{
    axios.post("http://localhost:5000/blacklist/"+id,{reason:values.blacklistreason})
    .then(function(response){
      console.log(response)
      if(response.data.message=="success")
      {
        window.alert("blacklisted")
        setOpen(false)
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
  return (
    <>
      <Box>
        <Tooltip title="Add To Black List" placement="top">
          <IconButton sx={{ color: "black" }} onClick={handleClickOpen}>
            <ContrastIcon />
          </IconButton>
        </Tooltip>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="responsive-dialog-title">
          {"Reason For Black Listing"}
        </DialogTitle>
          <DialogContent>
              <TextField
                name="blacklistreason"
                label="reason"
                multiline
                rows={4}
                value={values.blacklistreason}
                onChange={handleInputChange}
                sx={{ width: 500 }}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleBlacklist}>Submit</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}

export default BlackListbutton;

import React from "react";
import Textfield from "../../Components/Reusablecomponents/Textfield";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Calender from "../../Components/Reusablecomponents/Calender";
import Btn from "../../Components/Reusablecomponents/Btn";
import { Button, Dialog, DialogActions, DialogTitle, Typography } from "@mui/material";
import useForm from "../../Components/Validation/useForm";
import { FormHelperText } from "@mui/material";
import { getBranchtype } from "../../Components/Dropdowndata/getDepartmentname";
import Dropdownlist from "../../Components/Reusablecomponents/Dropdownlist";
import axios from "axios";
import { useParams } from "react-router-dom";
import Upload from "../../Components/Upload";
const initialFvalues = {
  employeeid: "",
  employeetype: "",
  durationfrom: "",
  durationto: "",
  designation: "",
  annualsalary: "",
};

function Expdtl() {
  const [file,selectedFile]=useState(null)
  const params=useParams()
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);

  const [add, setAdd] = useState(false);
  const [save,setSave]=useState(true)  //for disabling add button
  const [experience,setExperience]=useState(null)
  const [contact,setContact]=useState(null)
  const addNew = () => {
    if (validate()) {
      setAdd(true);
      console.log(values);
      // window.alert("successfully saved");
      setSave(true)
    }
  };

  const removeNew = () => {
    setAdd(false);
    setOpen(false);
  };

  const validate = () => {
    let temp = {};
    temp.employeeid = values.employeeid ? "" : "employeeid is required";
    temp.employeetype = values.employeetype ? "" : "employeetype is required";
    temp.durationfrom = values.durationfrom ? "" : "duration from is required";
    temp.durationto = values.durationto ? "" : "duration to is required";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handlefilechange = (e) => {
    selectedFile(e.target.files[0])
  };
  // console.log(file);

  const handleexperienceupload=(e)=>{
    e.preventDefault();
    if(file.type!="image/jpg" && file.type!="image/jpeg" && file.type!="image/png" &&file.type!="application/pdf"){
      window.alert("File does not support. You must use .png or .jpg or pdf")
      return(false)
    } 
    else if(file.size>100000){
      window.alert("Please upload a file smaller than 1mb")
      return(false)
    }
    else{
      const formData=new FormData()
      formData.append("document",file)
      formData.append("doc_type",'experience certificate')
      axios.post("http://localhost:5000/upload/"+params.basicId,formData,{
        headers:{"Content-Type":"application/json"},
      })
      .then(function(response){
        console.log(response);
        if(response.data.message==="success"){
          window.alert("successfully uploaded")
          setExperience(response.data.message)
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
  const handlecontactupload=(e)=>{
    e.preventDefault();
    if(file.type!="image/jpg" && file.type!="image/jpeg" && file.type!="image/png" &&file.type!="application/pdf"){
      window.alert("File does not support. You must use .png or .jpg or pdf")
      return(false)
    } 
    else if(file.size>100000){
      window.alert("Please upload a file smaller than 1mb")
      return(false)
    }
    else{
      const formData=new FormData()
      formData.append("document",file)
      formData.append("doc_type",'contact certificate')
      axios.post("http://localhost:5000/upload/"+params.basicId,formData,{
        headers:{"Content-Type":"application/json"},
      })
      .then(function(response){
        console.log(response);
        if(response.data.message==="success"){
          window.alert("successfully uploaded")
          setContact(response.data.message)
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

  const data={
    employeeid:values.employeeid,
    employeetype:values.employeetype,
    durationfrom:values.durationfrom,
    durationto:values.durationto,
    designation:values.designation,
    annualsalary:values.annualsalary

  }

  const handlesubmit = () => {
    if (validate()) {
      // console.log(values);
      // logging values
      
      if(experience=="success" && contact=="success")
        { 
          console.log(experience)
          console.log(contact)
      axios.post("http://localhost:5000/exp/"+params.basicId,data,{
        headers:{"Content-Type":"application/json"},
      })
      .then(function(response){
        console.log(response)
        window.alert("successfully submited")
        setSave(false)
      })
      .catch(function(error){
        console.log(error)
      })
    }
    else{
      window.alert("Please Upload the documents")
    }
      
      
    }
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            // width: "100%",
            // textAlign: "center"
          }}
        >
          <Textfield
            label="Employee ID"
            id="emp-id"
            name="employeeid"
            value={values.employeeid}
            onChange={handleInputChange}
            error={errors.employeeid}
          />
          <Dropdownlist
            name="employeetype"
            label="Type"
            value={values.employeetype}
            handleInputChange={handleInputChange}
            options={getBranchtype()}
            error={errors.employeetype}
          />
          <Calender
            text="Duration From"
            name="durationfrom"
            value={values.durationfrom}
            onChange={handleInputChange}
            error={errors.durationfrom}
          />
          <Calender
            text="Duration To"
            name="durationto"
            value={values.durationto}
            onChange={handleInputChange}
            error={errors.durationto}
          />
          {/* </Box> */}
          <Textfield
            label="Designation"
            id="designation"
            name="designation"
            value={values.designation}
            onChange={handleInputChange}
          />
          <Textfield
            label="Annual Salary"
            id="annual-salary"
            name="annualsalary"
            value={values.annualsalary}
            onChange={handleInputChange}
          />
          <Box
            sx={{
              width:'90%'
            }}
          >
           <Upload text="Experience Certificate" onChange={handlefilechange} onSubmit={handleexperienceupload} />
          </Box>
          <Box
           sx={{
            width:'90%'
          }}
          >
           <Upload text="Contact Certificate" onChange={handlefilechange} onSubmit={handlecontactupload} />
          </Box>
          {add?null:(
          <Box sx={{ pt: "2%" }}>
            <Btn text="Save" click={handlesubmit} />
          </Box>
          )}
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: "1%" }}
        >
          {add ? null :(
            <Box sx={{ pt: "2%" }}>
              <Btn text="Add" click={addNew} disabled={save}/>
            </Box>)
          }
          {add?(
          <Box sx={{ pt: "2%" }}>
            <Btn text="Remove" click={handleClickOpen} />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure do you want to remove this field"}
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={removeNew} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
          ):null
          }
        </Box>
     

      {add ? <Expdtl /> : null}
    </>
  );
}
export default Expdtl;

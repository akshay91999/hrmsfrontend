
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Textfield from "./Reusablecomponents/Textfield";
import Calender from "./Reusablecomponents/Calender";
import Box from "@mui/material/Box";
import { useState } from "react";
import Btn from "./Reusablecomponents/Btn";
import useForm from "./Validation/useForm";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  FormHelperText,
} from "@mui/material";
import {
  getBranchid,
  getBranchtype,
  getCourseid,
  getMarkid,
} from "./Dropdowndata/getDepartmentname";
import Dropdownlist from "./Reusablecomponents/Dropdownlist";
import Upload from "./Upload";
import Dropdownlisttitle from "./Reusablecomponents/DropdownlistTitle";
import { useParams } from "react-router-dom";


const initialFvalues = {
  school: "",
  board: "",
  courseid: "",
  branchid: "",
  coursetype: "",
  score: "",
  durtnfrm: "",
  durtnto: "",
};

function AcademicForm() {
  const params=useParams()
  const [file,selectedFile]=useState(null)
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    let temp = {};
    temp.school = values.school ? "" : "This field is required";
    temp.board = values.board ? "" : "This field is required";
    temp.courseid = values.courseid ? "" : "This field is required";
    temp.branchid = values.branchid ? "" : "this field is required";
    temp.coursetype = values.coursetype ? "" : "This field is required";
    temp.score = values.score ? "" : "This field is required";
    temp.durtnfrm = values.durtnfrm ? "" : "This field is required";
    temp.durtnto = values.durtnto ? "" : "This field is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };
  const data={
    school:values.school,
    board:values.board,
    courseid:values.courseid,
    branchid:values.branchid,
    coursetype:values.coursetype,
    score:values.score,
    durtnfrm:values.durtnfrm,
    durtnto:values.durtnto
  }

  const handlesubmit = () => {
    if (validate()) {
      // logging values
      // axios.post("http://localhost:5000/accademic"+params,)
      // console.log(values);
      // window.alert("successfully submited");
      // setSave(false)
      if(academic=="success")
      { 
      axios.post("http://localhost:5000/accademic/"+params.basicId,data,{
        headers:{"Content-Type":"application/json"},
      })
      .then(function(response){
        console.log(response.data.academic)
        window.alert("successfully submited")
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

  const [add, setAdd] = useState(false);
  const [save,setSave]=useState(true)  //for disabling add button
  const [academic,setAcademic]=useState(null)
  const handlefilechange = (e) => {
    selectedFile(e.target.files[0])
  };

  const addfield = () => {
    if (validate()) {
      // logging values
      setAdd(true);
      console.log(values);
      window.alert("successfully saved");
      setSave(true)
    }
  };
  const removefield = () => {
    setAdd(false);
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlequalificationupload=(e)=>{
    e.preventDefault();
    if(file.type!="image/jpg" && file.type!="image/jpeg" && file.type!="image/png" &&file.type!="application/pdf"){
      window.alert("File does not support. You must use .png or .jpg or pdf")
      return(false)
    } 
    else if(file.size>1000000){
      window.alert("Please upload a file smaller than 1mb")
      return(false)
    }
    else{
      const formData=new FormData()
      formData.append("document",file)
      formData.append("doc_type",'highest qualification certificate')
      axios.post("http://localhost:5000/upload/"+params.basicId,formData,{
        headers:{"Content-Type":"application/json"},
      })
      .then(function(response){
        console.log(response.data);
        // if(response.data.message==="success"){
          window.alert("successfully uploaded")
          setAcademic(response.data.message)
          setSave(false)
        // }
        // else{
        //   window.alert(response.data.message)
        // }
        
      })
      .catch(function(error){
        console.log(error)
      })
  }
  }
  
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr" },
          gap: 2,
          width: "100%",
        }}
      >
        <Textfield
          label="School/Institution"
          name="school"
          id="scl"
          value={values.school}
          error={errors.school}
          onChange={handleInputChange}
        />
        <Textfield
          label="Board/University"
          name="board"
          id="scl"
          value={values.board}
          error={errors.board}
          onChange={handleInputChange}
        />
        <Dropdownlisttitle
          name="courseid"
          label="Course"
          value={values.courseid}
          handleInputChange={handleInputChange}
          options={getCourseid()}
          error={errors.courseid}
        />

        <Dropdownlisttitle
          name="branchid"
          label="Branch"
          value={values.branchid}
          handleInputChange={handleInputChange}
          options={getBranchid()}
          error={errors.branchid}
        />
        <Dropdownlisttitle
          name="coursetype"
          label="Type"
          value={values.coursetype}
          handleInputChange={handleInputChange}
          options={getBranchtype()}
          error={errors.coursetype}
        />

        {/* <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            maxWidth: "95%",
            // mt: "2%",
          }}
        > */}
          <Textfield
            label="Score In Percentage"
            name="score"
            id="score"
            value={values.score}
            error={errors.school}
            onChange={handleInputChange}
          />
          {/* <Dropdownlist
            name="markid"
            label="Type"
            value={values.markid}
            handleInputChange={handleInputChange}
            options={getMarkid()}
            error={errors.markid}
          /> */}
        
        <Calender
          text=" Duration From"
          name="durtnfrm"
          value={values.durtnfrm}
          onChange={handleInputChange}
          error={errors.durtnfrm}
        />
        <Calender
          text="Duration To"
          name="durtnto"
          value={values.durtnto}
          onChange={handleInputChange}
          error={errors.durtnto}
        />
        <Box sx={{ width: "100%" }}>
          Upload a file:
          <input
            type="file"
            onChange={handlefilechange}
            style={{ marginLeft: "1%", paddingBottom: "2%" }}
          />
          <Button
            variant="contained"
            sx={{ background: "linear-gradient(#1565C0,#8B8B8B)" }}
           onClick={handlequalificationupload}
          >
            Upload!
          </Button>
        </Box>
      </Box>
      {add?null:(
      <Box sx={{ pt: "2%" }}>
        <Btn text="Save" click={handlesubmit} />
      </Box>
      )}
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", gap: 2, pb: "2%" }}
      >
        {add ? null: (
          <Box sx={{ pt: "2%" }}>
            <Btn text="Add" click={addfield} disabled={save}/>
          </Box>
        ) }
        {add ? (
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
                <Button onClick={removefield} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        ) : null}
      </Box>

      {add ? <AcademicForm /> : null}
    </>
  );
}

export default AcademicForm;



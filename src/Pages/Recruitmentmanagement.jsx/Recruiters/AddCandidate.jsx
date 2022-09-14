import { Box, Paper, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  getDepartmentname,
  getPosition,
} from "../../../Components/Dropdowndata/getDepartmentname";
import Btn from "../../../Components/Reusablecomponents/Btn";
import Dropdownlist from "../../../Components/Reusablecomponents/Dropdownlist";
import Textfield from "../../../Components/Reusablecomponents/Textfield";
import Upload from "../../../Components/Upload";
import useForm from "../../../Components/Validation/useForm";

const initialFvalues = {
  candidatename: "",
  departmentname: "",
  position: "",
  email: "",
  mobile: "",
  yoe: "",
};

function AddCandidate() {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
    const [depart, setDepart] = useState([]);
  const [position, setPosition] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/depart")
      .then(function (response) {
        console.log(response);
        let dep = response.data.viewAlldep;
        const newdep = dep.map(
          ({ dp_id: id, departmentname: title, ...rest }) => ({
            id,
            title,
            ...rest,
          })
        );
        setDepart(newdep);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if(values.departmentname==="")
    {
      setPosition([])
    }
    else{
      axios
        .get("http://localhost:5000/depart/" + values.departmentname)
        .then(function (response) {
          console.log(response.data.viewDesignation);
          let des = response.data.viewDesignation;
          const newdes = des.map(
            ({ ds_id: id, designation: title, ...rest }) => ({
              id,
              title,
              ...rest,
            })
          );
          setPosition(newdes)
        });
      }
    
  }, [values.departmentname]);

  
  
  const regex = /\S+@\S+\.\S+/;
  const regmob = /(0|91)?[7-9][0-9]{9}/;

  const validate = () => {
    const temp = {};
    temp.candidatename = values.candidatename ? "" : "Enter Your Name";
    temp.departmentname = values.departmentname
      ? ""
      : "please select a department";
    temp.position = values.position ? "" : "please enter a department";
    temp.email = regex.test(values.email) ? "" : "email is not valid";
    temp.mobile = regmob.test(values.mobile)
      ? ""
      : "contactnumber requires minimum 9 numbers";
    temp.yoe = values.yoe ? "" : "please enter the year of experience number";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const handlesubmit = () => {
    if (validate()) {
      if(file.type!="image/jpg" && file.type!="image/jpeg" && file.type!="image/png"){
        window.alert("File does not support. You must use .png or .jpg")
        return(false)
      } 
      else if(file.size>1000000){
        window.alert("Please upload a file smaller than 1mb")
        return(false)
      }
      else{
      const formData=new FormData()
      formData.append("candidatename",values.candidatename)
      formData.append("dp_id",values.departmentname)
      formData.append("ds_id",values.position)
      formData.append("email",values.email)
      formData.append("mobile",values.mobile)
      formData.append("yoe",values.yoe)
      formData.append("cv",file)
      axios.post("http://localhost:5000/candidate",formData , {
      headers: { "Content-Type": "application/json" },
    }).then(function(response){
      console.log(response)
      if(response.data.message==="success")
      {
      window.alert("successfully submited");
    }
    else{
      window.alert(response.data.message)
    }
    }).catch(function(error){
      console.log(error)
    })
  }
     
    }
  };
  const handleclear = () => {
    setValues({
      candidatename: "",
      departmentname: "",
      position: "",
      email: "",
      mobile: "",
      highestqualification: "",
      yoe: "",
    });
  };
  const [file,selectedFile]=useState(null)
  const handleFilechange=(e)=>{
    selectedFile(e.target.files[0])
  }
  return (
    <>
      <Paper elevation={4} sx={{ m: "1%", p: "1%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Add Candidate
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr" },
            gap: 2,
            width: "100%",
            pl: "5%",
          }}
        >
          <Textfield
            label="Candidate Name"
            name="candidatename"
            value={values.candidatename}
            onChange={handleInputChange}
            error={errors.candidatename}
          />
          <Dropdownlist
            name="departmentname"
            label="Department Name"
            value={values.departmentname}
            handleInputChange={handleInputChange}
            options={depart}
            error={errors.departmentname}
          />
          <Dropdownlist
            name="position"
            label="Position"
            value={values.position}
            handleInputChange={handleInputChange}
            options={position}
            error={errors.position}
          />
          <Textfield
            label="Email Id"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Textfield
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
            type="number"
          />
          <Textfield
            label="Year Of Experience"
            name="yoe"
            value={values.yoe}
            onChange={handleInputChange}
            error={errors.yoe}
            type="number"
          />
          <Box sx={{ width: "90%" }}>
            <fieldset style={{ borderColor: "#1565C0" }}>
              <legend>
                <Typography variant="h6" gutterBottom component="div">
                  Upload CV
                </Typography>
              </legend>
              Upload a file:
              <input type="file" onChange={handleFilechange} style={{ marginLeft: "1%" }} />
            </fieldset>
          </Box>
        </Box>
        <Box sx={{ p: "1%" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Btn text="Submit" click={handlesubmit} />
            <Btn text="Clear" click={handleclear} />
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default AddCandidate;

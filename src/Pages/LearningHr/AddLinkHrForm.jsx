import React, { useEffect,useState } from "react";
import Textfield from "../../Components/Reusablecomponents/Textfield";
import Dropdownlist from "../../Components/Reusablecomponents/Dropdownlist";
import { Box, Typography } from "@mui/material";
import { getDepartmentname } from "../../Components/Dropdowndata/getDepartmentname";
// import { useState } from "react";
import Btn from "../../Components/Reusablecomponents/Btn";
import useForm from "../../Components/Validation/useForm"
import axios from "axios"

const initialFvalues = {
  department: "",
  add_link: "",
  add_description: "",
};

function AddLinkHrForm() {
  const [dep,setDep]=useState([])
  useEffect(()=>{
axios.get("http://localhost:5000/depart")
.then(function(response){
  console.log(response)
  var depart=response.data.viewAlldep
  var newdepart=depart.map(({
    dp_id:id,departmentname:title,...rest
  })=>({
    id,title,...rest
  }))
  setDep(newdepart)
})
.catch(function(error){
  console.log(error)
})
 },[])
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);

  const validate = () => {
    let temp = {};
    temp.department = values.department ? "" : "This field is required";
    temp.add_link = values.add_link ? "" : "This field is required";
    // temp.department = values.department ? "" : "please select a Training";
    temp.add_description = values.add_description ? "" : "This field is required";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const lnk = {
 
    link: values. add_link,
    description: values.add_description,
    
  };
  
  const handlesubmit = () => {
    console.log (lnk)
    if (validate()) {
        axios
        .post("http://localhost:5000/learning/"+values.department, lnk,{
          header:{"Content-Type":"application/json"
        },
    
        })
        .then(function(response){
          console.log(response);
        
        window.alert("successfully added");
      })
      .catch(function (error){
        console.log(error);
      });
    }
    };

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Learning and development
      </Typography>

      <Box
        component="form"
        novalidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 2,
          width: "100%",
          pl:'5%'
        }}
      >
       

        <Dropdownlist
          name="department"
          label="Department"
          value={values.department}
          handleInputChange={handleInputChange}
          options={dep}
          error={errors.department}
        />
        <Textfield label="Add Link" name="add_link" id="add_link" value={values.add_link} error={errors.add_link} onChange={handleInputChange} />
        <Textfield label="Add Description" name="add_description" id="add_description" value={values.add_description} error={errors.add_description} onChange={handleInputChange} />

        {/* <Textfield label=" add_description" name=" add_description" id=" add_description" value={values.add_description} error={errors.add_description} onChange={handleInputChange} /> */}
      </Box>
      <Box sx={{ pt: "2%", display: "flex", justifyContent: "flex-end", gap: 2, pb: "2%", }}>
      <Btn text="Submit" click={handlesubmit} />

      </Box>
     
    </>
  );

}
export default AddLinkHrForm;

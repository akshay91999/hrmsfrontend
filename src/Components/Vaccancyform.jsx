import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Dropdownlist from "./Reusablecomponents/Dropdownlist";
import useForm from "./Validation/useForm";
import {
  getDepartmentname,
  getPosition,
  getUsertype,
} from "./Dropdowndata/getDepartmentname";
import Textfield from "./Reusablecomponents/Textfield";
import Btn from "./Reusablecomponents/Btn";
import Calender from "./Reusablecomponents/Calender";
import AutocompletePosition from "./Reusablecomponents/AutocompletePosition";
import axios from "axios";

const initialFvalues = {
  departmentname: "",
  position: "",
  vaccancynumber: "",
  yoeneeded: "",
  neededwithin: "",
};

function Vaccancyform() {
  const [depart,setDepart]=useState([])
  useEffect(()=>{  
      getDepartmentname();
  },[])

    const getDepartmentname=()=>{
    axios.get("http://localhost:5000/depart")
    .then(function(response){
      console.log(response)
      let dep=response.data.viewAlldep
      const newdep=dep.map(({
        dp_id:id,
        departmentname:title,
        ...rest
      })=>({
        id,
        title,
        ...rest
      }))
        console.log(newdep)
        setDepart(newdep)
      })

    }
  
 
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    const temp = {};
    temp.departmentname = values.departmentname
      ? ""
      : "please select a department";
    temp.position = values.position ? "" : "please enter a department";
    temp.vaccancynumber = values.vaccancynumber
      ? ""
      : "please enter the vaccancy number";
    temp.yoeneeded = values.yoeneeded
      ? ""
      : "please enter the year of experience number";
    temp.neededwithin = values.neededwithin
      ? ""
      : "please enter the year of experience number";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const data = {
    dp_id: values.departmentname,
    designation: values.position,
    vacancynumber: values.vaccancynumber,
    yoeneeded: values.yoeneeded,
    neededwithin: values.neededwithin,
  };
  const handlesubmit = () => {
    console.log(values);
    if (validate()) {
      axios.post("http://localhost:5000/vacancy", data, {
        headers: { "Content-Type": "application/json" },
      }).then(function(response){
        console.log(response)
        if(response.data.message==="success")
        {
        window.alert("successfully submited");
      }
      })
      .catch(function(error){
        console.log(error)
      })
      // console.log(values);
    }
  };
  const handleclear = () => {
    setValues({
      departmentname: "",
      position: "",
      vaccancynumber: "",
      yoeneeded: "",
      neededwithin: "",
    });
  };

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Vacancy Report
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
        <Dropdownlist
          name="departmentname"
          label="Department Name"
          value={values.departmentname}
          handleInputChange={handleInputChange}
          options={depart}
          error={errors.departmentname}
        />
        {/* <AutocompletePosition
          options={getPosition()}
          value={values.position}
          handleInputChange={handleInputChange}
          name="position"
          error={errors.departmentname}
        /> */}
        <Textfield
          label="Position"
          name="position"
          value={values.position}
          onChange={handleInputChange}
          error={errors.position}
        />
        <Textfield
          label="Number Of Vaccancies"
          name="vaccancynumber"
          value={values.vaccancynumber}
          onChange={handleInputChange}
          error={errors.vaccancynumber}
        />
        <Textfield
          label="Year Of Experience Needed"
          name="yoeneeded"
          value={values.yoeneeded}
          onChange={handleInputChange}
          error={errors.yoeneeded}
        />
        <Calender
          text="Needed Within"
          name="neededwithin"
          value={values.neededwithin}
          onChange={handleInputChange}
          error={errors.neededwithin}
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: "1%" }}
      >
        <Btn text="Submit" click={handlesubmit} />
        <Btn text="Clear" click={handleclear} />
      </Box>
    </>
  );
}

export default Vaccancyform;

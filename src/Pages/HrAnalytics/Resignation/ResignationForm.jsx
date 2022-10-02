import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  getDepartmentname,
  getPosition,
} from "../../../Components/Dropdowndata/getDepartmentname";
import Btn from "../../../Components/Reusablecomponents/Btn";
import Dropdownlist from "../../../Components/Reusablecomponents/Dropdownlist";
import MultiLineTextfield from "../../../Components/Reusablecomponents/MultiLineTextfield";
import Textfield from "../../../Components/Reusablecomponents/Textfield";
import useForm from "../../../Components/Validation/useForm";

const initialFvalues = {
  empid: "",
  name: "",
  departmentname: "",
  position: "",
  reason: "",
};

function ResignationForm() {
 
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
  const validate = () => {
    const temp = {};
    temp.empid = values.empid ? "" : "please enter your employee id";
    temp.name = values.name ? "" : "please enter your name";
    temp.departmentname = values.departmentname
      ? ""
      : "please select your department ";
    temp.position = values.position ? "" : "please select your position ";
    temp.reason = values.reason ? "" : "please enter your reason ";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  
  let currentDate = new Date().toJSON().slice(0, 10);
  const user={
      applydate:currentDate,
      e_id:values.empid,
      reason:values.reason
    };
   
   
  const handlesubmit = () => {
    if (validate()) {
      axios.post("http://localhost:5000/retirement",user)
      .then(function(response){
        console.log(response)
        if(response.data.message==="success")
        {
          window.alert("successfully updated");
        }
        else{
          window.alert(response.data.message)
        }
        
      })
      .catch(function(error){
        console.log(error)
      })
     
    }
  };

  const handleclear = () => {
    setValues({
      empid: "",
      name: "",
      departmentname: "",
      position: "",
      reason: "",
    });
  };

  return (
    <>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Resignation Form
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
            label="Employee Id"
            name="empid"
            value={values.empid}
            error={errors.empid}
            onChange={handleInputChange}
          />
          <Textfield
            label="Name"
            name="name"
            value={values.name}
            error={errors.name}
            onChange={handleInputChange}
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

          <MultiLineTextfield
            label="Reason"
            name="reason"
            value={values.reason}
            error={errors.reason}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: "1%" }}
        >
          <Btn text="Submit" click={handlesubmit} />
          <Btn text="Clear" click={handleclear} />
        </Box>
      </Paper>
    </>
  );
}

export default ResignationForm;

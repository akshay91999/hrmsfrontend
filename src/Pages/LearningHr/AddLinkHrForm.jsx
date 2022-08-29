import React from "react";
import Textfield from "../../Components/Reusablecomponents/Textfield";
import Dropdownlist from "../../Components/Reusablecomponents/Dropdownlist";
import { Box, Typography } from "@mui/material";
import { getDepartmentname } from "../../Components/Dropdowndata/getDepartmentname";
// import { useState } from "react";
import Btn from "../../Components/Reusablecomponents/Btn";
import useForm from "../../Components/Validation/useForm"

const initialFvalues = {
  // department: "",
  add_link: "",
  add_description: "",
};

function AddLinkHrForm() {
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
  const handlesubmit = () => {
    if (validate()) {
      window.alert("successfully updated");
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
          options={getDepartmentname()}
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


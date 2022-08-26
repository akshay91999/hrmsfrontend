import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
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
  const handlesubmit = () => {
    if (validate()) {
      window.alert("successfully updated");
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
            label="departmentname"
            value={values.departmentname}
            handleInputChange={handleInputChange}
            options={getDepartmentname()}
            error={errors.departmentname}
          />
         <Dropdownlist
          name="position"
          label="Position"
          value={values.position}
          handleInputChange={handleInputChange}
          options={getPosition()}
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

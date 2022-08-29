import { Box, Typography } from "@mui/material";
import React from "react";
import Dropdownlist from "../../Components/Reusablecomponents/Dropdownlist";
import useForm from "../../Components/Validation/useForm";
import { getDepartmentname } from "../../Components/Dropdowndata/getDepartmentname"; 
import Btn from "../../Components/Reusablecomponents/Btn";
import Calender from "../../Components/Reusablecomponents/Calender";

const initialFvalues = {
  calender: "",
  trainingname: "",
  employeename: "",
  trainer:"",
  timeschedule: ""
};

function AllotingTrainerForm() {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    const temp = {};
    temp.calender = values.calender ? "" : "please enter date";
    temp.trainingname = values.trainingname
      ? ""
      : "please select a Training";
      temp.employeename = values.employeename
      ? ""
      : "please select Employees";
      temp.trainer = values.trainer
      ? ""
      : "please select a Trainer";
    
    temp.timeschedule = values.timeschedule
      ? ""
      : "required field";

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
        Assign Trainers
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
        <Calender
          text="Calender"
          name="calender"
          value={values.calender}
          onChange={handleInputChange}
          error={errors.calender}
        />
         
        <Dropdownlist
          name="trainingname"
          label="Training Name"
          value={values.trainingname}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.trainingname}
        />
        <Dropdownlist
          name="employeename"
          label="Employee Name"
          value={values.employeename}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.employeename}
        />
        <Dropdownlist
          name="trainer"
          label="Trainer"
          value={values.trainer}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.trainer}
        />
        <Dropdownlist
          name="timeschedule"
          label="Time Schedule"
          value={values.timeschedule}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.timeschedule}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", m: "2%" }}>
        <Btn text="Submit" click={handlesubmit} />
      </Box>
    </>
  );
}

export default AllotingTrainerForm;